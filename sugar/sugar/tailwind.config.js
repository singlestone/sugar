module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.css",
    "../../example/*.html",
  ],
  presets: [require("@singlestone/tailwind-preset-sugar")],
};
