const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./stories/**/*.stories.ts"],
  safelist: [
    {
      pattern: /.*/,
    },
  ],
  theme: {
    extend: {
      colors: {
        accent: colors.blue,
      },
    },
  },
  plugins: [require("./dist").sugarFormsPlugin({})],
};
