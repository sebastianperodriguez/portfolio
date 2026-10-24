import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", ".screenshots");
mkdirSync(outDir, { recursive: true });

const base = process.env.BASE_URL || "http://localhost:4173";

const browser = await chromium.launch({ channel: "msedge" });

async function scrollThrough(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.6;
    const total = document.body.scrollHeight;
    for (let y = 0; y < total; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 220));
    }
    window.scrollTo(0, total);
    await new Promise((r) => setTimeout(r, 700));
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 500));
  });
}

const shots = [
  { name: "home-hero", url: "/", width: 1440, height: 900 },
  { name: "home-full", url: "/", width: 1440, height: 900, full: true },
  { name: "home-about", url: "/", width: 1440, height: 900, section: "about" },
  { name: "home-projects", url: "/", width: 1440, height: 900, section: "projects" },
  { name: "home-skills", url: "/", width: 1440, height: 900, section: "skills" },
  { name: "home-contact", url: "/", width: 1440, height: 900, section: "contact" },
  { name: "home-mobile", url: "/", width: 390, height: 844, full: true },
  { name: "home-mobile-menu", url: "/", width: 390, height: 844, menu: true },
  { name: "home-dark", url: "/", width: 1440, height: 900, section: "projects", dark: true },
  { name: "cv", url: "/cv", width: 1440, height: 1200, full: true },
];

for (const shot of shots) {
  const page = await browser.newPage({
    viewport: { width: shot.width, height: shot.height },
    deviceScaleFactor: 1,
  });

  await page.addInitScript((dark) => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, Boolean(shot.dark));

  await page.goto(base + shot.url, { waitUntil: "networkidle" });
  await scrollThrough(page);
  await page.waitForTimeout(800);

  if (shot.section) {
    await page.evaluate((id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    }, shot.section);
    await page.waitForTimeout(600);
  }

  if (shot.menu) {
    await page.click('button[aria-controls="menu-movil"]');
    await page.waitForTimeout(700);
  }

  await page.screenshot({
    path: resolve(outDir, `${shot.name}.png`),
    fullPage: Boolean(shot.full),
  });

  await page.close();
  console.log("captured", shot.name);
}

await browser.close();
