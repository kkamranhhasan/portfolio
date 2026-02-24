"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  PerspectiveCamera,
  Stars,
  Text
} from "@react-three/drei";
import { Suspense, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function FloatingOrb({ color, position }: { color: string; position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          metalness={0.4}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const positions = useMemo(() => {
    const points = [];
    for (let i = 0; i < 400; i++) {
      const x = (Math.random() - 0.5) * 18;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 14;
      points.push(x, y, z);
    }
    return new Float32Array(points);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#38bdf8"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.6}
      />
    </points>
  );
}

export function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Canvas gl={{ antialias: true }} dpr={isMobile ? 1 : [1, 2]}>
        <color attach="background" args={["#020617"]} />
        <fog attach="fog" args={["#020617", 10, 28]} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[6, 8, 4]}
          intensity={1.4}
          color={"#60a5fa"}
        />
        <directionalLight
          position={[-6, -6, -4]}
          intensity={1.0}
          color={"#f472b6"}
        />

        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={52} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={!isMobile}
          autoRotateSpeed={0.7}
        />

        <Suspense fallback={null}>
          {!isMobile && (
            <Stars radius={60} depth={40} count={4000} factor={3} fade />
          )}
          {!isMobile && <ParticleField />}
          <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.4}>
            <Text
              position={[0, 1.2, 0]}
              fontSize={1.2}
              color="#e5e7eb"
              letterSpacing={0.08}
              anchorX="center"
              anchorY="middle"
            >
              KAMRAN HASAN
            </Text>
          </Float>
          <FloatingOrb color="#38bdf8" position={[-3.4, 1.6, 0]} />
          <FloatingOrb color="#a855f7" position={[3.2, -1.2, -1.5]} />
          <FloatingOrb color="#ec4899" position={[0.2, -2.2, 1.6]} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}

