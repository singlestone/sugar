import { join } from "node:path";

import { nodeConfig, touchFile } from "@singlestone/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  ...nodeConfig(options),
  // touch files to trigger hot reloads
  onSuccess: touchFile(join(__dirname, "../sugar/src/index.ts")),
}));
