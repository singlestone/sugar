import { SugarPluginComponent } from "@singlestone/tailwind-helpers-sugar";

import { inputBase } from "./inputs.styles";

export const sugarTextInput: SugarPluginComponent = (
  { addComponents, theme },
    {prefix}
) => {
  addComponents({
    [`.${prefix}-text-input`]: inputBase(theme),
  });
};
