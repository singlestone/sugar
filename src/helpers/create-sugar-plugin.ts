import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";

import { defaultPluginConfig } from "./sugar-default-plugin-config";
import { SugarPluginOptions } from "./sugar-plugin-options.interface";

const defaultOptions: SugarPluginOptions = {
  prefix: "sugar",
  useMatchClasses: false,
};

export type SugarPluginComponent = (utils: PluginAPI, options: SugarPluginOptions) => void;

export type SugarTailwindPlugin = ReturnType<
  typeof plugin.withOptions<SugarPluginOptions>
>;

export const createSugarPlugin = (
  plugins: SugarPluginComponent[]
): SugarTailwindPlugin =>
  plugin.withOptions<SugarPluginOptions>(
    (options) => (utilFunctions: PluginAPI) => {
      plugins.forEach((sugarPlugin) => sugarPlugin(utilFunctions, {
        ...defaultOptions,
        ...options
      }));
    },
    () => defaultPluginConfig
  );
