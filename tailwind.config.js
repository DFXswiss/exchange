/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  darkMode: false,
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary: {
        red: '#F5516C',
        blue: '#072440',
      },
      dfxBlue: {
        300: '#5A81BB',
        400: '#124370',
        500: '#0A355C',
        600: '#092E51',
        700: '#082948',
        800: '#072440',
      },
      dfxRed: {
        100: '#F5516C',
        150: '#E73955',
      },
      dfxGray: {
        400: '#EAECF0',
        500: '#D6DBE2',
        600: '#B8C4D8',
        700: '#9AA5B8',
        800: '#65728A',
      },
      dfxRedBlue: {
        200: '#DE4D68',
        300: '#C54863',
        400: '#AE445F',
        500: '#963F5A',
        600: '#6B3753',
        700: '#55334E',
        800: '#49314C',
        900: '#402F4B',
        1000: '#2D2B47',
      },
    },
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
};
