/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxWidth: {
      mobile: "430px",
      tablet: "744px",
      laptop: "1024px",
      dekstop: "1440px",
    },
    fontFamily: {
      body: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      mobile: "430px",
      tablet: "744px",
      laptop: "1024px",
      dekstop: "1440px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
