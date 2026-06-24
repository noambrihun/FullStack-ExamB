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
        <div className="group w-full max-w-xs rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-4 text-white shadow-lg shadow-black/30 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:shadow-emerald-500/10">
            <div className="mb-3 flex items-start justify-between gap-2">
                <h1 className="text-lg font-bold leading-tight">{name}</h1>
                <span className="shrink-0 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                    Workout
                </span>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor={`name-${workout._id}`} className="text-[10px] font-medium uppercase tracking-wider text-gray-500">Name</label>
                    <input
                        id={`name-${workout._id}`}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-md border border-white/10 bg-slate-950/60 px-3 py-1.5 text-sm font-semibold text-white outline-none transition focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor={`muscleGroup-${workout._id}`} className="text-[10px] font-medium uppercase tracking-wider text-gray-500">Muscle Group</label>
                    <input
                        id={`muscleGroup-${workout._id}`}
                        value={muscleGroup}
                        onChange={(e) => setMuscleGroup(e.target.value)}
                        className="w-full rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 outline-none transition focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor={`description-${workout._id}`} className="text-[10px] font-medium uppercase tracking-wider text-gray-500">Description</label>
                    <input
                        id={`description-${workout._id}`}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full rounded-md border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-gray-300 outline-none transition focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20"
                    />
                    <p className="line-clamp-2 text-xs leading-relaxed text-gray-500">{workout.description}</p>
                </div>
            </div>

            <div className="mt-4 flex justify-end gap-2 border-t border-white/10 pt-3">
                <button
                    onClick={() => onDelete(workout._id)}
                    className="rounded-md bg-red-500/90 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-red-400 active:scale-[0.98]"
                >
                    Delete
                </button>
             
            </div>
        </div>
    )
}
export default WorkoutCard;