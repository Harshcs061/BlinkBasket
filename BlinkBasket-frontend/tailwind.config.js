import animatePlugin from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-animate-css/**/*.js",
  ],
  theme: {
    extend: {
      // You can extend with extra keyframes/animations here
    },
  },
  plugins: [
     require('tailwindcss-animate'),
  ],
  darkMode: 'class', // if using dark mode toggle
};
