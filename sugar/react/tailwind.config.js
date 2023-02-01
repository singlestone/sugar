// const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./example/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require("@singlestone/sugar").sugarCorePlugin()],
};
