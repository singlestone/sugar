import { expect, test } from "vitest";

import { sugarDefaultButtonConfig } from "../src";

test("sugarDefaultButtonConfig", () => {
  expect(sugarDefaultButtonConfig).toMatchSnapshot();
});
