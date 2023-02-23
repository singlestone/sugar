/**
 * List of all color descriptors used throughout Sugar.
 */
export const COLORS = ["accent", "neutral", "destructive"] as const;

/**
 * Type union variant of {@link COLORS} used to describe acceptable inputs.
 */
export type SugarColor = (typeof COLORS)[number];

/**
 * Type predicate used for determining if a given value is a {@link SugarColor}.
 */
export const isSugarColor = (value: unknown): value is SugarColor => {
  if (!value || typeof value !== "string") {
    return false;
  }
  return COLORS.includes(value as SugarColor);
};

/**
 * Attempts to convert the given value to a {@link SugarColor}, returning the given fallback
 * if unable to do so. Returns "accent" if no fallback is given.
 */
export const getSugarColor = (
  value: unknown,
  fallback: SugarColor = "accent"
): SugarColor => {
  return isSugarColor(value) ? value : fallback;
};
