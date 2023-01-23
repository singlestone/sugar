import { defineConfig } from "tsup";

export const defineSugarTsupConfig = () =>
  defineConfig((overrideOptions) => ({
    entry: ["src/index.ts"],
    splitting: false,
    sourcemap: true,
    treeshake: true,
    minify: true,
    clean: !overrideOptions.watch,
    dts: true,
    format: ["cjs", "esm"],
    publicDir: overrideOptions.publicDir,
    external: ["react"],
  }));
