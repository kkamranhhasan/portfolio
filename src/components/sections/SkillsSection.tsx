"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere } from "@react-three/drei";

const SKILL_GROUPS = [
  {
    title: "AI & Data Science",
    skills: [
      { name: "Machine Learning / Deep Learning", level: 90 },
      { name: "Data Analysis & Visualization", level: 88 },
      { name: "Python / Pandas / NumPy", level: 92 },
      { name: "TensorFlow / PyTorch", level: 85 }
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript / TypeScript", level: 88 },
      { name: "C++", level: 80 }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "React Three Fiber", level: 85 },
      { name: "Tailwind CSS", level: 92 }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "Jupyter Notebooks", level: 90 }
    ]
  }
];

const ORBIT_SKILLS = [
  { label: "Python", color: "#3B82F6", radius: 2.8, speed: 1.1 },
  { label: "PyTorch", color: "#2563EB", radius: 3.6, speed: 0.9 },
  { label: "React", color: "#06B6D4", radius: 4.4, speed: 1.3 },
  { label: "TensorFlow", color: "#64748B", radius: 5.0, speed: 1.0 },
  { label: "Next.js", color: "#FFFFFF", radius: 5.6, speed: 1.2 }
];

function SkillOrbit() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} />
      <directionalLight position={[-4, -4, -2]} intensity={0.6} />

      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.9}>
        <Sphere args={[1.3, 64, 64]}>
          <meshStandardMaterial
            color="#0F172A"
            metalness={0.8}
            roughness={0.15}
            envMapIntensity={1.2}
          />
        </Sphere>
      </Float>

      {ORBIT_SKILLS.map((skill, index) => (
        <Float
          key={skill.label}
          speed={skill.speed}
          rotationIntensity={1}
          floatIntensity={1.3}
        >
          <mesh
            position={[
              Math.cos(index) * skill.radius,
              Math.sin(index * 1.1) * 0.9,
              Math.sin(index) * skill.radius
            ]}
          >
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshStandardMaterial
              color={skill.color}
              emissive={skill.color}
              emissiveIntensity={1.4}
            />
          </mesh>
        </Float>
      ))}

      <OrbitControls enableZoom={false} enablePan={false} autoRotate />
    </>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-5 lg:w-1/2"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-highlight font-semibold">
            Skills
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-white">
            A stack designed for{" "}
            <span className="text-highlight">intelligence</span> and{" "}
            <span className="text-accent">high-performance</span>.
          </h2>

          <div className="space-y-5">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="space-y-3 group">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-300 transition-colors">
                  {group.title}
                </p>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span>{skill.name}</span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800/80">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-accent via-highlight to-white shadow-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="lg:w-1/2"
        >
          <div className="glass-panel relative mx-auto h-72 w-full max-w-md overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/80">
            <Canvas
              className="h-full w-full"
              camera={{ position: [0, 0, 10], fov: 50 }}
            >
              <SkillOrbit />
            </Canvas>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-950/60" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-center text-[0.7rem] uppercase tracking-[0.25em] text-slate-400">
              React · Next.js · Three.js · TypeScript · Tailwind CSS
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

