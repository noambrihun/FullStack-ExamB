const mongoose = require('mongoose');
const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    muscleGroup: {
        type: String,
    },
    description:{
        type: String,
    }
});

module.exports = mongoose.model('Workout', workoutSchema);