import { SugarPluginComponent } from "@singlestone/tailwind-helpers-sugar";

import * as LabelStyles from "./labels.styles";

export const sugarFormsCommon: SugarPluginComponent = (
  { addComponents, theme },
  { prefix }
) => {
  addComponents({
    [`.${prefix}-input-label`]: LabelStyles.labelBase(theme),
  });
};
