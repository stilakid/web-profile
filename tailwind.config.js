/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'black-t-50': 'rgba(0,0,0,0.5)',
      },
      colors: {
        'wallus-primary-light': '#3F6DE4',
        'wallus-primary': '#1D4590'
      }
    },
    fontFamily: {
      // 'sans': ['Helvetica Neue'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
