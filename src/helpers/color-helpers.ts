import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

import { SugarColorFamilies } from "./sugar-color-families.enum";
import { SugarColorShades } from "./sugar-color-shades.enum";
import { SugarPluginColorOptions } from "./sugar-plugin-color-options.interface";

export const convertHexToRGBA = (
  hex: string,
  alphaVariable: string | number | null = null
): string => {
  let r = 0;
  let g = 0;
  let b = 0;

  // 3 digits
  if (hex.length === 4) {
    r = +("0x" + hex[1] + hex[1]);
    g = +("0x" + hex[2] + hex[2]);
    b = +("0x" + hex[3] + hex[3]);

    // 6 digits
  } else if (hex.length === 7) {
    r = +("0x" + hex[1] + hex[2]);
    g = +("0x" + hex[3] + hex[4]);
    b = +("0x" + hex[5] + hex[6]);
  }

  return alphaVariable
    ? `rgba(${r}, ${g}, ${b}, ${alphaVariable})`
    : `rgb(${r}, ${g}, ${b})`;
};

export const getShadeValue = (
  color: CSSRuleObject | string,
  shade: SugarColorShades,
  alphaVariable: string | number | null = null
) => {
  const hex = typeof color === "string" ? color : color[shade];
  return alphaVariable && typeof hex === "string"
    ? convertHexToRGBA(hex, alphaVariable)
    : hex;
};

export const getColor = (
  theme: PluginAPI["theme"],
  { colorFamily, value }: SugarPluginColorOptions = {}
): CSSRuleObject | string => {
  if (value) {
    return value;
  }
  const selector =
    colorFamily !== undefined ? colorFamily : SugarColorFamilies.ACCENT;
  return theme(selector);
};
