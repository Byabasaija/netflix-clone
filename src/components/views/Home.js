import React from "react";
import Features from "../subComponets/Features";
import Footer from "../subComponets/Footer";
import FrequentlyAsked from "../subComponets/FrequentlyAsked";
import Hero from "../subComponets/Hero";
import Navbar from "../subComponets/Navbar";
const Home =() =>{
    return(
        <>
        <div className="header-bg">
        <Navbar/>
        <Hero/>
        </div>
        <div className="main">
        <Features/>
        <FrequentlyAsked/>
        <Footer/>
        </div>
        </>
    )
}

export default Home;