/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        secondary: '#31363F',
        tertiary: '#76ABAE',
        light: '#EEEEEE',
        bg: '#DAFFFB',
      },
      
      fontSize: {
        sm: '14px',
        md: '16px',
        nm: '20px',
        lg: '32px',
      },
    },
  },
  plugins: [],
}

