const express = require('express');
const router = express.Router();
const Workout = require('../models/workouts');

router.get('/', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching workouts' });
    }
});

router.post('/', async (req, res) => {
    const { name, muscleGroup, description } = req.body;
    const newWorkout = new Workout({ name, muscleGroup, description });
    try {
        await newWorkout.save();
        res.status(201).json({ message: 'Workout created successfully', workout: newWorkout });
    } catch (error) {
        res.status(400).json({ message: 'Error creating workout', error: error.message });
    }
});

router.delete('/:id', async(req,res) => {
    const { id } = req.params;
    try{
        const deletedWorkout = await Workout.findByIdAndDelete(id);
        if(!deletedWorkout){
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.status(200).json({ message: 'Workout deleted successfully', workout: deletedWorkout });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting workout', error: error.message });
    }
})

router.get('/:id', async(req,res) => {
    const { id } = req.params;
    try{
        const workout = await Workout.findById(id);
        if(!workout){
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.status(200).json({ message: 'Workout found successfully', workout });
    } catch (error) {
        res.status(400).json({ message: 'Error fetching workout', error: error.message });
    }
})


module.exports = router;