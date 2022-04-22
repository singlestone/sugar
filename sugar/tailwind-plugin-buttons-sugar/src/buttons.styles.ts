import {
  focusTransition,
  getShadeValue,
  SugarColorShades,
  SugarMeasurements,
} from "@singlestone/tailwind-helpers-sugar";
import { TailwindColorGroup } from "tailwindcss/tailwind-config";
import { ButtonsPluginOptions } from "./buttons-plugin-options.interface";

const buttonBase = (theme: any, options: ButtonsPluginOptions) => ({
  display: "block",
  margin: theme("spacing.0"),
  padding: `0 ${theme("spacing.9")}`,
  height: theme(SugarMeasurements.FormControlHeight),
  width: "auto",
  fontSize: theme("fontSize.lg"),
  fontWeight: theme("fontWeight.bold"),
  letterSpacing: theme("letterSpacing.wide"),
  lineHeight: theme("lineHeight.4"),
  borderRadius: theme("borderRadius.md"),
  borderWidth: theme("borderWidth.2"),
  borderStyle: "solid",
  transitionProperty: theme("transitionProperty.colors"),
  transitionTimingFunction: theme("transitionTimingFunction.out"),
  transitionDuration: theme("transitionDuration.150"),
  "&:disabled": {
    cursor: "not-allowed",
    opacity: theme("opacity.50"),
  },
  ...focusTransition(theme, { accentColors: options.accentColors }),
});

const buttonPrimaryBase = (
  theme: any,
  options: ButtonsPluginOptions,
  backgroundColor: string,
  hoverColor: string,
  activeColor: string
) => ({
  ...buttonBase(theme, options),
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
  value: TailwindColorGroup | string,
  options: ButtonsPluginOptions
) =>
  buttonPrimaryBase(
    theme,
    options,
    getShadeValue(value, SugarColorShades.Primary),
    getShadeValue(value, SugarColorShades.PrimaryHover),
    getShadeValue(value, SugarColorShades.PrimaryActive)
  );

const buttonMatchPrimaryDarker = (
  theme: any,
  value: TailwindColorGroup | string,
  options: ButtonsPluginOptions
) =>
  buttonPrimaryBase(
    theme,
    options,
    getShadeValue(value, SugarColorShades.PrimaryDarker),
    getShadeValue(value, SugarColorShades.PrimaryDarkerHover),
    getShadeValue(value, SugarColorShades.PrimaryDarkerActive)
  );

const buttonMatchPrimaryLighter = (
  theme: any,
  value: TailwindColorGroup | string,
  options: ButtonsPluginOptions
) =>
  buttonPrimaryBase(
    theme,
    options,
    getShadeValue(value, SugarColorShades.PrimaryLighter),
    getShadeValue(value, SugarColorShades.PrimaryLighterHover),
    getShadeValue(value, SugarColorShades.PrimaryLighterActive)
  );

const buttonSecondaryBase = (
  theme: any,
  options: ButtonsPluginOptions,
  color: string,
  hoverBackgroundColor: string,
  activeBackGroundColor: string
) => ({
  ...buttonBase(theme, options),
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
  value: TailwindColorGroup | string,
  options: ButtonsPluginOptions
) =>
  buttonSecondaryBase(
    theme,
    options,
    getShadeValue(value, SugarColorShades.Primary),
    getShadeValue(value, SugarColorShades.SecondaryHover),
    getShadeValue(value, SugarColorShades.SecondaryActive)
  );

const buttonMatchSecondaryDarker = (
  theme: any,
  value: TailwindColorGroup | string,
  options: ButtonsPluginOptions
) =>
  buttonSecondaryBase(
    theme,
    options,
    getShadeValue(value, SugarColorShades.PrimaryDarker),
    getShadeValue(value, SugarColorShades.SecondaryHover),
    getShadeValue(value, SugarColorShades.SecondaryActive)
  );

const buttonMatchSecondaryLighter = (
  theme: any,
  value: TailwindColorGroup | string,
  options: ButtonsPluginOptions
) =>
  buttonSecondaryBase(
    theme,
    options,
    getShadeValue(value, SugarColorShades.PrimaryLighter),
    getShadeValue(value, SugarColorShades.SecondaryHover),
    getShadeValue(value, SugarColorShades.SecondaryActive)
  );

const buttonMatchGhost = (
  theme: any,
  value: TailwindColorGroup | string,
  options: ButtonsPluginOptions
) => ({
  ...buttonMatchSecondary(theme, value, options),
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
