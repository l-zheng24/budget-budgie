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
      'light-blue': '#9ac2c9',
      'cadet-grey': '#8aa1b1',
      'sunglow': '#ffcb47',
      'cosmicLatte': '#FFFBEC',
    
    },},
    
    
  },
  plugins: [
// require('@tailwindcss/forms'),



  ],
}

