/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'Dark-Blue-intro': 'hsl(217, 28%, 15%)',
      'Dark-Blue-main': 'hsl(218, 28%, 13%)',
      'Dark-Blue-footer': 'hsl(216, 53%, 9%)',
      'Dark-Blue-testimonials': 'hsl(219, 30%, 18%)',
      'White': 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      'Ral': ['Raleway', 'sans-serif'],
      'Ope': ['Open Sans', 'sans-serif']
    }
  },
  plugins: [],
}