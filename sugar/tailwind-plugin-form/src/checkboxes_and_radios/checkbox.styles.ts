import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

import {
  checkboxRadioAfter,
  checkboxRadioBase,
  checkboxRadioBefore,
  checkboxRadioChecked,
  checkboxRadioHover,
  checkboxRadioLabel,
} from "./checkbox_and_radio_base.styles";

export const checkboxStyles = (theme: PluginAPI["theme"]): CSSRuleObject => ({
  ...checkboxRadioBase(theme),
  borderRadius: theme("borderRadius.DEFAULT"),
  "&:hover:not(:checked):not(:disabled)": {
    ...checkboxRadioHover(theme),
  },
  "&::before": {
    ...checkboxRadioBefore(theme),
  },
  "&::after": {
    ...checkboxRadioAfter(theme),
    opacity: "0",
    width: "8px",
    height: "14px",
    border: `3px solid ${theme("colors.white")}`,
    borderTop: "0",
    borderLeft: "0",
    left: "10px",
    top: "4px",
    transform: "rotate(20deg)",
  },
  "&:checked": {
    ...checkboxRadioChecked(theme),
    "&::after": {
      transform: "rotate(45deg)",
      opacity: "1",
    },
  },

  "& + label": {
    ...checkboxRadioLabel(theme),
  },
});
