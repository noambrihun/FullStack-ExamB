import WorkoutCard from '../components/workoutCard';
import { useState, useEffect } from 'react';
import type { Workout } from '../types/workout';

function AllWorkouts(){
    const[workouts, setWorkouts] = useState<Workout[]>([]);
    useEffect(() => {
        fetch('http://localhost:3000/workouts')
        .then(res => res.json())
        .then(data => setWorkouts(data))
        .catch(err => console.log(err));
    }, []);

    const deleteWorkout = (id: string) => {
        fetch(`http://localhost:3000/workouts/${id}`, {
            method: 'DELETE'
        })
        setWorkouts(workouts.filter(workout => workout._id !== id));
    };
    return(
        <div className="flex flex-col gap-4">
            <h1>All Workouts</h1>
            {workouts.map(workout => (
                <WorkoutCard key={workout._id} workout={workout} onDelete={deleteWorkout} />
            ))}
        </div>
    )
}
export default AllWorkouts;