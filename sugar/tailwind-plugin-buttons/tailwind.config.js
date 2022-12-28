module.exports = {
  mode: "jit",
  content: ["./stories/**/*.stories.ts"],
  safelist: [
    {
      pattern: /.*/,
    },
  ],
  plugins: [require("./dist").sugarButtonsPlugin({})],
};
