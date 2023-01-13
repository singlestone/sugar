import {
  disabledControlStyles,
  focusTransition,
  focusVisibleTransition,
  getShadeValue,
  SugarMeasurements,
} from "@singlestone/tailwind-helpers-sugar";
import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

export const checkboxRadioBase = (
  theme: PluginAPI["theme"]
): CSSRuleObject => ({
  appearance: "none",
  height: theme("sugarFormControls.checkBoxRadioDimensions"),
  width: theme("sugarFormControls.checkBoxRadioDimensions"),
  outline: "none",
  display: "inline-block",
  verticalAlign: "top",
  position: "relative",
  margin: "0",
  cursor: "pointer",
  border: theme("sugarFormControls.checkBoxRadioBorder"),
  backgroundColor: theme("colors.white"),
  transition:
    "background-color 0.15s ease-out, border-color 0.15s ease-out, box-shadow 0.2s",
  "&:disabled, &:disabled + label": {
    ...disabledControlStyles(theme),
  },

  "&:disabled, &:disabled:checked": {
    backgroundColor: getShadeValue(theme, "neutral", "300"),
  },
  ...focusTransition(theme),
  "&:focus-visible": {
    ...focusVisibleTransition(theme),
    backgroundColor: theme("colors.white"),
  },
});

export const checkboxRadioBefore = (
  theme: PluginAPI["theme"]
): CSSRuleObject => ({
  content: "''",
  display: "block",
  left: "-1px",
  top: "-1px",
  position: "absolute",
  height: theme("sugarFormControls.checkBoxRadioDimensions"),
  width: theme("sugarFormControls.checkBoxRadioDimensions"),
});

export const checkboxRadioAfter = (
  theme: PluginAPI["theme"]
): CSSRuleObject => ({
  height: theme(SugarMeasurements.FormControlHeight),
  content: "''", // need to tell postcss to render an empty string
  display: "block",
  left: "0",
  top: "0",
  position: "absolute",
  transition: "transform 0.3s ease, opacity 0.15s ease-out",
  opacity: "0",
});

export const checkboxRadioChecked = (
  theme: PluginAPI["theme"]
): CSSRuleObject => {
  const color = getShadeValue(
    theme,
    theme("sugarFormControls.checkBoxRadioCheckedColorFamily"),
    theme("sugarFormControls.checkBoxRadioCheckedColorShade")
  );
  return {
    backgroundColor: color,
    transition:
      "transform 0.6s cubic-bezier(0.2, 0.85, 0.32, 1.2), opacity 0.15s ease-out",
    "&:not(:disabled)": {
      borderColor: color,
    },
  };
};

export const checkboxRadioHover = (
  theme: PluginAPI["theme"]
): CSSRuleObject => ({
  borderColor: getShadeValue(
    theme,
    theme("sugarFormControls.checkBoxRadioCheckedColorFamily"),
    theme("sugarFormControls.checkBoxRadioCheckedColorShade")
  ),
  backgroundColor: getShadeValue(
    theme,
    theme("sugarFormControls.checkBoxRadioCheckedColorFamily"),
    theme("sugarFormControls.checkBoxRadioHoverColorShade")
  ),
});

export const checkboxRadioLabel = (
  theme: PluginAPI["theme"]
): CSSRuleObject => ({
  fontSize: theme("fontSize.lg"),
  letterSpacing: theme("letterSpacing.wide"),
  lineHeight: theme("sugarFormControls.checkBoxRadioDimensions"),
  display: "inline-block",
  verticalAlign: "top",
  cursor: "pointer",
  userSelect: "none",
  padding: `0 ${theme("spacing.2")}`,
});