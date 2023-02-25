import { spawn as spwn, SpawnOptions } from "child_process";
import { CustomActionFunction } from "node-plop";
import { join } from "path";

const spawn = (cmd: string, args: readonly string[], options: SpawnOptions) =>
  new Promise((res, rej) => {
    const cp = spwn(cmd, args, options);
    const stderr: string[] = [];
    const stdout: string[] = [];

    cp.stdout?.on("data", (data) => {
      stdout.push(data.toString());
    });
    cp.on("error", (e) => {
      stderr.push(e.toString());
    });
    cp.on("close", () => {
      if (stderr.length) {
        rej(stderr.join(""));
      } else {
        res(stdout.join(""));
      }
    });
  });

export const pnpmInstall: CustomActionFunction = (
  answers,
  config
): Promise<string> => {
  const cwd = join(process.cwd(), answers.packageType, answers.packageName);
  const args = ["install"];
  if (config.dev) {
    args.push("-D");
  }
  if (config.exact) {
    args.push("-E");
  }
  if (config.dependencies) {
    if (Array.isArray(config.dependencies)) {
      args.push(...config.dependencies);
    } else {
      return Promise.reject('"dependencies" must be an array');
    }
  }
  return spawn(/^win/.test(process.platform) ? "pnpm.cmd" : "pnpm", args, {
    cwd,
    stdio: "inherit",
  })
    .then(() => "successfully installed dependencies")
    .catch((err) => `error installing dependencies: ${err}`);
};
