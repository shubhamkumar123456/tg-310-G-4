import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-amber-400 flex justify-between p-5'>
      <h1>Website</h1>

      <ul className='flex gap-5'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/register'}>Singup</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
