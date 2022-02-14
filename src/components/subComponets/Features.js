import React from "react";
import tv from "../../assets/images/home-imac.jpg";
import mobile from "../../assets/images/mobile.jpg";
import kids from "../../assets/images/kids.png"


const Features =()=> {
    return(
        <div className="">
            <div>
                <h2>Enjoy on your TV.</h2>
                <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>

            <div>
                <img src={tv} alt="tv"/>
            </div>
            <div>
                <h2>Download your shows to watch offline.</h2>
                <p>Save your favorites easily and always have something to watch.</p>
            </div>

            <div>
                <img src={mobile} alt="tv"/>
            </div>
            <div>
                <h1>Watch everywhere.</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div>
                <h2>Create profiles for kids.</h2>
                <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>

            <div>
                <img src={kids} alt="tv"/>
            </div>
        </div>
    )
}

export default Features;