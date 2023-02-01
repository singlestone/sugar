export const COLORS = ["accent", "neutral", "destructive"] as const;
export type SugarColor = (typeof COLORS)[number];

export const VARIANTS = ["solid", "outline", "ghost"] as const;
export type SugarVariant = (typeof VARIANTS)[number];

export interface SugarColorVariant {
  color?: SugarColor;
  variant?: SugarVariant;
}
// primarily used for testing
export const ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS = [
  ...COLORS,
  undefined,
].flatMap<SugarColorVariant>((color) =>
  [...VARIANTS, undefined].map((variant) => ({ color, variant }))
);

export function isSugarColor(str: string | undefined): str is SugarColor {
  if (!str) {
    return false;
  }
  return COLORS.includes(str as SugarColor);
}

export function getSugarColor(
  str: string | undefined,
  fallback: SugarColor = "accent"
): SugarColor {
  return isSugarColor(str) ? str : fallback;
}

export function isSugarVariant(str: string | undefined): str is SugarVariant {
  if (!str) {
    return false;
  }
  return VARIANTS.includes(str as SugarVariant);
}

export function getSugarVariant(
  str: string | undefined,
  fallback: SugarVariant = "solid"
): SugarVariant {
  return isSugarVariant(str) ? str : fallback;
}
