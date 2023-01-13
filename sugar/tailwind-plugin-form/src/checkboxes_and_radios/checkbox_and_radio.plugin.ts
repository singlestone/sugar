import { SugarPluginComponent } from "@singlestone/tailwind-helpers-sugar";

import { checkboxStyles } from "./checkbox.styles";

export const sugarCheckboxAndRadio: SugarPluginComponent = (
  { addComponents, theme },
  { prefix }
) => {
  addComponents({
    [`.${prefix}-checkbox`]: checkboxStyles(theme),
  });
};
