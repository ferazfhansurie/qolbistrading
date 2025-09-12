import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

export default function CyberCity() {
  const cityRef = useRef()
  const buildingsRef = useRef()

  // Generate random buildings
  const buildings = useMemo(() => {
    const temp = []
    for (let i = 0; i < 20; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 40,
          Math.random() * 10 + 1,
          (Math.random() - 0.5) * 40
        ],
        height: Math.random() * 15 + 5,
        width: Math.random() * 2 + 0.5,
        depth: Math.random() * 2 + 0.5,
        color: Math.random() > 0.5 ? '#00ff00' : '#00bfff',
        emissive: Math.random() > 0.7
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (buildingsRef.current) {
      buildingsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group ref={cityRef}>
      {/* Ground plane */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100, 50, 50]} />
        <meshStandardMaterial 
          color="#000" 
          wireframe={true}
          emissive="#00ff00"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Buildings */}
      <group ref={buildingsRef}>
        {buildings.map((building, index) => (
          <Building key={index} {...building} />
        ))}
      </group>

      {/* Neon rings */}
      <NeonRings />
    </group>
  )
}

function Building({ position, height, width, depth, color, emissive }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current && emissive) {
      meshRef.current.material.emissiveIntensity = 
        0.3 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial 
        color={color}
        emissive={emissive ? color : '#000000'}
        emissiveIntensity={emissive ? 0.3 : 0}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

function NeonRings() {
  const ringsRef = useRef()

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <group ref={ringsRef}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 10 + i * 5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[8 + i * 3, 0.2, 8, 32]} />
          <meshStandardMaterial 
            color={i === 0 ? '#00ff00' : i === 1 ? '#00bfff' : '#0080ff'}
            emissive={i === 0 ? '#00ff00' : i === 1 ? '#00bfff' : '#0080ff'}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}