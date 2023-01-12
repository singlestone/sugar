import { SugarPluginComponent } from "@singlestone/tailwind-helpers-sugar";

import { checkboxStyles } from "./checkbox_and_radio.styles";
import { textInput } from "./inputs.styles";
import { selectInputStyles } from "./select-input.styles";

export const sugarInputs: SugarPluginComponent = (
  { addComponents, theme },
  { prefix }
) => {
  addComponents({
    [`.${prefix}-text-input`]: textInput(theme),
    [`.${prefix}-select-input`]: selectInputStyles(theme),
    [`.${prefix}-checkbox`]: checkboxStyles(theme),
  });
};
