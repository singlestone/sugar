import { expect, it } from "vitest";

import { sum } from "./sum";

it("adds two numbers together", () => {
  expect(sum(1, 1)).toEqual(2);
});
