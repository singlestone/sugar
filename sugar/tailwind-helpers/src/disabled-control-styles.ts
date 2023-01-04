import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";
export const disabledControlStyles = (
  theme: PluginAPI["theme"]
): CSSRuleObject => ({
  "&:disabled": {
    cursor: "not-allowed",
    opacity: theme("opacity.50"),
  },
});
