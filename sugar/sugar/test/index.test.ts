import { expect, it } from "vitest";

import { sugarComponents } from "../src";

it("exports 4 plugins", () => {
  expect(sugarComponents.length).toEqual(4);
});
