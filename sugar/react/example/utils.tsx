import { SugarColor, SugarVariant } from "~/index";

export const getButtonDisplayValue = (
  color: SugarColor | undefined,
  variant: SugarVariant | undefined
) => {
  const parts: string[] = [];
  if (color) {
    parts.push(color);
  }
  if (variant) {
    parts.push(variant);
  }
  return [...parts, "button"].join(" ");
};
