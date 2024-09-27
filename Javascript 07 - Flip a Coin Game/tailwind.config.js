/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js}"],
  theme: {
    extend: {
      animation: {
        'spin-tails': 'spin-tails 3s forwards',
        'spin-heads': 'spin-heads 3s forwards',
      },
      keyframes: {
        'spin-tails': {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(1980deg)' },
        },
        'spin-heads': {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(2160deg)' },
        },
      },
    },
  },
  plugins: [],
}
