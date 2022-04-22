import {
  hslWithOpacity,
  rgbWithOpacity,
} from "@singlestone/tailwind-helpers-sugar";
import { TailwindTheme } from "tailwindcss/tailwind-config";

export const theme: TailwindTheme = {
  extend: {
    colors: {
      "accent-color": hslWithOpacity("--accent-color-hsl"),
      "accent-color-light": hslWithOpacity("--accent-color-light"),
      "accent-color-lighter": hslWithOpacity("--accent-color-lighter"),
      "accent-color-very-light": hslWithOpacity("--accent-color-very-light"),
      "accent-color-dark": hslWithOpacity("--accent-color-dark"),
      "black-black": rgbWithOpacity("--black-black"),
      create: rgbWithOpacity("--create-color"),
      danger: rgbWithOpacity("--danger-color"),
      "danger-dark": rgbWithOpacity("--danger-color-dark"),
      "danger-translucent-base": rgbWithOpacity(
        "--danger-color-translucent-base"
      ),
      "gray-light": rgbWithOpacity("--light-gray"),
      "gray-medium": rgbWithOpacity("--medium-gray"),
      "gray-dark": rgbWithOpacity("--dark-gray"),
      "gray-darker": rgbWithOpacity("--darker-gray"),
      "pearl-light": rgbWithOpacity("--light-pearl"),
      "pearl-medium": rgbWithOpacity("--medium-pearl"),
      "pearl-mediumer": rgbWithOpacity("--mediumer-pearl"),
      "pearl-dark": rgbWithOpacity("--dark-pearl"),
      "pearl-darker": rgbWithOpacity("--darker-pearl"),
      "slate-black": rgbWithOpacity("--slate-black"),
      warning: rgbWithOpacity("--warning-color"),
      "white-white": rgbWithOpacity("--white-white"),
    },
    fontFamily: {
      sans: ["Lato", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
    opacity: {
      6: "0.06",
      12: "0.12",
      35: "0.35",
    },
    spacing: {
      2.6: "0.6563rem",
    },
    ringWidth: {
      "focus-start": "var(--focus-box-shadow-start)",
      "focus-end": "var(--focus-box-shadow-end)",
    },
    transitionDuration: {
      250: "250ms",
    },
    transitionProperty: {
      "input-focus": "background-color, border-color, color",
    },
  },
};
