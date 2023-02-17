import { SugarColor } from "@singlestone/sugar-tokens";

const colorMapping: Record<SugarColor, Record<"true" | "false", string>> = {
  accent: {
    true: "sugar-select-accent-vapor",
    false: "sugar-select-accent",
  },
  destructive: {
    true: "sugar-select-destructive-vapor",
    false: "sugar-select-destructive",
  },
  neutral: {
    true: "sugar-select-neutral-vapor",
    false: "sugar-select-neutral",
  },
};

export function getClassNames(color: SugarColor, vapor: boolean): string {
  return colorMapping[color][`${vapor}`];
}
