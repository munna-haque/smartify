
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Define R3F elements as constants with 'any' type to bypass 
// missing JSX.IntrinsicElements definition in the current environment.
const Mesh = 'mesh' as any;
const BoxGeometry = 'boxGeometry' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;

function Model({ imageUrl }: { imageUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(imageUrl);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Mesh ref={meshRef}>
        {/* Render a rounded box as the product representation */}
        <BoxGeometry args={[2.5, 2.5, 2.5]} />
        <MeshStandardMaterial map={texture} roughness={0.3} metalness={0.1} />
      </Mesh>
    </Float>
  );
}

function Loader() {
  return (
    <Mesh>
      <BoxGeometry args={[1, 1, 1]} />
      <MeshStandardMaterial color="#AEE6F9" wireframe />
    </Mesh>
  );
}

const Product3DViewer: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div className="w-full h-full cursor-move bg-transparent">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [0, 0, 5] }}>
        <Suspense fallback={<Loader />}>
          <Stage environment="city" intensity={0.5} contactShadow={{ opacity: 0.4, blur: 2 }}>
            <Model imageUrl={imageUrl} />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Product3DViewer;
