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

import * as ts from "typescript";
import { getCompilerOptions } from "./get-compiler-options";

export class ServiceHost implements ts.LanguageServiceHost {
  private readonly fileName: string;
  private readonly content: string;
  private readonly compilerOptions: any;

  /**
   * Create a service host instance for the given file.
   *
   * @param {string} name path to file
   * @param {string} content file content
   */
  constructor(name: string, content: string) {
    const tsconfig = ts.findConfigFile(name, ts.sys.fileExists);

    this.fileName = name;
    this.content = content;
    this.compilerOptions = getCompilerOptions(tsconfig);

    this.getDefaultLibFileName = ts.getDefaultLibFileName;
    this.getCurrentDirectory = ts.sys.getCurrentDirectory;
  }

  getCurrentDirectory(): string {
    return ts.sys.getCurrentDirectory();
  }

  getDefaultLibFileName(options: ts.CompilerOptions): string {
    return ts.getDefaultLibFileName(options);
  }

  getNewLine() {
    return ts.sys.newLine;
  }

  getCompilationSettings() {
    return this.compilerOptions;
  }

  getScriptFileNames() {
    return [this.fileName];
  }

  getScriptVersion() {
    return "V1";
  }

  getScriptSnapshot() {
    return ts.ScriptSnapshot.fromString(this.content);
  }
}
