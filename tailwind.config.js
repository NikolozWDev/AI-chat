/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}", 
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '750px',
      'lg': '1000px',
      'nm': '1100px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    extend: {},
  },
  plugins: [],
}