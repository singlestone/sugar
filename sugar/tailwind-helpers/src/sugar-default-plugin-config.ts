import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import type { PluginAPI } from "tailwindcss/types/config";

import { sugarDefaultButtonConfig } from "./sugar-default-button-config";
import { sugarDefaultFocusConfig } from "./sugar-default-focus-config";
import { sugarDefaultFormConfig } from "./sugar-default-form-config";
import { sugarDefaultMeasurementsConfig } from "./sugar-default-measurements-config";

/** @type {import('tailwindcss').Config} */
export const defaultPluginConfig = {
  theme: {
    sugarButtons: sugarDefaultButtonConfig,
    sugarMeasurements: ({ theme }: PluginAPI) =>
      sugarDefaultMeasurementsConfig(theme),
    sugarFocusStyles: sugarDefaultFocusConfig,
    sugarFormControls: ({ theme }: PluginAPI) => sugarDefaultFormConfig(theme),
    sugarDefaultColorShade: "600",
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
