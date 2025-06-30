import { useInView, motion } from "framer-motion";// eslint-disable-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { Terminal, Palette } from 'lucide-react';

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if(isInView){
        setIsVisible(true)
    }
  }, [isInView]);



  return (

    <section id="about" ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#8c0829]/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-[#7b1e3b]/8 rounded-full filter blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <div className={`blur-reveal ${isVisible ? 'in-view' : ''}`}>
            <p className="text-[#8c0829] font-mono text-2xl mb-4 tracking-wide">
              {'<'} About Me {'/>'} 
            </p>
          </div>
        
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#8c0829] via-[#7b1e3b] to-[#4d1426] mx-auto mb-8 rounded-full"></div>
          
          <div className={`stagger-blur ${isVisible ? 'animate' : ''} max-w-4xl mx-auto`}>
        
            <p className="text-lg text-[#ffebf3]/70 leading-relaxed mt-4 blur-text-hover">
            I enjoy working with the <span className="font-mono text-[#8c0829] text-xl">MERN</span> stack and take pride in writing maintainable code, collaborating with others, and continuously learning to improve my skills. My goal is to contribute meaningfully to every project I’m part of, and to always stay curious and open to new challenges.
             
            </p>
          </div>
        </motion.div>

     
        {/* Journey Section */}
          <motion.div
          initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          id="animate-border"
          className="glass-card p-12 rounded-3xl max-w-6xl mx-auto card-hover bg-[#ffebf3]/3 animate-border"
        >
          <div className="text-center mb-10">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Terminal className="text-[#8c0829]" size={32} />
              <h3 className="text-3xl font-display font-bold gradient-text">
                My Development Journey
              </h3>
              <Palette className="text-[#7b1e3b]" size={32} />
            </div>
          </div>
          
          <div className={`stagger-blur ${isVisible ? 'animate' : ''} space-y-6`}>
            <p className="text-lg text-[#ffebf3]/80 leading-relaxed text-center max-w-4xl mx-auto blur-text-hover">
              I'm a BBA student majoring in Marketing at Narayanganj College—but my heart has always been in tech. Even though my academic path isn’t directly related, I’ve been passionate about web development for as long as I can remember. There’s something about building for the web that just clicks with me—it’s creative, logical, and super rewarding.
            </p>
            
            <p className="text-base text-[#ffebf3]/70 leading-relaxed text-center max-w-4xl mx-auto blur-text-hover">
             I officially started my coding journey in December 2024, and since then, it’s been an exciting mix of learning, experimenting, and building. Every time I see something I’ve coded come to life on the screen, it reminds me why I love this so much. I'm enjoying the process and looking forward to growing even more as a developer!
            </p>
            
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { number: '1+', label: 'Years Experience', delay: 0.1 },
              { number: '5+', label: 'Full Stack Projects', delay: 0.2 },
              { number: '8+', label: 'Technologies Mastered', delay: 0.3 },
              { number: '90%', label: 'Client Satisfaction', delay: 0.4 }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(4px)' }}
                animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
                transition={{ delay: stat.delay, duration: 0.6 }}
                className="text-center group"
              >
                <div className="text-4xl font-display font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-[#ffebf3]/70 font-medium blur-text-hover">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
    </section>
  )
};

export default AboutMe;
