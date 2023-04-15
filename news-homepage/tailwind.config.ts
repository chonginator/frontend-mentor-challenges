import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        white: "hsl(36, 100%, 99%)",
        black: "hsl(240, 100%, 5%)",
        gray: "hsl(236, 8%, 79%)",
        darkGray: "hsl(237, 13%, 42%)",
        orange: "hsl(5, 85%, 63%)",
        yellow: "hsl(35%, 78%, 62%)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: ["0.9375rem", "1.625rem"],
        xs: ["1.125rem", "1.5rem"],
        sm: ["1.25rem", "1.5rem"],
        md: ["2rem", "2rem"],
        lg: ["2.5rem", "2.5rem"],
        xl: ["3.5rem", "3.5rem"],
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in-out",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
