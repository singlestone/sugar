import { join } from "node:path";

import {
  all,
  delayedTouchFile,
  nodeConfig,
  touchFile,
} from "@singlestone/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  ...nodeConfig(options),
  // touch files to trigger hot reloads
  onSuccess: all([
    touchFile(join(__dirname, "../react/src/index.ts")),
    touchFile(join(__dirname, "../storybook/src/tailwind.css")),
    delayedTouchFile(
      join(__dirname, "../storybook/.storybook/preview-head.html"),
      3000
    ),
  ]),
}));
