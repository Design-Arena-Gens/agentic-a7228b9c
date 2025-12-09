import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1A35",
        electric: "#2A7FFF",
        blaze: "#FF6B35"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Poppins", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
