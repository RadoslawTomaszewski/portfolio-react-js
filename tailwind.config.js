/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
        "1vw": "1vw",
        "1vh": "1vh",
      },
      colors: {
        black: "#011113",
        bootstrap: "#870afb",
        css: "#007db7",
        darkgreen: "#02343c",
        fb: "#1877f2",
        github: "#9b59b6",
        html: "#e44d26",
        javascript: "#f99c28",
        linkedin: "#0a66c2",
        lightgreen: "#779937",
        react: "#61dbfb",
        vue: "#3fb984",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        h1: "2.2vw",
        h2: "2vw",
        h3: "1.8vw",
        h4: "1.6vw",
        h5: "1.4vw",
        h6: "1.2vw",
      },
    },
  },
  plugins: [],
};
