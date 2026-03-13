import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
              <Route path='/'  element={<Home/>}/>
              <Route path='/login'  element={<Login/>}/>
              <Route path='/cart'  element={<Cart/>}/>
              <Route path='/register'  element={<Signup/>}/>
              <Route path='/adminDashboard'  element={<AdminDashboard/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
