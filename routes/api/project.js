const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Project = require('../../models/Project');
const Car = require('../../models/Car');

router.post(
    '/',
    check('car','Car is required').notEmpty(),
    check('name', 'Name is required').notEmpty(),
    async (req,res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {car, name, description} = req.body;

        try{
            project = new Project({
                car,
                name,
                description
            });

            project.save();

            //push project to car Table
            const carTable = await Car.findById(car);

            carTable.project.unshift(project.id);

            await carTable.save();

            res.send('Add project success');

        } catch (err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
)

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ startDate: 1});
        res.json(projects);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

router.patch(
    '/:id',
    check('name', 'Name is required').notEmpty(),
    async (req,res) => {
    try {
        
        const {name, description, startDate, endDate, status} = req.body;

        const project = await Project.findById(req.params.id);

        project.name = name;
        project.description = description;
        project.startDate = startDate;
        project.endDate = endDate;
        project.status = status;

        await project.save();

        res.json(project);
        
    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.put('/:id', async (req,res) => {
    try {
        const project = await Project.findById(req.params.id);

        project.workDetail.unshift(req.body);

        project.totalSpent += req.body.price;

        await project.save();

        return res.json(project.workDetail);
        
    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.put('/:id/:work_id', async (req,res) => {
    try {
        const project = await Project.findById(req.params.id);

        const workDetail =  project.workDetail.find(
            (workDetail) => workDetail.id === req.params.work_id
        )

        workDetail.itemUsed.unshift(req.body);
        
        project.totalSpent += req.body.price * req.body.quantity;

        await project.save();

        return res.json(workDetail.itemUsed);
        
    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


router.delete('/:id', async (req,res) => {
    try {
        const project = await Project.findById(req.params.id);

        const car = await Car.findById(project.car); 

        if(car){
            car.project = car.project.filter(
                ({id}) => id !== project.id
            );

            await car.save();
        }
        
        await project.remove();

        res.json({ msg: 'Project removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.delete('/:id/:work_id', async (req,res) => {
    try {
        const project = await Project.findById(req.params.id);

        const work = project.workDetail.find(
            (work) => work.id === req.params.work_id
        );

        work.itemUsed.forEach(updateSpent);

        async function updateSpent(item){
            project.totalSpent -= item.price * item.quantity;
        }

        project.totalSpent -= work.price;

        project.workDetail = project.workDetail.filter(
            ({ id }) => id !== req.params.work_id
        );
        
        await project.save();

        res.json(project.workDetail);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.delete('/:id/:work_id/:item_id', async (req,res) => {
    try {
        const project = await Project.findById(req.params.id);

        const work = project.workDetail.find(
            (work) => work.id === req.params.work_id
        );
        
        const item = work.itemUsed.find(
            (item) => item.id === req.params.item_id
        );

        project.totalSpent -= item.price * item.quantity;

        work.itemUsed = work.itemUsed.filter(
            ({ id }) => id !== req.params.item_id
        );
        
        await project.save();

        res.json(work.itemUsed);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;