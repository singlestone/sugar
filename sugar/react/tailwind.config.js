// const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: ["./src/*.tsx", "./example/*.tsx"],
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
