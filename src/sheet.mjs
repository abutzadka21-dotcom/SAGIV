// Comparison sheet of the direction-3 variations (run after render.mjs).
import { writeFileSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'output');
const img = (f) => f;

const cards = [
  ['03a-the-climb.png', '3A · The Climb', 'Closest to the reference — horizontal inner forearm'],
  ['03b-three-stages.png', '3B · Three Stages', 'On your knees → on your feet → on the summit'],
  ['03c-constellation.png', '3C · Constellation', 'Lightest line weight — vertical forearm'],
  ['03d-diamond-summit.png', '3D · Diamond Summit', 'The mountain is the diamond — wealth with many faces'],
];
const html = `<!doctype html><meta charset="utf-8"><style>
body{margin:0;background:#f4f2ee;font:15px/1.4 system-ui,sans-serif;color:#111;padding:40px;width:1520px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}
.card{background:#fff;border:1px solid #ddd;padding:18px;display:flex;flex-direction:column}
.card .art{height:520px;display:flex;align-items:center;justify-content:center}
.card img{max-width:100%;max-height:520px}
h2{margin:12px 0 2px;font-size:18px}p{margin:0;color:#555}
</style><div class="grid">${cards.map(([f, t, d]) => `<div class="card"><div class="art"><img src="${img(f)}"></div><h2>${t}</h2><p>${d}</p></div>`).join('')}</div>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1.5 });
const tmp = join(OUT, '_sheet.html');
writeFileSync(tmp, html);
await page.goto(pathToFileURL(tmp).href, { waitUntil: 'load' });
await page.screenshot({ path: join(OUT, '03-variations-sheet.png'), fullPage: true });
await browser.close();
rmSync(tmp);
console.log('sheet written');
