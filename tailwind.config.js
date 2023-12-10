/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight:{
        '200':'50rem',
        
      },
      flex:{
        '50':'0 0 50%'
      }
    },
  },
  plugins: [],
}

