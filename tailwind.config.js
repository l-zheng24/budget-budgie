/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark-green': '#122b09',
      'celadon': '#b9d8c2',
      'light-blue': '#c9e4e9',
      'cadet-grey': '#8aa1b1',
      'sunglow': '#FFE483',
      'cosmicLatte': '#FFFBEC',
      'office-green': '#0c7800',

    
    },},
    
    
  },
  plugins: [
// require('@tailwindcss/forms'),



  ],
}

