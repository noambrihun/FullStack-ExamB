import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddWorkouts(){
    const[name, setName] = useState('');
    const[muscleGroup, setMuscleGroup] = useState('');
    const[description, setDescription] = useState('');
     const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:3000/workouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, muscleGroup, description }),
            })
            const data = await response.json();
            console.log(data);
            setName('');
            setMuscleGroup('');
            setDescription('');
            navigate('/');
        } catch (error) {
            console.error('Error adding workout:', error);
        }
    };
    return(
        <div className="flex flex-col gap-6 text-white">
            <h1 className="text-2xl font-bold">Add Workout</h1>
            <form
                onSubmit={handleSubmit}
                className="flex max-w-md flex-col gap-5 rounded-lg border border-white/10 bg-slate-900/50 p-6 backdrop-blur-md"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="rounded-lg border border-white/10 bg-slate-950/50 px-4 py-2 text-white placeholder:text-gray-500 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="muscleGroup" className="text-sm font-medium text-gray-300">Muscle Group</label>
                    <input
                        id="muscleGroup"
                        type="text"
                        value={muscleGroup}
                        onChange={(e) => setMuscleGroup(e.target.value)}
                        placeholder="Muscle Group"
                        className="rounded-lg border border-white/10 bg-slate-950/50 px-4 py-2 text-white placeholder:text-gray-500 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="description" className="text-sm font-medium text-gray-300">Description</label>
                    <input
                        id="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        className="rounded-lg border border-white/10 bg-slate-950/50 px-4 py-2 text-white placeholder:text-gray-500 outline-none transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-2 rounded-lg bg-emerald-600 px-4 py-2.5 font-medium text-white transition hover:bg-emerald-500 active:scale-[0.98]"
                >
                    Add Workout
                </button>
            </form>
        </div>
    )
}
export default AddWorkouts;