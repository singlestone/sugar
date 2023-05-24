import { sugarCorePlugin } from "@singlestone/sugar";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./stories/**/*.stories.@(js|jsx|ts|tsx)",
    "./node_modules/@singlestone/sugar-react/dist/*.js",
  ],
  plugins: [sugarCorePlugin()],
} satisfies Config;
