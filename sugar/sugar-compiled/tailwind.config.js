// const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.css",
    "../sugar-old-example/*.html",
  ],
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
