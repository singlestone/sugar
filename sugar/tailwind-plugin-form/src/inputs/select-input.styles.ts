import { getShadeValue } from "@singlestone/tailwind-helpers-sugar";
import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

import { inputBase } from "./inputs.styles";
import { SelectConfig } from "@singlestone/tailwind-helpers-sugar/config/select";

const selectInputBase = (theme: PluginAPI["theme"]): CSSRuleObject => ({
  ...inputBase(theme),
  paddingRight: theme("spacing.9"),
  paddingLeft: theme("spacing.3"),
  fontWeight: theme("fontWeight.bold"),
  backgroundRepeat: "no-repeat",
  backgroundColor: theme("colors.white"),
  backgroundPosition: `right 12px center`,
  backgroundSize: `20px 15px`,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const selectInputColorBase = (
  theme: PluginAPI["theme"],
  color: string,
  hoverColor: string
): CSSRuleObject => {
  // inline SVGs need to be HTML escaped, so we use %23 instead of #
  const strokeColor = color.replace("#", "%23");
  return {
    ...selectInputBase(theme),
    color,
    border: `solid ${color} ${theme("borderWidth.2")}`,
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='${strokeColor}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
    "&:hover:not([disabled])": {
      backgroundColor: hoverColor,
    },
  };
};

export const matchSelect = (
  theme: PluginAPI["theme"],
  config: SelectConfig
): CSSRuleObject => {
  const color = getShadeValue(theme, config.color, config.base);
  const hoverColor = getShadeValue(theme, config.color, config.hover);
  return selectInputColorBase(theme, color, hoverColor);
};

export const selectInputStyles = (theme: PluginAPI["theme"]): CSSRuleObject => {
  const selectColor = getShadeValue(
    theme,
    theme("sugarFormControls.selectColorFamily"),
    theme("sugarFormControls.selectColorShade")
  );
  // inline SVGs need to be HTML escaped, so we use %23 instead of #
  const strokeColor = selectColor.replace("#", "%23");
  return {
    ...inputBase(theme),
    paddingRight: theme("spacing.9"),
    paddingLeft: theme("spacing.3"),
    fontWeight: theme("fontWeight.bold"),
    color: selectColor,
    backgroundRepeat: "no-repeat",
    backgroundColor: theme("colors.white"),
    border: `solid ${selectColor} ${theme("borderWidth.2")}`,
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='${strokeColor}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
    backgroundPosition: `right 12px center`,
    backgroundSize: `20px 15px`,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
};
