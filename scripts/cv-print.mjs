import { chromium } from "playwright-core";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", ".screenshots");

const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({
  viewport: { width: 794, height: 1123 },
  deviceScaleFactor: 1,
});

await page.goto("https://portfolio-sebas19.vercel.app/cv", {
  waitUntil: "networkidle",
});
await page.emulateMedia({ media: "print" });
await page.waitForTimeout(600);

const metrics = await page.evaluate(() => {
  const article = document.querySelector(".cv-page");
  const a4 = 1123;
  return {
    alturaTotalPx: Math.round(article.getBoundingClientRect().height),
    paginasA4: (article.getBoundingClientRect().height / a4).toFixed(2),
    primerContenidoY: Math.round(
      article.getBoundingClientRect().top + window.scrollY,
    ),
  };
});

console.log("altura contenido CV:", metrics.alturaTotalPx, "px");
console.log("paginas A4 estimadas:", metrics.paginasA4);

await page.screenshot({ path: resolve(outDir, "cv-print-full.png"), fullPage: true });
await page.screenshot({ path: resolve(outDir, "cv-print-page1.png"), clip: { x: 0, y: 0, width: 794, height: 1123 } });
await page.screenshot({ path: resolve(outDir, "cv-print-page2.png"), clip: { x: 0, y: 1123, width: 794, height: Math.min(700, 1123) } });

await browser.close();
