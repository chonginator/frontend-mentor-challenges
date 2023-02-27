/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/assets/images/mobile/image-hero.jpg')",
        "hero-desktop": "url('/assets/images/desktop/image-hero.jpg')",
        "project-gradient-overlay-mobile":
          "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.0001))",
        "project-gradient-overlay-desktop":
          "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
        "project-deep-earth-mobile":
          "url('/assets/images/mobile/image-deep-earth.jpg')",
        "project-deep-earth-desktop":
          "url('/assets/images/desktop/image-deep-earth.jpg')",
        "project-night-arcade-mobile":
          "url('/assets/images/mobile/image-night-arcade.jpg')",
        "project-night-arcade-desktop":
          "url('/assets/images/desktop/image-night-arcade.jpg')",
        "project-soccer-team-mobile":
          "url('/assets/images/mobile/image-soccer-team.jpg')",
        "project-soccer-team-desktop":
          "url('/assets/images/desktop/image-soccer-team.jpg')",
        "project-grid-mobile": "url('/assets/images/mobile/image-grid.jpg')",
        "project-grid-desktop": "url('/assets/images/desktop/image-grid.jpg')",
        "project-from-above-mobile":
          "url('/assets/images/mobile/image-from-above.jpg')",
        "project-from-above-desktop":
          "url('/assets/images/desktop/image-from-above.jpg')",
        "project-pocket-borealis-mobile":
          "url('/assets/images/mobile/image-pocket-borealis.jpg')",
        "project-pocket-borealis-desktop":
          "url('/assets/images/desktop/image-pocket-borealis.jpg')",
        "project-curiosity-mobile":
          "url('/assets/images/mobile/image-curiosity.jpg')",
        "project-curiosity-desktop":
          "url('/assets/images/desktop/image-curiosity.jpg')",
        "project-fisheye-mobile":
          "url('/assets/images/mobile/image-fisheye.jpg')",
        "project-fisheye-desktop":
          "url('/assets/images/desktop/image-fisheye.jpg')",
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
        sm: ["0.875rem", "0.875rem"],
        base: ["0.9375rem", "1.5rem"],
        "2xl": ["1.5rem", "1.5rem"],
        "3xl": ["2rem", "2rem"],
      },
    },
  },
  plugins: [],
};
