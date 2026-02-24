import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        signature: ["var(--font-pacifico)", "cursive"]
      },
      colors: {
        background: "#0a0a0a",
        foreground: "#E5E7EB",
        primary: "#0F172A",
        secondary: "#111827",
        accent: "#2563EB",
        highlight: "#06B6D4"
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        "glass-hover": "0 8px 32px 0 rgba(37, 99, 235, 0.15)"
      },
      backgroundImage: {
        "grid": "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "radial-glass":
          "radial-gradient(circle at top, rgba(37,99,235,0.1), transparent 60%), radial-gradient(circle at bottom, rgba(6,182,212,0.05), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;

