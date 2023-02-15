import clsx from "clsx";
import { ReactNode } from "react";

interface HasChildren {
  children: ReactNode;
}

export const PanelRoot = ({ children }: HasChildren) => (
  <div className="flex flex-col flex-1">{children}</div>
);

export const PanelHeading = ({ children }: HasChildren) => (
  <h1 className="flex-initial inline-block text-left text-base text-black text-lg tracking-wider leading-tight">
    {children}
  </h1>
);

interface PanelBodyProps extends HasChildren {
  direction?: "col" | "row";
  itemAlignment?: "start" | "end" | "center" | "baseline" | "stretch";
}
export const PanelBody = ({
  children,
  direction = "col",
  itemAlignment = "center",
}: PanelBodyProps) => (
  <div
    className={clsx(
      "flex flex-1 gap-3 bg-white rounded-md overflow-hidden p-3 justify-center",
      {
        "flex-col": direction === "col",
        "flex-row": direction === "row",
      },
      {
        "items-start": itemAlignment === "start",
        "items-end": itemAlignment === "end",
        "items-center": itemAlignment === "center",
        "items-baseline": itemAlignment === "baseline",
        "items-stretch": itemAlignment === "stretch",
      }
    )}
  >
    {children}
  </div>
);
