module.exports = {
  mode: "jit",
  content: [
    "./stories/**/*.stories.@(js|jsx|ts|tsx)",
    "./node_modules/@singlestone/sugar-react/dist/*.js",
  ],
  safelist: [],
  plugins: [require("@singlestone/sugar").sugarCorePlugin()],
};
