"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend, FiMapPin, FiPhone, FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";
import { useSound } from "@/hooks/useSound";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");
  const { playHover, playClick } = useSound();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    playClick();
    const form = e.currentTarget;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setMessage("Email service is not configured. Please try again later.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      await emailjs.sendForm(serviceId, templateId, form, publicKey);
      setStatus("success");
      setMessage("Message sent successfully. I will get back to you soon.");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Something went wrong. Please reach out via LinkedIn or WhatsApp.");
    }
  };

  return (
    <section id="contact" className="section-padding relative">
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
              Contact
            </p>
            <h2 className="mt-2 font-display text-2xl md:text-3xl lg:text-4xl text-white">
              Let&apos;s build something{" "}
              <span className="text-highlight">remarkable</span> together.
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base text-slate-400 font-light">
              Share a brief about your idea, timeline, and scope. I&apos;ll reply with
              possibilities, timelines, and a clear plan to move forward.
            </p>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <p className="flex items-center gap-3 text-slate-300">
              <FiMapPin className="h-5 w-5 text-highlight" />
              <span>Bangladesh, Dhaka, Gopalgonj, Muksudpur, Fularpar</span>
            </p>
            <p className="flex items-center gap-3 pb-2 text-slate-300">
              <FiPhone className="h-5 w-5 text-emerald-500" />
              <span>+880 1743-307872</span>
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <a
                href="https://wa.me/8801743307872"
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-emerald-500 hover:scale-[1.03] shadow-glass"
              >
                <FiPhone className="h-4 w-4" />
                WhatsApp
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <a
                  href="https://www.linkedin.com/in/kkamranhhasan"
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="glass-panel flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-accent hover:border-accent/40 hover:scale-[1.05]"
                >
                  <FiLinkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/munshionik_"
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="glass-panel flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-pink-500 hover:border-pink-500/40 hover:scale-[1.05]"
                >
                  <FiInstagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/L2724O/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="glass-panel flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-blue-500 hover:border-blue-500/40 hover:scale-[1.05]"
                >
                  <FiFacebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-panel space-y-4 rounded-3xl p-6 md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="user_name"
                  required
                  className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-highlight/50 focus:bg-white/10"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-highlight/50 focus:bg-white/10"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="subject"
                className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-400"
              >
                Project Type
              </label>
              <input
                id="subject"
                name="subject"
                className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-highlight/50 focus:bg-white/10"
                placeholder="3D portfolio, SaaS dashboard, landing page…"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-400"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-highlight/50 focus:bg-white/10 resize-none"
                placeholder="Share your goals, timeline, and any reference links."
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
              <button
                type="submit"
                onMouseEnter={playHover}
                disabled={status === "loading"}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-primary disabled:opacity-60 shadow-glass"
              >
                <FiSend className="h-4 w-4" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {message && (
                <p
                  className={`text-xs w-full sm:w-auto text-center sm:text-right font-medium ${status === "success" ? "text-emerald-400" : "text-red-400"
                    }`}
                >
                  {message}
                </p>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-4 text-sm text-slate-300 h-full"
          >
            <div className="glass-panel w-full grow overflow-hidden rounded-3xl p-1 relative min-h-[250px] md:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117466.52985160867!2d89.8735398!3d23.2355523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37557be2bc0c5067%3A0xc4b786f1e2f759c5!2sMuksudpur%20Upazila!5e0!3m2!1sen!2sbd!4v1715694380635!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1.2rem", filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%) grayscale(40%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="absolute inset-0"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:kkamranhhasan@gmail.com"
                onClick={playClick}
                onMouseEnter={playHover}
                className="glass-panel flex flex-1 items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-300 transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:text-white"
              >
                <FiSend className="h-4 w-4" />
                Email Me
              </a>
              <a
                href="https://wa.me/8801743307872"
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="glass-panel flex flex-1 items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-500 transition-all duration-300 hover:scale-[1.03] hover:border-emerald-500/30 hover:bg-emerald-500/10"
              >
                <FiPhone className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

