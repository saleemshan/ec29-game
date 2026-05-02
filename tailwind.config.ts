import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070A1A",
          900: "#0B1027",
          800: "#111733",
          700: "#1A2347",
        },
        gold: {
          400: "#FFD66B",
          500: "#FFC23C",
          600: "#E8A41A",
          700: "#B97D0F",
        },
        crimson: {
          500: "#FF3B5C",
          600: "#E61E45",
        },
        emerald: {
          500: "#10B981",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(255, 194, 60, 0.55)",
        gold: "0 10px 30px -10px rgba(255, 194, 60, 0.6)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse at top, rgba(255,194,60,0.18), transparent 60%), radial-gradient(ellipse at bottom, rgba(255,59,92,0.16), transparent 55%)",
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
