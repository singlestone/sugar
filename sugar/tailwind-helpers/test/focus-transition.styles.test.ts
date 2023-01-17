import { describe, expect, test, vi } from "vitest";

import { focusTransition, sugarDefaultFocusConfig } from "../src";

const theme = vi.fn().mockImplementation((sugarFocusStyles) => {
  if (sugarFocusStyles) {
    return sugarDefaultFocusConfig.initialRingWidth;
  }
  return undefined;
});

describe("disabled-control-styles", () => {
  test("disabledControlStyles", () => {
    expect(focusTransition(theme)).toMatchSnapshot();
  });
});
