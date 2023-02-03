import clsx from "clsx";
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  forwardRef,
} from "react";

import {
  getSugarColor,
  getSugarVariant,
  SugarColor,
  SugarVariant,
} from "../utils";
import { getClassNames } from "./theme";

interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color"> {
  color?: SugarColor;
  hasIcon?: boolean;
  iconOnly?: boolean;
  variant?: SugarVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, hasIcon, iconOnly, variant, ...others }, ref) => {
    const classes = clsx(
      getClassNames(getSugarColor(color), getSugarVariant(variant)),
      { "sugar-button-with-icon": hasIcon, "sugar-button-icon-only": iconOnly },
      className
    );

    return <button className={classes} ref={ref} {...others} />;
  }
);
Button.displayName = "Button";

export const ButtonWithIcon = ({
  ...props
}: Omit<ComponentPropsWithRef<typeof Button>, "iconOnly" | "hasIcon">) => {
  return <Button hasIcon {...props} />;
};

export const IconOnlyButton = ({
  ...props
}: Omit<ComponentPropsWithRef<typeof Button>, "iconOnly" | "hasIcon">) => {
  return <Button iconOnly {...props} />;
};
