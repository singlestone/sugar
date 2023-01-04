import { chmodSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

if (process.platform === "win32") {
  process.exit(0);
}

const __dirname = dirname(fileURLToPath(import.meta.url));

chmodSync(
  join(__dirname, "..", "node_modules", "husky", "lib", "bin.js"),
  "755"
);
