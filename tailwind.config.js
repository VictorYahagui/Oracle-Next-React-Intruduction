/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "sans-serif",
      },
      backgroundImage: {
        'footer': "url('./src/assets/fundo.png')",
      }
    },
  },
  plugins: [],
}