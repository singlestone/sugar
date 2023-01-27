import { describe, expect, test, vi } from "vitest";

import { focusTransition, sugarDefaultFocusConfig, defaultPluginConfig } from "../src";
import { createMockThemeFn } from "./mocks/create-mock-theme";

// const theme = vi.fn().mockImplementation((sugarFocusStyles) => {
//   if (sugarFocusStyles) {
//     return sugarDefaultFocusConfig.initialRingWidth;
//   }
//   return undefined;
// });

const theme = createMockThemeFn(
  {
    "--sugar-ring-width": "sugarFocusStyles.initialRingWidth" // value
  }, defaultPluginConfig);

describe("focus-transition styles", () => {
  test("focusTransition", () => {
    expect(focusTransition(theme)).toMatchSnapshot();
  });

  test.todo("focusVisibleTransition");
})

