/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-bengali': ['"Noto Sans Bengali"', 'sans-serif'],
      },

      keyframes: {
        'custom-blink': {
          '0%': {
            backgroundColor: '#dc2626',
            opacity: 0.1,
          },
          '50%': {
            backgroundColor: '#f87171',
            opacity: 0.2,
          },
          '100%': {
            backgroundColor: '#ffffff',
            opacity: 0.3,
          },
        },
      },
      animation: {
        'error-blink': 'custom-blink .8s ease-in-out 3',
      },
    },
  },
  plugins: [],
}
