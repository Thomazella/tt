/* eslint-disable no-process-exit */
import os from "os";
import fs from "fs";
import { promisify } from "util";

export const home = os.homedir();
export const ttDir = `${os.homedir()}/.tt`;

// fs.promises API added on Node v10
export const fsPromisesProxy = new Proxy(fs.promises || {}, {
  get: (FsPromises, prop) => {
    // @ts-ignore
    const fallback = fs[prop];

    // @ts-ignore
    if (/Sync/.test(prop)) return fallback;
    // @ts-ignore
    if (FsPromises[prop] === undefined) {
      return fallback instanceof Function ? promisify(fallback) : fallback;
    }
    // @ts-ignore
    return FsPromises[prop];
  }
});

export const bailout = (message = "Generic error. Sorry :(") => {
  process.stderr.write(`tt error 💀 \n${message}\n`);
  process.exit(1);
};
