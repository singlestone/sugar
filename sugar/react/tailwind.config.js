module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./example/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [require("@singlestone/sugar").sugarCorePlugin()],
};
