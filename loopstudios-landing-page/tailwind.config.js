/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image-mobile": "url('/src/assets/images/mobile/image-hero.jpg')",
        "hero-image-desktop":
          "url('/src/assets/images/desktop/image-hero.jpg')",
      },
      colors: {
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        body: ["Alata", "sans-serif"],
        heading: ["Josefin Sans", "sans-serif"],
      },
      fontSize: {
        base: "15px",
      },
    },
  },
  plugins: [],
};
