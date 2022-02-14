import React from "react";
import logo from "../../assets/images/Netflix-Logo.svg"

const Navbar =() => {
    return(
        <>
        <div className="navbar">
         <img src={logo} alt="Netflix logo"/>
        <button className="btn btn-primary login">Login</button>
        </div>
        </>
    );
}

export default Navbar;