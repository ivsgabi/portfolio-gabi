module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { 
        'weather-upper-blue': '#104B85',
        'weather-bottom-blue': '#5B8BC0',
      },
      backgroundImage: {
        'weather-gradient': 'linear-gradient(to bottom, #104B85, #5B8BC0)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
