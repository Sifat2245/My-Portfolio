import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars


const Footer = () => {
  return (
    <footer className="bg-background border-t border-text/10 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Left Side - Logo or Name */}
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-orbitron font-bold text-xl gradient-text"
          >
            SIFAT
          </motion.div>

        {/* Center - Navigation or Quick Links (Optional) */}
        <div className="flex space-x-6 text-text/60 text-sm">
          <a href="#home" className="hover:text-primary transition">
            Home
          </a>
          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </div>

        {/* Right Side - Credit */}
        <div className="text-text/60 text-sm">
          © 2024 — Built with{" "}
          <span className="text-primary font-semibold">React.js</span> & ❤️
        </div>
      </div>
    </footer>
  );
};

export default Footer;
