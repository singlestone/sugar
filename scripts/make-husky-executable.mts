import { chmodSync } from "fs";
import { join } from "path";

if (process.platform === "win32") {
  process.exit(0);
}

chmodSync(
  join(import.meta.url, "..", "node_modules", "husky", "lib", "bin.js"),
  "755"
);