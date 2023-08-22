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
        'wallus-primary': '#1D4590',
        // Blue Gray
        'primary-darker': '#263238',
        'primary-dark': '#37474F',
        'primary-regular': '#455A64',
        'primary-light': '#546E7A',
        'primary-lighter': '#607D8B',
        // White
        'neutral-white': '#FFFFFF',
        'neutral-pale': '#F5F5F5',
        'neutral-light': '#C2C2C2',
        // Black
        'neutral-regular': '#7B7B7B',
        'neutral-dark': '#434343',
        'neutral-black': '#000000',
        // Miscellaneous
        'neutral-disabled': '#7B7B7B', // opacity: 40%
        'neutral-hover': '#000000', // opacity: 7%
        'old-primary': 'orange-400'
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
