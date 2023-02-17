import { SugarColor } from "@singlestone/sugar-tokens";

const colorMapping: Record<SugarColor, string> = {
  accent: "sugar-select-accent",
  destructive: "sugar-select-destructive",
  neutral: "sugar-select-neutral",
};

export function getClassNames(color: SugarColor): string {
  return colorMapping[color];
}
