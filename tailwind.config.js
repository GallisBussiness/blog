module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.jsx',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'wave': "url('/images/wave.svg')",
       },
      fontFamily: {
        'source': "'Source Serif Pro', serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
