import React from "react";
import {NavLink} from 'react-router-dom'



const Navbar = ()=>{
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed w-full z-50">
        <h1 className="text-[#00477B] text-2xl font-bold">Binary</h1>
        <div className="space-x-4 text-sm text-gray-800 font-medium">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#00477B]' : ''}>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'text-[#00477B]' : ''}>Services</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#00477B]' : ''}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#00477B]' : ''}>Contact</NavLink>
        </div>
    </nav>
}

export default Navbar;