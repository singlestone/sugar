import { constants } from "fs";
import { access, readFile, writeFile } from "fs/promises";
import { join } from "path";

export const prepublish = async (): Promise<number> => {
  const pathToPkg = join(process.cwd(), "package", "package.json");

  const canAccess = access(pathToPkg, constants.F_OK);
  if (!canAccess) {
    console.log(`Could not access ${pathToPkg}; it may not exist`);
    return 1;
  }

  const pkgContents = await readFile(pathToPkg, { encoding: "utf-8" });
  const pkg = JSON.parse(pkgContents);
  const { publishConfig } = pkg;
  delete publishConfig["directory"];
  pkg.publishConfig = publishConfig;
  await writeFile(pathToPkg, JSON.stringify(pkg, null, 2), {
    encoding: "utf-8",
  });

  return 0;
};
