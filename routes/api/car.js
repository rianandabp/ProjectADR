const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Car = require('../../models/Car');
const auth = require('../../middleware/auth');
const Customer = require('../../models/Customer');
const Project = require('../../models/Project');

router.post(
    '/',
    check('customer','Customer is required').notEmpty(),
    check('model', 'Model is required').notEmpty(),
    check('color', 'Color is required').notEmpty(),
    async (req,res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {customer, model, color, description, plateNumber, year} = req.body;

        try{
            car = new Car({
                customer,
                model,
                color,
                description,
                plateNumber,
                year
            });

            car.save();

            const customerTable = await Customer.findById(customer);

            customerTable.car.unshift(car.id);

            await customerTable.save();

            res.send('Add car success');

        } catch (err){
            console.error(err.message); 
            res.status(500).send('Server error');
        }
    }
)

router.get('/', async (req, res) => {
    try {
        const cars = await Car.find().sort({ model: 1});
        res.json(cars);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

router.patch(
    '/:id', 
    check('customer','customer is required').notEmpty(),
    check('model', 'Model is required').notEmpty(),
    check('color', 'Color is required').notEmpty(),
    async (req,res) => {
    try {
        
        const {customer, model, color, description, plateNumber, year} = req.body;

        const car = await Car.findById(req.params.id);

        car.customer = customer;
        car.model = model;
        car.color = color;
        car.description = description;
        car.plateNumber = plateNumber;
        car.year = year;

        await car.save();

        res.json(car);
        
    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.put('/:id', auth, async (req,res) => {
    try {
        const car = await Car.findById(req.params.id);

        car.project.unshift(req.body);

        await car.save();

        return res.json(car.project);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const car = await Car.findById(req.params.id);

        const customer = await Customer.findById(car.customer);

        //Delete car on cust table
        if(customer){
            customer.car = customer.car.filter(
                ({id}) => id !== car.id
            );

            await customer.save();
        }

        //Delete car on project table
        car.project.forEach(deleteProject);

        async function deleteProject(item){
            const project = await Project.findById(item.id);

            if (project) await project.remove();
        }
      
        await car.remove();

        res.json({ msg: 'Car removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;