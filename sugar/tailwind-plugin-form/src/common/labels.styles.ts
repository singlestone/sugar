import { convertHexToRGBA } from "@singlestone/tailwind-helpers-sugar";
import { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

export const labelBase = (theme: PluginAPI["theme"]): CSSRuleObject => {
  return {
    display: "block",
    border: "0",
    color: convertHexToRGBA(theme("colors.black"), "0.6"),
    lineHeight: theme("lineHeight.tight"),
    letterSpacing: theme("letterSpacing.wider"),
    fontSize: theme("fontSize.base"),
    marginBottom: theme("spacing.1"),
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  };
};
