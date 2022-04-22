// const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.css",
    "../../example/*.html",
  ],
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
