module.exports = {
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  theme: {
    extend: {
      colors: {
        'gray-100': '#F6F6F6',
        'gray-200': '#E8E8E8',
        'gray-300': '#D9D9D9',
        'gray-400': '#BDBDBD',
        'gray-500': '#A1A1A1',
        'gray-600': '#919191',
        'gray-700': '#616161',
        'gray-800': '#484848',
        'gray-900': '#1b1c1e',
        'gray-1000': '#141415'
      }
    }
  },
  plugins: [
    require('tailwindcss-grid')({
      grids: [2, 3, 5, 6, 8, 10, 12],
      gaps: {
        0: '0',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        '4-x': '1rem',
        '4-y': '1rem'
      },
      autoMinWidths: {
        '300': '300px'
      },
      variants: ['responsive']
    })
  ]
};
