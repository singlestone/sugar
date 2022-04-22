import { sugarButtonsPlugin } from "@singlestone/tailwind-plugin-buttons-sugar";
import { sugarFormsPlugin } from "@singlestone/tailwind-plugin-form-sugar";
import { TailwindPlugin } from "tailwindcss/plugin";
const options = {
  prefix: "sugar",
};
export { theme } from "@singlestone/tailwind-theme-sugar";
export const plugins: TailwindPlugin[] = [
  sugarButtonsPlugin,
  sugarFormsPlugin,
].map((plugin) => plugin(options));
