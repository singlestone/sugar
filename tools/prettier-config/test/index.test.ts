import { expect, it } from "vitest";

import { prettierConfigSugar } from "../src";

it("exports an array of plugins", () => {
  expect(prettierConfigSugar.plugins).toBeDefined();
});
