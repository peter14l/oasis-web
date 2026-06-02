"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Environment, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    }
    
    // Smooth mouse parallax
    if (groupRef.current) {
      const targetX = state.pointer.x * 0.5;
      const targetY = state.pointer.y * 0.5;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[1.0, 100, 100]}>
          <MeshDistortMaterial
            color="#5DC9A8"
            attach="material"
            distort={0.4} // Organic liquid distortion
            speed={1.5} // Speed of the distortion
            roughness={0.1}
            metalness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
      </Float>
    </group>
  );
}

function OrbitingSatellites() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Satellite 1 */}
      <Float speed={3} floatIntensity={2}>
        <Sphere args={[0.15, 32, 32]} position={[1.8, 0.5, 0]}>
          <meshPhysicalMaterial color="#E3D1B4" roughness={0.2} metalness={0.8} clearcoat={1} />
        </Sphere>
      </Float>
      {/* Satellite 2 */}
      <Float speed={2} floatIntensity={1.5}>
        <Sphere args={[0.08, 32, 32]} position={[-1.5, -0.8, 0.5]}>
          <meshPhysicalMaterial color="#5DC9A8" roughness={0.1} metalness={0.6} clearcoat={1} />
        </Sphere>
      </Float>
    </group>
  );
}

export default function OasisSphere() {
  return (
    <div className="w-full h-full absolute inset-0 -z-10 pointer-events-none overflow-visible">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]} style={{ overflow: 'visible' }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#5DC9A8" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#E3D1B4" />
        <directionalLight position={[0, -10, 0]} intensity={0.5} color="#152B23" />
        <Environment preset="city" />
        
        {/* Main Centerpiece */}
        <AnimatedSphere />
        
        {/* Orbiting Satellites */}
        <OrbitingSatellites />

        {/* Floating Ambient Particles */}
        <Sparkles 
          count={100} 
          scale={5} 
          size={2} 
          speed={0.4} 
          opacity={0.3} 
          color="#5DC9A8" 
        />
        <Sparkles 
          count={50} 
          scale={4} 
          size={1.5} 
          speed={0.2} 
          opacity={0.2} 
          color="#E3D1B4" 
        />
      </Canvas>
    </div>
  );
}
