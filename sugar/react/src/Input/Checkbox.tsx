import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

type CheckboxProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "defaultValue" | "type" | "value"
>;
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <input
      className={clsx("sugar-checkbox", className)}
      ref={ref}
      type="checkbox"
      {...props}
    />
  )
);
Checkbox.displayName = "Checkbox";
