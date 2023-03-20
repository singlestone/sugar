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

const buttonSolid = (theme: PluginAPI["theme"]): CSSRuleObject => ({
  borderWidth: theme("borderWidth.0"),
});

const buttonOutline = (theme: PluginAPI["theme"]): CSSRuleObject => ({
  borderWidth: theme("borderWidth.2"),
});

const buttonGhost = (): CSSRuleObject => ({
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

const buttonColorMatch = (
  theme: PluginAPI["theme"],
  value: SugarButtonConfig
): CSSRuleObject => {
  console.log(value);
  if (value) {
    const { color, variants } = value;
    const { ghost, outline, solid } = variants;
    const outlineBaseColor = getShadeValue(theme, color, outline.base);
    return {
      "&.sugar-ghost": {
        color: getShadeValue(theme, color, ghost.base),
      },
      "&.sugar-outline": {
        color: outlineBaseColor,
        borderColor: outlineBaseColor,
        backgroundColor: "transparent",
        "&:hover:not([disabled])": {
          backgroundColor: getShadeValue(theme, color, outline.hover),
        },
        "&:active, &:focus:active": {
          backgroundColor: getShadeValue(theme, color, outline.active),
        },
      },
      "&.sugar-solid": {
        color: theme("colors.white"),
        backgroundColor: getShadeValue(theme, color, solid.base),
        borderWidth: theme("borderWidth.0"),
        "&:hover:not([disabled])": {
          backgroundColor: getShadeValue(theme, color, solid.hover),
        },
        "&:active, &:focus:active": {
          backgroundColor: getShadeValue(theme, color, solid.active),
        },
      },
    };
  }
  return {};
};

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

export {
  buttonBase,
  buttonColorMatch,
  buttonGhost,
  buttonIconOnly,
  buttonOutline,
  buttonSolid,
  buttonWithIcon,
};
