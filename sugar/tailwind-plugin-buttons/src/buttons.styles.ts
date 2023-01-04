import {
  focusTransition,
  focusVisibleTransition,
  getColor,
  getShadeValue,
  SugarColorShades,
  SugarMeasurements,
  SugarPluginColorOptions,
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
    cursor: "not-allowed",
    opacity: theme("opacity.50"),
  },
  ...focusTransition(theme),
  "&:focus-visible": {
    ...focusVisibleTransition(theme),
  },
});

const buttonPrimaryBase = (
  theme: PluginAPI["theme"],
  backgroundColor: ReturnType<typeof getShadeValue>,
  hoverColor: ReturnType<typeof getShadeValue>,
  activeColor: ReturnType<typeof getShadeValue>
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

const buttonMatchPrimary = (
  theme: PluginAPI["theme"],
  options: SugarPluginColorOptions = {}
): CSSRuleObject => {
  const color = getColor(theme, options);
  return buttonPrimaryBase(
    theme,
    getShadeValue(color, SugarColorShades.Primary),
    getShadeValue(color, SugarColorShades.PrimaryHover),
    getShadeValue(color, SugarColorShades.PrimaryActive)
  );
};

const buttonMatchPrimaryDarker = (
  theme: PluginAPI["theme"],
  options: SugarPluginColorOptions = {}
): CSSRuleObject => {
  const color = getColor(theme, options);
  return buttonPrimaryBase(
    theme,
    getShadeValue(color, SugarColorShades.PrimaryDarker),
    getShadeValue(color, SugarColorShades.PrimaryDarkerHover),
    getShadeValue(color, SugarColorShades.PrimaryDarkerActive)
  );
};

const buttonMatchPrimaryLighter = (
  theme: PluginAPI["theme"],
  options: SugarPluginColorOptions = {}
): CSSRuleObject => {
  const color = getColor(theme, options);
  return buttonPrimaryBase(
    theme,
    getShadeValue(color, SugarColorShades.PrimaryLighter),
    getShadeValue(color, SugarColorShades.PrimaryLighterHover),
    getShadeValue(color, SugarColorShades.PrimaryLighterActive)
  );
};

const buttonSecondaryBase = (
  theme: PluginAPI["theme"],
  color: ReturnType<typeof getShadeValue>,
  hoverBackgroundColor: ReturnType<typeof getShadeValue>,
  activeBackGroundColor: ReturnType<typeof getShadeValue>
): CSSRuleObject => ({
  ...buttonBase(theme),
  color,
  borderColor: color,
  backgroundColor: theme("colors.white"),
  "&:hover:not([disabled])": {
    backgroundColor: hoverBackgroundColor,
  },
  "&:active, &:focus:active": {
    backgroundColor: activeBackGroundColor,
  },
});

const buttonMatchSecondary = (
  theme: PluginAPI["theme"],
  options: SugarPluginColorOptions = {}
): CSSRuleObject => {
  const color = getColor(theme, options);
  return buttonSecondaryBase(
    theme,
    getShadeValue(color, SugarColorShades.Primary),
    getShadeValue(color, SugarColorShades.SecondaryHover),
    getShadeValue(color, SugarColorShades.SecondaryActive)
  );
};

const buttonMatchSecondaryDarker = (
  theme: PluginAPI["theme"],
  options: SugarPluginColorOptions = {}
): CSSRuleObject => {
  const color = getColor(theme, options);
  return buttonSecondaryBase(
    theme,
    getShadeValue(color, SugarColorShades.PrimaryDarker),
    getShadeValue(color, SugarColorShades.SecondaryHover),
    getShadeValue(color, SugarColorShades.SecondaryActive)
  );
};

const buttonMatchSecondaryLighter = (
  theme: PluginAPI["theme"],
  options: SugarPluginColorOptions = {}
): CSSRuleObject => {
  const color = getColor(theme, options);
  return buttonSecondaryBase(
    theme,
    getShadeValue(color, SugarColorShades.PrimaryLighter),
    getShadeValue(color, SugarColorShades.SecondaryHover),
    getShadeValue(color, SugarColorShades.SecondaryActive)
  );
};

const buttonMatchGhost = (
  theme: PluginAPI["theme"],
  options: SugarPluginColorOptions = {}
): CSSRuleObject => ({
  ...buttonMatchSecondary(theme, options),
  border: "none",
});

const iconButtonBase = (theme: PluginAPI["theme"]): CSSRuleObject => ({
  svg:{
    height: theme(SugarMeasurements.ButtonIconSize),
    width: theme(SugarMeasurements.ButtonIconSize)
  }
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
  padding: "0"
});

export {
  buttonBase,
  buttonIconOnly,
  buttonMatchGhost,
  buttonMatchPrimary,
  buttonMatchPrimaryDarker,
  buttonMatchPrimaryLighter,
  buttonMatchSecondary,
  buttonMatchSecondaryDarker,
  buttonMatchSecondaryLighter,
  buttonWithIcon
};
