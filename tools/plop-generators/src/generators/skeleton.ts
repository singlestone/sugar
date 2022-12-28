import { PlopGeneratorConfig } from "node-plop";
import { join } from "path";

const resolveTemplateFile = (fileName: string) =>
  join(__dirname, "templates", "skeleton", fileName);

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
      message: "What is the name of the package (minus the scope)?",
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
      path: "{{packageType}}/{{packageName}}/LICENSE",
      templateFile: resolveTemplateFile("LICENSE"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/package.json",
      templateFile: resolveTemplateFile("package.json"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/.prettierrc.js",
      templateFile: resolveTemplateFile("prettierrc.js"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/README.md",
      templateFile: resolveTemplateFile("README.md"),
    },
    {
      type: "add",
      path: "{{packageType}}/{{packageName}}/tsconfig.json",
      templateFile: resolveTemplateFile("tsconfig.json"),
    },
    {
      type: "installDependencies",
    },
  ],
};
