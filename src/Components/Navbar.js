import React from 'react'
import { NavLink } from "react-router-dom";
function Navbar() {
    return <div className='bg-[#5764AB]'>
        <nav className="flex justify-between place-content-between items-center h-20 max-w-6xl mx-auto">
            <NavLink to="/">
                <div className="ml-5">
                    <img src="../logo.png" className="h-14" />
                </div>
            </NavLink>
            <div className="flex font-medium text-slate-100">
                <NavLink to="/">
                    <p>Home</p>
                </NavLink>
            </div>
            <div className="flex font-medium text-slate-100">
                <NavLink to="/">
                    <p>About</p>
                </NavLink>
            </div>
            <div className="flex font-medium text-slate-100">
                <NavLink to="/">
                    <p>Contact Us</p>
                </NavLink>
            </div>
        </nav>
    </div>;
}

export default Navbar