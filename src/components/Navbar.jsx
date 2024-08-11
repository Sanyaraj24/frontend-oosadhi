//import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
    <nav className="bg-[#0D0D0D] border-gray-200 text-white py-1 items-center">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto px-8 h-full ">
        <img src="/logo_black_bg.png" className="flex h-12 w-24 py-2 px-2" alt="Oosadhi"/>
        
       <div className='navbar flex space-x-6 content-center'>
        <Link to="/ " className='text-white font-medium text-md'>HOME</Link>
        <Link to="/dietplan " className='text-white font-medium text-md'>DIET PLAN</Link>
        <Link to="/blogs" className='text-white font-medium text-md'>BLOGS</Link>
      </div>
      <div className='flex space-x-5 content-end'>
      <div  className=' text-black bg-white font-medium text-md rounded-md px-1 py-1 text-center  w-14 h-8 my-3 hover:border-green-500 hover:bg-green-700'>Login</div>
      <img src="/cart.png" alt="cart" className=' h-12 w-12  mb-0 px-0 justify-end mr-2 h'></img>
      </div>


      </div>
    </nav>
    </>
  )
}

export default Navbar
