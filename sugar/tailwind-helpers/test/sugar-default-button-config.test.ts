import { describe, expect, test } from "vitest";

import { sugarDefaultButtonConfig } from "../src";

describe("sugar default button config", () => {
  test("sugarDefaultButtonConfig", () => {
    expect(sugarDefaultButtonConfig).toMatchSnapshot();
  });
});
