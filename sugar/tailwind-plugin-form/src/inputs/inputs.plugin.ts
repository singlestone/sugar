import { SugarPluginComponent } from "@singlestone/tailwind-helpers-sugar";

import { textInput } from "./inputs.styles";
import { selectInputStyles } from "./select-input.styles";

export const sugarTextInput: SugarPluginComponent = (
  { addComponents, theme },
  { prefix }
) => {
  addComponents({
    [`.${prefix}-text-input`]: textInput(theme),
    [`.${prefix}-select-input`]: selectInputStyles(theme),
  });
};
