/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mainBg: '#EDF2FF',
        darkViolet: '#14152C',
        clairPink: '#858691',
        errorRed: '#C92A2A'
      },
      backgroundColor: {
        'main-bg-image': "url('/assets/security.jpg')"
      }
    },
  },
  plugins: [],
}

