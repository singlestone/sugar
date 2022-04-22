import { TailwindColorFunction } from "tailwindcss/tailwind-config";

const withOpacity =
  (variable: string, type: "hsl" | "rgb"): TailwindColorFunction =>
  ({ opacityValue = "" }) =>
    opacityValue
      ? `${type}(var(${variable}), ${opacityValue})`
      : `var(${variable})`;

export const hslWithOpacity = (variable: string) =>
  withOpacity(variable, "hsl");

export const rgbWithOpacity = (variable: string) =>
  withOpacity(variable, "rgb");
