import { expect, it } from "vitest";

import { sugarComponents } from "../src";

it("exports 2 plugins", () => {
  expect(sugarComponents.length).toEqual(3);
});
