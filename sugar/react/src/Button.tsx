import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type ButtonVariant =
  | "destructive"
  | "secondary-destructive"
  | "ghost-destructive";
const buttonVariantToClassMapping: Record<ButtonVariant, string> = {
  "secondary-destructive": "sugar-button-secondary-destructive",
  destructive: "sugar-button-destructive",
  "ghost-destructive": "sugar-button-ghost-destructive",
};

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
}
export const Button = ({
  className,
  variant = "destructive",
  ...props
}: ButtonProps) => (
  <button
    className={clsx(buttonVariantToClassMapping[variant], className)}
    {...props}
  />
);
