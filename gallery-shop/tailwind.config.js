/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        'base': '#EFEAD8',
        'primary': '#0F0',
        'primary-reverse': '#FF00FF',
        'secondary': '#0080FF',
        'secondary-reverse': '#FF8000'

      }
    },
  },
  plugins: [],
}