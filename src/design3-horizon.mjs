// Design 3 — Minimalist fine-line: chaotic broken geometry resolving into horizon, compass and summit.
import { rng, n, pt, lerp, polar, fontFace, svgDoc } from './lib.mjs';

const W = 1400, H = 1000;
const HZ = 560;          // horizon y
const RESOLVE = 640;     // x where chaos fully resolves into the horizon
const COMPASS = [1040, 300];

export function design3() {
  const R = rng(311);
  let chaos = '';

  // Life-line: violent jagged swings that calm down and become the horizon.
  const lifeLine = (x0, amp, seed, sw) => {
    const r = rng(seed);
    const pts = [];
    for (let x = x0; x < RESOLVE; x += 14 + r() * 26) {
      const t = (x - x0) / (RESOLVE - x0);
      const A = amp * Math.pow(1 - t, 1.6);
      pts.push([x, HZ + (r() - 0.5) * 2 * A]);
    }
    pts.push([RESOLVE, HZ]);
    // Break the line into fragments — gaps get rarer as it resolves.
    let d = '', pen = false;
    for (let i = 1; i < pts.length; i++) {
      const t = i / pts.length;
      const gap = r() < 0.32 * (1 - t);
      if (gap) { pen = false; continue; }
      d += pen ? `L${pt(pts[i])}` : `M${pt(pts[i - 1])}L${pt(pts[i])}`;
      pen = true;
    }
    return `<path d="${d}" fill="none" stroke="#111" stroke-width="${sw}" stroke-linejoin="miter" stroke-linecap="square"/>`;
  };
  chaos += lifeLine(80, 210, 11, 2.4);
  chaos += lifeLine(150, 170, 23, 1.2);
  chaos += lifeLine(110, 210, 37, 0.8);

  // Shattered geometric fragments, dense on the far left.
  for (let i = 0; i < 95; i++) {
    const t = Math.pow(R(), 1.7);
    const x = lerp(70, RESOLVE - 40, t);
    const spread = lerp(200, 40, t);
    const y = Math.min(690, HZ + (R() - 0.5) * 2 * spread);
    const s = lerp(46, 8, t) * (0.5 + R());
    const a = R() * Math.PI * 2;
    const sw = n(lerp(1.8, 0.9, t));
    const kind = Math.floor(R() * 4);
    if (kind === 0) {
      // Triangle with one side missing.
      const v = [0, 1, 2].map((k) => polar([x, y], s, a + (k * Math.PI * 2) / 3 + (R() - 0.5) * 0.5));
      chaos += `<path d="M${pt(v[0])}L${pt(v[1])}L${pt(v[2])}" fill="none" stroke="#111" stroke-width="${sw}"/>`;
    } else if (kind === 1) {
      // Square, two sides only.
      const v = [0, 1, 2].map((k) => polar([x, y], s * 0.8, a + (k * Math.PI) / 2));
      chaos += `<path d="M${pt(v[0])}L${pt(v[1])}L${pt(v[2])}" fill="none" stroke="#111" stroke-width="${sw}"/>`;
    } else if (kind === 2) {
      // Parallel slash pair.
      const p0 = polar([x, y], s, a), p1 = polar([x, y], s, a + Math.PI);
      const o = [Math.cos(a + Math.PI / 2) * 5, Math.sin(a + Math.PI / 2) * 5];
      chaos += `<path d="M${pt(p0)}L${pt(p1)}M${pt([p0[0] + o[0], p0[1] + o[1]])}L${pt([p1[0] + o[0], p1[1] + o[1]])}" stroke="#111" stroke-width="${sw}"/>`;
    } else {
      // Small solid shard / dot.
      chaos += R() < 0.5
        ? `<circle cx="${n(x)}" cy="${n(y)}" r="${n(lerp(3, 1.4, t))}" fill="#111"/>`
        : `<path d="M${pt(polar([x, y], s * 0.4, a))}L${pt(polar([x, y], s * 0.15, a + 2.2))}L${pt(polar([x, y], s * 0.3, a + 4))}Z" fill="#111"/>`;
    }
  }

  // ---------- horizon / freedom side ----------
  let calm = `<path d="M${RESOLVE},${HZ} L1335,${HZ}" stroke="#111" stroke-width="2.4"/>`;
  [[900, 1250, 590, 0.9], [980, 1200, 612, 0.7], [1060, 1150, 632, 0.55]].forEach(([a, b, y, w]) => (calm += `<path d="M${a},${y} L${b},${y}" stroke="#111" stroke-width="${w}" stroke-dasharray="${n(40 + R() * 30)} 10"/>`));

  // Compass rose rising behind the summit.
  let compass = `<circle cx="${COMPASS[0]}" cy="${COMPASS[1]}" r="150" fill="none" stroke="#111" stroke-width="1.8"/>` +
    `<circle cx="${COMPASS[0]}" cy="${COMPASS[1]}" r="138" fill="none" stroke="#111" stroke-width=".8"/>`;
  for (let i = 0; i < 72; i++) {
    const a = (i / 72) * Math.PI * 2 - Math.PI / 2;
    const r1 = i % 9 === 0 ? 120 : i % 3 === 0 ? 130 : 134;
    compass += `<path d="M${pt(polar(COMPASS, 138, a))}L${pt(polar(COMPASS, r1, a))}" stroke="#111" stroke-width="${i % 9 === 0 ? 1.4 : 0.7}"/>`;
  }
  const point = (a, r, hw) => {
    const tip = polar(COMPASS, r, a), l = polar(COMPASS, hw, a - Math.PI / 4), rr = polar(COMPASS, hw, a + Math.PI / 4);
    return `<path d="M${pt(COMPASS)}L${pt(l)}L${pt(tip)}Z" fill="#111"/><path d="M${pt(COMPASS)}L${pt(rr)}L${pt(tip)}Z" fill="#fff" stroke="#111" stroke-width="1.2" stroke-linejoin="miter"/>`;
  };
  for (let i = 0; i < 4; i++) compass += point(-Math.PI / 4 + (i * Math.PI) / 2, 78, 14);
  for (let i = 0; i < 4; i++) compass += point(-Math.PI / 2 + (i * Math.PI) / 2, 128, 20);
  compass += `<circle cx="${COMPASS[0]}" cy="${COMPASS[1]}" r="5" fill="#fff" stroke="#111" stroke-width="1.4"/>`;
  compass += `<text x="${COMPASS[0]}" y="${COMPASS[1] - 162}" text-anchor="middle" font-family="Cinzel" font-weight="500" font-size="22" fill="#111">N</text>`;
  // Rays — the rising light.
  for (let i = 0; i < 11; i++) {
    const a = Math.PI + (i + 1) * (Math.PI / 12);
    compass += `<path d="M${pt(polar(COMPASS, 168, a))}L${pt(polar(COMPASS, i % 2 ? 196 : 214, a))}" stroke="#111" stroke-width=".9"/>`;
  }

  // Summit — white-filled so it occludes the lower compass (sun rising behind).
  const ridge = [[748, HZ], [872, 432], [918, 470], [1040, 286], [1150, 438], [1186, 408], [1296, HZ]];
  let summit = `<path d="M${ridge.map(pt).join('L')}Z" fill="#fff" stroke="#111" stroke-width="2.2" stroke-linejoin="miter"/>`;
  summit += `<path d="M1040,286 L1052,340 L1040,380 L1066,436 L1058,492 L1084,${HZ}" fill="none" stroke="#111" stroke-width="1"/>`;
  summit += `<path d="M872,432 L882,480 L874,520" fill="none" stroke="#111" stroke-width=".8"/>`;
  // Shade the right faces with fine hatching.
  for (let i = 0; i < 16; i++) {
    const y = 330 + i * 14;
    const xr = 1040 + (y - 286) * (110 / 152);
    if (y < 432) summit += `<path d="M${n(xr - 6)},${y} L${n(lerp(1052, xr - 6, 0.25))},${n(y + 6)}" stroke="#111" stroke-width=".7"/>`;
  }
  for (let i = 0; i < 8; i++) summit += `<path d="M${n(1158 + i * 16)},${n(450 + i * 14)} l-${18 + i * 2},10" stroke="#111" stroke-width=".7"/>`;
  // Snow line.
  summit += `<path d="M1006,338 L1022,330 L1032,346 L1046,328 L1060,344 L1072,334" fill="none" stroke="#111" stroke-width="1.2"/>`;


  const type = `
<path d="M${700 - 520},770 L${700 - 40},770 M${700 + 40},770 L${700 + 520},770" stroke="#111" stroke-width=".9"/>
<path d="M700,764 l6,6 l-6,6 l-6,-6Z" fill="#111"/>
<text x="700" y="850" text-anchor="middle" font-family="Cinzel" font-weight="500" font-size="40" letter-spacing="7" fill="#111">AND I CHOOSE RICH EVERY FUCKING TIME.</text>
<path d="M440,882 L960,882" stroke="#111" stroke-width=".9"/>`;

  const body = `${chaos}${calm}${compass}${summit}${type}`;
  return svgDoc(W, H, [fontFace('Cinzel', 'Cinzel.ttf', 'font-weight:400 900;')], body);
}
