const withOpacity =
  (
    variable: string,
    type: "hsl" | "rgb"
  ): ((
    arg: Partial<{ opacityVariable: string; opacityValue: number }>
  ) => string) =>
  ({ opacityValue = "" }) =>
    opacityValue
      ? `${type}(var(${variable}), ${opacityValue})`
      : `var(${variable})`;

export const hslWithOpacity = (variable: string) =>
  withOpacity(variable, "hsl");

export const rgbWithOpacity = (variable: string) =>
  withOpacity(variable, "rgb");
