/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff7b00",
      },
      fontFamily: {
        body: ["Montserrat"],
        italic: ["Caveat"],
      },
    },
  },
  plugins: [],
};
