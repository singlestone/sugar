import { hslWithOpacity, rgbWithOpacity } from "../src";

describe("hslWithOpacity", () => {
  it("includes opacity if opacityValue is truthy", () => {
    expect(
      hslWithOpacity("--test")({ opacityValue: "0.5", opacityVariable: "" })
    ).toEqual("hsl(var(--test), 0.5)");
  });

  it("does not include opacity if opacityValue is falsy", () => {
    expect(
      hslWithOpacity("--test")({ opacityValue: "", opacityVariable: "" })
    ).toEqual("var(--test)");
  });
});

describe("rgbWithOpacity", () => {
  it("includes opacity if opacityValue is truthy", () => {
    expect(
      rgbWithOpacity("--test")({ opacityValue: "0.5", opacityVariable: "" })
    ).toEqual("rgb(var(--test), 0.5)");
  });

  it("does not include opacity if opacityValue is falsy", () => {
    expect(
      rgbWithOpacity("--test")({ opacityValue: "", opacityVariable: "" })
    ).toEqual("var(--test)");
  });
});
