import plugin from "tailwindcss/plugin";
import { defaultPluginConfig } from "./sugar-default-plugin-config";
import { SugarPluginOptions } from "./sugar-plugin-options.interface";

const defaultOptions = {
  prefix: "sugar",
};

export type SugarTailwindPlugin = ReturnType<
  typeof plugin.withOptions<SugarPluginOptions>
>;

export const createSugarPlugin = (
  plugins: ((utils: unknown, prefix: string) => void)[]
): SugarTailwindPlugin =>
  plugin.withOptions<SugarPluginOptions>(
    (options) => (utilFunctions) => {
      const prefix: string = options?.prefix
        ? options.prefix
        : defaultOptions.prefix;
      plugins.forEach((sugarPlugin) => sugarPlugin(utilFunctions, prefix));
    },
    () => defaultPluginConfig
  );
