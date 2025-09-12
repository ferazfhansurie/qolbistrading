import { useEffect, useState } from 'react'
import './CustomCursor.css'

export default function CustomCursor({ mousePosition }) {
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.classList.contains('clickable')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    return () => document.removeEventListener('mouseover', handleMouseOver)
  }, [])

  return (
    <>
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />
      <div 
        className="custom-cursor-trail"
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />
    </>
  )
}