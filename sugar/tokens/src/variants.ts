/**
 * List of all variant descriptors used throughout Sugar.
 */
export const VARIANTS = ["solid", "outline", "ghost"] as const;

/**
 * Type union variant of {@link VARIANTS} used to describe acceptable inputs.
 */
export type SugarVariant = (typeof VARIANTS)[number];

/**
 * Type predicate used for determining if a given value is a {@link SugarVariant}.
 */
export const isSugarVariant = (value: unknown): value is SugarVariant => {
  if (!value || typeof value !== "string") {
    return false;
  }
  return VARIANTS.includes(value as SugarVariant);
};

/**
 * Attempts to convert the given string value to a {@link SugarVariant}, returning the given fallback
 * if unable to do so. Returns "solid" if no fallback is given.
 */
export const getSugarVariant = (
  value: unknown,
  fallback: SugarVariant = "solid"
): SugarVariant => {
  return isSugarVariant(value) ? value : fallback;
};
