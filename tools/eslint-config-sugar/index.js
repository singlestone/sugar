require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    require.resolve("dts-cli/conf/eslint-config-react-app"),
    "prettier",
    "plugin:prettier/recommended",
  ],
};
