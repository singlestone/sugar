import { expect, test } from "vitest";

import { sugarDefaultFocusConfig } from "../src";

test("sugarDefaultFocusConfig", () => {
  expect(sugarDefaultFocusConfig).toMatchSnapshot();
});
