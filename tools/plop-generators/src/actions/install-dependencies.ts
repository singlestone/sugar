import { exec } from "child_process";
import { CustomActionFunction } from "node-plop";
import { join } from "path";
import util from "util";

const execPromise = util.promisify(exec);

export const installDependencies: CustomActionFunction = (
  answers
): Promise<string> => {
  const cwd = join(process.cwd(), answers.packageType, answers.packageName);
  return execPromise("pnpm install", { cwd })
    .then(() => "successfully installed dependencies")
    .catch((err) => `error installing dependencies: ${err}`);
};
