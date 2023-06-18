/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#F5F5F7',
        'gray-blue': '#DFE3E8',
        'dark-gray': '#E8E8E8',
        smoke: '#F1F1F3',
        primary: '#2E5BFF',
        'dark-blue': '#28293D',
        black: '#1D1D1F',
        'light-purple': '#E0E7FF',
        silver: '#B1B1B8',
        'light-silver': '#C4CDD5',
        'dark-silver': '#979797',
        gold: '#FFA445',
        dodgerblue: '#5BABF2',
        'my-green': '#00CF83'
      },
      boxShadow: {
        'my-sm': '0 5px 40px 0 rgba(0, 0, 0, 0.03)',
        'my-2sm': '0 25px 40px 0 rgba(0, 0, 0, 0.03)'
      },
      fontFamily: {
        rubik: ["'Rubik'", 'sans-serif']
      },
      gridTemplateColumns: {
        'max-1': 'max-content 1fr',
        '1-max': '1fr max-content',
        '1-2max': '1fr repeat(2, max-content)'
      },
      fontSize: {
        '15p': '15px'
      }
    }
  },
  plugins: []
}
