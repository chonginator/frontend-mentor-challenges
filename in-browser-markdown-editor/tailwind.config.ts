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
        gray: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(0, 0%, 96%)",
          300: "hsl(0, 0%, 89%)",
          400: "hsl(222, 9%, 78%)",
          500: "hsl(213, 4%, 51%)",
          600: "hsl(216, 8%, 38%)",
          700: "hsl(216, 9%, 23%)",
          800: "hsl(220, 7%, 18%)",
          900: "hsl(216, 8%, 12%)",
          1000: "hsl(225, 9%, 9%)",
        },
        orange: {
          400: "hsl(21, 86%, 67%)",
          600: "hsl(13, 75%, 58%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
        serif: ["var(--font-roboto-slab)"],
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
