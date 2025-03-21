/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "var(--color-light)",
        dark: "var(--color-dark)",
      },
    },
  },
  darkMode: "class",  
  plugins: [],
};
