import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingText, setLoadingText] = useState('Initializing...')

  const loadingSteps = [
    'Initializing quantum processors...',
    'Loading neural networks...',
    'Establishing matrix connections...',
    'Activating holographic displays...',
    'Synchronizing cyber protocols...',
    'Deploying AI assistants...',
    'Welcome to the future...'
  ]

  useEffect(() => {
    let stepIndex = 0
    const interval = setInterval(() => {
      if (stepIndex < loadingSteps.length - 1) {
        stepIndex++
        setLoadingText(loadingSteps[stepIndex])
      } else {
        clearInterval(interval)
        setTimeout(() => setIsLoading(false), 1000)
      }
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="loader-content">
            <motion.div 
              className="loader-logo neon-glow"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              FIRAZ FHANSURIE
            </motion.div>
            
            <div className="loader-progress">
              <motion.div 
                className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: "easeInOut" }}
              />
            </div>
            
            <motion.div 
              className="loader-text"
              key={loadingText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {loadingText}
            </motion.div>
            
            <div className="loader-spinner">
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}