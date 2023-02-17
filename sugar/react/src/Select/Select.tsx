import { getSugarColor, SugarColor } from "@singlestone/sugar-tokens";
import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

import { getClassNames } from "./theme";

type SelectProps = Omit<
  ComponentPropsWithoutRef<"select">,
  "defaultChecked" | "color"
> & {
  color?: SugarColor;
  vapor?: boolean;
};
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, color, vapor, ...props }, ref) => (
    <select
      className={clsx(
        getClassNames(getSugarColor(color), vapor ?? false),
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Select.displayName = "Select";
