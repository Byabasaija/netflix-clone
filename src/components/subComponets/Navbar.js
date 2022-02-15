import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Netflix-Logo.svg"

const Navbar =() => {
    return(
        <>
        <div className="navbar">
         <img src={logo} alt="Netflix logo"/>
        <NavLink to="login" className="btn btn-primary login">Login</NavLink>
        </div>
        </>
    );
}

export default Navbar;