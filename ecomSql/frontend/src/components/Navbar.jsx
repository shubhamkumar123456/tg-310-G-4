import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-2 bg-yellow-600'>
      <h1>Ecommerce</h1>

      <ul className='flex gap-3 justify-center items-center'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/cart'}>Cart</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
