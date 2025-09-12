import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './Navigation'
import MatrixBackground from './MatrixBackground'
import AIChat from './AIChat'
import './UI.css'

export default function UI() {
  const [currentSection, setCurrentSection] = useState('home')

  const sections = [
    { id: 'home', title: 'AI CHAT', icon: '🤖' },
    { id: 'about', title: 'ABOUT', icon: '👨‍💻' },
    { id: 'experience', title: 'EXPERIENCE', icon: '💼' },
    { id: 'projects', title: 'PROJECTS', icon: '🚀' },
    { id: 'skills', title: 'SKILLS', icon: '⚡' },
    { id: 'contact', title: 'CONTACT', icon: '📞' }
  ]

  return (
    <>
      <MatrixBackground />
      
      {/* Main UI Container */}
      <div className="ui-container">
        
        {/* Header */}
        <motion.header 
          className="header glass"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="logo neon-glow">
            <span className="glitch">FIRAZ FHANSURIE</span>
          </div>
        </motion.header>

        {/* Navigation */}
        <Navigation 
          sections={sections}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />

        {/* Main Content */}
        <motion.main className="main-content">
          <AnimatePresence mode="wait">
            {currentSection === 'home' && <AIChatSection key="home" />}
            {currentSection === 'about' && <AboutSection key="about" />}
            {currentSection === 'experience' && <ExperienceSection key="experience" />}
            {currentSection === 'projects' && <ProjectsSection key="projects" />}
            {currentSection === 'skills' && <SkillsSection key="skills" />}
            {currentSection === 'contact' && <ContactSection key="contact" />}
          </AnimatePresence>
        </motion.main>

      </div>
    </>
  )
}

function AIChatSection() {
  return (
    <motion.section 
      className="section ai-chat-section"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <AIChat />
    </motion.section>
  )
}

function AboutSection() {
  return (
    <motion.section 
      className="section about-section"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-content glass-dark">
        <h2 className="section-title neon-glow">ABOUT_ME.exe</h2>
        <div className="about-main">
          <div className="about-text">
            <p>
              Software engineer and entrepreneur with 4+ years of experience in AI automation, 
              SaaS development, and mobile applications. I've always loved programming since I was 14, 
              and this passion has driven me to found and scale Juta Teknologi to $20K/month revenue, 
              delivering AI-driven products and workflow automation solutions for clients across multiple industries.
            </p>
            <p>
              Skilled in building AI agents, full-stack systems, and mobile apps. Seeking 
              software engineering or AI-focused roles to apply technical expertise and 
              product execution experience.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="/images/firaz-laptop.png" 
              alt="Firaz working on his laptop" 
              className="developer-image"
            />
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <span className="neon-glow-pink">📍</span> Shah Alam, Selangor, Malaysia
          </div>
          <div className="contact-item">
            <span className="neon-glow-pink">📞</span> +60 11-2167 7672
          </div>
          <div className="contact-item">
            <span className="neon-glow-pink">✉️</span> ferazfhansurie@gmail.com
          </div>
          <div className="contact-item">
            <span className="neon-glow-pink">💻</span> 
            <a 
              href="https://github.com/ferazfhansurie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              @ferazfhansurie
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function ExperienceSection() {
  const experiences = [
    {
      title: "Founder & Software Engineer",
      company: "Juta Teknologi",
      period: "Sep 2023 – Aug 2025",
      location: "Shah Alam, Malaysia",
      highlights: [
        "Founded and scaled from $0 → $20K/month",
        "Built AI Sales System, Second Brain, multiple databases",
        "Delivered 10+ websites and apps for SMEs",
        "Led product roadmap and team management"
      ]
    },
    {
      title: "Mobile Application Developer",
      company: "Code Titan",
      period: "Jan 2022 – Sep 2023",
      location: "Petaling Jaya, Malaysia",
      highlights: [
        "Developed Flutter and React Native apps",
        "Delivered new features and performance improvements",
        "Collaborated with cross-functional teams"
      ]
    },
    {
      title: "Web Developer",
      company: "NDE Consultancy Services",
      period: "Sep 2021 – Dec 2021",
      location: "Terengganu, Malaysia",
      highlights: [
        "Built corporate websites with PHP and JavaScript",
        "Optimized front-end performance and responsiveness"
      ]
    }
  ]

  return (
    <motion.section 
      className="section experience-section"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="experience-content">
        <h2 className="section-title neon-glow">EXPERIENCE.log</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item glass-dark"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-marker neon-glow-pink"></div>
              <div className="timeline-content">
                <h3 className="job-title neon-glow">{exp.title}</h3>
                <h4 className="company neon-glow-pink">{exp.company}</h4>
                <p className="period">{exp.period} | {exp.location}</p>
                <ul className="highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      name: "AI Sales System",
      description: "SaaS platform automating sales pipelines with AI (Web + Flutter app)",
      tech: ["React", "Flutter", "AI", "Node.js"],
      status: "Production",
      link: "https://jutateknologi.com"
    },
    {
      name: "Second Brain",
      description: "WhatsApp productivity AI detecting reminders and tasks",
      tech: ["Python", "AI", "WhatsApp API"],
      status: "Active",
      link: "https://app.jutateknologi.com"
    },
    {
      name: "Aper & Alist Databases",
      description: "Business and influencer management CRM systems",
      tech: ["JavaScript", "MySQL", "PHP"],
      status: "Deployed",
      link: "https://alist-database.vercel.app/"
    },
    {
      name: "NewText Carpet Stock",
      description: "React Native inventory tracking application",
      tech: ["React Native", "Firebase"],
      status: "Live",
      link: "https://apps.apple.com/us/app/cnb/id6743068002"
    },
    {
      name: "Buds App",
      description: "Social activity coordination mobile application",
      tech: ["Flutter", "Firebase"],
      status: "Published",
      link: "https://apps.apple.com/us/app/buds-groups-plans-friends/id1658251383"
    },
    {
      name: "PRIMUSGPT.AI",
      description: "Your AI-Powered Trading Companion",
      tech: ["AI", "Telegram Bot", "Trading"],
      status: "Live",
      link: "https://web.telegram.org/k/#@trading_ajaib_bot"
    }
  ]

  return (
    <motion.section 
      className="section projects-section"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-content">
        <h2 className="section-title neon-glow">PROJECTS.json</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass-dark"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <h3 className="project-name neon-glow">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-status">
                <span className="status-badge neon-glow-pink">{project.status}</span>
              </div>
              {project.link && (
                <div className="project-link">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-button"
                  >
                    View Project →
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function SkillsSection() {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: ["JavaScript", "React", "Node.js", "Flutter", "Python", "PHP", "Unity (C#)"]
    },
    {
      category: "AI & Automation", 
      skills: ["AI Chatbots", "Custom AI Agents", "Workflow Automation", "SaaS Platforms"]
    },
    {
      category: "Databases & Cloud",
      skills: ["MySQL", "Firebase", "MongoDB", "AWS", "Google Cloud"]
    },
    {
      category: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      category: "Other Skills",
      skills: ["Full-Stack Development", "Product Management", "Team Leadership", "3D Development"]
    }
  ]

  return (
    <motion.section 
      className="section skills-section"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skills-content">
        <h2 className="section-title neon-glow">SKILLS.config</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category glass-dark"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="category-title neon-glow-pink">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ContactSection() {
  return (
    <motion.section 
      className="section contact-section"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-content glass-dark">
        <h2 className="section-title neon-glow">CONTACT.me</h2>
        <div className="contact-info-grid">
          <motion.div 
            className="contact-card glass"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="neon-glow-pink">📧 Email</h3>
            <p>ferazfhansurie@gmail.com</p>
          </motion.div>
          
          <motion.div 
            className="contact-card glass"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="neon-glow-pink">📞 Phone</h3>
            <p>+60 11-2167 7672</p>
          </motion.div>
          
          <motion.div 
            className="contact-card glass"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="neon-glow-pink">📍 Location</h3>
            <p>Shah Alam, Selangor, Malaysia</p>
          </motion.div>
          
          <motion.div 
            className="contact-card glass"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="neon-glow-pink">🌐 LinkedIn</h3>
            <p>firazfhansurie</p>
          </motion.div>
        </div>
    
      </div>
    </motion.section>
  )
}