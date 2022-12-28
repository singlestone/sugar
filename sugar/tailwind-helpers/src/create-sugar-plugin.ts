import plugin from "tailwindcss/plugin";
import type { PluginAPI } from "tailwindcss/types/config";

import { defaultPluginConfig } from "./sugar-default-plugin-config";
import { SugarPluginOptions } from "./sugar-plugin-options.interface";

const defaultOptions = {
  prefix: "sugar",
};

export type SugarPluginComponent = (utils: PluginAPI, prefix: string) => void;

export type SugarTailwindPlugin = ReturnType<
  typeof plugin.withOptions<SugarPluginOptions>
>;

export const createSugarPlugin = (
  plugins: SugarPluginComponent[]
): SugarTailwindPlugin =>
  plugin.withOptions<SugarPluginOptions>(
    (options) => (utilFunctions: PluginAPI) => {
      const prefix: string = options?.prefix
        ? options.prefix
        : defaultOptions.prefix;
      plugins.forEach((sugarPlugin) => sugarPlugin(utilFunctions, prefix));
    },
    () => defaultPluginConfig
  );
