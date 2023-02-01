import { SugarColor, SugarVariant } from "../utils";

const colorVariantMapping: Record<SugarColor, Record<SugarVariant, string>> = {
  accent: {
    solid: "sugar-button-primary",
    outline: "sugar-button-secondary",
    ghost: "sugar-button-ghost",
  },
  destructive: {
    solid: "sugar-button-destructive",
    outline: "sugar-button-secondary-destructive",
    ghost: "sugar-button-ghost-destructive",
  },
  neutral: {
    solid: "sugar-button",
    outline: "sugar-button-neutral",
    ghost: "sugar-button-ghost-neutral",
  },
};

export function getClassNames(
  color: SugarColor,
  variant: SugarVariant
): string {
  return colorVariantMapping[color][variant];
}
