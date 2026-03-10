import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import PNF from './pages/PNF'
import Signup from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/login'  element={<Login/>}/>
            <Route path='/register'  element={<Signup/>}/>
            <Route path='*' element={<PNF/>}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App
