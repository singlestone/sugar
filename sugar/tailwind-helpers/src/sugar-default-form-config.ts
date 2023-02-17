import type { PluginAPI } from "tailwindcss/types/config";

import { defaultSelectConfig } from "./config/select";

export const sugarDefaultFormConfig = (theme: PluginAPI["theme"]) => ({
  select: defaultSelectConfig,
  checkBoxRadioBorder: `2px solid ${theme("colors.neutral.400")}`,
  checkBoxRadioCheckedColorFamily: "accent",
  checkBoxRadioCheckedColorShade: "600",
  checkBoxRadioHoverColorShade: "200",
  checkBoxRadioDimensions: theme("spacing.7"),
});
