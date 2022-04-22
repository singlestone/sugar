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

import { dirname } from "path";
import * as ts from "typescript";

const compilerOptionsCache = new Map();
export const getCompilerOptions = (tsconfig: string = "") => {
  const cachedCompilerOptions = compilerOptionsCache.get(tsconfig);

  if (cachedCompilerOptions) {
    return cachedCompilerOptions;
  }

  const compilerOptions = tsconfig
    ? ts.parseJsonConfigFileContent(
        ts.readConfigFile(tsconfig, ts.sys.readFile).config,
        ts.sys,
        dirname(tsconfig)
      ).options
    : ts.getDefaultCompilerOptions();

  compilerOptions.allowJs = true; // for automatic JS support

  compilerOptionsCache.set(tsconfig, compilerOptions);

  return compilerOptions;
};
