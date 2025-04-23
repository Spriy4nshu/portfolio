'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import { PointLight, Mesh } from 'three';
import { useInView } from 'react-intersection-observer';

interface ParticleProps {
  position: [number, number, number];
  color: string;
  size?: number;
}

// Individual particle in the animation
function Particle({ position, color, size = 0.1 }: ParticleProps) {
  const mesh = useRef<Mesh>(null);

  // Animate each particle
  useFrame((state) => {
    if (!mesh.current) return;

    // Gentle floating motion unique to each particle's position
    mesh.current.position.y += Math.sin(state.clock.getElapsedTime() * 0.5 + position[0]) * 0.002;
    mesh.current.rotation.z = state.clock.getElapsedTime() * 0.1 + position[1];
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} toneMapped={false} />
    </mesh>
  );
}

// Main particle field
function ParticleField() {
  const particles = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (!particles.current) return;
    particles.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  // Generate particles in a sphere-like formation
  const particleCount = 50;
  const particleData = Array.from({ length: particleCount }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const radius = 1.5 + Math.random() * 2;
    const yPos = (Math.random() - 0.5) * 4;
    
    return {
      position: [
        Math.cos(angle) * radius,
        yPos,
        Math.sin(angle) * radius
      ] as [number, number, number],
      color: i % 3 === 0 ? '#0070f3' : i % 3 === 1 ? '#6a3fe4' : '#e73c7e',
      size: 0.05 + Math.random() * 0.1
    };
  });

  return (
    <group ref={particles}>
      {particleData.map((data, i) => (
        <Particle key={i} {...data} />
      ))}
    </group>
  );
}

function MovingLight() {
  const light = useRef<PointLight>(null);

  useFrame(({ clock }) => {
    if (!light.current) return;
    
    const time = clock.getElapsedTime();
    light.current.position.x = Math.sin(time * 0.6) * 3;
    light.current.position.z = Math.cos(time * 0.6) * 3;
  });

  return <pointLight ref={light} position={[3, 3, 3]} intensity={10} color="#ffffff" />;
}

export default function HeroCanvas() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="w-full h-[60vh] sm:h-[70vh]">
      {inView && (
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.2} />
          <MovingLight />
          <ParticleField />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      )}
    </div>
  );
}
