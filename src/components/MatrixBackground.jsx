import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix characters
    const chars = 'アカサタナハマヤラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレゲゼデベペオコソトノホモヨロゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const charArray = chars.split('')

    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      // Semi-transparent black background for fading effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00ff00'
      ctx.font = `${fontSize}px monospace`

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        ctx.fillStyle = Math.random() > 0.98 ? '#ffffff' : '#00ff00'
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Reset drop to top randomly or when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="matrix-rain"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  )
}