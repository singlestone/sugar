import { expect, it } from "vitest";

import { sugarComponents } from "./plugin";

it("exports 2 plugins", () => {
  expect(sugarComponents.length).toEqual(2);
});
