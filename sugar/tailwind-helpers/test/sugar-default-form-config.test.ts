import { describe, expect, test } from "vitest";

import { defaultPluginConfig, sugarDefaultFormConfig } from "../src";
import { createMockThemeFn } from "./create-mock-theme";

const theme = createMockThemeFn(
  {
    selectColorShade: "sugarDefaultColorShade",
    checkBoxRadioBorder: "colors.neutral.400",
    checkBoxRadioDimensions: "spacing.7",
  },
  defaultPluginConfig
);

describe("sugar-default-form-config", () => {
  test("disabledControlStyles", () => {
    expect(sugarDefaultFormConfig(theme)).toMatchSnapshot();
  });
});
