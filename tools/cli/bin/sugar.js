#!/usr/bin/env node

require("../dist/index.js")
  .run(process.argv)
  .catch((e) => {
    process.stderr.write(e.stack + "\n");
    process.exit(1);
  });
