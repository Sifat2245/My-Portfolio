import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import MyProjects from '../components/MyProjects';
import Contact from '../components/Conntact';


const LandingPage = () => {
    return (
        <div className='min-h-screen'>
           <Navbar></Navbar>
           <Hero></Hero>
           <AboutMe></AboutMe>
           <Skills></Skills>
           <MyProjects></MyProjects>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default LandingPage;