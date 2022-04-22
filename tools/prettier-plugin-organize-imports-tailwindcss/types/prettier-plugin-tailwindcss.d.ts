declare module "prettier-plugin-tailwindcss" {
  import type {
    Parser,
    Printer,
    SupportLanguage,
    SupportOptions,
  } from "prettier";

  export const options: SupportOptions;
  export const languages: SupportLanguage[];
  export const parsers: { [parserName: string]: Parser };
  export const printers: { [astFormat: string]: Printer };
}
