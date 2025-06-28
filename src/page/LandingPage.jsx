import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';


const LandingPage = () => {
    return (
        <div className='min-h-screen'>
           <Navbar></Navbar>
           <Hero></Hero>
           <AboutMe></AboutMe>
        </div>
    );
};

export default LandingPage;