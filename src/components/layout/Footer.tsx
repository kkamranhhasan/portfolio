"use client";

import { FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiArrowRight } from "react-icons/fi";
import { useSound } from "@/hooks/useSound";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { playHover, playClick } = useSound();

    return (
        <footer className="relative mt-20 border-t border-white/5 bg-primary/95 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 py-10 md:px-10 lg:px-20">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand/Bio */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">
                            Kamran <span className="text-highlight">Hasan</span>
                        </h3>
                        <p className="max-w-sm text-sm leading-relaxed text-slate-400 font-light">
                            Aspiring AI Engineer and Data Scientist crafting dynamic, intelligent, and visually stunning digital products. Focused on next-gen tech.
                        </p>
                        <div className="flex items-center gap-3 pt-2 text-slate-400">
                            <a
                                href="https://www.linkedin.com/in/kkamranhhasan"
                                target="_blank"
                                rel="noreferrer"
                                onClick={playClick}
                                onMouseEnter={playHover}
                                className="glass-panel flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:border-accent/40 hover:text-accent hover:scale-[1.05]"
                            >
                                <FiLinkedin className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.instagram.com/munshionik_"
                                target="_blank"
                                rel="noreferrer"
                                onClick={playClick}
                                onMouseEnter={playHover}
                                className="glass-panel flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:border-pink-500/40 hover:text-pink-500 hover:scale-[1.05]"
                            >
                                <FiInstagram className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.facebook.com/L2724O/"
                                target="_blank"
                                rel="noreferrer"
                                onClick={playClick}
                                onMouseEnter={playHover}
                                className="glass-panel flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:border-blue-500/40 hover:text-blue-500 hover:scale-[1.05]"
                            >
                                <FiFacebook className="h-4 w-4" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                onClick={playClick}
                                onMouseEnter={playHover}
                                className="glass-panel flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:border-white/20 hover:text-white hover:scale-[1.05]"
                            >
                                <FiGithub className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-500">
                            Navigation
                        </p>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li>
                                <a href="#about" onClick={playClick} onMouseEnter={playHover} className="hover:text-highlight transition-colors duration-300">About</a>
                            </li>
                            <li>
                                <a href="#skills" onClick={playClick} onMouseEnter={playHover} className="hover:text-highlight transition-colors duration-300">Skills</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={playClick} onMouseEnter={playHover} className="hover:text-highlight transition-colors duration-300">Projects</a>
                            </li>
                            <li>
                                <a href="#timeline" onClick={playClick} onMouseEnter={playHover} className="hover:text-highlight transition-colors duration-300">Education</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-500">
                            Contact
                        </p>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="cursor-default transition-colors duration-300 hover:text-white">Fularpar, Muksudpur, Gopalgonj</li>
                            <li className="cursor-default transition-colors duration-300 hover:text-white">Dhaka, Bangladesh</li>
                            <li>
                                <a href="mailto:kkamranhhasan@gmail.com" onClick={playClick} onMouseEnter={playHover} className="hover:text-highlight transition-colors duration-300 inline-flex items-center gap-2 group">
                                    kkamranhhasan@gmail.com
                                    <FiArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-center border-t border-white/5 pt-8 text-xs text-slate-500 font-medium">
                    <p>© {currentYear} Kamran Hasan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
