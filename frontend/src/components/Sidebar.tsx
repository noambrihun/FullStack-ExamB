import { Link } from 'react-router-dom';

function Sidebar(){
    return(
      
        <aside className="sticky top-0 h-screen w-64 shrink-0 border-r border-slate-800 bg-slate-900 px-5 py-8 text-white shadow-xl">
      <div className="mb-10 border-b border-slate-700 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Workout Tracker by Sumeet
        </p>
        <h1 className="mt-1 text-2xl font-bold">Workout Tracker</h1>
      </div>
      <nav className="flex flex-col gap-1">
        <Link to="/" className="block rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 text-slate-300 hover:bg-slate-700 hover:text-white">
          All Workouts
        </Link>
        <Link to="/add-workout" className="block rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 text-slate-300 hover:bg-slate-700 hover:text-white">
          Add Workout
        </Link>
        <Link to="/search-workout" className="block rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 text-slate-300 hover:bg-slate-700 hover:text-white">
          Search Workout
        </Link>
      </nav>
    </aside>
    )
}
export default Sidebar;