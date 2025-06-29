import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Code2,
  Target,
} from "lucide-react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { TypeAnimation } from "react-type-animation";
import profileImage from "../assets/1699810164696-removebg.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sifat2245", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/saifuddin-ahmed-sifat/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "#contact", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="mt-24 2xl:mt-0 min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#8c0829]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        <div
          className="absolute top-40 right-10 w-80 h-80 bg-[#7b1e3b]/15 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#4d1426]/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"
          style={{ animationDelay: "6s" }}
        ></div>

        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#8c0829] rounded-full animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#7b1e3b] rounded-full animate-float opacity-60"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-3 h-3 bg-[#4d1426] rounded-full animate-float opacity-30"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Greeting with blur reveal */}
          <div
            className={`blur-reveal ${isVisible ? "in-view" : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <motion.p
              className="text-lg font-mono text-primary font-medium tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {"<"} Hello World {"/>"}
            </motion.p>
          </div>

          {/* Main heading with staggered blur */}
          <div className={`stagger-blur ${isVisible ? "animate" : ""}`}>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
              <span className="gradient-text">Hi, I'm</span>
            </h1>
            <h1 className="text-6xl lg:text-8xl font-display font-bold leading-tight text-[#ffebf3]">
              Saifuddin
            </h1>
            <div className="flex items-center space-x-4 mt-4">
              <Code2 className="text-primary" size={32} />
              <span className="text-2xl lg:text-3xl text-[#ffebf3]/80 font-medium">
                Ahmed Sifat
              </span>
            </div>
          </div>

          {/* Animated role with blur effect */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl lg:text-4xl font-medium"
          >
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Full Stack Developer",
                2000,
                "React.js Specialist",
                2000,
                "Node.js Developer",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text font-display"
            />
          </motion.div>

          {/* Description with blur hover */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-4"
          >
            <p className="text-lg text-[#ffebf3]/80 leading-relaxed max-w-xl blur-text-hover">
              Passionate about crafting modern, responsive web applications that blend clean code with engaging user experiences.
            </p>
            <p className="text-base text-[#ffebf3]/70 leading-relaxed max-w-xl blur-text-hover">
              Specialized in{" "}
              <span className="font-mono text-primary">React.js</span>,
              <span className="font-mono text-primary"> Node.js</span>,
              <span className="font-mono text-primary"> MongoDB</span>, and
              <span className="font-mono text-primary"> Express.js</span> with
              advanced animations.
            </p>
          </motion.div>

          {/* Social Links with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.2, y: -8, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-2xl glass-card bg-[rgba(255, 235, 243, 0.02)] hover:bg-[#8c0829]/10 transition-all duration-300 group card-hover"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <social.icon
                  size={24}
                  className="text-[#ffebf3]/70 group-hover:text-[#8c0829] transition-colors duration-300"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 btn-primary rounded-2xl font-medium transition-all duration-300 flex items-center justify-center space-x-3 animate-glow group"
            >
              <span className="font-display">View My Work</span>
              <ChevronDown
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1xmgmaNXedsXZb30_T704e9ILSdX4u6p_/view?usp=sharing"
              target="_blank"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 glass-card hover:bg-text/5 text-[#ffebf3] rounded-2xl font-medium transition-all duration-300 flex items-center justify-center space-x-3 card-hover group"
            >
              <Download
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
              <span className="font-display">Download CV</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            className="relative group"
          >
            {/* Profile container */}
            <div className="relative p-3 bg-background rounded-3xl">
              <div className="w-[20rem] h-[20rem] md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:from-primary/30 group-hover:via-secondary/25 group-hover:to-accent/30 border-2">
                {/* Profile Image with ring border */}
                <img
                  src={profileImage}
                  alt="Saifuddin Ahmed Sifat"
                  className="w-full h-full object-cover rounded-full ring-4 ring-primary"
                />

                {/* Floating tech icons */}
                <div className="absolute top-8 left-8 p-3 glass-card rounded-full animate-float opacity-80">
                  <Code2 size={20} className="text-primary" />
                </div>

                <div
                  className="absolute bottom-72 right-10/12 p-3 glass-card rounded-full animate-float opacity-80"
                  style={{ animationDelay: "2s" }}
                >
                  <span className="text-primary font-mono text-sm font-bold">
                    JS
                  </span>
                </div>

                <div
                  className="absolute top-1/2 right-4 p-2 glass-card rounded-full animate-float opacity-70"
                  style={{ animationDelay: "4s" }}
                >
                  <span className="text-secondary font-mono text-xs">
                    React
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2"
        >
          <div className="w-6 h-10 border-2 border-text/20 rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              className="w-1 h-3 bg-[#8c0829] rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <p className="text-xs text-[#ffebf3]/50 font-mono">scroll</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
