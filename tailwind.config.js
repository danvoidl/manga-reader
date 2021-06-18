const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      'cellphone': '500px',      
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        'main': '#141414',
        'main-secondary': '#f7931e',
        'black-main': '#141414',
      },
      minWidth: {
        '600': '660px'
      },
    },    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
