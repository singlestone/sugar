import colors from "tailwindcss/colors";
import { convertHexToRGBA, getShadeValue, SugarColorShades } from "../src";

describe("color helpers", () => {
  describe("convertHexToRGBA", () => {
    const noAlphaTests = [
      ["#031cfc", "rgb(3, 28, 252)"],
      ["#ddd", "rgb(221, 221, 221)"],
      ["#dd", "rgb(0, 0, 0)"],
    ];

    const alphaTestCases = [
      ["#031cfc", "0.5", "rgba(3, 28, 252, 0.5)"],
      ["#ddd", "0.1", "rgba(221, 221, 221, 0.1)"],
      ["#dd", "0", "rgba(0, 0, 0, 0)"],
    ];

    test.each(noAlphaTests)(
      "Convert s% without alphaVariable",
      (hex, expected) => {
        expect(convertHexToRGBA(hex)).toEqual(expected);
      }
    );

    test.each(alphaTestCases)(
      "Convert s% with s% opacity",
      (hex, alphaVariable, expected) => {
        expect(convertHexToRGBA(hex, alphaVariable)).toEqual(expected);
      }
    );
  });
});

describe("getShadeValue", () => {
  const noAlphaTests = [
    {
      color: colors.blue,
      shade: SugarColorShades.Primary,
      expected: colors.blue[SugarColorShades.Primary],
    },
    {
      color: colors.black,
      shade: SugarColorShades.Primary,
      expected: colors.black,
    },
    {
      color: "#031cfc",
      shade: SugarColorShades.PrimaryActive,
      expected: "#031cfc",
    },
  ];

  const alphaTestCases = [
    {
      color: colors.blue,
      shade: SugarColorShades.Primary,
      alpha: "0.5",
      expected: "rgba(37 99 235 0.5)",
    },
    {
      color: colors.black,
      shade: SugarColorShades.Primary,
      alpha: "0.5",
      expected: "rgba(0 0 0 0.5)",
    },
    {
      color: "#031cfc",
      shade: SugarColorShades.PrimaryActive,
      alpha: "0.5",
      expected: "rgba(3 28 252 0.5)",
    },
  ];

  test.each(noAlphaTests)(
    "Get value without alphaVariable",
    ({ color, shade, expected }) => {
      expect(getShadeValue(color, shade)).toEqual(expected);
    }
  );

  test.each(alphaTestCases)(
    "Get value without alphaVariable",
    ({ color, shade, alpha, expected }) => {
      expect(getShadeValue(color, shade, alpha)).toEqual(expected);
    }
  );
});
