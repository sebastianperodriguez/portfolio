import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", ".screenshots");
mkdirSync(outDir, { recursive: true });

const base = process.env.BASE_URL || "https://portfolio-sebas19.vercel.app";

const browser = await chromium.launch({ channel: "msedge" });

async function scrollThrough(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.6;
    const total = document.body.scrollHeight;
    for (let y = 0; y < total; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 200));
    }
    window.scrollTo(0, total);
    await new Promise((r) => setTimeout(r, 600));
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 400));
  });
}

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
page.on("pageerror", (e) => errors.push(`PAGEERROR: ${e.message}`));

await page.goto(base + "/", { waitUntil: "networkidle" });
await scrollThrough(page);

for (const id of ["about", "projects", "skills", "contact"]) {
  await page.evaluate((s) => document.getElementById(s)?.scrollIntoView({ behavior: "instant" }), id);
  await page.waitForTimeout(500);
  await page.screenshot({ path: resolve(outDir, `live-${id}.png`) });
}

// Navegacion por anclas: verificar que el scroll offset es correcto
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(400);
await page.click('a[href="#contact"]');
await page.waitForTimeout(1200);
const anchorOk = await page.evaluate(() => {
  const el = document.getElementById("contact");
  const rect = el.getBoundingClientRect();
  return { top: Math.round(rect.top), scrollY: Math.round(window.scrollY) };
});
console.log("ancla #contact -> top:", anchorOk.top, "(debe ser >= 0 y < navbar)");
await page.screenshot({ path: resolve(outDir, "live-anchor-contact.png") });

// Navegacion SPA al CV
await page.click('a[href="/cv"]');
await page.waitForURL("**/cv");
await page.waitForTimeout(800);
console.log("ruta CV:", page.url());
await page.screenshot({ path: resolve(outDir, "live-cv.png"), fullPage: true });

// PDF tal como lo genera el boton "Guardar como PDF"
await page.pdf({
  path: resolve(outDir, "cv-A4.pdf"),
  format: "A4",
  printBackground: true,
  margin: { top: "14mm", bottom: "14mm", left: "16mm", right: "16mm" },
});

console.log("errores de consola:", errors.length ? errors : "ninguno");

await browser.close();
