import { COLORS, SugarColor } from "./colors";
import { SugarVariant, VARIANTS } from "./variants";

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
