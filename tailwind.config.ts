import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trust: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8", // Trust Blue
          800: "#1e40af",
          900: "#1e3a8a",
        },
        whatsapp: {
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#22c55e",
          600: "#16a34a", // WhatsApp Green
          700: "#15803d",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        devanagari: ["var(--font-noto-devanagari)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "subtle-drift": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "subtle-drift": "subtle-drift 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
