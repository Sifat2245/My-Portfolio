import { motion, AnimatePresence } from "framer-motion"; //eslint-disable-line
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  Code,
  Zap,
  Target,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;


  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-3 glass-effect rounded-full hover:bg-[#8c0829]/20 transition-all duration-200"
            >
              <X size={24} className="text-text" />
            </motion.button>

            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="p-8"
            >
              {/* Project Image */}
              <motion.div
                variants={itemVariants}
                className="relative mb-8 rounded-2xl overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-2 bg-[#8c0829]/90 text-[#ffebf3] rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center text-[#ffebf3]/80 text-sm">
                      <Calendar size={16} className="mr-2" />
                      {new Date(project.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Title */}
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-4xl font-display font-bold gradient-text mb-4">
                  {project.title}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#8c0829] to-[#7b1e3b] rounded-full"></div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 mb-8"
              >
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 px-6 py-3 glass-effect rounded-xl hover:bg-[#8c0829]/20 transition-all duration-200"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-[#8c0829] hover:bg-[#8c0829]/90 text-[#ffebf3] rounded-xl transition-all duration-200 animate-glow"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </motion.div>
              {/* Brief Description */}
              <motion.div
                variants={itemVariants}
                className="glass-card p-6 rounded-2xl mb-8"
              >
                <h3 className="text-xl font-display font-bold text-[#8c0829] mb-4 flex items-center">
                  <Code size={20} className="mr-2" />
                  Project Overview
                </h3>
                <p className="text-[#ffebf3]/80 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Key Features */}
              {project.features?.length > 0 && (
                <motion.div
                  variants={itemVariants}
                  className="glass-card p-6 rounded-2xl mb-8"
                >
                  <h3 className="text-xl font-display font-bold text-[#8c0829] mb-4 flex items-center">
                    <CheckCircle size={20} className="mr-2" />
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        className="flex items-start space-x-3 text-[#ffebf3]/70 blur-text-hover"
                      >
                        <div className="w-2 h-2 bg-[#8c0829] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Technologies Used */}
              <motion.div
                variants={itemVariants}
                className="glass-card p-6 rounded-2xl mb-8"
              >
                <h3 className="text-xl font-display font-bold text-[#8c0829] mb-4 flex items-center">
                  <Zap size={20} className="mr-2" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        filter: "blur(4px)",
                      }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      transition={{
                        delay: 0.4 + index * 0.05,
                        duration: 0.5,
                      }}
                      className="px-4 py-2 bg-[#1c1c1c]/30 rounded-full text-sm text-[#ffebf3]/80 border border-text/10 hover:border-[#8c0829]/50 hover:bg-[#8c0829]/10 transition-all duration-300 blur-text-hover"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Challenges Faced */}
              {project.challenges?.length > 0 && (
                <motion.div
                  variants={itemVariants}
                  className="glass-card p-6 rounded-2xl mb-8"
                >
                  <h3 className="text-xl font-display font-bold text-[#8c0829] mb-4 flex items-center">
                    <Target size={20} className="mr-2" />
                    Challenges Faced
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        className="flex items-start space-x-3 text-[#ffebf3]/70"
                      >
                        <div className="w-2 h-2 bg-[#7b1e3b] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Future Improvements */}
              {project.improvements?.length > 0 && (
                <motion.div
                  variants={itemVariants}
                  className="glass-card p-6 rounded-2xl mb-8"
                >
                  <h3 className="text-xl font-display font-bold text-[#8c0829] mb-4 flex items-center">
                    <Lightbulb size={20} className="mr-2" />
                    Future Improvements
                  </h3>
                  <ul className="space-y-3">
                    {project.improvements.map((improvement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                        className="flex items-start space-x-3 text-[#ffebf3]/70 blur-text-hover"
                      >
                        <div className="w-2 h-2 bg-[#4d1426] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{improvement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Project Stats */}
              <motion.div
                variants={itemVariants}
                className="glass-card p-6 rounded-2xl mb-8"
              >
                <h3 className="text-xl font-display font-bold text-[#8c0829] mb-4">
                  Project Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      label: "Development Time",
                      value: project.devTime,
                    },
                    {
                      label: "Team Size",
                      value: project.teamSize,
                    },
                    {
                      label: "Code Lines",
                      value: project.codeLines,
                    },
                    { label: "Status", value: project.status },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="text-center p-3 bg-[#1c1c1c]/20 rounded-xl border border-[#ffebf3]/10"
                    >
                      <div className="text-lg font-bold text-[#8c0829]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-[#ffebf3]/60">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
