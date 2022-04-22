import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import { TailwindColorGroup } from "tailwindcss/tailwind-config";
import { ButtonsPluginOptions } from "./buttons-plugin-options.interface";
import * as Styles from "./buttons.styles";

const defaultOptions: ButtonsPluginOptions = {
  neutralColors: colors.gray,
  accentColors: colors.blue,
  prefix: "sugar",
};

export const sugarButtonsPlugin = plugin.withOptions<ButtonsPluginOptions>(
  (options: ButtonsPluginOptions | undefined) => {
    return ({ addComponents, matchComponents, theme }) => {
      const pluginOptions = { ...defaultOptions, ...options };
      const prefix = options?.prefix ? options.prefix : defaultOptions.prefix;
      addComponents({
        [`.${prefix}-btn`]: Styles.buttonBase(theme, pluginOptions),
        [`.${prefix}-btn-primary`]: Styles.buttonMatchPrimary(
          theme,
          pluginOptions.accentColors,
          pluginOptions
        ),
        [`.${prefix}-btn-destructive`]: Styles.buttonMatchPrimary(
          theme,
          colors.red,
          pluginOptions
        ),
        [`.${prefix}-btn-secondary`]: Styles.buttonMatchSecondary(
          theme,
          pluginOptions.accentColors,
          pluginOptions
        ),
        [`.${prefix}-btn-secondary-destructive`]: Styles.buttonMatchSecondary(
          theme,
          colors.red,
          pluginOptions
        ),
        [`.${prefix}-btn-neutral`]: Styles.buttonMatchSecondaryLighter(
          theme,
          pluginOptions.neutralColors,
          pluginOptions
        ),
        [`.${prefix}-btn-ghost`]: Styles.buttonMatchGhost(
          theme,
          pluginOptions.accentColors,
          pluginOptions
        ),
      });

      matchComponents(
        {
          [`${prefix}-btn-filled`]: (value: TailwindColorGroup | string) =>
            Styles.buttonMatchPrimary(theme, value, pluginOptions),
          [`${prefix}-btn-darker-filled`]: (
            value: TailwindColorGroup | string
          ) => Styles.buttonMatchPrimaryDarker(theme, value, pluginOptions),
          [`${prefix}-btn-lighter-filled`]: (
            value: TailwindColorGroup | string
          ) => Styles.buttonMatchPrimaryLighter(theme, value, pluginOptions),
          [`${prefix}-btn-outlined`]: (value: TailwindColorGroup | string) =>
            Styles.buttonMatchSecondary(theme, value, pluginOptions),
          [`${prefix}-btn-darker-outlined`]: (
            value: TailwindColorGroup | string
          ) => Styles.buttonMatchSecondaryDarker(theme, value, pluginOptions),
          [`${prefix}-btn-lighter-outlined`]: (
            value: TailwindColorGroup | string
          ) => Styles.buttonMatchSecondaryLighter(theme, value, pluginOptions),
        },
        { values: theme("colors") }
      );
    };
  }
);
