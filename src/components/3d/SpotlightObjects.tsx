"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Torus, Icosahedron, Cylinder, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function TimeRingsInner() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <group ref={groupRef}>
        <Torus args={[1.5, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshPhysicalMaterial color="#5DC9A8" metalness={0.8} roughness={0.2} clearcoat={1} />
        </Torus>
        <Torus args={[1.0, 0.08, 16, 100]} rotation={[0, Math.PI / 4, 0]}>
          <meshPhysicalMaterial color="#E3D1B4" metalness={0.9} roughness={0.1} clearcoat={1} />
        </Torus>
        <Torus args={[0.5, 0.1, 16, 100]} rotation={[0, 0, Math.PI / 3]}>
          <meshPhysicalMaterial color="#5DC9A8" metalness={0.5} roughness={0.5} />
        </Torus>
      </group>
    </Float>
  );
}

export function TimeRings() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#5DC9A8" />
      <Environment preset="city" />
      <TimeRingsInner />
    </Canvas>
  );
}

function QuantumLockInner() {
  const coreRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coreRef.current && wireRef.current) {
      coreRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      wireRef.current.rotation.x = state.clock.getElapsedTime() * -0.2;
      wireRef.current.rotation.z = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.2} floatIntensity={1}>
      <Icosahedron ref={coreRef} args={[1, 1]}>
        <MeshDistortMaterial color="#152B23" distort={0.2} speed={2} roughness={0.1} metalness={0.8} />
      </Icosahedron>
      <Icosahedron ref={wireRef} args={[1.3, 1]}>
        <meshBasicMaterial color="#5DC9A8" wireframe transparent opacity={0.3} />
      </Icosahedron>
    </Float>
  );
}

export function QuantumLock() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={2} color="#5DC9A8" />
      <Environment preset="city" />
      <QuantumLockInner />
    </Canvas>
  );
}

function TimeCapsuleInner() {
  const capsuleRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (capsuleRef.current) {
      capsuleRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      capsuleRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
      <group ref={capsuleRef} rotation={[0.4, 0, 0.2]}>
        {/* Top half */}
        <Cylinder args={[0.5, 0.5, 1, 32]} position={[0, 0.5, 0]}>
          <meshPhysicalMaterial color="#5DC9A8" metalness={0.6} roughness={0.2} transmission={0.5} thickness={0.5} />
        </Cylinder>
        {/* Bottom half */}
        <Cylinder args={[0.5, 0.5, 1, 32]} position={[0, -0.5, 0]}>
          <meshPhysicalMaterial color="#E3D1B4" metalness={0.8} roughness={0.1} />
        </Cylinder>
        {/* Connecting ring */}
        <Torus args={[0.51, 0.05, 16, 32]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshPhysicalMaterial color="#152B23" metalness={0.9} roughness={0.1} />
        </Torus>
      </group>
    </Float>
  );
}

export function TimeCapsule() {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} className="w-full h-full">
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#E3D1B4" />
      <directionalLight position={[-5, -10, -5]} intensity={0.5} color="#5DC9A8" />
      <Environment preset="city" />
      <TimeCapsuleInner />
    </Canvas>
  );
}
