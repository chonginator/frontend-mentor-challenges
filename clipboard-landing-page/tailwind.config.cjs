/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
      colors: {
        white: "hsl(0, 0%, 95%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
        strongCyan: {
          100: "hsl(160, 64%, 72%, 50.33%)",
          300: "hsla(171, 66%, 44%, 74.65%)",
          500: "hsl(171, 66%, 44%)",
        },
        lightBlue: {
          300: "hsla(233, 100%, 69%, 75.12%)",
          500: "hsl(233, 100%, 69%)",
        },
      },
      screens: {
        xs: "375px",
        xl: "1440px",
      },
      borderRadius: {
        "3xl": "28px",
      },
      dropShadow: ({ theme }) => ({
        "strongCyan-xl": `0 10px 20px ${theme("colors.strongCyan.100")}`,
        "black-xl": `0 10px 20px rgba(0, 0, 0, 9.88%)`,
      }),
      boxShadow: {
        "button-inner": `inset 0 -3px 0 0 rgba(0, 0, 0, 15.13%)`,
      },
    },
  },
  plugins: [],
};
