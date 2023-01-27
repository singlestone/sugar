import { describe, expect, test } from "vitest";

import { defaultPluginConfig,focusTransition } from "../src";
import { createMockThemeFn } from "./mocks/create-mock-theme";

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

