import React from 'react'
import Logo from "../assets/mz-logo.png";

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 bg-blue-950 flex justify-between items-center px-4'>
        <img src={Logo} alt="Logo" className='w-20'/>
    </div>
  )
}

export default Navbar