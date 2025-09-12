import { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { 
  OrbitControls, 
  Stars, 
  Text,
  Float,
  Environment,
  PerspectiveCamera,
  useGLTF
} from '@react-three/drei'
import { Vector3, Color } from 'three'
import { gsap } from 'gsap'
import CyberCity from './CyberCity'
import ParticleField from './ParticleField'
import HackerRoom from './HackerRoom'

export default function Scene() {
  const { camera } = useThree()
  const sceneRef = useRef()
  const [cameraPosition, setCameraPosition] = useState([0, 5, 10])

  useEffect(() => {
    // Initial camera animation
    gsap.fromTo(camera.position, 
      { x: 20, y: 20, z: 20 },
      { x: 0, y: 5, z: 10, duration: 3, ease: "power2.out" }
    )
  }, [camera])

  useFrame((state) => {
    // Subtle camera movement based on mouse
    const mouse = state.mouse
    camera.position.x = mouse.x * 2
    camera.position.y = 5 + mouse.y * 1
    camera.lookAt(0, 0, 0)
  })

  return (
    <group ref={sceneRef}>
      {/* Lighting */}
      <ambientLight intensity={0.2} color="#00ff00" />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        color="#00ff00"
        castShadow
      />
      <pointLight position={[-10, 0, -20]} color="#00bfff" intensity={0.5} />
      <pointLight position={[10, 0, -20]} color="#0080ff" intensity={0.5} />

      {/* Environment */}
      <Stars 
        radius={300} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade={true} 
      />
      
      {/* Main 3D Elements */}
      <CyberCity />
      <HackerRoom />
      <ParticleField />
      

      {/* Interactive 3D Text */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Text
          position={[0, 8, -10]}
          fontSize={3}
          color="#00ff00"
          anchorX="center"
          anchorY="middle"
        >
          FIRAZ FHANSURIE
        </Text>
      </Float>

      {/* Controls */}
      <OrbitControls 
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={8}
        maxDistance={25}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
    </group>
  )
}