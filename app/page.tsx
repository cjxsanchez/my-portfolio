"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaArrowUp,
  FaLaptopCode, FaServer, FaTools, FaDownload, FaBriefcase, FaUser, 
  FaMapMarkerAlt, FaGraduationCap, FaBullseye, FaTimes
} from "react-icons/fa";

import { 
  SiReact, SiNextdotjs, SiHtml5, SiCss, SiJavascript, SiTailwindcss, 
  SiNodedotjs, SiPhp, SiLaravel, SiExpress, SiGit, SiMysql, SiFirebase, SiSupabase 
} from "react-icons/si";

import Image from "next/image";

// --- ANIMATION VARIANTS ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- COMPONENTS ---

const Navbar = ({ activeSection }: { activeSection: string }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5 bg-transparent'} px-8 flex justify-between items-center`}>
      <div className="text-xl font-bold tracking-wider text-accent cursor-pointer" onClick={() => window.scrollTo(0,0)}>
        Portfolio<span className="text-white">.</span>
      </div>
      <ul className="hidden md:flex space-x-8">
        {navLinks.map((item) => {
          const sectionId = item.toLowerCase();
          const isActive = activeSection === sectionId;
          return (
            <li key={item} className="relative group">
              <a href={`#${sectionId}`} className={`transition-colors duration-300 ${isActive ? 'text-accent font-semibold' : 'text-gray-300 hover:text-white'}`}>
                {item}
              </a>
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </li>
          );
        })}
      </ul>
      <a href="/resume.pdf" download className="hidden md:flex items-center gap-2 px-5 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(236,72,153,0.1)] hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]">
        <FaDownload /> Resume
      </a>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 pt-20 relative overflow-hidden">
      <div className="text-center max-w-4xl z-10">
        <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-accent mb-4 font-mono text-lg">
          Hi, my name is
        </motion.p>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          John Carl S. Sanchez.
        </motion.h1>
        <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-3xl md:text-5xl font-bold text-gray-400 mb-8 h-16">
          I am a{' '}
          <span className="text-accent inline-block">
            <Typewriter
              words={['BSIT Student.', 'Web Developer.', 'Tech Enthusiast.']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
          I'm a 4th-year Information Technology student passionate about building scalable web applications and intuitive digital experiences. Currently seeking opportunities to bring my ideas to life.
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-md font-medium hover:bg-pink-600 transition-all shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:-translate-y-1">
            <FaBriefcase /> View Projects
          </a>
          <a href="#about" className="flex items-center gap-2 px-8 py-3 glass rounded-md font-medium text-gray-200 hover:bg-white/10 transition-all hover:-translate-y-1 border border-white/10 hover:border-white/20">
            <FaUser /> About Me
          </a>
          <a href="/resume.pdf" download className="md:hidden flex items-center gap-2 px-8 py-3 border border-accent text-accent rounded-md font-medium hover:bg-accent hover:text-white transition-all hover:-translate-y-1">
            <FaDownload /> Resume
          </a>
        </motion.div>
      </div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-8 max-w-5xl mx-auto scroll-mt-10">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
        <span className="text-accent font-mono text-xl md:text-2xl">01.</span> About Me
        <div className="h-[1px] bg-gray-700 flex-grow ml-4"></div>
      </motion.h2>
      
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-3 text-gray-300 leading-relaxed space-y-6 text-lg">
          <p>
            Hello! I'm an aspiring developer with a keen eye for creating modern and functional digital experiences. My interest in web development sparked when I realized the power of turning logic and code into interfaces that people interact with daily.
          </p>
          <p>
            Currently, I am completing my <span className="text-accent font-semibold">Bachelor of Science in Information Technology</span>. Throughout my academic journey, I've had the privilege of building systems that solve real-world problems, such as digital records hubs and accreditation tracking systems.
          </p>
          <p>
            My main focus these days is mastering the <span className="text-white font-semibold">React/Next.js ecosystem</span> alongside robust backend technologies. When I'm not at my computer, you can usually find me analyzing strategies in mobile games or staying active on the badminton court.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2 flex flex-col items-center gap-8">
          <div className="relative group w-64 h-64 mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            <div className="absolute inset-0 border-2 border-accent rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-darkBg rounded-xl overflow-hidden z-10 border border-white/10">
              <Image 
                src="/sanchez, john carl.jpg" 
                alt="John Carl S. Sanchez"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 grayscale hover:grayscale-0"
              />
            </div>
          </div>
          <div className="w-full space-y-3 mt-4">
            <div className="glass p-3 rounded flex items-center gap-3">
              <FaMapMarkerAlt className="text-accent" />
              <span className="text-sm text-gray-300">Virac, Catanduanes</span>
            </div>
            <div className="glass p-3 rounded flex items-center gap-3">
              <FaGraduationCap className="text-accent" />
              <span className="text-sm text-gray-300">BS Information Technology</span>
            </div>
            <div className="glass p-3 rounded flex items-center gap-3">
              <FaBullseye className="text-accent" />
              <span className="text-sm text-gray-300">Full-Stack Developer</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    { 
      title: "Frontend", icon: <FaLaptopCode size={24} />, 
      skills: [
        { name: "React", icon: <SiReact /> }, { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "HTML5", icon: <SiHtml5 /> }, { name: "CSS3", icon: <SiCss /> },
        { name: "JavaScript", icon: <SiJavascript /> }, { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ] 
    },
    { 
      title: "Backend", icon: <FaServer size={22} />, 
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> }, { name: "PHP", icon: <SiPhp /> },
        { name: "Laravel", icon: <SiLaravel /> }, { name: "Express", icon: <SiExpress /> }
      ] 
    },
    { 
      title: "Tools & Database", icon: <FaTools size={20} />, 
      skills: [
        { name: "Git", icon: <SiGit /> }, { name: "MySQL", icon: <SiMysql /> },
        { name: "Firebase", icon: <SiFirebase /> }, { name: "Supabase", icon: <SiSupabase /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-8 max-w-5xl mx-auto scroll-mt-10">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
        <span className="text-accent font-mono text-xl md:text-2xl">02.</span> Skills & Tools
        <div className="h-[1px] bg-gray-700 flex-grow ml-4"></div>
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div key={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass p-6 rounded-xl hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] transition-all duration-300 border border-white/5 hover:border-accent/30">
            <div className="flex items-center gap-3 mb-6 text-accent">
              {category.icon}
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <div key={i} className="group relative flex items-center gap-2 px-3 py-2 bg-darkBg/50 rounded-md border border-white/10 text-sm text-gray-300 hover:text-accent hover:border-accent/50 transition-all duration-300 cursor-default overflow-hidden">
                  <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                  <span className="text-lg z-10">{skill.icon}</span>
                  <span className="z-10">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const featuredProject = {
    title: "AccrediTrack",
    description: "A comprehensive web-based system designed to streamline the accreditation process for educational institutions. It features secure document management, progress tracking dashboards, and automated status reporting to ensure efficient handling of sensitive accreditation data.",
    tech: ["PHP", "MySQL", "JavaScript", "Supabase"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/accreditrack.png" 
  };

  const otherProjects = [
    {
      title: "PDOHO Digital Records Hub",
      description: "A secure digital records management system tailored to modernize data handling, ensuring quick retrieval and safe storage of sensitive information.",
      tech: ["PHP", "MySQL", "Bootstrap", "CSS"],
      github: "https://github.com",
      live: "https://example.com",
      image: "/pdoho.png" 
    },
    {
      title: "Portfolio v1.0",
      description: "A modern, responsive personal portfolio built with Next.js featuring glassmorphism design, smooth framer-motion animations, and optimized performance.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      live: "https://example.com",
      image: "/portfolio.png" 
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 max-w-5xl mx-auto scroll-mt-10">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
        <span className="text-accent font-mono text-xl md:text-2xl">03.</span> Selected Works
        <div className="h-[1px] bg-gray-700 flex-grow ml-4"></div>
      </motion.h2>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-24 group">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-4xl relative h-[250px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden glass shadow-xl hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-500 mb-8 border border-white/10">
            <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
            <Image 
              src={featuredProject.image} 
              alt={featuredProject.title} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
          </div>
          
          <div className="max-w-3xl flex flex-col items-center">
            <p className="text-accent font-mono text-sm md:text-base mb-2">Featured Project</p>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 hover:text-accent transition-colors cursor-pointer">{featuredProject.title}</h3>
            
            <div className="glass p-6 md:p-8 rounded-xl text-gray-300 text-base md:text-lg mb-8 shadow-lg backdrop-blur-xl border-white/10 hover:border-accent/40 transition-colors leading-relaxed">
              <p>{featuredProject.description}</p>
            </div>
            
            <ul className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base font-mono text-accent/80">
              {featuredProject.tech.map((tech, i) => (
                <li key={i} className="hover:text-accent transition-colors px-3 py-1 bg-white/5 rounded-full">{tech}</li>
              ))}
            </ul>
            
            <div className="flex justify-center gap-6">
              <a href={featuredProject.github} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-accent hover:-translate-y-1 transition-all"><FaGithub size={28} /></a>
              <a href={featuredProject.live} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-accent hover:-translate-y-1 transition-all"><FaExternalLinkAlt size={26} /></a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {otherProjects.map((project, idx) => (
          <motion.div key={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] transition-all duration-300 border border-white/5 group">
            
            <div className="relative h-48 w-full overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                unoptimized 
              />
            </div>
            
            <div className="p-8 flex flex-col flex-grow justify-between bg-darkBg/40">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <FaBriefcase className="text-accent text-2xl" />
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors"><FaGithub size={22} /></a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors"><FaExternalLinkAlt size={20} /></a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
              </div>
              <ul className="flex flex-wrap gap-3 text-xs font-mono text-accent/70 mt-auto">
                {project.tech.map((tech, i) => <li key={i}>{tech}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Certifications = () => {
  // State to track which certificate is currently clicked
  const [selectedCert, setSelectedCert] = useState<{ title: string; issuer: string; image: string } | null>(null);

  // Updated Cisco Certifications array
  const certs = [
    { title: "Junior Cybersecurity Analyst Career Path Exam", issuer: "Cisco Networking Academy", image: "/junior-cyber.png" },
    { title: "Ethical Hacker", issuer: "Cisco Networking Academy", image: "/ethical-hacker.png" },
    { title: "Python Essentials 1", issuer: "Cisco Networking Academy", image: "/python.png" },
    { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", image: "/intro-cyber.png" },
    { title: "IT Customer Support Basics", issuer: "Cisco Networking Academy", image: "/it-support.png" }
  ];

  return (
    <section id="certifications" className="py-24 px-8 max-w-5xl mx-auto scroll-mt-10">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
        <span className="text-accent font-mono text-xl md:text-2xl">04.</span> Certifications
        <div className="h-[1px] bg-gray-700 flex-grow ml-4"></div>
      </motion.h2>

      {/* Grid of Clickable Certificates */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            onClick={() => setSelectedCert(cert)}
            className="group relative glass p-6 rounded-xl border border-white/5 hover:border-accent/40 cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Subtle glow background on hover */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors leading-tight mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm font-mono">{cert.issuer}</p>
            </div>
            
            <div className="relative z-10 mt-8 flex items-center gap-2 text-accent text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
              <FaExternalLinkAlt /> View Certificate
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-darkBg/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevents clicking inside the image from closing it
              className="relative w-full max-w-4xl glass rounded-2xl p-2 border border-white/10 shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-accent transition-colors p-2 text-2xl bg-darkBg/50 rounded-full hover:bg-darkBg"
              >
                <FaTimes />
              </button>
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/40 flex items-center justify-center">
                <p className="absolute text-gray-500 font-mono text-sm z-0">Loading image...</p>
                <Image 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  fill 
                  className="object-contain z-10"
                  unoptimized
                />
              </div>
              
              {/* Footer text in Modal */}
              <div className="p-4 text-center mt-2">
                <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                <p className="text-gray-400 font-mono text-sm mt-1">{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Contact = () => {
  // ⬇️ TYPE YOUR ACTUAL EMAIL ADDRESS HERE! ⬇️
  const myEmail = "johncarlsanchez06@gmail.com"; 

  return (
    <section id="contact" className="py-32 px-8 max-w-3xl mx-auto text-center scroll-mt-10">
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-accent font-mono mb-4">05. What's Next?</motion.p>
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</motion.h2>
      <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-gray-400 mb-12 text-lg">
        Although I'm currently focused on finishing my degree, my inbox is always open. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
      </motion.p>
      
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {/* The href uses the mailto: protocol combined with your email variable */}
        <a href={`mailto:${myEmail}`} className="w-full sm:w-auto px-8 py-4 bg-transparent border border-accent text-accent rounded-md font-medium hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group">
          <FaEnvelope className="group-hover:animate-bounce" /> Say Hello
        </a>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 text-center glass mt-20 border-t border-white/5">
      <div className="flex justify-center gap-8 mb-6">
        <a href="https://github.com" className="text-gray-400 hover:text-accent hover:-translate-y-1 transition-all duration-300"><FaGithub size={24} /></a>
        <a href="https://linkedin.com" className="text-gray-400 hover:text-accent hover:-translate-y-1 transition-all duration-300"><FaLinkedin size={24} /></a>
      </div>
      <p className="text-gray-500 font-mono text-sm hover:text-accent transition-colors duration-300">Designed & Built by John Carl S. Sanchez</p>
    </footer>
  );
};

// --- MAIN PAGE LAYOUT ---

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);

      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      let current = 'home';
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative selection:bg-accent selection:text-white bg-darkBg text-white overflow-hidden">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      
      <AnimatePresence>
        {showTopBtn && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-accent text-white rounded-full shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:bg-pink-600 hover:-translate-y-2 transition-all duration-300 z-50 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}