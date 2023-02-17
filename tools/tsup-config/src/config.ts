import type { Options } from "tsup";

export const baseConfig = (options: Options): Options => ({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: !options.watch,
  dts: true,
  format: ["cjs", "esm"],
  publicDir: !options.publicDir,
});

/**
 * Options to configure the behavior of {@link nodeConfig}.
 */
export interface NodeConfigParams {
  /**
   * Should `module.exports = module.exports.default` be added to the bottom of commonjs files?
   */
  includeCommonJsDefaultExportFooter?: boolean;
}

/**
 * Defines the common options for a library intended to be used in a browser.
 */
export const nodeConfig = (
  options: Options,
  { includeCommonJsDefaultExportFooter }: NodeConfigParams = {}
): Options => ({
  ...baseConfig(options),
  platform: "node",
  target: "node14" as const,
  shims: true,
  esbuildOptions: (buildOptions) => {
    // this enables importing prettier plugins/configs or eslint plugins appropriately
    // I don't like it, but it's how it's gotta be
    if (buildOptions.format === "cjs" && includeCommonJsDefaultExportFooter) {
      buildOptions.footer = {
        ...buildOptions.footer,
        js: "module.exports = module.exports.default",
      };
    }
  },
});

/**
 * Defines the common options for a library intended to be used in a browser.
 */
export const browserConfig = (options: Options): Options => ({
  ...baseConfig(options),
  platform: "browser",
});
