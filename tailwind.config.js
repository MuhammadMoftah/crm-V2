const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: [],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {
        sky: colors.sky,
        "blue-gray": colors.blueGray,
        orange: colors.orange,
        body: "#F7F8FA",
        "theme-purple": "#8833FF",
        "theme-orange": "#FF6633",
        "theme-teal": "#33BFFF",
        "theme-green": "#29CC39",
        "theme-blue": "#3361FF",
        "theme-yellow": "#FFCB33",
        "theme-red": "#E62E2E",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
