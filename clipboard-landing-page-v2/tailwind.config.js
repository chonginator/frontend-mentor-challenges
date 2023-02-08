/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      strongCyan: "hsl(171, 66%, 44%)",
      lightBlue: "hsl(233, 100%, 69%)",
      darkGrayishBlue: "hsl(210, 10%, 33%)",
      grayishBlue: "hsl(201, 11%, 66%)",
    },
    fontFamily: {
      sans: ["Bai Jamjuree", "sans-serif"],
    },
    fontSize: {
      "3xl": "1.75rem",
      "5xl": "2.875rem",
    },
  },
  plugins: [],
};
