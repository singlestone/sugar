import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const Legend = forwardRef<
  HTMLLegendElement,
  ComponentPropsWithoutRef<"legend">
>(({ className, ...props }, ref) => (
  <legend
    className={clsx("sugar-input-label", className)}
    ref={ref}
    {...props}
  />
));
Legend.displayName = "Legend";
