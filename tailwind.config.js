/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html" // Include index.html
  ],
  theme: {
    extend: {
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
      margin: {
      '12.5': '3.125rem',
      '13': '3.25rem',
      '13.5': '3.375rem',
      '15': '3.75rem',
      '16': '4rem',
      '17': '4.2rem',
      '18': '4.5rem',
      '18.5': '4.6rem',
      '19': '4.75rem',
      '22': '5.5rem',
    },
    spacing: {
      '90': '22.5rem',
    },
  },
  plugins: [],
}}
