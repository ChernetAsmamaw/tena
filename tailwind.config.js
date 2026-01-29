/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a", 
        secondary: "#eab308",
        background: "#f8fafc",
        surface: "#ffffff",
        text: "#0f172a",
        textLight: "#64748b",
      },
    },
  },
  plugins: [],
};
