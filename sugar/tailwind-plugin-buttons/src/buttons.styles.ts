import {
  disabledControlStyles,
  focusTransition,
  focusVisibleTransition,
  getShadeValue,
  SugarButtonConfig,
  SugarMeasurements,
} from "@singlestone/tailwind-helpers-sugar";
import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

const buttonBase = (theme: PluginAPI["theme"]): CSSRuleObject => ({
  display: "block",
  margin: theme("spacing.0"),
  padding: `0 ${theme("spacing.9")}`,
  height: theme(SugarMeasurements.FormControlHeight),
  width: "auto",
  fontSize: theme("fontSize.lg"),
  fontWeight: theme("fontWeight.bold"),
  letterSpacing: theme("letterSpacing.wide"),
  lineHeight: theme("lineHeight.4"),
  borderRadius: theme("borderRadius.lg"),
  borderWidth: theme("borderWidth.2"),
  borderStyle: "solid",
  transitionProperty: theme("transitionProperty.colors"),
  transitionTimingFunction: theme("transitionTimingFunction.out"),
  transitionDuration: theme("transitionDuration.150"),
  "&:disabled": {
    ...disabledControlStyles(theme),
  },
  ...focusTransition(theme),
  "&:focus-visible": {
    ...focusVisibleTransition(theme),
  },
});

const buttonPrimaryBase = (
  theme: PluginAPI["theme"],
  backgroundColor: string,
  hoverColor: string,
  activeColor: string
): CSSRuleObject => ({
  ...buttonBase(theme),
  color: theme("colors.white"),
  backgroundColor: backgroundColor,
  borderWidth: theme("borderWidth.0"),
  "&:hover:not([disabled])": {
    backgroundColor: hoverColor,
  },
  "&:active, &:focus:active": {
    backgroundColor: activeColor,
  },
});

const buttonMatch = (
  theme: PluginAPI["theme"],
  value: SugarButtonConfig
): CSSRuleObject => {
  const styleFn: {
    [key: string]: (
      theme: PluginAPI["theme"],
      ...colors: string[]
    ) => CSSRuleObject;
  } = {
    filled: buttonPrimaryBase,
    outlined: buttonSecondaryBase,
    ghost: buttonGhostBase,
  };
  return value
    ? styleFn[value.type](
        theme,
        getShadeValue(theme, value.color, value.base),
        getShadeValue(theme, value.color, value.hover),
        getShadeValue(theme, value.color, value.active)
      )
    : {};
};

const buttonSecondaryBase = (
  theme: PluginAPI["theme"],
  baseColor: string,
  hoverColor: string,
  activeColor: string
): CSSRuleObject => ({
  ...buttonBase(theme),
  color: baseColor,
  borderColor: baseColor,
  backgroundColor: "transparent",
  "&:hover:not([disabled])": {
    backgroundColor: hoverColor,
  },
  "&:active, &:focus:active": {
    backgroundColor: activeColor,
  },
});
const buttonGhostBase = (
  theme: PluginAPI["theme"],
  baseColor: string,
  hoverColor: string,
  activeColor: string
) => ({
  ...buttonSecondaryBase(theme, baseColor, hoverColor, activeColor),
  border: "none",

  "&:not(.sugar-button-icon-only)": {
    padding: `0.375rem 0.125rem`,
    backgroundColor: "transparent",
    height: "auto",
    "&:active, &:focus:active": {
      backgroundColor: "transparent",
    },
    "&:hover:not([disabled])": {
      backgroundColor: "transparent",
      textDecoration: "underline",
      textDecorationThickness: "2px",
    },
  },
});

const iconButtonBase = (theme: PluginAPI["theme"]): CSSRuleObject => ({
  svg: {
    height: theme(SugarMeasurements.ButtonIconSize),
    width: theme(SugarMeasurements.ButtonIconSize),
  },
});
const buttonWithIcon = (theme: PluginAPI["theme"]): CSSRuleObject => ({
  display: "inline-flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "center",
  gap: theme("spacing.2"),
  alignItems: "center",
  ...iconButtonBase(theme),
});

const buttonIconOnly = (theme: PluginAPI["theme"]): CSSRuleObject => ({
  ...buttonWithIcon(theme),
  width: theme(SugarMeasurements.FormControlHeight),
  borderRadius: theme("borderRadius.full"),
  padding: "0",
});

export { buttonBase, buttonIconOnly, buttonMatch, buttonWithIcon };
