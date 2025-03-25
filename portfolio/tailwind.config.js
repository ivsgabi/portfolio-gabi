const { heroui } = require("@heroui/theme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '', 
      },
    },
  },
  plugins: [heroui()],
  darkMode: 'class',
}
