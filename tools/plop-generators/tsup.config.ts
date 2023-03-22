import { nodeConfig } from "@singlestone/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  ...nodeConfig(options),
}));
