import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  Omit<
    ComponentPropsWithoutRef<"textarea">,
    "checked" | "defaultChecked" | "type"
  >
>(({ className, ...props }, ref) => (
  <textarea
    className={clsx("sugar-textarea", className)}
    ref={ref}
    {...props}
  />
));
TextArea.displayName = "Textarea";
