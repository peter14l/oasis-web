"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Octahedron, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function PricingGemInner() {
  const gemRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gemRef.current) {
      gemRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      gemRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    }
    
    if (groupRef.current) {
      const targetX = state.pointer.x * 0.3;
      const targetY = state.pointer.y * 0.3;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
        <Octahedron ref={gemRef} args={[1.5, 0]}>
          <meshPhysicalMaterial 
            color="#5DC9A8" 
            metalness={0.9} 
            roughness={0.1} 
            clearcoat={1} 
            clearcoatRoughness={0.1}
            transmission={0.8}
            thickness={0.5}
          />
        </Octahedron>
        <Sparkles count={30} scale={3} size={2} color="#E3D1B4" opacity={0.5} />
      </Float>
    </group>
  );
}

export function PricingGem() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={2} color="#E3D1B4" />
        <Environment preset="city" />
        <PricingGemInner />
      </Canvas>
    </div>
  );
}

function BuilderCoreInner() {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (coreRef.current && outerRef.current) {
      coreRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      coreRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
      outerRef.current.rotation.x = state.clock.getElapsedTime() * -0.1;
      outerRef.current.rotation.y = state.clock.getElapsedTime() * -0.15;
    }

    if (groupRef.current) {
      const targetX = state.pointer.x * 0.2;
      const targetY = state.pointer.y * 0.2;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={1}>
        <mesh ref={coreRef}>
          <octahedronGeometry args={[1.5, 2]} />
          <MeshDistortMaterial color="#152B23" distort={0.3} speed={1} roughness={0.4} metalness={0.8} />
        </mesh>
        <mesh ref={outerRef}>
          <octahedronGeometry args={[2.5, 1]} />
          <meshBasicMaterial color="#E3D1B4" wireframe transparent opacity={0.15} />
        </mesh>
      </Float>
    </group>
  );
}

export function BuilderCore() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#5DC9A8" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#E3D1B4" />
        <Environment preset="city" />
        <BuilderCoreInner />
      </Canvas>
    </div>
  );
}
