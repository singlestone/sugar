import { expect, test } from "vitest";

import { defaultPluginConfig, disabledControlStyles } from "../src";
import { createMockThemeFn } from "./mocks/create-mock-theme";

const theme = createMockThemeFn({ opacity: "opacity.50" }, defaultPluginConfig);

test("disabledControlStyles", () => {
  expect(disabledControlStyles(theme)).toMatchSnapshot();
});
