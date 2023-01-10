module.exports = {
  mode: "jit",
  content: [
    "../tailwind-plugin-buttons/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../tailwind-plugin-form/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  safelist: [
    {
      pattern: /.*/,
    },
  ],
  plugins: [require("@singlestone/sugar").sugarCorePlugin()],
};
