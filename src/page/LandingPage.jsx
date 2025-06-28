import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Footer from '../components/Footer';


const LandingPage = () => {
    return (
        <div className='min-h-screen'>
           <Navbar></Navbar>
           <Hero></Hero>
           <AboutMe></AboutMe>
           <Skills></Skills>
           <Footer></Footer>
        </div>
    );
};

export default LandingPage;