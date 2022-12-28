/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('src/assets/pattern-bg.png')",
      }),
    },
  },
  plugins: [],
};
