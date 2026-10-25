import { chromium } from "playwright-core";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { build, preview } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

await build({ root, logLevel: "error" });

const previewServer = await preview({
  root,
  preview: { port: 4173, strictPort: true },
});

const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage();
await page.goto("http://localhost:4173/cv", {
  waitUntil: "networkidle",
});
await page.emulateMedia({ media: "print" });
await page.waitForTimeout(600);

await page.pdf({
  path: resolve(root, "public", "cv.pdf"),
  format: "A4",
  printBackground: true,
});

await browser.close();

if (previewServer.httpServer?.listening) {
  await new Promise((closeResolve) => previewServer.httpServer.close(closeResolve));
}

const outPath = resolve(root, "public", "cv.pdf");
const { stat } = await import("node:fs/promises");
const { size } = await stat(outPath);
console.log(`cv.pdf generado -> ${outPath} (${(size / 1024).toFixed(1)} KB)`);
