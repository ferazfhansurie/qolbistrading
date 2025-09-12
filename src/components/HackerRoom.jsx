import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

export default function HackerRoom() {
  const roomRef = useRef()
  const screensRef = useRef()
  
  useFrame((state) => {
    if (screensRef.current) {
      screensRef.current.children.forEach((screen, i) => {
        screen.material.emissiveIntensity = 
          0.5 + Math.sin(state.clock.elapsedTime * 3 + i) * 0.3
      })
    }
  })

  return (
    <group ref={roomRef} position={[0, 0, -15]}>
      {/* Room walls */}
      <Walls />
      
      {/* Multiple screens */}
      <group ref={screensRef}>
        <Screen position={[-3, 2, 2]} rotation={[0, 0.3, 0]} />
        <Screen position={[0, 2, 2]} rotation={[0, 0, 0]} />
        <Screen position={[3, 2, 2]} rotation={[0, -0.3, 0]} />
        <Screen position={[-1.5, 0.5, 2]} rotation={[0, 0.1, 0]} size={[2, 1.5]} />
        <Screen position={[1.5, 0.5, 2]} rotation={[0, -0.1, 0]} size={[2, 1.5]} />
      </group>

      {/* Desk */}
      <mesh position={[0, 0, 1]}>
        <boxGeometry args={[8, 0.2, 2]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      {/* Chair */}
      <mesh position={[0, -0.5, -0.5]}>
        <cylinderGeometry args={[0.8, 0.8, 1, 8]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Floating code snippets */}
      <FloatingCode />
    </group>
  )
}

function Walls() {
  return (
    <group>
      {/* Back wall */}
      <mesh position={[0, 3, 3]}>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial 
          color="#111" 
          transparent 
          opacity={0.8}
        />
      </mesh>
      
      {/* Side walls */}
      <mesh position={[-6, 3, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial 
          color="#111" 
          transparent 
          opacity={0.8}
        />
      </mesh>
      
      <mesh position={[6, 3, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial 
          color="#111" 
          transparent 
          opacity={0.8}
        />
      </mesh>
    </group>
  )
}

function Screen({ position, rotation, size = [2.5, 2] }) {
  const screenRef = useRef()
  const [codeLines] = useState([
    'const skills = {',
    '  frontend: ["React", "Three.js"],',
    '  backend: ["Node.js", "Python"],',
    '  mobile: ["Flutter", "React Native"],',
    '  ai: ["Custom Agents", "Automation"]',
    '};',
    '',
    'if (employer.impressed) {',
    '  hire(firaz);',
    '}'
  ])

  return (
    <group position={position} rotation={rotation}>
      {/* Screen frame */}
      <mesh>
        <boxGeometry args={[size[0] + 0.2, size[1] + 0.2, 0.1]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      
      {/* Screen */}
      <mesh position={[0, 0, 0.051]} ref={screenRef}>
        <planeGeometry args={size} />
        <meshStandardMaterial 
          color="#000" 
          emissive="#00ff00"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Code text */}
      {codeLines.map((line, i) => (
        <Text
          key={i}
          position={[-size[0]/2 + 0.1, size[1]/2 - 0.2 - i * 0.15, 0.052]}
          fontSize={0.08}
          color="#00ff00"
          anchorX="left"
          anchorY="top"
        >
          {line}
        </Text>
      ))}
    </group>
  )
}

function FloatingCode() {
  const codeRef = useRef()
  const codeSnippets = [
    '{ success: true }',
    'npm run dev',
    'git commit -m "feat: awesome portfolio"',
    'const magic = () => hire(firaz);',
    'AI.automate(workflow)',
    'React.render(<Amazing />)'
  ]

  useFrame((state) => {
    if (codeRef.current) {
      codeRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5 + i
        child.rotation.y = state.clock.elapsedTime * 0.2 + i
      })
    }
  })

  return (
    <group ref={codeRef}>
      {codeSnippets.map((snippet, i) => (
        <Text
          key={i}
          position={[
            (Math.random() - 0.5) * 6,
            3 + i,
            (Math.random() - 0.5) * 3
          ]}
          fontSize={0.2}
          color="#00bfff"
          anchorX="center"
          anchorY="center"
        >
          {snippet}
        </Text>
      ))}
    </group>
  )
}