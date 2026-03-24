import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary-rgb) / <alpha-value>)",
        "primary-on-bg": "var(--primary-on-bg)",
        "accent-red": "rgb(var(--accent-red-rgb) / <alpha-value>)",
        "accent-green": "rgb(var(--accent-green-rgb) / <alpha-value>)",
        surface: {
          deepest: "var(--surface-deepest)",
          panel: "var(--surface-panel)",
          card: "var(--surface-card)",
        },
        background: "rgb(var(--background-rgb) / <alpha-value>)",
        foreground: "var(--foreground)",
        heading: "var(--heading)",
        muted: "var(--text-muted)",
        subtle: "var(--text-subtle)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgb(var(--primary-rgb) / 0.3)" },
          "50%": { boxShadow: "0 0 40px rgb(var(--primary-rgb) / 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-green": {
          "0%, 100%": {
            boxShadow: "0 0 10px rgb(var(--accent-green-rgb) / 0.4)",
          },
          "50%": {
            boxShadow: "0 0 25px rgb(var(--accent-green-rgb) / 0.7)",
          },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "blob-morph-1": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1) rotate(0deg)",
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          },
          "33%": {
            transform: "translate(30px, -20px) scale(1.1) rotate(120deg)",
            borderRadius: "70% 30% 50% 50% / 30% 30% 70% 70%",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9) rotate(240deg)",
            borderRadius: "50% 60% 30% 70% / 60% 40% 60% 40%",
          },
        },
        "blob-morph-2": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1) rotate(0deg)",
            borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%",
          },
          "33%": {
            transform: "translate(-30px, 15px) scale(1.15) rotate(-120deg)",
            borderRadius: "30% 60% 70% 40% / 50% 30% 60% 70%",
          },
          "66%": {
            transform: "translate(15px, -25px) scale(0.85) rotate(-240deg)",
            borderRadius: "70% 50% 40% 60% / 40% 70% 30% 60%",
          },
        },
        "blob-morph-3": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
          },
          "50%": {
            transform: "translate(20px, -15px) scale(1.1)",
            borderRadius: "60% 40% 60% 40% / 40% 60% 40% 60%",
          },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "pulse-green": "pulse-green 2s ease-in-out infinite",
        ticker: "ticker 30s linear infinite",
        "blob-1": "blob-morph-1 12s ease-in-out infinite",
        "blob-2": "blob-morph-2 15s ease-in-out infinite",
        "blob-3": "blob-morph-3 10s ease-in-out infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".glass": {
          "backdrop-filter": "blur(16px)",
          "-webkit-backdrop-filter": "blur(16px)",
          "background-color": "var(--glass-bg)",
          border: "1px solid var(--glass-border)",
        },
        ".glass-strong": {
          "backdrop-filter": "blur(24px)",
          "-webkit-backdrop-filter": "blur(24px)",
          "background-color": "var(--glass-bg-strong)",
          border: "1px solid var(--glass-border-strong)",
        },
        ".border-subtle": {
          "border-color": "var(--border-subtle)",
        },
        ".border-default-theme": {
          "border-color": "var(--border-default)",
        },
        ".bg-tint": {
          "background-color": "var(--overlay-tint)",
        },
        ".bg-tint-hover": {
          "background-color": "var(--overlay-tint-hover)",
        },
      });
    }),
  ],
};
export default config;
