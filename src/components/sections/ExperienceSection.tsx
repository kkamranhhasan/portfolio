"use client";

import { motion } from "framer-motion";
import { useSound } from "@/hooks/useSound";

const EXPERIENCE_ITEMS = [
    {
        title: "AI Engineer & Data Scientist",
        company: "Freelance / Projects",
        period: "2023 – Present",
        description:
            "Developing machine learning models, data analysis pipelines, and intelligent web applications focused on futuristic and 3D experiences.",
        highlight: "Python · TensorFlow · Next.js"
    },
    {
        title: "Full-Stack Developer",
        company: "Self-Employed",
        period: "2021 – 2023",
        description:
            "Built immersive React applications and Next.js platforms focusing on performance and creative 3D integrations.",
        highlight: "React · TypeScript · Node.js"
    }
];

export function ExperienceSection() {
    const { playHover } = useSound();

    return (
        <section id="experience" className="section-padding relative">
            <div className="mx-auto max-w-6xl space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">
                        Professional Experience
                    </p>
                    <h2 className="mt-2 font-display text-2xl md:text-3xl lg:text-4xl text-white">
                        Applying <span className="text-accent">Intelligence</span> to solve{" "}
                        <span className="text-highlight">complex</span> problems.
                    </h2>
                </motion.div>

                <div className="relative mt-4">
                    <div className="absolute left-4 top-0 h-full w-[2px] bg-white/10 md:left-1/2" />

                    <div className="space-y-8">
                        {EXPERIENCE_ITEMS.map((item, idx) => {
                            const isLeft = idx % 2 === 0;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{
                                        duration: 0.7,
                                        ease: "easeOut",
                                        delay: idx * 0.05
                                    }}
                                    className="relative flex flex-col md:flex-row"
                                >
                                    <div
                                        className={`md:w-1/2 ${isLeft ? "md:pr-10 md:text-right" : "md:order-2 md:pl-10"
                                            }`}
                                    >
                                        <motion.div
                                            onMouseEnter={playHover}
                                            whileHover={{ scale: 1.02, rotateX: 2, rotateY: isLeft ? -2 : 2 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="glass-panel inline-block rounded-2xl p-6 w-full sm:w-auto"
                                            style={{ transformPerspective: 1000 }}
                                        >
                                            <div className="flex flex-col items-start gap-1">
                                                <div className={`flex w-full ${isLeft ? "md:justify-end" : "md:justify-start"} justify-between items-center gap-3`}>
                                                    <p className="text-[0.7rem] uppercase tracking-[0.26em] text-slate-400">
                                                        Experience
                                                    </p>
                                                    <span className="inline-flex items-center rounded-full bg-accent/20 border border-accent/40 px-3 py-1 text-[0.6rem] text-accent font-medium uppercase tracking-[0.1em]">
                                                        {item.period}
                                                    </span>
                                                </div>

                                                <h3 className={`mt-3 font-display text-base md:text-lg text-white font-bold w-full ${isLeft ? "md:text-right" : "md:text-left"} text-left`}>
                                                    {item.title}
                                                </h3>

                                                <p className={`text-xs text-slate-400 font-medium w-full ${isLeft ? "md:text-right" : "md:text-left"} text-left`}>
                                                    {item.company}
                                                </p>

                                                <p className={`mt-3 text-sm text-slate-300 w-full ${isLeft ? "md:text-right" : "md:text-left"} text-left leading-relaxed`}>
                                                    {item.description}
                                                </p>
                                                <p className={`mt-4 text-[0.65rem] uppercase tracking-[0.26em] text-highlight w-full ${isLeft ? "md:text-right" : "md:text-left"} text-left`}>
                                                    {item.highlight}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="absolute left-4 top-6 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary border border-white/20 md:left-1/2">
                                        <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
