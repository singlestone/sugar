import { SugarColor, SugarVariant } from "@singlestone/sugar-tokens";
import clsx from "clsx";

const colorVariantMapping: Record<SugarColor, Record<SugarVariant, string>> = {
  accent: {
    solid: "sugar-solid sugar-accent",
    outline: "sugar-outline sugar-accent",
    ghost: "sugar-ghost sugar-accent",
  },
  destructive: {
    solid: "sugar-solid sugar-destructive",
    outline: "sugar-outline sugar-destructive",
    ghost: "sugar-ghost sugar-destructive",
  },
  neutral: {
    solid: "sugar-solid sugar-neutral",
    outline: "sugar-outline sugar-neutral",
    ghost: "sugar-ghost sugar-neutral",
  },
};

export function getClassNames(
  color: SugarColor,
  variant: SugarVariant
): string {
  // return colorVariantMapping[color][variant];
  return clsx(
    "sugar-button",
    colorVariantMapping[color][variant]
  )
}
