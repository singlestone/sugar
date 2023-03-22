import { SugarPluginComponent } from "@singlestone/tailwind-helpers-sugar";

import { textArea, textInput } from "./inputs.styles";
import { matchSelect } from "./select-input.styles";

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
    [`.${prefix}-textarea`]: textArea(theme),
  });
};
