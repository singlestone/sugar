import { SugarColor } from "@singlestone/sugar-tokens";

export interface SelectConfig {
  color: SugarColor;
  base: string;
  hover: string;
}

export const defaultSelectConfig: Record<SugarColor, SelectConfig> = {
  accent: {
    color: "accent",
    base: "600",
    hover: "100",
  },
  neutral: {
    color: "neutral",
    base: "600",
    hover: "100",
  },
  destructive: {
    color: "destructive",
    base: "600",
    hover: "100",
  },
};
