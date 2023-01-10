import type { PluginAPI } from "tailwindcss/types/config";
export const sugarDefaultMeasurementsConfig = (theme: PluginAPI["theme"]) => ({
  formControlHeight: theme("spacing.10"),
  buttonSize: theme("spacing.5"),
});
