/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      // AS CORES ORIGINAIS (ROSÊ)
      colors: {
        'primary': '#B08B7E',
        'primary-dark': '#9A7061',
        'neutral-light': '#FDFBF9',
        'text-dark': '#333333',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}