import React from "react";
import Features from "../subComponets/Features";
import Footer from "../subComponets/Footer";
import FrequentlyAsked from "../subComponets/FrequentlyAsked";
import Hero from "../subComponets/Hero";
import Navbar from "../subComponets/Navbar";
const Home =() =>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <Features/>
        <FrequentlyAsked/>
        <Footer/>
        </>
    )
}

export default Home;