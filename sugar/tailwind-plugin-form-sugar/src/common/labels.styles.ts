import { convertHexToRGBA } from "@singlestone/tailwind-helpers-sugar";

export const labelBase = (theme: any) => {
  return {
    display: "block",
    border: 0,
    color: convertHexToRGBA(theme("colors.black"), "0.6"),
    lineHeight: theme("lineHeight.tight"),
    letterSpacing: theme("letterSpacing.wider"),
    fontSize: theme("fontSize.sm"),
    marginBottom: theme("spacing.1"),
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  };
};
