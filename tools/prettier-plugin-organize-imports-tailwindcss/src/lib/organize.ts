import { createLanguageService } from "typescript";
import { applyTextChanges } from "./apply-text-changes";
import { ServiceHost } from "./service-host";

export const organize = (code: string, fileName: string) => {
  const languageService = createLanguageService(
    new ServiceHost(fileName, code)
  );

  const fileChanges = languageService.organizeImports(
    { type: "file", fileName },
    {},
    {}
  )[0];

  return fileChanges
    ? applyTextChanges(code, [...fileChanges.textChanges])
    : code;
};
