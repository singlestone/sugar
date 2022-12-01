import { KeyValuePair } from "tailwindcss/types/config";
import { getShadeValue } from "./color-helpers";
import { SugarColorShades } from "./sugar-color-shades.enum";

export interface FocusTransitionOptions {
  accentColors?: KeyValuePair;
  initialRingWidth?: string | number;
  offsetColor?: string;
}

export interface FocusVisibleTransitionOptions {
  accentColors?: KeyValuePair;
  offsetColor?: string;
}

interface TransitionConfig {
  initialRingWidth: string | number;
}

interface FocusVisibleTransitionConfig {
  accentColors: KeyValuePair;
  offsetColor: string;
}

const getDefaultTransitionOptions = (theme: any): TransitionConfig => ({
  initialRingWidth: "30px",
});

const getDefaultFocusVisibleTransitionOptions = (
  theme: any
): FocusVisibleTransitionConfig => ({
  accentColors: theme("colors.blue"),
  offsetColor: theme("colors.white"),
});

export const focusTransition = (
  theme: any,
  options?: FocusTransitionOptions | undefined
) => {
  const ftOptions = { ...getDefaultTransitionOptions(theme), ...options };
  return {
    "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-ring-offset-width": "2px",
    "--tw-ring-offset-color": "transparent",
    "--tw-ring-color": "transparent",
    "--sugar-ring-width": ftOptions.initialRingWidth,
    "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
    "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(var(--sugar-ring-width) + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
    boxShadow: `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,
  };
};

export const focusVisibleTransition = (
  theme: any,
  options?: FocusVisibleTransitionOptions | undefined
) => {
  const fvtOptions = {
    ...getDefaultFocusVisibleTransitionOptions(theme),
    ...options,
  };
  return {
    "--tw-ring-offset-color": fvtOptions.offsetColor,
    "--tw-ring-color": getShadeValue(
      fvtOptions.accentColors,
      SugarColorShades.Primary
    ),
    "--sugar-ring-width": theme("ringWidth.DEFAULT"),
    transitionProperty: theme("transitionProperty.DEFAULT"),
    transitionDuration: theme("transitionDuration.150"),
    transitionTimingFunction: theme("transitionTimingFunction.out"),
    outline: "none",
  };
};
