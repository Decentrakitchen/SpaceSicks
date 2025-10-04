import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleFieldProps {
  className?: string;
}

const Particles: React.FC = () => {
  const ref = useRef<THREE.Points>(null!);
  
  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(5000);
    for (let i = 0; i < 5000; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#64b5f6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const ParticleField: React.FC<ParticleFieldProps> = ({ className = '' }) => {
  return (
    <div className={`fixed inset-0 z-0 ${className}`}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleField;
