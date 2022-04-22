/*
MIT License

Copyright (c) Simon Hänisch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
// Modified by Richard Harrah

import { parsers as babelParsers } from "prettier/parser-babel";
import { parsers as typescriptParsers } from "prettier/parser-typescript";
import {
  options,
  languages,
  parsers as tailwindParsers,
  printers,
} from "prettier-plugin-tailwindcss";

import { organize } from "./lib/organize";
import { applyTextChanges } from "./lib/apply-text-changes";
import { Parser, ParserOptions } from "prettier";

/**
 * Organize the code's imports using the `organizeImports` feature of the TypeScript language service API.
 */
const organizeImports = (code: string, options: ParserOptions) => {
  if (
    code.includes("// organize-imports-ignore") ||
    code.includes("// tslint:disable:ordered-imports")
  ) {
    return code;
  }

  try {
    const filePath = options.filepath || "file.ts";

    /**
     * @todo remove this once Prettier has fixed the child-parser preprocessing bug
     * @see https://github.com/prettier/prettier/issues/11206
     */
    if (options.parentParser === "vue") {
      return code; // we already did the preprocessing for the `vue` parent parser
    } else if (options.parser === "vue") {
      const { getVueSFCScript } = require("./lib/get-vue-sfc-script");

      const script = getVueSFCScript(code, filePath);

      if (!script) {
        return code;
      }

      const organized = organize(script.content, filePath + ".ts");

      return applyTextChanges(code, [
        {
          newText: organized,
          span: {
            start: script.start,
            length: script.end - script.start,
          },
        },
      ]);
    }

    return organize(code, filePath);
  } catch (error) {
    if (process.env.DEBUG) {
      console.error(error);
    }

    return code;
  }
};

/**
 * Set `organizeImports` as the given parser's `preprocess` hook, or merge it with the existing one.
 */
const withOrganizeImportsPreprocess = (parser: Parser): Parser => {
  return {
    ...parser,
    preprocess: (code, options) =>
      organizeImports(
        parser.preprocess ? parser.preprocess(code, options) : code,
        options
      ),
  };
};

export { options, languages, printers };
export const parsers = {
  ...tailwindParsers,
  babel: withOrganizeImportsPreprocess(
    tailwindParsers.babel ?? babelParsers.babel
  ),
  "babel-ts": withOrganizeImportsPreprocess(
    tailwindParsers["babel-ts"] ?? babelParsers["babel-ts"]
  ),
  typescript: withOrganizeImportsPreprocess(
    tailwindParsers.typescript ?? typescriptParsers.typescript
  ),
};
