import { describe, expect, test } from "vitest";

import { createMockThemeFn } from "../../../tools/test-utils/src/create-mock-theme";
import { sugarDefaultFormConfig } from "../src";

const theme = createMockThemeFn({
  selectColorShade: "sugarDefaultColorShade",
  checkBoxRadioBorder: "colors.neutral.400",
  checkBoxRadioDimensions: "spacing.7",
});

describe("sugar-default-form-config", () => {
  test("disabledControlStyles", () => {
    expect(sugarDefaultFormConfig(theme)).toMatchSnapshot();
  });
});
