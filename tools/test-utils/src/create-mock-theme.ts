import { CSSRuleObject } from "tailwindcss/types/config";
import { vi } from "vitest";

import {
  defaultPluginConfig,
  SugarButtonConfig,
} from "../../../sugar/tailwind-helpers/src";

export const createMockThemeFn = (mockTheme: CSSRuleObject) =>
  vi
    .fn()
    .mockImplementation(
      (
        value: string
      ): CSSRuleObject | SugarButtonConfig | string | undefined | unknown => {
        for (const v of Object.values(mockTheme)) {
          if (v == value) {
            const test: { [key: string]: unknown } = defaultPluginConfig.theme;
            return test[value] ? test[value] : value;
          }
        }
        return undefined;
      }
    );
