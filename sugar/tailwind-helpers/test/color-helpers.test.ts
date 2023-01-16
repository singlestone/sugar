import colors from "tailwindcss/colors";
import { describe, expect, test, vi } from "vitest";

import { convertHexToRGBA, getShadeValue, SugarColorShades } from "../src";

const theme = vi.fn().mockImplementation((color) => {
  if (color === "colors.blue") {
    return colors.blue;
  }

  if (color === "colors.black") {
    return colors.black;
  }

  return undefined;
});
describe("color helpers", () => {
  describe("convertHexToRGBA", () => {
    const noAlphaTests = [["#031cfc"], ["#ddd"], ["#dd"]];

    const alphaTestCases = [
      ["#031cfc", "0.5"],
      ["#ddd", "0.1"],
      ["#dd", "0"],
    ];

    test.each(noAlphaTests)("Convert s% without alphaVariable", (hex) => {
      expect(convertHexToRGBA(hex)).toMatchSnapshot();
    });

    test.each(alphaTestCases)(
      "Convert s% with s% opacity",
      (hex, alphaVariable) => {
        expect(convertHexToRGBA(hex, alphaVariable)).toMatchSnapshot();
      }
    );
  });
});

describe("getShadeValue", () => {
  const noAlphaTests = [
    {
      color: "blue",
      shade: SugarColorShades.Primary,
    },
    {
      color: "black",
      shade: SugarColorShades.Primary,
    },
    {
      color: "#031cfc",
      shade: SugarColorShades.PrimaryActive,
    },
  ];

  const alphaTestCases = [
    {
      color: "blue",
      shade: SugarColorShades.Primary,
      alpha: "0.5",
    },
    {
      color: "black",
      shade: SugarColorShades.Primary,
      alpha: "0.5",
    },
    {
      color: "#031cfc",
      shade: SugarColorShades.PrimaryActive,
      alpha: "0.5",
    },
  ];

  test.each(noAlphaTests)(
    "Get value without alphaVariable",
    ({ color, shade }) => {
      expect(getShadeValue(theme, color, shade)).toMatchSnapshot();
    }
  );

  test.each(alphaTestCases)(
    "Get value with alphaVariable",
    ({ color, shade, alpha }) => {
      expect(getShadeValue(theme, color, shade, alpha)).toMatchSnapshot();
    }
  );
});
