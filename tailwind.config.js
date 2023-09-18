/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html" // Include index.html
  ],
  theme: {
    colors: {
      'orange': '#FFA500',
      'black': '#020202',
      'accent_pink': '#F300DB',
      'gray': '#727272',
      'white': '#F2F2F2',
      'red': '#FF0000',
      'purple': '#A300FF',
      'yellow': '#FFD500',
      'green': '#00FF00',
    },
    
    extend: {
      margin: {
      'try': '2.7rem',
      '15': '3.75rem',
      '16': '4rem',
      '17': '4.2rem',
      '18': '4.5rem',
      '22': '5.5rem',
    },},
  },
  plugins: [],
}
