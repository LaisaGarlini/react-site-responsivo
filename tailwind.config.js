/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'],
      },
      colors: {
        'marrom-escuro': '#4e2d1a',
        'marrom-claro': '#8a5e37',
        'marrom-claro2': '#cba583',
        'bege': '#fdecda'
      }
    },
  },
  plugins: [],
}