import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

import {
  checkboxRadioAfter,
  checkboxRadioBase,
  checkboxRadioChecked,
} from "./checkbox_and_radio_base.styles";

export const radioStyles = (theme: PluginAPI["theme"]): CSSRuleObject => ({
  ...checkboxRadioBase(theme),
  borderRadius: theme("borderRadius.full"),

  "&:after": {
    ...checkboxRadioAfter(theme),
    width: "100%",
    height: "100%",
    borderRadius: theme("borderRadius.full"),
    backgroundColor: theme("colors.white"),
    opacity: "0",
    transform: "scale(1)",
  },

  "&:checked": {
    ...checkboxRadioChecked(theme),
    "&:after": {
      transform: "scale(0.375)",
      opacity: "1",
    },
  },

  "&:checked, &:checked + label": {
    cursor: "default",
  },
});
