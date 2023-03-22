import clsx from "clsx";
import { ReactNode } from "react";

interface HasChildren {
  children: ReactNode;
}

interface PanelRootProps extends HasChildren {
  className?: string;
}
export const PanelRoot = ({ children, className }: PanelRootProps) => (
  <section className={clsx("flex flex-col flex-1 gap-1", className)}>
    {children}
  </section>
);

interface PanelHeadingProps extends HasChildren {
  className?: string;
}
export const PanelHeading = ({ children, className }: PanelHeadingProps) => (
  <h1
    className={clsx(
      "flex-initial inline-block text-left text-base text-black text-lg tracking-wider leading-tight",
      className
    )}
  >
    {children}
  </h1>
);

interface PanelBodyProps extends HasChildren {
  className?: string;
  direction?: "col" | "row";
  itemAlignment?: "start" | "end" | "center" | "baseline" | "stretch";
}
export const PanelBody = ({
  className,
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
      },
      className
    )}
  >
    {children}
  </div>
);
