import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export const defaultPluginConfig = {
  theme: {
    extend: {
      colors: {
        accent: colors.blue,
        neutral: colors.gray,
        destructive: colors.red,
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
