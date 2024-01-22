/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}",],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 row grid
        'lg': 'repeat(3, minmax(0, 300px))',
        'md': 'repeat(2, minmax(0, 300px))',
        'sm': 'repeat(1, minmax(0, 300px))',

      }
    },

  },
  plugins: [],
}

