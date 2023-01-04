import { chmodSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

if (process.platform === "win32") {
  process.exit(0);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

chmodSync(
  join(__dirname, "..", "node_modules", "husky", "lib", "bin.js"),
  "755"
);
