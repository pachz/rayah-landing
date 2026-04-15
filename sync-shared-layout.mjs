import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const navbarPath = resolve(root, "partials/navbar.html");
const footerPath = resolve(root, "partials/footer.html");
const outputPath = resolve(root, "js/shared-layout.js");

const escapeForTemplateLiteral = (html) =>
  html.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const [navbarRaw, footerRaw] = await Promise.all([
  readFile(navbarPath, "utf8"),
  readFile(footerPath, "utf8"),
]);

const navbar = escapeForTemplateLiteral(navbarRaw.trim());
const footer = escapeForTemplateLiteral(footerRaw.trim());

const output = `window.RAYAH_SHARED_LAYOUT = {
  navbar: \`${navbar}\`,
  footer: \`${footer}\`,
};
`;

await writeFile(outputPath, output, "utf8");
console.log("Synced js/shared-layout.js from partials/navbar.html and partials/footer.html");
