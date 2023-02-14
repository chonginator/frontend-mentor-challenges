/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
      fontSize: {
        28: "1.75rem",
        32: "2rem",
        46: "2.875rem",
      },
      boxShadow: {
        btnPrimary:
          "inset 0 -3px 0px rgb(0 0 0 / 0.15), 0 10px 20px rgb(137 229 199 / 0.5)",
        btnSecondary:
          "inset 0 -3px 0px rgb(0 0 0 / 0.15), 0 10px 20px rgb(0 0 0 / 0.1)",
      },
    },
    fontFamily: {
      sans: ["Bai Jamjuree", "sans-serif"],
    },
    letterSpacing: {
      wide: "0.0075em",
    },
  },
  plugins: [],
};
