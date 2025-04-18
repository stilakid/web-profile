/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'black-t-50': 'rgba(0,0,0,0.5)',
      },
      colors: {
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
        'neutral-semiblack': '#0e0e12',
        // Miscellaneous
        'neutral-disabled': '#7B7B7B', // opacity: 40%
        'neutral-hover': '#000000', // opacity: 7%
        'old-primary': 'orange-400',
        // Backgrounds
        'light-background': 'rgb(238 238 238)',
        // capsule
        'capsule-left': '#112a0f',
        'capsule-right': '#3f9a38',
        // cs224n
        'cs224n-left': '#474d14',
        'cs224n-right': '#bccb34',
        // wallus
        'wallus-left': '#0c1d3c',
        'wallus-right': '#1D4590',
        // cms
        'cms-left': '#002830',
        'cms-right': '#036078',
        // bunny world
        'bunny-left': '#22004a',
        'bunny-right': '#4a00a1',
        // web profile
        'webprofile-left': '#192024',
        'webprofile-right': '#3b4e58',
        // carta
        'carta-left': '#390512',
        'carta-right': '#860d2a',
        // blender
        'blender-left': '#3c1e00',
        'blender-right': '#b95d00',
        // moderation
        'moderation-left': '#111b40',
        'moderation-right': '#243b8a',
        // autonomous robot
        'autonomous-left': '#132640',
        'autonomous-right': '#3265AC',
        // cs224s
        'cs224s-left': '#0b2f53',
        'cs224s-right': '#2684e3'
      }
    },
    fontFamily: {
      'sans': ['Segoe UI'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
