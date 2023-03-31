import { sugarCorePlugin } from "@singlestone/sugar";
import type { Config } from "tailwindcss";

export default {
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
  plugins: [sugarCorePlugin()],
} satisfies Config;
