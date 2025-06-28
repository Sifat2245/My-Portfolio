import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';


const LandingPage = () => {
    return (
        <div className='min-h-screen'>
           <Navbar></Navbar>
           <Hero></Hero>
        </div>
    );
};

export default LandingPage;