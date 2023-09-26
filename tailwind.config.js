/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'DarkBlueintro': '#1c2431',
        'DarkBlueMain': '#181f2a',
        'DarkBlueFooter': '#0b1523',
        'DarkBlueTestimonials': '#202a3c',
        'CyanInsideGradient': '#65e2d9',
        'BlueInsideGradient': '#339ecc',
        'LightRedError': '#ff4242',
        'White-P': '#ffffff'
      },
      fontFamily: {
        'Ral': ['Raleway', 'sans-serif'],
        'Ope': ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'bgDesktop': "url('/src/utils/images/bg-curvy-desktop.svg')",
        'bgMobile': "url('/src/utils/images/bg-curvy-mobile.svg')",
      }


    },
  },
  plugins: [],
}