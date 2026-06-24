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
        <div className="flex flex-col gap-6 text-white">
            <h1 className="text-2xl font-bold">All Workouts</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {workouts.map(workout => (
                <WorkoutCard key={workout._id} workout={workout} onDelete={deleteWorkout} />
            ))}
            </div>
        </div>
    )
}
export default AllWorkouts;