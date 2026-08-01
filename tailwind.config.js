/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#5cb8f4',
          DEFAULT: '#37a5ed',
          dark: '#1e7fc4',
        },
      },
    },
  },
  plugins: [],
}
