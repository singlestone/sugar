import { expect, test } from "vitest";

import { defaultPluginConfig, sugarDefaultMeasurementsConfig } from "../src";
import { createMockThemeFn } from "./mocks/create-mock-theme";

const theme = createMockThemeFn(
  {
    formControlHeight: "spacing.10",
    buttonSize: "spacing.5",
  },
  defaultPluginConfig
);

test("sugarDefaultFormConfig", () => {
  expect(sugarDefaultMeasurementsConfig(theme)).toMatchSnapshot();
});
