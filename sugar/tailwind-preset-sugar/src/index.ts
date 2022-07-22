import { sugarButtonsPlugin } from "@singlestone/tailwind-plugin-buttons-sugar";
import { sugarFormsPlugin } from "@singlestone/tailwind-plugin-form-sugar";
import plugin from "tailwindcss/plugin";
const options = {
  prefix: "sugar",
};
export { theme } from "@singlestone/tailwind-theme-sugar";
export const plugins: ReturnType<typeof plugin>[] = [
  sugarButtonsPlugin,
  sugarFormsPlugin,
].map((plugin) => plugin(options));
