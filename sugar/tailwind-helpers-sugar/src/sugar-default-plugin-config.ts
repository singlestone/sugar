import colors from "tailwindcss/colors";

export const defaultPluginConfig = {
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
