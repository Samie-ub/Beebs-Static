/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A17139',
        secondary: '#FFF7EA',
        ternary: '#332017',
        white: '#ffffff',
        pale: '#E5D8C3',
        dark: '#080605',
        black: '#111111',
        light: "#D19D5D",
        hr: "#4D3023",
        video:"#fff0d9",
        span:"#C58B4A",
        feature:"#54433C",
        slider:"#2D2420",
        border:"#080605",
        footer:"#FFF4E3",
        slidetwo:"#A66539",

      },
      fontSize: {
        'xs': '16px',
        'heading': '5.5rem',
        'slider-image': '35%',
        '3/3xl': '32px',
        
      },
      width:{
        'tribe-image':'28%'
      },
      height:{
        'slider-height':'25rem'
      }

    },
  },
  plugins: [],
}