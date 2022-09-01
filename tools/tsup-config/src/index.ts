import { defineConfig } from "tsup";

export const defineSugarTsupConfig = () =>
  defineConfig((overrideOptions) => ({
    entry: ["src/index.ts"],
    splitting: false,
    sourcemap: true,
    clean: !overrideOptions.watch,
    dts: true,
    format: ["cjs", "esm"],
  }));
