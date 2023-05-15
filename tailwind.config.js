/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        "1": "1px",
        "2": "2px",
        "3": "3px",
        "1vw": "1vw",
        "1vh": "1vh",
      },
      colors: {
        darkgreen: "#02343c",
        black: "#011113",
        lightgreen: "#779937",
        javascript: "#f99c28",
        html: "#e44d26",
        css: "#007db7",
        fb: "#1877f2",
        vue: "#3fb984",
        bootstrap: "#870afb",
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
