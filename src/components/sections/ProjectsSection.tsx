"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useSound } from "@/hooks/useSound";

type ProjectCategory = "all" | "web" | "3d" | "dashboard" | "landing";

const PROJECTS = [
  {
    title: "Immersive 3D Portfolio",
    description:
      "WebGL-powered personal brand experience with dynamic lighting, particles, and smooth page transitions.",
    tech: ["Next.js", "React Three Fiber", "Framer Motion"],
    category: "3d" as ProjectCategory,
    preview: "/images/projects/portfolio-3d.jpg"
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Realtime metrics, custom charts, and role-based access on a scalable architecture.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "dashboard" as ProjectCategory,
    preview: "/images/projects/saas-dashboard.jpg"
  },
  {
    title: "Futuristic Landing Page",
    description:
      "Conversion-focused launch page with neon gradients, 3D hero, and scroll-triggered animations.",
    tech: ["Next.js", "GSAP", "Framer Motion"],
    category: "landing" as ProjectCategory,
    preview: "/images/projects/futuristic-landing.jpg"
  },
  {
    title: "E-commerce Experience",
    description:
      "High-end storefront with product 3D previews, smooth filtering, and modern UX.",
    tech: ["Next.js", "React", "Stripe"],
    category: "web" as ProjectCategory,
    preview: "/images/projects/ecommerce.jpg"
  }
];

const FILTERS: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "3D Experiences", value: "3d" },
  { label: "Web Apps", value: "web" },
  { label: "Dashboards", value: "dashboard" },
  { label: "Landing Pages", value: "landing" }
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const { playHover, playClick } = useSound();

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    card: HTMLDivElement | null
  ) => {
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -8;
    const rotateY = (x - 0.5) * 8;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const resetTilt = (card: HTMLDivElement | null) => {
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-6xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-highlight font-semibold">
              Projects
            </p>
            <h2 className="mt-2 font-display text-2xl md:text-3xl lg:text-4xl text-white">
              Selected work that blends{" "}
              <span className="text-highlight">engineering</span> and{" "}
              <span className="text-accent">visual storytelling</span>.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {FILTERS.map((filter) => {
              const isActive = filter.value === activeFilter;
              return (
                <button
                  key={filter.value}
                  onClick={() => {
                    playClick();
                    setActiveFilter(filter.value);
                  }}
                  onMouseEnter={playHover}
                  className={`rounded-full border px-4 py-2 uppercase tracking-[0.22em] transition-all duration-300 ease-in-out ${isActive
                      ? "border-highlight bg-highlight/10 text-highlight font-medium shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                      : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white"
                    }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: idx * 0.05
              }}
            >
              <div
                className="glass-panel group relative h-full overflow-hidden rounded-3xl"
                ref={(node) => {
                  // nothing, tilting handled per event
                }}
                onMouseMove={(e) =>
                  handleMouseMove(
                    e,
                    e.currentTarget as unknown as HTMLDivElement
                  )
                }
                onMouseLeave={(e) =>
                  resetTilt(e.currentTarget as unknown as HTMLDivElement)
                }
              >
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary/90">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.2),transparent_60%),_radial-gradient(circle_at_bottom,_rgba(6,182,212,0.1),transparent_55%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-soft-light" />
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-highlight/40 bg-highlight/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-highlight font-medium">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-[0.65rem] text-slate-300">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 border border-white/5 px-2 py-1 uppercase tracking-[0.22em]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-2 text-xs">
                    <a
                      href="#"
                      onClick={playClick}
                      onMouseEnter={playHover}
                      className="rounded-full border border-accent/70 bg-accent/20 px-4 py-2 uppercase tracking-[0.22em] text-accent font-medium hover:bg-accent/40 transition-all duration-300"
                    >
                      Live Demo
                    </a>
                    <a
                      href="#"
                      onClick={playClick}
                      onMouseEnter={playHover}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 uppercase tracking-[0.22em] text-slate-300 hover:border-white/20 hover:text-white transition-all duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

