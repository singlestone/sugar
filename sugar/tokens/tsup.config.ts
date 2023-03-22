import { join } from "node:path";

import { all, nodeConfig, touchFile } from "@singlestone/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  ...nodeConfig(options),
  onSuccess: all([
    touchFile(join(__dirname, "../react/src/index.ts")),
    touchFile(join(__dirname, "../tailwind-helpers/src/index.ts")),
  ]),
}));
