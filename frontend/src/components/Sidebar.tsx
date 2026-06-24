import { Link } from 'react-router-dom';

function Sidebar(){
    return(
       <aside className="flex h-screen w-64 flex-col border-r border-white/10 bg-slate-950/80 backdrop-blur-md">
        <nav>
            <ul>
                <li>
                    <Link to="/">All Workouts</Link>
                </li>
            </ul>
        </nav>
       </aside>
    )
}
export default Sidebar;