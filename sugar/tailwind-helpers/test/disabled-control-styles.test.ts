import { describe, expect, test, vi } from "vitest";

import { disabledControlStyles } from "../src";

const theme = vi.fn().mockImplementation((opacity) => {
  if (opacity) {
    return ".50";
  }
  return undefined;
});

describe("disabled-control-styles", () => {
  test("disabledControlStyles", () => {
    expect(disabledControlStyles(theme)).toMatchSnapshot();
  });
});
