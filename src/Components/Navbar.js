import React from 'react'
import { NavLink } from "react-router-dom";
function Navbar() {

    return(<div className="flex justify-between place-content-between items-center h-20 max-w-6xl mx-auto">
        <nav>
            <NavLink to="/">
                <div className="ml-5">
                    <img src="../logo.png" className="h-14" />
                </div>
            </NavLink>
            <div >
                <NavLink to="/home">
                    <p>Home</p>
                </NavLink>
            </div>
            <div >
                <NavLink to="/about">
                    <p>About</p>
                </NavLink>
            </div>
            <div >
                <NavLink to="/contactus">
                    <p>Contact Us</p>
                </NavLink>
            </div>
        </nav>
    </div>);
}

export default Navbar