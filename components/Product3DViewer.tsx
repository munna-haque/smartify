import React, { useRef, Suspense, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Define R3F elements as constants with 'any' type to bypass 
// missing JSX.IntrinsicElements definition in the current environment.
const Mesh = 'mesh' as any;
const BoxGeometry = 'boxGeometry' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Simple Error Boundary Component to catch texture loading errors
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("3D Viewer Error:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function Model({ imageUrl }: { imageUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  // useTexture will suspend if loading, or throw if failed
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

function FallbackModel() {
   const meshRef = useRef<THREE.Mesh>(null);
   useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Mesh ref={meshRef}>
        <BoxGeometry args={[2.5, 2.5, 2.5]} />
        <MeshStandardMaterial color="#AEE6F9" roughness={0.3} metalness={0.1} />
      </Mesh>
    </Float>
  );
}

function Loader() {
  return (
    <Mesh>
      <BoxGeometry args={[1, 1, 1]} />
      <MeshStandardMaterial color="#cbd5e1" wireframe />
    </Mesh>
  );
}

const Product3DViewer: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div className="w-full h-full cursor-move bg-transparent">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [0, 0, 5] }}>
        <Suspense fallback={<Loader />}>
          <ErrorBoundary fallback={<FallbackModel />}>
             <Stage environment="city" intensity={0.5} shadows={{ opacity: 0.4, blur: 2 }}>
               <Model imageUrl={imageUrl} />
             </Stage>
          </ErrorBoundary>
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Product3DViewer;