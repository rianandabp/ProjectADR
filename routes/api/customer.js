const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Customer = require('../../models/Customer');
const Car = require('../../models/Car');
const Project = require('../../models/Project');

router.post(
    '/',
    check('name','Name is required').notEmpty(),
    check('phoneNumber', 'Phone Number is required').notEmpty(),
    async (req,res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {name, phoneNumber, address} = req.body;

        try{
            customer = new Customer({
                name,
                phoneNumber,
                address
            });

            customer.save();
            res.send('Add customer success');

        } catch (err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
)

router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find().sort({ name: 1});
        res.json(customers);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

router.patch(
    '/:id', 
    check('name','Name is required').notEmpty(),
    check('phoneNumber', 'Phone Number is required').notEmpty(),
    async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {name, phoneNumber, address} = req.body;

    try {
        const customer = await Customer.findById(req.params.id);

        customer.name = name;
        customer.phoneNumber = phoneNumber;
        customer.address = address;

        await customer.save();

        res.json(customer);
        
    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.put('/:id', async (req,res) => {
    try {
        const customer = await Customer.findById(req.params.id);

        customer.car.unshift(req.body);

        await customer.save();

        return res.json(customer.car);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const customer = await Customer.findById(req.params.id);

        if(!customer) {
            return res.status(404).json({msg: 'Customer not found'});
        }

        //Remove car from car table
        customer.car.forEach(deleteCar);

        async function deleteCar(item){
            const car = await Car.findById(item.id);

            car.project.forEach(deleteProject);
            
            await car.remove();
        }

        async function deleteProject(item){
            const project = await Project.findById(item.id);

            await project.remove();
        }

        await customer.remove();

        res.json({ msg: 'Customer removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;