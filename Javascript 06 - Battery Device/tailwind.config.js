/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'red-gradient': 'linear-gradient(90deg, hsl(7, 89%, 46%) 15%, hsl(11, 93%, 68%) 100%)',
        'orange-gradient': 'linear-gradient(90deg, hsl(22, 89%, 46%) 15%, hsl(54, 90%, 68%) 100%)',
        'yellow-gradient': 'linear-gradient(90deg, hsl(54, 89%, 46%) 15%, hsl(92, 90%, 45%) 100%)',
        'green-gradient': 'linear-gradient(90deg, hsl(92, 89%, 46%) 15%, hsl(92, 90%, 68%) 100%)',
      }
    },
  },
  plugins: [],
}