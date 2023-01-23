import { getShadeValue } from "@singlestone/tailwind-helpers-sugar";
import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

import {
  checkboxRadioAfter,
  checkboxRadioBase,
  checkboxRadioChecked,
} from "./checkbox_and_radio_base.styles";

export const checkboxStyles = (theme: PluginAPI["theme"]): CSSRuleObject => ({
  ...checkboxRadioBase(theme),
  borderRadius: theme("borderRadius.DEFAULT"),
  "&:after": {
    ...checkboxRadioAfter(theme),
    opacity: "0",
    width: "8px",
    height: "14px",
    border: `3px solid ${theme("colors.white")}`,
    borderTop: "0",
    borderLeft: "0",
    left: "9px",
    top: "4px",
    transform: "rotate(20deg)",
  },
  "&:checked": {
    ...checkboxRadioChecked(theme),
    "&::after": {
      transform: "rotate(45deg)",
      opacity: "1",
    },
    "&:disabled:after": {
      borderColor: getShadeValue(theme, "neutral", "200"),
    },
  },
});
