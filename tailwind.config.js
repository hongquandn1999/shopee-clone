const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d',
        whiteSlate: 'rgba(0,0,0,.26)'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingLeft: theme('spacing.4')
        }
      })
    })
  ]
}
