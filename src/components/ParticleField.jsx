import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function ParticleField() {
  const particlesRef = useRef()
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(300 * 3)
    for (let i = 0; i < 300; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <>
      {/* Main particle field */}
      <Points ref={particlesRef} positions={particlesPosition}>
        <PointMaterial
          color="#00ff00"
          size={0.1}
          sizeAttenuation={true}
          transparent
          opacity={0.6}
        />
      </Points>

      {/* Matrix rain effect */}
      <MatrixRain />
      
      {/* Data streams */}
      <DataStreams />
    </>
  )
}

function MatrixRain() {
  const rainRef = useRef()
  
  const rainPositions = useMemo(() => {
    const positions = new Float32Array(100 * 3)
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = Math.random() * 50 + 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
    }
    return positions
  }, [])

  useFrame((state) => {
    if (rainRef.current) {
      const positions = rainRef.current.geometry.attributes.position
      for (let i = 0; i < positions.count; i++) {
        positions.array[i * 3 + 1] -= 0.2
        if (positions.array[i * 3 + 1] < -10) {
          positions.array[i * 3 + 1] = 50
        }
      }
      positions.needsUpdate = true
    }
  })

  return (
    <Points ref={rainRef} positions={rainPositions}>
      <PointMaterial
        color="#00ff00"
        size={0.2}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
      />
    </Points>
  )
}

function DataStreams() {
  const streamRef = useRef()

  useFrame((state) => {
    if (streamRef.current) {
      streamRef.current.children.forEach((stream, i) => {
        stream.position.x = Math.sin(state.clock.elapsedTime + i) * 10
        stream.position.z = Math.cos(state.clock.elapsedTime + i) * 10
        stream.material.emissiveIntensity = 
          0.5 + Math.sin(state.clock.elapsedTime * 5 + i) * 0.3
      })
    }
  })

  return (
    <group ref={streamRef}>
      {Array.from({ length: 4 }, (_, i) => (
        <mesh key={i} position={[0, 5, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 20, 8]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? '#00ff00' : '#00bfff'}
            emissive={i % 2 === 0 ? '#00ff00' : '#00bfff'}
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  )
}