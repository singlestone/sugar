import { SugarPluginOptions } from "@singlestone/tailwind-helpers-sugar";
import { resolve } from "path";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import { Config } from "tailwindcss/types/config";
import { describe, expect, test } from "vitest";

import { sugarFormsPlugin } from "../src";

const run = (
  config: Partial<Config>,
  pluginOptions: SugarPluginOptions = {}
) => {
  const { currentTestName } = expect.getState();
  config = {
    ...{
      plugins: [sugarFormsPlugin(pluginOptions)],
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

describe("sugarFormsPlugin", () => {
  describe("Plugin options", () => {
    const testPrefix = "test_prefix";
    const options = {
      prefix: testPrefix,
    };
    test("set plugin prefix", () =>
      getClassCreationTest(`${testPrefix}-text-input`, options));
  });

  describe("Static Components", () => {
    const expectedClasses = [["sugar-text-input", "sugar-select-input"]];
    test.each(expectedClasses)("create %s class", (className: string) =>
      getClassCreationTest(className)
    );
  });
});
