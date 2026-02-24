"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiArrowRight } from "react-icons/fi";
import { useSound } from "@/hooks/useSound";

const TAGLINES = [
  "AI Engineer & Data Scientist",
  "Computer Science Student",
  "3D Web & WebGL Enthusiast",
  "Building Futuristic Experiences"
];

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeout: number;
    const current = words[index % words.length];

    if (displayed.length < current.length) {
      timeout = window.setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, speed);
    } else {
      timeout = window.setTimeout(() => {
        setDisplayed("");
        setIndex((i) => (i + 1) % words.length);
      }, pause);
    }

    return () => window.clearTimeout(timeout);
  }, [displayed, index, words, speed, pause]);

  return displayed;
}

export function HeroSection() {
  const typed = useTypewriter(TAGLINES);
  const { playHover, playClick } = useSound();

  useEffect(() => {
    let ctx: any;
    if (typeof window === "undefined") return;

    import("gsap").then((mod) => {
      const gsapInstance = (mod as any).gsap ?? (mod as any).default;
      if (!gsapInstance) return;

      ctx = gsapInstance.context(() => {
        gsapInstance.from("[data-hero-glow]", {
          opacity: 0,
          y: 30,
          scale: 0.96,
          duration: 1,
          ease: "power3.out",
          delay: 0.15
        });
      });
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      className="section-padding relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-10 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl space-y-6"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-highlight font-semibold">
            Based in Dhaka, Bangladesh · Available Worldwide
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-md">
            Kamran <span className="text-highlight">Hasan</span>
          </h1>

          <div className="text-sm md:text-base text-slate-400">
            <span className="mr-2">I&apos;m an</span>
            <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1 text-highlight shadow-sm">
              {typed || "\u00A0"}
              <span className="ml-1 inline-block h-4 w-[1px] animate-pulse bg-highlight" />
            </span>
          </div>

          <p className="max-w-lg text-sm md:text-base text-slate-300 leading-relaxed font-light">
            I am Kamran Hasan, an aspiring AI Engineer and Data Scientist from Bangladesh, focused on Artificial Intelligence, Data Science, and modern 3D interactive web technologies. I build intelligent, dynamic, and professional digital experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2">
            <motion.a
              href="#contact"
              onClick={playClick}
              onMouseEnter={playHover}
              whileTap={{ scale: 0.96 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-7 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-accent/90 shadow-glass"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.a>
            <motion.a
              href="#projects"
              onClick={playClick}
              onMouseEnter={playHover}
              whileTap={{ scale: 0.96 }}
              className="glass-panel inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-slate-200 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:text-white"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/cv.pdf"
              download="Kamran_Hasan_CV.pdf"
              onClick={playClick}
              onMouseEnter={playHover}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full border border-highlight/40 bg-highlight/10 px-6 py-3 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-highlight hover:bg-highlight/20 transition-all duration-300 ease-in-out hover:scale-[1.03]"
            >
              Download CV
            </motion.a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <span className="text-xs uppercase tracking-[0.28em] text-slate-500 font-medium">
              Connect
            </span>
            <div className="flex items-center gap-3 text-slate-300">
              <a
                href="https://www.linkedin.com/in/kkamranhhasan"
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="glass-panel flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:scale-[1.05] hover:text-accent hover:border-accent/40"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/munshionik_"
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="glass-panel flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:scale-[1.05] hover:text-pink-500 hover:border-pink-500/40"
              >
                <FiInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/L2724O/"
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="glass-panel flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:scale-[1.05] hover:text-blue-500 hover:border-blue-500/40"
              >
                <FiFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="glass-panel flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:scale-[1.05] hover:text-white hover:border-white/40"
              >
                <FiGithub className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="mt-6 flex w-full max-w-sm flex-col items-center gap-8 md:mt-0 md:max-w-md"
          data-hero-glow
        >
          {/* Profile Picture Wrapper */}
          <div className="relative h-64 w-64 md:h-72 md:w-72 rounded-full p-2 glass-panel shadow-neon group cursor-pointer">
            <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border-t-2 border-r-2 border-cyan-400/50" />
            <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse] rounded-full border-b-2 border-l-2 border-purple-500/50" />

            <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-800">
              <img
                src="/profile.jpg"
                alt="Kamran Hasan Profile"
                className="h-full w-full object-cover mix-blend-luminosity opacity-80 transition-all duration-500 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="glass-panel relative w-full overflow-hidden rounded-3xl border border-slate-700/70 p-[1px]">
            <div className="relative rounded-[1.4rem] bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/90 p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_60%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.16),transparent_55%)]" />
              <div className="relative space-y-4">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400 text-center">
                  3D Interactive Portfolio
                </p>
                <div className="grid grid-cols-3 gap-4 text-center text-xs text-slate-200">
                  <div className="rounded-2xl bg-slate-900/70 p-3 border border-slate-700/70">
                    <p className="text-lg font-semibold text-cyan-300">15+</p>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                      Projects
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/70 p-3 border border-slate-700/70">
                    <p className="text-lg font-semibold text-purple-300">4+</p>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                      Years
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/70 p-3 border border-slate-700/70">
                    <p className="text-lg font-semibold text-pink-300">100%</p>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                      Remote
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

