import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0369a1",
      dark: "#1f2937",
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c3d66",
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
      cyan: {
        50: "#ecf9fc",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
    extend: {
      fontSize: {
        hero: "clamp(2.5rem, 5vw, 4rem)",
      },
      animation: {
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "rotate-slow": "rotate 20s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        "pulse-wave": "pulseWave 2s ease-out infinite",
      },
      keyframes: {
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        heartbeat: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.1)",
          },
          "50%": {
            transform: "scale(1)",
          },
        },
        pulseWave: {
          "0%": {
            boxShadow: "0 0 0 0 rgba(3, 105, 161, 0.7)",
          },
          "70%": {
            boxShadow: "0 0 0 30px rgba(3, 105, 161, 0)",
          },
          "100%": {
            boxShadow: "0 0 0 0 rgba(3, 105, 161, 0)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
