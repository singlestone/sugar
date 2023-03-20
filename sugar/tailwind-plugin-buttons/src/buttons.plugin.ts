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
  addComponents({
    [`.${prefix}-button`]: Styles.buttonBase(theme),
    [`.${prefix}-ghost`]: Styles.buttonGhost(),
    [`.${prefix}-outline`]: Styles.buttonOutline(theme),
    [`.${prefix}-solid`]: Styles.buttonSolid(theme),
    [`.${prefix}-button-with-icon`]: Styles.buttonWithIcon(theme),
    [`.${prefix}-button-icon-only`]: Styles.buttonIconOnly(theme),
  });
  matchComponents(
    {
      [`${prefix}`]: (value) => Styles.buttonColorMatch(theme, value),
    },
    { values: theme("sugarButtons") }
  );
};

export const sugarButtonsComponents = [sugarPillButtons];
export const sugarButtonsPlugin: SugarTailwindPlugin = createSugarPlugin(
  sugarButtonsComponents
);
