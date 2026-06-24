import type { Workout } from '../types/workout';
import { useState, useEffect } from 'react';

type WorkoutCardProps = {
    workout: Workout;
    onDelete: (id: string) => void;
}

function WorkoutCard({ workout, onDelete }: WorkoutCardProps){
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
        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-lg p-4">
            <h1 className="text-2xl font-bold">{name}</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} className="text-2xl font-bold">{name}</input>
            <input value={muscleGroup} onChange={(e) => setMuscleGroup(e.target.value)} className="text-sm text-gray-400">{muscleGroup}</input>
            <input value={description} onChange={(e) => setDescription(e.target.value)} className="text-sm text-gray-400">{description}</input>
            <button onClick={() => onDelete(workout._id)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
            <p>{workout.description}</p>
            <button onClick={() => onDelete(workout._id)}>Delete</button>
        </div>
    )
}
export default WorkoutCard;