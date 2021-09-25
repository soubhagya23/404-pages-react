import React from 'react';
import Navbar from "./NavBar";
import Hero from "./Hero";
import Feature from './Feature';
import Demos from './Demos'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Feature />
            <Demos />
        </div>
    )
}

export default Home
