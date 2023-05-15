const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dollor: "#659C44",
        coin: "#F2A900",
        platinum: "#E6E6E6",
        darkBlue: "#234058"
      },
    },
    screens: {
      'ml': '896px',
      // medla => something between medium and large
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}