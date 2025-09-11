import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center'>
      <Link to='/' className='text-xl font-bold cursor-pointer'>Personal Finance Tracker</Link>
      <button className='bg-black hover:bg-gray-800 cursor-pointer rounded-md text-white py-2 px-3'>Sign in</button>
    </div>
  )
}

export default Navbar
