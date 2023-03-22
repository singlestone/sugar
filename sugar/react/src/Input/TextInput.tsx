import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const TextInput = forwardRef<
  HTMLInputElement,
  Omit<ComponentPropsWithoutRef<"input">, "checked" | "defaultChecked" | "type">
>(({ className, ...props }, ref) => (
  <input
    className={clsx("sugar-text-input", className)}
    ref={ref}
    type="text"
    {...props}
  />
));
TextInput.displayName = "TextInput";
