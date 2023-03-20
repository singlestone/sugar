export interface SugarButtonColorConfig {
  base: string;
  active: string;
  hover: string;
}

export interface SugarButtonGhostConfig {
  base: string;
}

export interface SugarButtonConfig {
  color: string;
  variants: {
    ghost: SugarButtonGhostConfig;
    outline: SugarButtonColorConfig;
    solid: SugarButtonColorConfig;
  }
}
