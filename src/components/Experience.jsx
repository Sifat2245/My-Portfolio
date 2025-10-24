import { motion, useInView } from 'framer-motion'; //eslint-disable-line
import { useRef, useEffect, useState } from 'react';
import { Calendar, MapPin, Code, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const experiences = [
    {
  id: 1,
  type: 'work',
  title: 'Frontend Developer',
  company: 'Softvence Agency',
  location: 'On Site',
  duration: 'October 2025 - Present',
  description:
    'As a Frontend Developer at Softvence Agency, I build and maintain dynamic web applications using the MERN stack. I focus on delivering clean, optimized, and visually appealing user interfaces with modern design principles and smooth performance.',
  technologies: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'Shadcn'
  ],
  achievements: [
    'Delivered multiple high-performing web apps including e-commerce and dashboard systems',
    'Enhanced site performance by optimizing Core Web Vitals and implementing lazy loading',
    'Developed responsive and accessible interfaces using React and Tailwind CSS',
    'Collaborated with backend team to design RESTful APIs and improve system scalability'
  ]
}

  ];

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'learning':
        return GraduationCap;
      case 'project':
        return Code;
      default:
        return Briefcase;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'work':
        return 'from-[#8c0829] to-[#7b1e3b]';
      case 'learning':
        return 'from-[#7b1e3b] to-[#4d1426]';
      case 'project':
        return 'from-[#4d1426] to-[#8c0829]';
      default:
        return 'from-[#8c0829] to-[#7b1e3b]';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="experience" ref={ref} className="pb-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#8c0829]/5 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-[#7b1e3b]/8 rounded-full filter blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
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
              {'<'} My Journey {'/>'} 
            </p>
          </div>

          
          <div className="w-32 h-1 bg-gradient-to-r from-[#8c0829] via-[#7b1e3b] to-[#4d1426] mx-auto mb-8 rounded-full"></div>
          
          <div className={`stagger-blur ${isVisible ? 'animate' : ''} max-w-4xl mx-auto`}>
            <p className="text-xl text-[#ffebf3]/80 leading-relaxed blur-text-hover">
              My journey as a <span className="text-[#8c0829] font-semibold">MERN Stack Developer</span> has been 
              filled with continuous learning, building, and growing through hands-on projects.
            </p>
            <p className="text-lg text-[#ffebf3]/70 leading-relaxed mt-4 blur-text-hover">
              From mastering <span className="font-mono text-[#8c0829]">React.js</span> to building full-stack applications, 
              here's my professional development story.
            </p>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8c0829] via-[#7b1e3b] to-[#4d1426] opacity-30 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = getIcon(exp.type);
              
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-[#8c0829] to-[#7b1e3b] rounded-full border-4 border-[#1c1c1c] z-10 hidden md:block"></div>
                  
                  {/* Experience card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="md:ml-20 glass-card p-8 rounded-3xl hover:bg-[#8c0829]/5 transition-all duration-500 group card-hover relative overflow-hidden"
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(exp.type)} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div className="flex items-start space-x-4 mb-4 md:mb-0">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className={`w-14 h-14 bg-gradient-to-br ${getTypeColor(exp.type)} rounded-2xl flex items-center justify-center group-hover:animate-glow flex-shrink-0`}
                          >
                            <IconComponent size={24} className="text-[#ffebf3]" />
                          </motion.div>
                          
                          <div>
                            <h3 className="text-2xl font-display font-bold text-[#ffebf3] group-hover:text-[#8c0829] transition-colors mb-2">
                              {exp.title}
                            </h3>
                            <p className="text-lg text-[#ffebf3]/80 font-medium mb-1">
                              {exp.company}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-[#ffebf3]/60 text-sm">
                              <div className="flex items-center space-x-1 mb-1 sm:mb-0">
                                <Calendar size={14} />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin size={14} />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[#ffebf3]/80 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-[#ffebf3]/90 font-medium mb-3 flex items-center">
                          <Code size={16} className="mr-2 text-[#8c0829]" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8, filter: 'blur(4px)' }}
                              animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
                              transition={{ 
                                delay: index * 0.1 + techIndex * 0.05,
                                duration: 0.6,
                                ease: [0.25, 0.46, 0.45, 0.94]
                              }}
                              className="px-3 py-1 bg-[#1c1c1c]/30 rounded-full text-sm text-[#ffebf3]/80 border border-[#ffebf3]/10 hover:border-[#8c0829]/50 hover:bg-[#8c0829]/10 transition-all duration-300 blur-text-hover"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-[#ffebf3]/90 font-medium mb-3 flex items-center">
                          <Award size={16} className="mr-2 text-[#8c0829]" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                              animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                              transition={{ 
                                delay: index * 0.1 + achIndex * 0.1,
                                duration: 0.6,
                                ease: [0.25, 0.46, 0.45, 0.94]
                              }}
                              className="flex items-start space-x-3 text-[#ffebf3]/70 blur-text-hover"
                            >
                              <div className="w-1.5 h-1.5 bg-[#8c0829] rounded-full mt-2.5 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}