import { TailwindColorGroup } from "tailwindcss/tailwind-config";
import { getShadeValue } from "./color-helpers";
import { SugarColorShades } from "./sugar-color-shades.enum";

export interface FocusTransitionOptions {
  accentColors?: TailwindColorGroup;
  initialRingWidth?: string | number;
  offsetColor?: string;
}

interface TransitionConfig {
  accentColors: TailwindColorGroup;
  initialRingWidth: string | number;
  offsetColor: string;
}

const getDefaultOptions = (theme: any): TransitionConfig => ({
  accentColors: theme("colors.blue"),
  initialRingWidth: "30px",
  offsetColor: theme("colors.white"),
});

export const focusTransition = (
  theme: any,
  options: FocusTransitionOptions | undefined
) => {
  const ftOptions = { ...getDefaultOptions(theme), ...options };
  return {
    "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
    "--tw-ring-offset-width": "2px",
    "--tw-ring-offset-color": "transparent",
    "--tw-ring-color": "transparent",
    "--sugar-ring-width": ftOptions.initialRingWidth,
    "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
    "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(var(--sugar-ring-width) + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
    boxShadow: `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,
    "&:focus-visible": {
      "--tw-ring-offset-color": ftOptions.offsetColor,
      "--tw-ring-color": getShadeValue(
        ftOptions.accentColors,
        SugarColorShades.Primary
      ),
      "--sugar-ring-width": theme("ringWidth.DEFAULT"),
      transitionProperty: theme("transitionProperty.DEFAULT"),
      transitionDuration: theme("transitionDuration.150"),
      transitionTimingFunction: theme("transitionTimingFunction.out"),
      outline: "none",
    },
  };
};
