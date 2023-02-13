import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const Label = forwardRef<
  HTMLLabelElement,
  ComponentPropsWithoutRef<"label">
>(({ className, ...props }, ref) => (
  <label
    className={clsx("sugar-input-label", className)}
    ref={ref}
    {...props}
  />
));
Label.displayName = "Label";
