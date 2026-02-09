/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'Space Grotesk'", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0f172a",
        accent: "#7c3aed",
        emerald: "#22c55e",
        amber: "#fbbf24",
        mist: "#e2e8f0",
      },
      boxShadow: {
        glow: "0 20px 60px rgba(124, 58, 237, 0.25)",
      },
      backgroundImage: {
        "grid-light":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
