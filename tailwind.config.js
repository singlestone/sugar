module.exports = {
  mode: "jit",
  content: ["./src/**/*.stories.@(js|jsx|ts|tsx)"],
  safelist: [
    {
      pattern: /.*/,
    },
  ],
  plugins: [
    require("./dist").sugarPlugin({
      prefix: "sugar",
      useMatchClasses: true,
    }),
  ],
};
