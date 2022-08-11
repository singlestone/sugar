// const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    require("@singlestone/sugar").sugarCorePlugin({
      prefix: "sugar",
    }),
  ],
};
