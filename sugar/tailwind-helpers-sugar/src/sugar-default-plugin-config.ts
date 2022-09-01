import colors from "tailwindcss/colors";
import { TailwindValuesFontFamily } from "tailwindcss/tailwind-config";
import defaultTheme from "tailwindcss/defaultTheme";

const defaultThemeFontFamily: TailwindValuesFontFamily =
  defaultTheme.fontFamily as TailwindValuesFontFamily;

export const defaultPluginConfig = {
  theme: {
    extend: {
      colors: {
        accent: colors.blue,
        neutral: colors.gray,
        destructive: colors.red,
      },
      fontFamily: {
        sans: ["Lato", ...defaultThemeFontFamily.sans],
      },
    },
  },
};
