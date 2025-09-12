import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';

function Navbar() {
  return (
    <div className='w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center flex-wrap '>
      <Link to='/' className='sm:text-xl font-bold cursor-pointer'>Personal Finance Tracker</Link>
      <button className='sm:text-lg hidden sm:block bg-black hover:bg-gray-800 cursor-pointer rounded-md text-white py-1 px-3 sm:py-1 sm:px-3'>
        Sign in
      </button>
      <Bars3Icon className='w-7 sm:hidden'/>
    </div>
  )
}

export default Navbar
