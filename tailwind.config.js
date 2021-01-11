const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const typographyPlugin = require("@tailwindcss/typography");

module.exports = {
  purge: ["./src/pages/**/*.js", "./src/components/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [typographyPlugin],
};