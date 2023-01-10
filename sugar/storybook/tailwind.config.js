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
  theme: {
    extend: {
      sugarButtons: {
        action: {
          type: "filled",
          color: "green",
          base: "500",
          active: "600",
          hover: "700",
        },
      },
    },
  },
  plugins: [require("@singlestone/sugar").sugarCorePlugin()],
};
