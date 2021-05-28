module.exports = {
  purge: [
    './src/**/*.html'
  ],
  mode:'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Josefin': ['"Josefin"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
