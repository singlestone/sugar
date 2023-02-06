import * as process from "process";

import { prepublish } from "./prepublish";

const HELP =
  "sugar\n" +
  "\n" +
  "Available commands:\n" +
  "  help        Displays this help text\n" +
  "  prepublish  Does any prepublish work not handled by\n" +
  "              existing tooling";

const printHelp = () => {
  process.stdout.write(`${HELP}\n`);
};
export const run = async (args: string[]) => {
  const argv = args.slice(2);
  if (argv.includes("help") || argv.includes("--help")) {
    printHelp();
    process.exit(0);
  }
  if (argv.includes("prepublish")) {
    const resultCode = await prepublish();
    process.exit(resultCode);
  }
  console.error("Invalid command given");
  printHelp();
  process.exit(1);
};
