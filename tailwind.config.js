/** @type {import('tailwindcss').Config} */
export default {
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
      colors: {
        'primary': '#B08B7E',
        'primary-dark': '#9A7061',
        'neutral-light': '#FDFBF9',
        'text-dark': '#333333',
      }
    },
  },
  plugins: [],
}
