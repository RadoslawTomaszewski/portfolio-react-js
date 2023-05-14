/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'h1': '2.2vw',
        'h2': '2vw',
        'h3': '1.8vw',
        'h4': '1.6vw',
        'h5': '1.4vw',
        'h6': '1.2vw',
      },
        minHeight:{
          '13vw': '13vw',
        },
        maxHeight: {
          '11vw': '11vw',
        },
    },
  },
  plugins: [],
}

