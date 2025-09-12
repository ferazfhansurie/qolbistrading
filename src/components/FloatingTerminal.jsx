import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

export default function FloatingTerminal({ position }) {
  const terminalRef = useRef()
  const [terminalContent] = useState([
    '> firaz@portfolio:~$ whoami',
    'Firaz Fhansurie - Full Stack Developer',
    '> firaz@portfolio:~$ cat skills.json',
    '{',
    '  "languages": ["JavaScript", "Python", "Dart"],',
    '  "frameworks": ["React", "Flutter", "Node.js"],',
    '  "specialties": ["AI Automation", "3D Web"],',
    '  "experience": "4+ years",',
    '  "revenue": "$20K/month at Juta Teknologi"',
    '}',
    '> firaz@portfolio:~$ npm run impressive',
    'Building amazing experiences... ✨',
    '> _'
  ])

  useFrame((state) => {
    if (terminalRef.current) {
      terminalRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      terminalRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <group ref={terminalRef} position={position}>
      {/* Terminal background */}
      <mesh>
        <planeGeometry args={[4, 3]} />
        <meshStandardMaterial 
          color="#000"
          transparent
          opacity={0.9}
          emissive="#000"
        />
      </mesh>

      {/* Terminal border */}
      <mesh position={[0, 0, 0.001]}>
        <planeGeometry args={[4.1, 3.1]} />
        <meshStandardMaterial 
          color="#00ff00"
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Terminal content */}
      {terminalContent.map((line, i) => (
        <Text
          key={i}
          position={[-1.8, 1.3 - i * 0.15, 0.01]}
          fontSize={0.08}
          color={line.startsWith('>') ? '#00ff00' : '#ffffff'}
          anchorX="left"
          anchorY="top"
        >
          {line}
        </Text>
      ))}

      {/* Cursor blink */}
      <CursorBlink position={[-1.6, -1.1, 0.01]} />
    </group>
  )
}

function CursorBlink({ position }) {
  const cursorRef = useRef()

  useFrame((state) => {
    if (cursorRef.current) {
      cursorRef.current.material.opacity = 
        Math.sin(state.clock.elapsedTime * 3) > 0 ? 1 : 0
    }
  })

  return (
    <mesh ref={cursorRef} position={position}>
      <planeGeometry args={[0.02, 0.12]} />
      <meshBasicMaterial 
        color="#00ff00" 
        transparent
      />
    </mesh>
  )
}