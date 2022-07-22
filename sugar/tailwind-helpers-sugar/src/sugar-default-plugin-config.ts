import colors from "tailwindcss/colors";
import { Config } from "tailwindcss/types/config";

export const defaultPluginConfig: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        accent: colors.blue,
        neutral: colors.gray,
        destructive: colors.red,
      },
      fontFamily: {
        sans: ["Lato", ...require("tailwindcss/defaultTheme").fontFamily.sans],
      },
    },
  },
};
