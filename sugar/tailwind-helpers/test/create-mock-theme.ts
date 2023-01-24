import { Config, CSSRuleObject } from "tailwindcss/types/config";
import { vi } from "vitest";

export const createMockThemeFn = (
  mockTheme: CSSRuleObject,
  config: Partial<Config>
) => {
  console.log("hi");
  return vi
    .fn()
    .mockImplementation(
      (value: string): CSSRuleObject | string | undefined | unknown => {
        for (const v of Object.values(mockTheme)) {
          if (v == value) {
            const test = config.theme;
            return test?.[value] ? test[value] : value;
          }
        }
        return undefined;
      }
    );
};
