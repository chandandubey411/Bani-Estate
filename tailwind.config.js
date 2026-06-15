/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',
        'primary-dark': '#0a3660',
        'primary-light': '#1a6cb8',
        secondary: '#D4AF37',
        'secondary-dark': '#b8941f',
        background: '#F8FAFC',
        surface: '#FFFFFF',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
