/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Alata", "sans-serif"],
        heading: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};
