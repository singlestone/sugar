import type { PluginAPI } from "tailwindcss/types/config";

export const sugarDefaultFormConfig = (theme: PluginAPI["theme"]) => ({
  selectColorFamily: "accent",
  selectColorShade: theme("sugarDefaultColorShade"),
  checkBoxRadioBorder: `1px solid ${theme("colors.neutral.400")}`,
  checkBoxRadioCheckedColorFamily: "accent",
  checkBoxRadioCheckedColorShade: "600",
  checkBoxRadioHoverColorShade: "200",
  checkBoxRadioDimensions: theme("spacing.7"),
});
