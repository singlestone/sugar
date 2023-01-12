import type { PluginAPI } from "tailwindcss/types/config";

export const sugarDefaultFormConfig = (theme: PluginAPI["theme"]) => ({
  selectColorFamily: "accent",
  selectColorShade: theme("sugarDefaultColorShade"),
});
