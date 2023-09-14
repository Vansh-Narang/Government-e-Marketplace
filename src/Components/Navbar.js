import React from 'react'
import { NavLink } from "react-router-dom";
function Navbar() {

    return(
    <div className="flex flex-row justify-around  bg-slate-700 my-10 rounded-full items-center  py-4 text-white  mx-auto ">
       
      <div className=''> <NavLink to="/">
                <div className="ml-5">
                    <img src="../logo.png" className="h-10 rounded-full w-20" />
                </div>
            </NavLink></div>
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
                <NavLink to="/contact">
                    <p>contact Us</p>
                </NavLink>
            </div>
        
        
    </div>);
}

export default Navbar