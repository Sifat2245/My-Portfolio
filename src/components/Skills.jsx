import { motion, useInView } from "framer-motion"; // eslint-disable-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import {
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Zap,
  Terminal,
  Palette,
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      techs: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Backend Development",
      icon: Server,
      techs: ["Node.js", "Express.js", "JWT Authentication", "RESTful APIs"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      name: "Database Management",
      icon: Database,
      techs: ["MongoDB"],
      color: "from-purple-500/20 to-violet-500/20",
    },
    {
      name: "Deployment",
      icon: Globe,
      techs: ["Firebase", "Vercel", "Netlify", "Git & GitHub"],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      name: "Mobile & Responsive",
      icon: Smartphone,
      techs: ["Responsive Design", "Mobile-First Approach", "PWA Development"],
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      name: "Performance & UX",
      icon: Zap,
      techs: ["Web Optimization", "SEO Best Practices", "Core Web Vitals"],
      color: "from-yellow-500/20 to-amber-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div
      id="skills"
      ref={ref}
      className="pb-24 max-w-7xl mx-auto px-4 relative overflow-hidden"
    >
      <div className={`blur-reveal ${isVisible ? "in-view" : ""} text-center`}>
        <p className="text-[#8c0829] font-mono text-2xl mb-4 tracking-wide">
          {"<"} My Skills {"/>"}
        </p>

        <div className="w-32 h-1 bg-gradient-to-r from-[#8c0829] via-[#7b1e3b] to-[#4d1426] mx-auto mb-8 rounded-full"></div>
        <p className="text-[#ffebf3]/80 font-mono text-md mb-14 tracking-wide">
          Technologies and tools I use to build amazing web applications
        </p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 "
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -8 }}
            className="glass-card p-8 rounded-3xl bg-[#ffebf3]/2 hover:bg-[#8c0829]/5 transition-all duration-500 group card-hover relative overflow-hidden"
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
            ></div>

            <div className="relative z-10 space-y-6">
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="mx-auto w-16 h-16 bg-gradient-to-br from-[#8c0829] to-[#7b1e3b] rounded-2xl flex items-center justify-center group-hover:animate-glow"
              >
                <skill.icon size={28} className="text-[#ffebf3]" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold text-[#ffebf3] group-hover:text-[#8c0829] transition-colors text-center">
                {skill.name}
              </h3>

              {/* Technologies */}
              <div className="space-y-3">
                {skill.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    animate={
                      isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}
                    }
                    transition={{
                      delay: index * 0.1 + techIndex * 0.05,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="px-4 py-2 bg-[#1c1c1c]/30 rounded-full text-sm text-[#ffebf3]/80 border border-[#ffebf3]/10 hover:border-[#8c0829]/50 hover:bg-[#8c0829]/10 transition-all duration-300 text-center blur-text-hover"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
