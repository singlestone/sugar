import { join } from "node:path";

import { all, nodeConfig, touchFile } from "@singlestone/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  ...nodeConfig(options),
  // touch files to trigger hot reloads
  onSuccess: all([
    touchFile(
      join(__dirname, "..", "tailwind-plugin-buttons", "src", "index.ts")
    ),
    touchFile(join(__dirname, "..", "tailwind-plugin-form", "src", "index.ts")),
  ]),
}));
