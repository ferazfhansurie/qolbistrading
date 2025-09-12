import { motion } from 'framer-motion'
import './Navigation.css'

export default function Navigation({ sections, currentSection, setCurrentSection }) {
  return (
    <motion.nav 
      className="navigation glass"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      <div className="nav-items">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            className={`nav-item ${currentSection === section.id ? 'active' : ''}`}
            onClick={() => setCurrentSection(section.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="nav-icon">{section.icon}</span>
            <span className="nav-text">{section.title}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  )
}