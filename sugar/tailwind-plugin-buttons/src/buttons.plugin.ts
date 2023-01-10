import {
  createSugarPlugin,
  type SugarPluginComponent,
  type SugarTailwindPlugin,
} from "@singlestone/tailwind-helpers-sugar";

import * as Styles from "./buttons.styles";

const sugarPillButtons: SugarPluginComponent = (
  { addComponents, matchComponents, theme },
  { prefix }
) => {
  matchComponents(
    {
      [`${prefix}-button`]: (value) => Styles.buttonMatch(theme, value),
    },
    { values: theme("sugarButtons") }
  );
  addComponents({
    [`.${prefix}-button-with-icon`]: Styles.buttonWithIcon(theme),
    [`.${prefix}-button-icon-only`]: Styles.buttonIconOnly(theme),
  });
};

export const sugarButtonsComponents = [sugarPillButtons];
export const sugarButtonsPlugin: SugarTailwindPlugin = createSugarPlugin(
  sugarButtonsComponents
);
