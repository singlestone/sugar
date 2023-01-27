import { expect, test } from "vitest";

import { defaultPluginConfig, sugarDefaultFormConfig } from "../src";
import { createMockThemeFn } from "./mocks/create-mock-theme";

const theme = createMockThemeFn(
  {
    selectColorShade: "sugarDefaultColorShade",
    checkBoxRadioBorder: "colors.neutral.400",
    checkBoxRadioDimensions: "spacing.7",
  },
  defaultPluginConfig
);

test("sugarDefaultFormConfig", () => {
  expect(sugarDefaultFormConfig(theme)).toMatchSnapshot();
});
