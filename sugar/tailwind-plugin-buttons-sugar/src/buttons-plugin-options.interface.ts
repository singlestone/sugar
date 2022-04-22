import { TailwindColorGroup } from "tailwindcss/tailwind-config";

export interface ButtonsPluginOptions {
  neutralColors: TailwindColorGroup;
  accentColors: TailwindColorGroup;
  prefix?: string;
}
