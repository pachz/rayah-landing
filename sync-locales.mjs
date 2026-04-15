import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const enPath = resolve(root, "locales/en.json");
const arPath = resolve(root, "locales/ar.json");
const outPath = resolve(root, "locales/locales.js");

const [enRaw, arRaw] = await Promise.all([
  readFile(enPath, "utf8"),
  readFile(arPath, "utf8"),
]);

const en = JSON.parse(enRaw);
const ar = JSON.parse(arRaw);

const output = `window.RAYAH_LOCALES = ${JSON.stringify({ en, ar })};\n`;
await writeFile(outPath, output, "utf8");

console.log("Synced locales/locales.js from locales/en.json and locales/ar.json");
