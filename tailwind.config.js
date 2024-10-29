/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specifies the directories to scan for class names
  ],
  theme: {
    extend: {
      italiana: ['Italiana', 'serif'],
      colors: {
        purple: '#D6C8FF',
        blue: '#AFCFFF',
        heavenblue: '#E7EDFF'
      },
      spacing: {
        '160': '40rem', 
        '150': '37.5rem',
      },
    },
  },
  plugins: [],
};
