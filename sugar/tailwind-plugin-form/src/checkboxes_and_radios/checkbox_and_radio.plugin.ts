import { SugarPluginComponent } from "@singlestone/tailwind-helpers-sugar";

import { checkboxStyles } from "./checkbox.styles";
import { radioStyles } from "./radio_buttons.styles";

export const sugarCheckboxAndRadio: SugarPluginComponent = (
  { addComponents, theme },
  { prefix }
) => {
  addComponents({
    [`.${prefix}-checkbox`]: checkboxStyles(theme),
    [`.${prefix}-radio`]: radioStyles(theme),
  });
};
