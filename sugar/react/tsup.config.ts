import { join } from "node:path";

import { browserConfig, delayedTouchFile } from "@singlestone/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  ...browserConfig(options),
  onSuccess: delayedTouchFile(
    join(__dirname, "../storybook/.storybook/preview-head.html"),
    3000
  ),
}));
