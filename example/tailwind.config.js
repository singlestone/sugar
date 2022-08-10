// const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    require("@singlestone/tailwind-plugin-core-sugar").sugarCorePlugin({
      prefix: "sugar",
    }),
  ],
};
