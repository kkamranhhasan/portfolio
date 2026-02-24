"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const stats = [
  { label: "Projects Delivered", value: 25, accent: "text-cyan-300" },
  { label: "Satisfied Clients", value: 12, accent: "text-purple-300" },
  { label: "Years Experience", value: 4, accent: "text-pink-300" }
];

export function AboutSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -10;
    const rotateY = (x - 0.5) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-5 md:w-1/2"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            About Me
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-slate-50">
            Driven by <span className="text-cyan-300">Data</span> and{" "}
            <span className="text-purple-300">Intelligence</span>.
          </h2>
          <p className="text-sm md:text-base text-slate-300/90 leading-relaxed">
            I am Kamran Hasan, an aspiring AI Engineer and Data Scientist from Bangladesh, currently studying Computer Science and Engineering. I am passionate about Artificial Intelligence, Data Science, and futuristic 3D web technologies.
          </p>
          <p className="text-sm md:text-base text-slate-300/90 leading-relaxed">
            I love building dynamic, interactive, and visually stunning digital experiences using modern technologies. My focus spans from developing complex data models to building the interactive frontends that showcase them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="md:w-1/2 flex justify-center"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            className="relative w-full max-w-sm cursor-pointer lg:max-w-md perspective-1000"
            style={{ perspective: "1000px" }}
          >
            <div
              className="glass-panel relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-neon will-change-transform"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
                transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.5s ease-out" : "none"
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_60%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.18),transparent_55%)]" />

              <div className="relative mb-6 space-y-4">
                <div className="inline-block rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-cyan-300">
                  Profile Card
                </div>

                <h3 className="font-display text-2xl font-bold text-slate-50 mb-1">Kamran Hasan</h3>
                <p className="text-sm font-medium text-purple-300 pb-2 border-b border-slate-700/50">AI Engineer & Data Scientist</p>

                <ul className="space-y-3 pt-2 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="w-24 text-slate-400">Country:</span> Bangladesh
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="w-24 text-slate-400">Religion:</span> Islam
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    <span className="w-24 text-slate-400">Blood Group:</span> A+
                  </li>
                </ul>
              </div>

              <div className="relative mt-auto grid grid-cols-3 gap-3 border-t border-slate-700/50 pt-5 text-center text-xs text-slate-200">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center rounded-2xl bg-slate-900/80 p-2 border border-slate-700/80 transition-colors hover:border-slate-500/80 hover:bg-slate-800/80"
                  >
                    <p className={`text-xl font-bold ${stat.accent}`}>
                      {stat.value}+
                    </p>
                    <p className="mt-1 text-[0.6rem] uppercase tracking-[0.1em] text-slate-400 text-balance leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

