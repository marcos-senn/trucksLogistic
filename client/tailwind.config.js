/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'getintouch': "url('../src/assets/images/getintouch.jpg')",
      },
      colors: {
        'bronze': '#EA6001',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-left-delayed': 'slideInLeft 1s ease-out forwards 0.5s',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
