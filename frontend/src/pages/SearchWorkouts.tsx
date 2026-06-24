import { useState, useEffect } from "react";
import type { Workout } from "../types/workout";
import WorkoutCard from "../components/workoutCard";
function SearchWorkouts(){
    const[search, setSearch] = useState('');
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
        <div className="flex flex-col gap-4 text-white">
            <h1 className="text-2xl font-bold">Search Workouts</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" 
            className="max-w-xs text-white bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-lg p-2" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {workouts.filter(workout => workout.name.toLowerCase().includes(search.toLowerCase())).map((workout: Workout) => (
                <WorkoutCard key={workout._id} workout={workout} onDelete={deleteWorkout} />
               
            ))}
            </div>
        </div>
    )
}
export default SearchWorkouts;