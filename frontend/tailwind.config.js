/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#EDF0F0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        serif: ['Libre Caslon Text', 'Georgia', 'serif'], 
      },
    },
  },
  plugins: [],
}