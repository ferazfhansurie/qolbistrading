import { motion } from 'framer-motion'
import './FloatingParticles.css'

export default function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    left: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.2
  }))

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity
          }}
          animate={{
            y: [-20, window.innerHeight + 20],
            x: [0, Math.random() * 100 - 50]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  )
}
