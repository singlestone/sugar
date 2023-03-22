import { PathLike } from "node:fs";
import { open, utimes } from "node:fs/promises";

import { Options } from "tsup";

export type OnSuccessFn = NonNullable<Exclude<Options["onSuccess"], string>>;

const isError = (e: unknown): e is NodeJS.ErrnoException => {
  return e instanceof Error;
};

/**
 * Touches the file at the given path.
 */
export const touchFile =
  (path: PathLike): OnSuccessFn =>
  async () => {
    const time = new Date();
    try {
      await utimes(path, time, time);
    } catch (e) {
      if (!isError(e) || "ENOENT" !== e.code) {
        throw e;
      }
      const handle = await open(path, "a");
      await handle.close();
    }
  };

/**
 * Touches the file at the given path after a delay.
 */
export const delayedTouchFile =
  (path: PathLike, delay: number): OnSuccessFn =>
  () =>
    new Promise((res) => setTimeout(res, delay)).then(() => touchFile(path)());

/**
 * Runs all given {@link OnSuccessFn}s.
 */
export const all = (onSuccessFns: OnSuccessFn[]) => async () => {
  for (const onSuccessFn of onSuccessFns) {
    await onSuccessFn();
  }
};
