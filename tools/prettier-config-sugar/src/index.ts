import { Config } from "prettier";

export const prettierConfigSugar: Config = {
  plugins: [
    require("prettier-plugin-pkg"),
    require("@singlestone/prettier-plugin-organize-imports-tailwindcss"),
  ],
};

export default prettierConfigSugar;
