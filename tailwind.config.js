/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        bowlby: ['Bowlby One SC', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        futura: ['Futura Now Headline', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],

      

        
        taviraj: ['Taviraj', 'sans-serif'], // Define 'roboto' as your custom font
      },
    },
  },
  plugins: [],
}

