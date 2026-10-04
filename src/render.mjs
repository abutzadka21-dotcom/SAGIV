// Build all designs: write SVG sources, then rasterise to high-res PNG via headless Chromium.
import { writeFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { design1 } from './design1-unchained-tree.mjs';
import { design2 } from './design2-ascension.mjs';
import { design3 } from './design3-horizon.mjs';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'output');
mkdirSync(OUT, { recursive: true });

const designs = [
  ['01-unchained-tree-of-life', design1],
  ['02-ascension-blackwork', design2],
  ['03-horizon-fine-line', design3],
];
const only = process.argv[2];

const browser = await chromium.launch();
for (const [name, fn] of designs) {
  if (only && !name.startsWith(only)) continue;
  const svg = fn();
  const svgPath = join(OUT, `${name}.svg`);
  writeFileSync(svgPath, svg);
  const [, w, h] = svg.match(/viewBox="0 0 (\d+) (\d+)"/).map(Number);
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(svgPath).href);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(OUT, `${name}.png`) });
  await page.close();
  console.log(`rendered ${name} (${w}x${h} @2x)`);
}
await browser.close();
