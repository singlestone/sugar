import {
  createSugarPlugin,
  SugarColorFamilies,
  SugarTailwindPlugin,
} from "@singlestone/tailwind-helpers-sugar";
import { KeyValuePair } from "tailwindcss/types/config";
import * as Styles from "./buttons.styles";

const sugarPillButtons = (
  { addComponents, matchComponents, theme }: any,
  prefix: string
) => {
  addComponents({
    [`.${prefix}-button`]: Styles.buttonBase(theme),
    [`.${prefix}-button-primary`]: Styles.buttonMatchPrimary(theme),
    [`.${prefix}-button-destructive`]: Styles.buttonMatchPrimary(theme, {
      colorFamily: SugarColorFamilies.DESTRUCTIVE,
    }),
    [`.${prefix}-button-secondary`]: Styles.buttonMatchSecondary(theme),
    [`.${prefix}-button-secondary-destructive`]: Styles.buttonMatchSecondary(
      theme,
      {
        colorFamily: SugarColorFamilies.DESTRUCTIVE,
      }
    ),
    [`.${prefix}-button-neutral`]: Styles.buttonMatchSecondaryLighter(theme, {
      colorFamily: SugarColorFamilies.NEUTRAL,
    }),
    [`.${prefix}-button-ghost`]: Styles.buttonMatchGhost(theme),
  });

  matchComponents(
    {
      [`${prefix}-button-filled`]: (value: KeyValuePair | string) =>
        Styles.buttonMatchPrimary(theme, { value }),
      [`${prefix}-button-darker-filled`]: (value: KeyValuePair | string) =>
        Styles.buttonMatchPrimaryDarker(theme, { value }),
      [`${prefix}-button-lighter-filled`]: (value: KeyValuePair | string) =>
        Styles.buttonMatchPrimaryLighter(theme, { value }),
      [`${prefix}-button-outlined`]: (value: KeyValuePair | string) =>
        Styles.buttonMatchSecondary(theme, { value }),
      [`${prefix}-button-darker-outlined`]: (value: KeyValuePair | string) =>
        Styles.buttonMatchSecondaryDarker(theme, { value }),
      [`${prefix}-button-lighter-outlined`]: (value: KeyValuePair | string) =>
        Styles.buttonMatchSecondaryLighter(theme, { value }),
    },
    { values: theme("colors") }
  );
};

export const sugarButtonsComponents = [sugarPillButtons];
export const sugarButtonsPlugin: SugarTailwindPlugin = createSugarPlugin(
  sugarButtonsComponents
);
