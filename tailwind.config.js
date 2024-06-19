/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import filters from 'tailwindcss-filters';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        'none': 'none',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      'scrollbar-hide': {
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none'
      },
      fontSize: {
        xs: '14px',
        sm:'18px',
        md: '24px',
        lg: '30px',
        xl:'40px',
      },
      fontFamily: {
        serif: ['Inter', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'black-title': '#14142B',
        'search-bg': '#F5F5F5',
        'body':'#4E4B66',
        'custom-red': '#DB4444',
        'hover':'#E07575',
        'label-c' : '#6E7191',
        'placeh-c' : '#A0A3BD',
        'line-c' :'#D9DBE9',
        'input-bg': '#EFF0F6',
        'normal-bg' :'#F7F7FC',
        'off-white' : '#FCFCFC',
        'error' : '#ED2E7E',
        'secondary' : '#1CC8EE',
        'success' : '#00BA88',
        'warning' : '#F4B740'

      },
      
      backgroundImage: {
        'primary-grad': 'linear-gradient(to right, #7433FF, #FFA3FD)',
        'secondary-grad': 'linear-gradient(to right, #624AF2, #50DDC3)',
        'accent-grad': 'linear-gradient(to right, #EB0055, #FFFA80)',
      },
      opacity: {
        '91': '0.91',
      },
    },
  },
  plugins: [daisyui,filters],
};
