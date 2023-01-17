import { describe, expect, test } from "vitest";

import { sugarDefaultFocusConfig } from "../src";

describe("sugar default focus config", () => {
  test("sugarDefaultFocusConfig", () => {
    expect(sugarDefaultFocusConfig).toMatchSnapshot();
  });
});
