import { spawn } from "child_process";
import { CustomActionFunction } from "node-plop";
import { join } from "path";

const didSucceed = (code: number | null) => code === 0;

export const yarnInstall: CustomActionFunction = (
  answers,
  config,
  plop
): Promise<string> => {
  const cwd = join(process.cwd(), answers.packageType, answers.packageName);
  return new Promise((resolve, reject) => {
    const process = spawn("yarn", ["install"], { cwd, stdio: "inherit" });
    process.on("close", (code) => {
      if (didSucceed(code)) {
        resolve(`yarn install completed successfully`);
      } else {
        reject(`yarn install failed with exit code ${code}`);
      }
    });
    process.on("error", (err) => {
      reject(err);
    });
  });
};
