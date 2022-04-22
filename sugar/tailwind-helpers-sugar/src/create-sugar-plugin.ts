import plugin from "tailwindcss/plugin";
import { defaultPluginConfig } from "./sugar-default-plugin-config";
import { SugarPluginOptions } from "./sugar-plugin-options.interface";

const defaultOptions = {
  prefix: "sugar",
};

export const createSugarPlugin = (
  plugins: ((utils: any, prefix: string) => void)[]
) =>
  plugin.withOptions<SugarPluginOptions>(
    (options) => (utilFunctions) => {
      const prefix: string = options?.prefix
        ? options.prefix
        : defaultOptions.prefix;
      plugins.forEach((sugarPlugin) => sugarPlugin(utilFunctions, prefix));
    },
    (_) => defaultPluginConfig
  );
