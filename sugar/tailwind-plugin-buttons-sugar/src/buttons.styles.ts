import {
  focusTransition,
  focusVisibleTransition,
  getColor,
  getShadeValue,
  SugarColorShades,
  SugarMeasurements,
  SugarPluginColorOptions,
} from "@singlestone/tailwind-helpers-sugar";

const buttonBase = (theme: any) => ({
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
  theme: any,
  backgroundColor: string,
  hoverColor: string,
  activeColor: string
) => ({
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
  theme: any,
  options: SugarPluginColorOptions = {}
) => {
  const color = getColor(theme, options);
  return buttonPrimaryBase(
    theme,
    getShadeValue(color, SugarColorShades.Primary),
    getShadeValue(color, SugarColorShades.PrimaryHover),
    getShadeValue(color, SugarColorShades.PrimaryActive)
  );
};

const buttonMatchPrimaryDarker = (
  theme: any,
  options: SugarPluginColorOptions = {}
) => {
  const color = getColor(theme, options);
  return buttonPrimaryBase(
    theme,
    getShadeValue(color, SugarColorShades.PrimaryDarker),
    getShadeValue(color, SugarColorShades.PrimaryDarkerHover),
    getShadeValue(color, SugarColorShades.PrimaryDarkerActive)
  );
};

const buttonMatchPrimaryLighter = (
  theme: any,
  options: SugarPluginColorOptions = {}
) => {
  const color = getColor(theme, options);
  return buttonPrimaryBase(
    theme,
    getShadeValue(color, SugarColorShades.PrimaryLighter),
    getShadeValue(color, SugarColorShades.PrimaryLighterHover),
    getShadeValue(color, SugarColorShades.PrimaryLighterActive)
  );
};

const buttonSecondaryBase = (
  theme: any,
  color: string,
  hoverBackgroundColor: string,
  activeBackGroundColor: string
) => ({
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
  theme: any,
  options: SugarPluginColorOptions = {}
) => {
  const color = getColor(theme, options);
  return buttonSecondaryBase(
    theme,
    getShadeValue(color, SugarColorShades.Primary),
    getShadeValue(color, SugarColorShades.SecondaryHover),
    getShadeValue(color, SugarColorShades.SecondaryActive)
  );
};

const buttonMatchSecondaryDarker = (
  theme: any,
  options: SugarPluginColorOptions = {}
) => {
  const color = getColor(theme, options);
  return buttonSecondaryBase(
    theme,
    getShadeValue(color, SugarColorShades.PrimaryDarker),
    getShadeValue(color, SugarColorShades.SecondaryHover),
    getShadeValue(color, SugarColorShades.SecondaryActive)
  );
};

const buttonMatchSecondaryLighter = (
  theme: any,
  options: SugarPluginColorOptions = {}
) => {
  const color = getColor(theme, options);
  return buttonSecondaryBase(
    theme,
    getShadeValue(color, SugarColorShades.PrimaryLighter),
    getShadeValue(color, SugarColorShades.SecondaryHover),
    getShadeValue(color, SugarColorShades.SecondaryActive)
  );
};

const buttonMatchGhost = (
  theme: any,
  options: SugarPluginColorOptions = {}
) => ({
  ...buttonMatchSecondary(theme, options),
  border: "none",
});

export {
  buttonBase,
  buttonMatchPrimary,
  buttonMatchPrimaryDarker,
  buttonMatchPrimaryLighter,
  buttonMatchSecondary,
  buttonMatchSecondaryDarker,
  buttonMatchSecondaryLighter,
  buttonMatchGhost,
};
