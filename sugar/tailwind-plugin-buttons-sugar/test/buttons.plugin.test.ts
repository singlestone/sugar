import { resolve } from "path";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import colors from "tailwindcss/colors";
import { TailwindConfig } from "tailwindcss/tailwind-config";
import { ButtonsPluginOptions } from "../dist";
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
    const options: ButtonsPluginOptions = {
      accentColors: colors.red,
      neutralColors: colors.slate,
      prefix: testPrefix,
    };
    test("set plugin prefix", () =>
      getClassCreationTest(`${testPrefix}-btn`, options));
  });

  describe("Static Components", () => {
    const expectedClasses = [
      ["sugar-btn"],
      ["sugar-btn-destructive"],
      ["sugar-btn-destructive-secondary"],
      ["sugar-btn-neutral"],
    ];
    test.each(expectedClasses)("create %s class", (className: string) =>
      getClassCreationTest(className)
    );
  });

  describe("Dynamic Components", () => {
    const classNameBases = [
      ["sugar-btn-primary"],
      ["sugar-btn-lighter-primary"],
      ["sugar-btn-darker-primary"],
      ["sugar-btn-secondary"],
      ["sugar-btn-darker-secondary"],
      ["sugar-btn-lighter-secondary"],
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
