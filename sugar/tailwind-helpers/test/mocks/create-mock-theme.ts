import { Config, CSSRuleObject } from "tailwindcss/types/config";
import { vi } from "vitest";

import { defaultPluginConfig } from "../../src";

export const createMockThemeFn = (
  mockTheme: CSSRuleObject,
  config: Partial<Config>
) => {
  return vi
    .fn()
    .mockImplementation(
      (value: string): CSSRuleObject | string | undefined | unknown => {

        for (const v of Object.values(mockTheme)) {
          const configTheme = config.theme;

          if (config == defaultPluginConfig) {
            for (const k of Object.keys(defaultPluginConfig.theme)) {
              let property, propertyValue = '';

              /*
                Check the theme is referencing a property with a value
                Example: theme("sugarFocusStyles.initialRingWidth")
              */
              if(value.includes(".")) {
                [property, propertyValue] = value.split('.');
              }

              /*
                If the key in defaultPluginConfig.theme matches...
                the property from the theme, get the value from the,
                property of the theme
              */
              // TODO: In the future, this should chain recursively.
              if(k == property) {
                return defaultPluginConfig.theme[k][propertyValue];
              }
            }
          }

          /*
            Return the value that matches the value provided by the mockTheme,
            if it does not exist, return the value.
          */
          if (v == value) {
            return configTheme?.[value] ? configTheme[value] : value;
          }
        }
        return undefined;
      }
    );
};
