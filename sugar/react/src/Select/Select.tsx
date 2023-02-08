import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const Select = forwardRef<
  HTMLSelectElement,
  ComponentPropsWithoutRef<"select">
>(({ className, ...props }, ref) => (
  <select
    className={clsx("sugar-select-input", className)}
    ref={ref}
    {...props}
  />
));
Select.displayName = "Select";
