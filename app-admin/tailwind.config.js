/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    // colors: {
    //   ...colors,
    //
    // },
    extend: {
      colors: {
        // LogiYellow: {
        //   100: '',
        //   200: '',
        //   300: '',
        //   400: '',
        //   500: '',
        // },
        LogiBlue: {
          DEFAULT: '#3070ED',
          100: '#76A1F3',
          200: '#4780EF',
          300: '#3070ED',
          400: '#1355D7',
        },
        LogiNavy: {
          DEFAULT: '#172739',
          100: '#2D4C6F',
          200: '#1E334B',
          300: '#172739',
          400: '#101B27',
        },
        LogiRed: {
          DEFAULT: '#F95D5D',
          100: '#fdbfbf',
          200: '#fb8e8e',
          300: '#F95D5D',
          400: '#f72c2c',
          500: '#e70909',
        },
        LogiYellow: {
          DEFAULT: '#FFD74A',
          100: '#ffeeb0',
          200: '#ffe27d',
          300: '#FFD74A',
          400: '#ffcc17',
          500: '#e3b100',
        },
        LogiSkyBlue: {
          DEFAULT: '#BAC4D6',
          100: '#eaedf3',
          200: '#dadfe9',
          300: '#BAC4D6',
          400: '#9aa9c3',
          500: '#7a8db0',
        },
        // semantic
        Logi: {
          Error: '#D32F2F',
          Warning: '#F9A825',
          Success: '#4CAF50',
          Info: '#0091EA',
        },

        LogiGray: {
          50: '#f6f6f6',
          100: '#EAEAEA',
          150: '#dddddd',
          200: '#d0d0d0',
          300: '#c3c3c3',
          350: '#b7b7b7',
          400: '#aaaaaa',
          450: '#909090',
          500: '#848484',
          550: '#777777',
          600: '#6a6a6a',
          700: '#5d5d5d',
          750: '#444444',
          800: '#373737',
          850: '#2a2a2a',
          900: '#111111',
        },
        LogiWhite: '#FFFFFF',
        LogiBlack: '#000000',
        'primary-100': 'rgb(var(--primary-100))',
        'primary-200': 'rgb(var(--primary-200))',
        'primary-300': 'rgb(var(--primary-300))',
        'primary-400': 'rgb(var(--primary-400))',
        'primary-50': 'rgb(var(--primary-50))',
        'primary-500': 'rgb(var(--primary-500))',
        'primary-600': 'rgb(var(--primary-600))',
        'primary-700': 'rgb(var(--primary-700))',
        'primary-800': 'rgb(var(--primary-800))',
        'primary-900': 'rgb(var(--primary-900))',
        'primary-950': 'rgb(var(--primary-950))',
        'surface-0': 'rgb(var(--surface-0))',
        'surface-100': 'rgb(var(--surface-100))',
        'surface-200': 'rgb(var(--surface-200))',
        'surface-300': 'rgb(var(--surface-300))',
        'surface-400': 'rgb(var(--surface-400))',
        'surface-50': 'rgb(var(--surface-50))',
        'surface-500': 'rgb(var(--surface-500))',
        'surface-600': 'rgb(var(--surface-600))',
        'surface-700': 'rgb(var(--surface-700))',
        'surface-800': 'rgb(var(--surface-800))',
        'surface-900': 'rgb(var(--surface-900))',
        'surface-950': 'rgb(var(--surface-950))',
      },
    },
  },
  plugins: [],
};