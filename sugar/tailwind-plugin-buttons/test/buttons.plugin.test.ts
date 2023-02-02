import { SugarPluginOptions } from "@singlestone/tailwind-helpers-sugar";
import { resolve } from "path";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import { Config } from "tailwindcss/types/config";
import { describe, expect, test } from "vitest";

import { sugarButtonsPlugin } from "../src";

const run = (
  config: Partial<Config>,
  pluginOptions: SugarPluginOptions = {}
) => {
  const { currentTestName } = expect.getState();
  config = {
    ...{
      plugins: [sugarButtonsPlugin(pluginOptions)],
      corePlugins: { preflight: false },
    },
    ...config,
  };

  return postcss(tailwindcss(config as Config)).process(
    ["@tailwind base;", "@tailwind components;", "@tailwind utilities"].join(
      "\n"
    ),
    {
      from: `${resolve(__filename)}?test=${currentTestName}`,
    }
  );
};

const getClassCreationTest = (
  className: string,
  options: SugarPluginOptions = {}
) => {
  const config: Partial<Config> = {
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
    test("set plugin prefix", () => {
      expect(
        getClassCreationTest(`${testPrefix}-button-primary`, options)
      ).toMatchSnapshot();
    });
  });

  describe("Static Components", () => {
    const expectedClasses = [
      ["sugar-button-primary"],
      ["sugar-button-secondary"],
      ["sugar-button-destructive"],
      ["sugar-button-secondary-destructive"],
      ["sugar-button-neutral"],
      ["sugar-button-with-icon"],
    ];
    test.each(expectedClasses)("create %s class", (className: string) => {
      expect(getClassCreationTest(className)).toMatchSnapshot();
    });
  });
});
