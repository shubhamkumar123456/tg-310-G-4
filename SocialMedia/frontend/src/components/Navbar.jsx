import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
    bg-black backdrop-blur-xl backdrop-saturate-150 
    border-b border-white/20 shadow-lg shadow-black/30">

      <div className="flex justify-between items-center px-5 py-4">
        <h1 className="text-white text-xl font-semibold">Website</h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Signup</Link></li>
        </ul>

        {/* Mobile Button */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden px-5 pb-4 text-white">
          <ul className="flex flex-col gap-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Signup</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar