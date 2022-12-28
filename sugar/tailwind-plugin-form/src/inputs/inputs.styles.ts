import {
  convertHexToRGBA,
  focusTransition,
  focusVisibleTransition,
  SugarColorFamilies,
  SugarMeasurements,
} from "@singlestone/tailwind-helpers-sugar";
import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

export const inputBase = (theme: PluginAPI["theme"]): CSSRuleObject => {
  return {
    display: "block",
    appearance: "none",
    border: "0",
    borderRadius: theme("borderRadius.lg"),
    color: theme("colors.black"),
    backgroundColor: convertHexToRGBA(theme("colors.black"), "0.1"),
    fontSize: theme("fontSize.lg"),
    fontWeight: theme("fontWeight.normal"),
    letterSpacing: theme("letterSpacing.wide"),
    lineHeight: theme("lineHeight.7"),
    padding: "0",
    fontFamily: theme("fontFamily.sans"),
    paddingLeft: theme("spacing.3"),
    height: theme(SugarMeasurements.FormControlHeight),
    width: "100%",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    ...focusTransition(theme, {
      accentColors: theme(SugarColorFamilies.ACCENT),
    }),
    "&:focus-visible": {
      ...focusVisibleTransition(theme),
      backgroundColor: theme("colors.white"),
    },
    "&::placeholder": {
      color: convertHexToRGBA(theme("colors.black"), "0.6"),
    },
  };
};
