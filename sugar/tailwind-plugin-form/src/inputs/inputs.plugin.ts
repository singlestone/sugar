import { SugarPluginComponent } from "@singlestone/tailwind-helpers-sugar";

import { textInput } from "./inputs.styles";
import { matchSelect, selectInputStyles } from "./select-input.styles";

export const sugarInputs: SugarPluginComponent = (
  { addComponents, matchComponents, theme },
  { prefix }
) => {
  matchComponents(
    {
      [`${prefix}-select`]: (value) => matchSelect(theme, value),
    },
    { values: theme("sugarFormControls.select") }
  );
  addComponents({
    [`.${prefix}-text-input`]: textInput(theme),
    [`.${prefix}-select-input`]: selectInputStyles(theme),
  });
};
