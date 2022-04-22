import { resolve } from "path";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import colors from "tailwindcss/colors";
import { TailwindConfig } from "tailwindcss/tailwind-config";
import { sugarButtonsPlugin } from "../src";

const run = (config: TailwindConfig, pluginOptions: any = undefined) => {
  const { currentTestName } = expect.getState();
  config = {
    ...{
      plugins: [sugarButtonsPlugin(pluginOptions)],
      corePlugins: { preflight: false },
    },
    ...config,
  };

  return postcss(tailwindcss(config)).process(
    ["@tailwind base;", "@tailwind components;", "@tailwind utilities"].join(
      "\n"
    ),
    {
      from: `${resolve(__filename)}?test=${currentTestName}`,
    }
  );
};

const createTestClassNames = (
  baseClassNames: string[][],
  value: string
): string[][] =>
  baseClassNames.reduce(
    (acc: string[][], [baseClass]) => [...acc, [`${baseClass}-${value}`]],
    []
  );

const getClassCreationTest = (className: string, options: any = undefined) => {
  const config: TailwindConfig = {
    safelist: [className],
    theme: {},
  };
  return run(config, options).then((result) => {
    expect(result.css).toContain(`.${className}`);
  });
};

describe("sugarButtonsPlugin", () => {
  describe("Plugin options", () => {
    const testPrefix = "test_prefix";
    const options = {
      prefix: testPrefix,
    };
    test("set plugin prefix", () =>
      getClassCreationTest(`${testPrefix}-button`, options));
  });

  describe("Static Components", () => {
    const expectedClasses = [
      ["sugar-button"],
      ["sugar-button-primary"],
      ["sugar-button-secondary"],
      ["sugar-button-destructive"],
      ["sugar-button-secondary-destructive"],
      ["sugar-button-neutral"],
    ];
    test.each(expectedClasses)("create %s class", (className: string) =>
      getClassCreationTest(className)
    );
  });

  describe("Dynamic Components", () => {
    const classNameBases = [
      ["sugar-button-filled"],
      ["sugar-button-lighter-filled"],
      ["sugar-button-darker-filled"],
      ["sugar-button-outlined"],
      ["sugar-button-darker-outlined"],
      ["sugar-button-lighter-outlined"],
    ];

    const testColors = {
      red: colors.red,
      blue: colors.blue,
      white: colors.white,
      gray: colors.gray,
      transparent: colors.transparent,
    };

    const testCases: string[][] = Object.keys(testColors).reduce(
      (acc: string[][], color) => [
        ...acc,
        ...createTestClassNames(classNameBases, color),
      ],
      []
    );

    test.each(testCases)("create %s dynamic class", (className: string) =>
      getClassCreationTest(className)
    );
  });
});
