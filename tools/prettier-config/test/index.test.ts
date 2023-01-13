import { expect, it } from "vitest";

import prettierConfig from "../src";

it("exports an array of plugins", () => {
  expect(prettierConfig.plugins).toBeDefined();
});
