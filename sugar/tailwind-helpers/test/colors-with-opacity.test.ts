import { describe, expect, it } from "vitest";

import { hslWithOpacity, rgbWithOpacity } from "../src";

describe("hslWithOpacity", () => {
  it("includes opacity if opacityValue is truthy", () => {
    expect(
      hslWithOpacity("--test")({ opacityValue: 0.5, opacityVariable: "" })
    ).toMatchSnapshot();
  });

  it("does not include opacity if opacityValue is falsy", () => {
    expect(hslWithOpacity("--test")({ opacityVariable: "" })).toMatchSnapshot();
  });
});

describe("rgbWithOpacity", () => {
  it("includes opacity if opacityValue is truthy", () => {
    expect(
      rgbWithOpacity("--test")({ opacityValue: 0.5, opacityVariable: "" })
    ).toMatchSnapshot();
  });

  it("does not include opacity if opacityValue is falsy", () => {
    expect(rgbWithOpacity("--test")({ opacityVariable: "" })).toMatchSnapshot();
  });
});
