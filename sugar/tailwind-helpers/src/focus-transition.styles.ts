import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

import { getShadeValue } from "./color-helpers";

export const focusTransition = (theme: PluginAPI["theme"]): CSSRuleObject => {
  return {
    "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-ring-offset-width": "2px",
    "--tw-ring-offset-color": "transparent",
    "--tw-ring-color": "transparent",
    "--sugar-ring-width": theme("sugarFocusStyles.initialRingWidth"),
    "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
    "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(var(--sugar-ring-width) + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
    boxShadow: `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,
  };
};

export const focusVisibleTransition = (
  theme: PluginAPI["theme"]
): CSSRuleObject => {
  return {
    "--tw-ring-offset-color": theme("sugarFocusStyles.focusOffsetColor"),
    "--tw-ring-color": getShadeValue(
      theme,
      theme("sugarFocusStyles.focusColorFamily"),
      theme("sugarFocusStyles.focusShade")
    ),
    "--sugar-ring-width": theme("ringWidth.DEFAULT"),
    transitionProperty: theme("transitionProperty.DEFAULT"),
    transitionDuration: theme("transitionDuration.150"),
    transitionTimingFunction: theme("transitionTimingFunction.out"),
    outline: "none",
  };
};
