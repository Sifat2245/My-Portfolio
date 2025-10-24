import React, { useRef, useState } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { useInView, motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import ProjectModal from "./ProjectModal";

const MyProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // projects
  // will connect to the server soon
  const projects = [
    {
      id: 1,
      title: "United Pets - Pet Adoption Platform",
      description:
        "United Pets is a full-stack platform for pet adoption, donations, and campaigns. It allows users to add pets, request donations, contribute to causes, and manage pet-related campaigns. Features include user roles, secure authentication, Stripe payments, donation tracking, and admin controls.",
      image:
        "https://res.cloudinary.com/djoytexuc/image/upload/v1754143175/Screenshot_2025-08-02_195650_u6cuid.png",
      category: "Full Stack",
      tech: [
        "React",
        "Tailwind",
        "Firebase",
        "Node JS",
        "Express JS",
        "MongoDB",
        "Shadcn",
        "Stripe",
      ],
      github: "https://github.com/Sifat2245/United_pets_client",
      live: "https://united-pets-5dd15.web.app/",
      date: "2025-07-25",
      devTime: "8 Days",
      teamSize: "Solo Project",
      codeLines: "6000+",
      status: "Completed",
      features: [
        "A fully functional platform enabling users to list pets for adoption, manage adoption requests, create and support donation campaigns — all with seamless user flows and real-time updates.",
        "Implemented secure email/password login along with OAuth providers (Google, Twitter), plus JWT-based access tokens, supporting distinct user roles (user & admin) with protected dashboards and routes.",
        "Advanced infinite scrolling on pet listing and donation campaigns pages, combined with powerful search and category filters for a smooth and intuitive browsing experience.",
        "Enabled secure, seamless payments via Stripe, allowing users to donate specific amounts with card details securely handled, and real-time tracking of donations on campaigns.",
        "Created feature-rich dashboards: users can add/update/delete pets, manage donation campaigns, track donations; admins have full control over users, pets, and campaigns, including role management and moderation.",
      ],
      challenges: [
        "Implementing infinite scrolling with efficient data fetching and caching",
        "Integrating Stripe securely for handling payments and donations",
        "Building a role-based authentication system with JWT and OAuth providers",
        "Implementing a rich text editor for pet descriptions with markdown support",
      ],
      improvements: [
        "Convert the web application into a Progressive Web App (PWA) for mobile-friendly experience",
      ],
    },
    {
      id: 2,
      title: "Asian - Restaurant Management System",
      description:
        "ASIAN is a full-stack restaurant management web application that lets users browse menus, place orders, and manage food items. Contributors and staff can add, edit, or delete food items — all delivered through a sleek, responsive, and animated UI.",
      image: "https://i.ibb.co/NgyGpTY5/Screenshot-2025-06-18-020247.png",
      category: "Full Stack",
      tech: ["React", "Tailwind", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/Sifat2245/Asian-client",
      live: "https://asian-web-app.web.app/",
      date: "2025-05-26",
      devTime: "6 Days",
      teamSize: "Solo Project",
      codeLines: "4000+",
      status: "Completed",
      features: [
        "Smooth Online Food Ordering – Customers can browse dishes, view details, and place orders directly through a simple purchase form.",
        "Smart Stock Control – The system prevents purchases when items are out of stock and limits buying to available quantities.",
        "Quick Food Search & Filters – Find dishes instantly by name and filter by categories to save time.",
        "Mobile-Friendly & Theme Toggle – Works perfectly on any device with an option to switch between light and dark mode.",
      ],
      challenges: [
        "Building the slider in the hero section using Framer Motion",
        "Implementing the comment section for users",
        "Handling real-time inventory updates",
      ],
      improvements: ["Add a payment system", "Design a dashboard"],
    },
    {
      id: 3,
      title: "Roshoi Bondhu – A Recipe Sharing Platform",
      description:
        "Roshoi Bondhu is an engaging recipe-sharing platform where users can create accounts, post their favorite recipes, browse and like others’ dishes, and manage their personal recipe collection. \n(will update the Comment section. User can comment or review others recipes)",
      image: "https://i.ibb.co/N2FN5RWn/Screenshot-2025-05-24-144439.png",
      category: "Full Stack",
      tech: ["React", "Tailwind", "Firebase", "Express", "Node.JS", "MongoDB"],
      github: "https://github.com/Sifat2245/Roshoi-bondhu-client",
      live: "https://roshoi-bondhu-app-8e8ae.web.app/",
      date: "2025-5-02",
      devTime: "5 Days",
      teamSize: "Solo Project",
      codeLines: "3000+",
      status: "Completed",
      features: [
        "Find Top Recipes Easily – See the most popular recipes loved by other users, all ranked by likes.",
        "Save Your Favorites – Add recipes you love to your wishlist so you can find them quickly later.",
        "Your Personal Recipe Book – Add, edit, and manage your own recipes anytime.",
        "Discover by Cuisine – Filter recipes by type, like Italian, Mexican, or Indian, to match your taste.",
        "Beautiful & Easy to Use – A clean, mobile-friendly design that works smoothly on phones, tablets, and computers.",
      ],
      challenges: [
        "creating the authentication modal using Framer motion and toggle Sign in and Sign up",
        "designing Dashboard",
      ],
    },
    {
      id: 4,
      title: "Chakri Lagbe – Job Portal Web Application",
      description:
        "Chakri Lagbe is a job portal designed to connect job seekers with employers. Whether you are searching for your first job or looking to switch careers, Chakri Lagbe simplifies the process of job discovery and application.",
      image: "https://i.ibb.co/gFTFp8gZ/Screenshot-2025-05-07-024932.png",
      category: "Frontend",
      tech: ["React", "Tailwind", "Javascript"],
      github: "https://github.com/Sifat2245/ChakriLagbe",
      live: "https://chakrilagbe.surge.sh/",
      date: "2025-04-21",
      devTime: "5 Days",
      teamSize: "Solo Project",
      codeLines: "2000+",
      status: "Completed",
      features: [
        "Explore Companies in One Place – Browse a variety of companies and see all their job openings without visiting multiple sites.",
        "Detailed Job Info at a Glance – View salary, job type, requirements, and apply directly to the company’s website.",
        "Personal Profile Page – Keep your name, photo, and details updated to personalize your job search experience.",
        "Easy Login & Sign Up – Join using your email or Google account, with a simple password reset option if you forget.",
        "Mobile-Friendly & Smooth Design – Works perfectly on phones, tablets, and computers with a clean, modern look.",
      ],
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="pb-32 px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold gradient-text mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8c0829] to-[#7b1e3b] mx-auto mb-8"></div>
          <p className="text-xl text-[#ffebf3]/80 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of full-stack applications and frontend
            projects that showcase my expertise in modern web development
            technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedFilter === category
                  ? "bg-[#8c0829] text-[#ffebf3]"
                  : "glass-effect text-[#ffebf3]/70 hover:text-[#8c0829] hover:bg-[#8c0829]/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-[#8c0829]/5 transition-all duration-300 group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-[#8c0829]/90 text-[#ffebf3] px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-display font-bold text-[#ffebf3] group-hover:text-[#8c0829] transition-colors cursor-pointer">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-[#ffebf3]/60 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {new Date(project.date).toLocaleDateString()}
                  </div>
                </div>

                <p
                  className="text-[#ffebf3]/80 leading-relaxed overflow-hidden text-ellipsis"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1c1c1c]/50 rounded-full text-sm text-[#ffebf3]/70 border border-text/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <motion.a
                    href={project.github}
                    target="_black"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-[#8c0829]/20 transition-all duration-200"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_black"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-[#8c0829] hover:bg-[#8c0829]/90 text-[#ffebf3] rounded-lg transition-all duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        ></ProjectModal>
      </div>
    </section>
  );
};

export default MyProjects;
