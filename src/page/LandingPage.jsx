import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import MyProjects from "../components/MyProjects";
import Contact from "../components/Conntact";
import LoadingSpinner from "../components/LoadingSpinner";
import Experience from "../components/Experience";

const LandingPage = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <LoadingSpinner/>
      ) : (
        <>
          <Navbar/>
          <Hero/>
          <AboutMe/>
          <Experience/>
          <Skills/>
          <MyProjects/>
          <Contact/>
          <Footer/>
        </>
      )}
    </div>
  );
};

export default LandingPage;
