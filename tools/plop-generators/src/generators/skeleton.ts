import { CustomActionConfig, PlopGeneratorConfig } from "node-plop";
import { join } from "path";

const resolveTemplateFile = (...fileNameParts: string[]) =>
  join(__dirname, "templates", "skeleton", ...fileNameParts);

export const skeleton: PlopGeneratorConfig = {
  description: "empty package in a directory",
  prompts: [
    {
      type: "list",
      name: "packageType",
      message: "Which type of skeleton package would you like to create?",
      choices: ["sugar", "tools"],
    },
    {
      type: "input",
      name: "packageName",
      message: 'What is the name of the package (minus the scope and "sugar")?',
      validate(value) {
        if (/.+/.test(value)) {
          return true;
        }
        return "package name is required";
      },
    },
    {
      type: "input",
      name: "packageDescription",
      message: "What is the description of the package?",
      validate(value) {
        if (/.+/.test(value)) {
          return true;
        }
        return "package description is required";
      },
    },
  ],
  actions: [
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/.eslintrc.js",
      templateFile: resolveTemplateFile("eslintrc.js.hbs"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/.gitignore",
      templateFile: resolveTemplateFile("gitignore.hbs"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/.eslintignore",
      templateFile: resolveTemplateFile("eslintignore.hbs"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/LICENSE",
      templateFile: resolveTemplateFile("LICENSE.hbs"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/package.json",
      templateFile: resolveTemplateFile("package.json.hbs"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/README.md",
      templateFile: resolveTemplateFile("README.md.hbs"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/tsconfig.json",
      templateFile: resolveTemplateFile("tsconfig.json.hbs"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/tsup.config.ts",
      templateFile: resolveTemplateFile("tsup.config.ts.hbs"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/src/index.ts",
      templateFile: resolveTemplateFile("src", "index.ts.hbs"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/src/sum.ts",
      templateFile: resolveTemplateFile("src", "sum.ts.hbs"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/src/sum.test.ts",
      templateFile: resolveTemplateFile("src", "sum.test.ts.hbs"),
    },
    {
      type: "pnpmInstall",
      dev: true,
      exact: true,
      dependencies: [
        "@size-limit/preset-small-lib",
        "@types/node",
        "delete-publishconfig-directory",
        "size-limit",
        "tsup",
        "vitest",
      ],
    } as CustomActionConfig<"pnpmInstall">,
  ],
};
