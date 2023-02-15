import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const PasswordInput = forwardRef<
  HTMLInputElement,
  Omit<ComponentPropsWithoutRef<"input">, "checked" | "defaultChecked" | "type">
>(({ className, ...props }, ref) => (
  <input
    className={clsx("sugar-text-input", className)}
    ref={ref}
    type="password"
    {...props}
  />
));
PasswordInput.displayName = "PasswordInput";
