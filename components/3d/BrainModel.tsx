'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function BrainModel() {
  const meshRef = useRef<any>(null)
  
  useFrame((state: any) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial 
          color="#854F6C" 
          transparent 
          opacity={0.8}
          shininess={100}
        />
      </mesh>
      
      {/* Add ambient light */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#FBE4D8" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#854F6C" />
    </group>
  )
} 