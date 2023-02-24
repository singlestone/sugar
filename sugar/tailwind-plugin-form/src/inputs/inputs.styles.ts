import {
  convertHexToRGBA,
  disabledControlStyles,
  focusTransition,
  focusVisibleTransition,
  SugarMeasurements,
} from "@singlestone/tailwind-helpers-sugar";
import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

export const inputBase = (theme: PluginAPI["theme"]): CSSRuleObject => {
  return {
    display: "block",
    appearance: "none",
    border: "0",
    borderRadius: theme("borderRadius.lg"),
    fontSize: theme("fontSize.lg"),
    fontWeight: theme("fontWeight.normal"),
    letterSpacing: theme("letterSpacing.wide"),
    lineHeight: theme("lineHeight.7"),
    padding: "0",
    paddingLeft: theme("spacing.3"),
    height: theme(SugarMeasurements.FormControlHeight),
    width: "100%",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "&:disabled": {
      ...disabledControlStyles(theme),
    },
    ...focusTransition(theme),
    "&:focus-visible": {
      ...focusVisibleTransition(theme),
      backgroundColor: theme("colors.white"),
    },
  };
};

export const textArea = (theme: PluginAPI["theme"]): CSSRuleObject => {
  const base = { ...textInput(theme) };
  // set the minimum height to the base height of an input
  base["min-height"] = base["height"];
  // textarea height is provided by the `rows` attribute
  delete base["height"];
  return base;
};

export const textInput = (theme: PluginAPI["theme"]): CSSRuleObject => ({
  ...inputBase(theme),
  color: theme("colors.black"),
  backgroundColor: convertHexToRGBA(theme("colors.black"), "0.1"),
  "&::placeholder": {
    color: convertHexToRGBA(theme("colors.black"), "0.6"),
  },
});
