import { SugarButtonConfig } from "./sugar-button-config.interface";

export const sugarDefaultButtonConfig: { [key: string]: SugarButtonConfig } = {
  primary: {
    type: "filled",
    color: "accent",
    base: "600",
    active: "800",
    hover: "700",
  },
  secondary: {
    type: "outlined",
    color: "accent",
    base: "600",
    active: "200",
    hover: "50",
  },
  ghost: {
    type: "ghost",
    color: "accent",
    base: "600",
    active: "200",
    hover: "50",
  },
  destructive: {
    type: "filled",
    color: "destructive",
    base: "600",
    active: "800",
    hover: "700",
  },
  "secondary-destructive": {
    type: "outlined",
    color: "destructive",
    base: "600",
    active: "200",
    hover: "50",
  },
  "ghost-destructive": {
    type: "ghost",
    color: "destructive",
    base: "600",
    active: "200",
    hover: "50",
  },
  neutral: {
    type: "outlined",
    color: "neutral",
    base: "600",
    active: "200",
    hover: "50",
  },
  "ghost-neutral": {
    type: "ghost",
    color: "neutral",
    base: "600",
    active: "200",
    hover: "50",
  },
};
