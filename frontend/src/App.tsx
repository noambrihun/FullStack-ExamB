import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllWorkouts from './pages/AllWorkouts';
import AddWorkouts from './pages/AddWorkouts';
import SearchWorkouts from './pages/SearchWorkouts';
import Sidebar from './components/Sidebar';
function App() {
  

  return (
    <>
    
    <BrowserRouter>
      <div className='flex min-h-screen bg-slate-950 text-white'>
        <Sidebar />
        <main className='flex-1 main auto'>
          <div className='mx-auto max-w-7xl px-6 py-8 lg:px-10'>
            <Routes>
              <Route path='/' element={<AllWorkouts />} />
              <Route path='/add-workouts' element={<AddWorkouts />} />
              <Route path='/search-workouts' element={<SearchWorkouts />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
