/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        'fm-white': 'hsl(0, 0%, 100%)',
        'fm-light-gray': 'hsl(212, 45%, 89%)',
        'fm-grayish-blue': 'hsl(220, 15%, 55%)',
        'fm-dark-blue': 'hsl(218, 44%, 22%)'
      }
    },
  },
  plugins: [],
}
