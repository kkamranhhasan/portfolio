"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { FiMoon, FiSun } from "react-icons/fi";
import { useActiveSection } from "@/hooks/useActiveSection";

import { useSound } from "@/hooks/useSound";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { playHover, playClick } = useSound();

  // Extract IDs from navItems (remove the '#' prefix) for the hook
  const sectionIds = navItems.map((item) => item.href.substring(1));
  const activeSectionId = useActiveSection(sectionIds);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-primary/80 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 cursor-pointer group"
          onMouseEnter={playHover}
          onClick={() => {
            playClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="font-signature text-2xl md:text-3xl text-white group-hover:text-highlight transition-colors duration-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
            Kamran Hasan
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-10 text-xs text-slate-300">
          {navItems.map((item) => {
            const isActive = activeSectionId === item.href.substring(1);
            return (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`relative tracking-[0.2em] uppercase transition-all duration-300 ${isActive ? "text-highlight font-bold" : "font-medium hover:text-slate-100"
                  }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-px bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </motion.a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-neon hover:scale-105 transition-transform"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}

