import type { Workout } from '../types/workout';
import { useState, useEffect } from 'react';

type WorkoutCardProps = {
    workout: Workout;
}

function WorkoutCard({ workout }: WorkoutCardProps){
    const[name, setName] = useState(workout.name);
    const[muscleGroup, setMuscleGroup] = useState(workout.muscleGroup);
    const[description, setDescription] = useState(workout.description);

    useEffect(() => {
        fetch('http://localhost:3000/workouts')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Workout Card</h1>
        </div>
    )
}
export default WorkoutCard;