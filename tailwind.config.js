/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#1F1F1F',
        customWhite: '#F5F5F5',
        trueBlue: '#3E65FF' 
      },
    },
  },
  plugins: [],
}