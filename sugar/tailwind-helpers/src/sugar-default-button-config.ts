import { SugarButtonConfig } from "./sugar-button-config.interface";

export const sugarDefaultButtonConfig: { [key: string]: SugarButtonConfig } = {
  accent: {
    color: "accent",
    variants: {
      ghost: {
        base: "600",
      },
     outline: {
        base: "600",
        active: "200",
        hover: "50",
      },
      solid: {
        base: "600",
        active: "800",
        hover: "700",
      }
    }
  },
  destructive: {
    color: "destructive",
    variants: {
      ghost: {
        base: "600",
      },
      outline: {
        base: "600",
        active: "200",
        hover: "50",
      },
      solid: {
        base: "600",
        active: "800",
        hover: "700",
      }
    }
  },
  neutral: {
    color: "neutral",
    variants: {
      ghost: {
        base: "600",
      },
      outline: {
        base: "600",
        active: "200",
        hover: "50",
      },
      solid: {
        base: "600",
        active: "800",
        hover: "700",
      }
    }
  }
};
