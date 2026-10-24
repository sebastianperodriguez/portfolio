import { chromium } from "playwright-core";

const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto("https://portfolio-sebas19.vercel.app/", { waitUntil: "networkidle" });
await page.waitForTimeout(900);

for (const id of ["about", "projects", "skills", "contact"]) {
  await page.click(`a[href="#${id}"]`);
  await page.waitForTimeout(1500);
  const r = await page.evaluate((s) => ({
    top: Math.round(document.getElementById(s).getBoundingClientRect().top),
    scrollY: Math.round(window.scrollY),
  }), id);
  const status = r.top >= 60 && r.top <= 130 ? "OK" : "REVISAR";
  console.log(`#${id.padEnd(8)} -> top: ${String(r.top).padStart(4)}px  scrollY: ${r.scrollY}  ${status}`);
}

await browser.close();
