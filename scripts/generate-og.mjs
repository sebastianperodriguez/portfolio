import { Resvg } from "@resvg/resvg-js";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", "public");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1a2e"/>
      <stop offset="100%" stop-color="#121218"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.78" cy="0.18" r="0.75">
      <stop offset="0%" stop-color="#c9a96e" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#c9a96e" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <rect x="80" y="76" width="64" height="64" rx="14" fill="#c9a96e"/>
  <text x="112" y="120" fill="#1a1a2e" font-family="Georgia, 'Times New Roman', serif" font-size="30" font-weight="700" text-anchor="middle">SP</text>

  <text x="80" y="230" fill="#c9a96e" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="600" letter-spacing="6">FULL STACK DEVELOPER</text>

  <text x="80" y="322" fill="#e8e6e1" font-family="Georgia, 'Times New Roman', serif" font-size="70" font-weight="700">Sebastián Pérez Rodríguez</text>

  <rect x="80" y="360" width="120" height="4" fill="#c9a96e"/>

  <text x="80" y="432" fill="#a8a6a0" font-family="Helvetica, Arial, sans-serif" font-size="28">React · Node.js · Express · PostgreSQL · TypeScript</text>

  <text x="80" y="486" fill="#a8a6a0" font-family="Helvetica, Arial, sans-serif" font-size="28">Vercel · Railway · Vitest · Gemini API · MCP</text>

  <text x="80" y="562" fill="#6f6e78" font-family="Helvetica, Arial, sans-serif" font-size="24">sebastianperodriguez.vercel.app</text>
</svg>
`;

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: 1200 },
  font: { loadSystemFonts: true },
});

const png = resvg.render().asPng();

mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "og-image.png"), png);

console.log("og-image.png generado correctamente");
