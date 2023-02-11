import { browserConfig } from "@singlestone/tsup-config";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({ ...browserConfig(options) }));
