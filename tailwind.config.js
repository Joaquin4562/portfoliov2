/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      height: {
        'middle': '70vh'
      },
      transitionProperty: {
        'height': 'height'
      },
      keyframes: {
        openNav: {
          "0%": { opacity: 0 },
          '100%': { visibility: 'visible', opacity: 1 }
        }
      },
      animation: {
        'nav-animate': '1s openNav'
      }
    },
  },
  plugins: [],
}
