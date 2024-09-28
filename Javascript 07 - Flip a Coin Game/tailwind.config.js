module.exports = {
  theme: {
    extend: {
      keyframes: {
        spinX: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(2160deg)' },
        },
        reverseSpinX: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(-2160deg)' },
        },
      },
      animation: {
        spinX: 'spinX 2s ease-in-out',
        reverseSpinX: 'reverseSpinX 2s ease-in-out',
      },
    },
  },
  plugins: [],
}
