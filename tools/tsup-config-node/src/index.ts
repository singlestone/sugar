import { defineConfig } from "tsup";

interface DefineSugarTsupConfigParams {
  /**
   * Should `module.exports = module.exports.default` be added to the bottom of commonjs files?
   */
  includeCommonJsDefaultExportFooter?: boolean;
}
export const defineSugarTsupConfig = ({
  includeCommonJsDefaultExportFooter,
}: DefineSugarTsupConfigParams = {}) =>
  defineConfig((overrideOptions) => ({
    entry: ["src/index.ts"],
    splitting: false,
    sourcemap: true,
    clean: !overrideOptions.watch,
    dts: true,
    format: ["cjs", "esm"],
    publicDir: overrideOptions.publicDir,
    esbuildOptions: (options) => {
      // this enables importing prettier plugins/configs or eslint plugins appropriately
      // I don't like it but it's how it's gotta be
      if (options.format === "cjs" && includeCommonJsDefaultExportFooter) {
        options.footer = {
          ...options.footer,
          js: "module.exports = module.exports.default",
        };
      }
    },
  }));
