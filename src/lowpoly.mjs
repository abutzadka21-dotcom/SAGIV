// Low-poly fine-line primitives: faceted human figure, faceted mountain, cut diamond, sparkles, dotted paths.
import { rng, n, pt, lerp, add, sub, mul, len, norm, perp, polar } from './lib.mjs';

export const INK = '#111';
export const hatchDefs = `<defs>
<pattern id="hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="4" stroke="${INK}" stroke-width=".8"/></pattern>
<pattern id="hatch2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)"><line x1="0" y1="0" x2="0" y2="6" stroke="${INK}" stroke-width=".6"/></pattern>
</defs>`;

// Poses: unit space, feet on y=0, ~180 units tall, facing +x. F = front (near) side, B = back side.
export const POSES = {
  climb: {
    head: [9, -158], neck: [5, -144], sh: [3, -137], hip: [0, -88], tw: [26, 20],
    elbF: [28, -112], handF: [44, -94], elbB: [-16, -112], handB: [-26, -88],
    kneeF: [30, -64], footF: [36, -30], kneeB: [-6, -44], footB: [-22, 0],
  },
  walk: {
    head: [5, -159], neck: [3, -145], sh: [1, -138], hip: [0, -88], tw: [26, 20],
    elbF: [16, -112], handF: [26, -88], elbB: [-12, -112], handB: [-20, -88],
    kneeF: [14, -46], footF: [22, 0], kneeB: [-8, -45], footB: [-20, 0],
  },
  kneel: {
    head: [36, -128], neck: [26, -116], sh: [20, -110], hip: [0, -58], tw: [26, 20],
    elbF: [34, -84], handF: [40, -62], elbB: [22, -80], handB: [26, -52],
    kneeF: [34, -60], footF: [36, 0], kneeB: [-2, -6], footB: [-40, -4],
  },
  victory: {
    head: [0, -160], neck: [0, -147], sh: [0, -140], hip: [0, -88], tw: [36, 22], front: true,
    shF: [17, -140], shB: [-17, -140], hipF: [8, -88], hipB: [-8, -88],
    elbF: [36, -168], handF: [46, -198], elbB: [-36, -168], handB: [-46, -198],
    kneeF: [10, -46], footF: [16, 0], kneeB: [-10, -46], footB: [-16, 0],
  },
};

// Faceted wireframe figure. o = feet point, s = scale, dir = 1 facing right / -1 left.
export function figure(pose, o, s, { dir = 1, hatch = true, fill = '#fff', sw = 1.3 } = {}) {
  const P = (k) => [o[0] + pose[k][0] * s * dir, o[1] + pose[k][1] * s];
  const J = (k, fb) => (pose[k] ? P(k) : P(fb));
  const out = [];
  const style = `fill="${fill}" stroke="${INK}" stroke-width="${sw}" stroke-linejoin="round"`;
  const limb = (a, b, w1, w2, shade) => {
    const nn = perp(norm(sub(b, a)));
    const a1 = add(a, mul(nn, (w1 * s) / 2)), a2 = sub(a, mul(nn, (w1 * s) / 2));
    const b1 = add(b, mul(nn, (w2 * s) / 2)), b2 = sub(b, mul(nn, (w2 * s) / 2));
    let g = `<path d="M${pt(a1)}L${pt(b1)}L${pt(b2)}L${pt(a2)}Z" ${style}/>`;
    g += `<path d="M${pt(a1)}L${pt(b2)}" stroke="${INK}" stroke-width="${n(sw * 0.7)}"/>`;
    if (hatch && shade) g += `<path d="M${pt(a1)}L${pt(b2)}L${pt(a2)}Z" fill="url(#hatch)" stroke="none"/>`;
    return g;
  };
  const joint = (p, r) => `<path d="M${[0, 1, 2, 3, 4, 5].map((i) => pt(polar(p, r * s, (i * Math.PI) / 3 + 0.3))).join('L')}Z" ${style}/>`;
  const foot = (ankle) => {
    const toe = [ankle[0] + 15 * s * dir, ankle[1]], heel = [ankle[0] - 3 * s * dir, ankle[1]];
    const top = [ankle[0] + 2 * s * dir, ankle[1] - 7 * s];
    return `<path d="M${pt(heel)}L${pt(top)}L${pt(toe)}Z" ${style}/>`;
  };
  const hand = (p, from) => {
    const d = norm(sub(p, from)), tip = add(p, mul(d, 10 * s)), nn = perp(d);
    return `<path d="M${pt(p)}L${pt(add(add(p, mul(d, 5 * s)), mul(nn, 4 * s)))}L${pt(tip)}L${pt(add(add(p, mul(d, 5 * s)), mul(nn, -4 * s)))}Z" ${style}/>`;
  };
  const arm = (shK, e, h, shade) => limb(J(shK, 'sh'), P(e), 9, 8, shade) + joint(P(e), 4) + limb(P(e), P(h), 7.5, 5.5, !shade) + hand(P(h), P(e));
  const leg = (hipK, k, f, shade) => limb(J(hipK, 'hip'), P(k), 14, 10, shade) + joint(P(k), 5.5) + limb(P(k), P(f), 10, 6.5, !shade) + foot(P(f));

  // Back limbs first so the torso and near limbs occlude them.
  out.push(leg('hipB', 'kneeB', 'footB', true), arm('shB', 'elbB', 'handB', true));
  // Torso: chest wedge + pelvis wedge, faceted.
  const sh = P('sh'), hp = P('hip');
  const spine = norm(sub(sh, hp)), nn = perp(spine);
  const [sw0, ww] = pose.tw;
  const c1 = add(sh, mul(nn, (sw0 * s) / 2)), c2 = sub(sh, mul(nn, (sw0 * s) / 2));
  const mid = lerp2(hp, sh, 0.45);
  const m1 = add(mid, mul(nn, (ww * 0.95 * s) / 2)), m2 = sub(mid, mul(nn, (ww * 0.95 * s) / 2));
  const h1 = add(hp, mul(nn, (ww * s) / 2)), h2 = sub(hp, mul(nn, (ww * s) / 2));
  out.push(`<path d="M${pt(c1)}L${pt(c2)}L${pt(m2)}L${pt(h2)}L${pt(h1)}L${pt(m1)}Z" ${style}/>`);
  out.push(`<path d="M${pt(c1)}L${pt(m2)}L${pt(h1)}M${pt(m1)}L${pt(m2)}" fill="none" stroke="${INK}" stroke-width="${n(sw * 0.7)}"/>`);
  if (hatch) out.push(`<path d="M${pt(c1)}L${pt(m2)}L${pt(m1)}Z" fill="url(#hatch)"/>`);
  // Neck + faceted head.
  out.push(limb(P('sh'), P('neck'), 9, 8, false));
  const hc = P('head'), hr = 13 * s;
  const hv = [0, 1, 2, 3, 4, 5].map((i) => polar(hc, hr * (i % 2 ? 1 : 1.12), (i * Math.PI) / 3 - Math.PI / 2 + 0.2 * dir));
  out.push(`<path d="M${hv.map(pt).join('L')}Z" ${style}/>`);
  const hx = add(hc, [3 * s * dir, 1 * s]);
  out.push(`<path d="M${pt(hv[0])}L${pt(hx)}L${pt(hv[2])}M${pt(hx)}L${pt(hv[4])}" fill="none" stroke="${INK}" stroke-width="${n(sw * 0.6)}"/>`);
  if (hatch) out.push(`<path d="M${pt(hv[3])}L${pt(hx)}L${pt(hv[4])}Z" fill="url(#hatch)"/>`);
  out.push(leg('hipF', 'kneeF', 'footF', false), arm('shF', 'elbF', 'handF', false));
  return out.join('');
}
const lerp2 = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];

// Constellation version of a pose: joints as stars, bones as hairlines.
export function starFigure(pose, o, s, dir = 1) {
  const P = (k) => [o[0] + pose[k][0] * s * dir, o[1] + pose[k][1] * s];
  const bones = [['neck', 'sh'], ['sh', 'hip'], ['sh', 'elbF'], ['elbF', 'handF'], ['sh', 'elbB'], ['elbB', 'handB'],
    ['hip', 'kneeF'], ['kneeF', 'footF'], ['hip', 'kneeB'], ['kneeB', 'footB']];
  let g = bones.map(([a, b]) => `<path d="M${pt(P(a))}L${pt(P(b))}" stroke="${INK}" stroke-width=".9"/>`).join('');
  g += `<circle cx="${n(P('head')[0])}" cy="${n(P('head')[1] - 2 * s)}" r="${n(12 * s)}" fill="none" stroke="${INK}" stroke-width="1"/>`;
  ['neck', 'sh', 'hip', 'elbF', 'handF', 'elbB', 'handB', 'kneeF', 'footF', 'kneeB', 'footB'].forEach((k, i) => {
    const p = P(k);
    g += i % 3 === 0 ? sparkle(p, 9, 1) : `<circle cx="${n(p[0])}" cy="${n(p[1])}" r="3.2" fill="${INK}"/>`;
  });
  return g;
}

// 4-point star.
export function sparkle(c, r, sw = 0) {
  const k = r * 0.22;
  const d = `M${pt([c[0], c[1] - r])}Q${pt([c[0] + k, c[1] - k])} ${pt([c[0] + r, c[1]])}Q${pt([c[0] + k, c[1] + k])} ${pt([c[0], c[1] + r])}Q${pt([c[0] - k, c[1] + k])} ${pt([c[0] - r, c[1]])}Q${pt([c[0] - k, c[1] - k])} ${pt([c[0], c[1] - r])}Z`;
  return `<path d="${d}" fill="${INK}"${sw ? ` stroke="#fff" stroke-width="${sw}" paint-order="stroke"` : ''}/>`;
}

// Faceted low-poly mountain between baseL..baseR with apex `peak`.
export function facetMountain(peak, baseL, baseR, { seed = 1, ridgeT = 0.55, shadeLeft = true, sw = 1.3, fill = '#fff' } = {}) {
  const R = rng(seed);
  const base = [lerp(baseL[0], baseR[0], ridgeT), baseL[1]];
  const along = (a, b, k, jit) => Array.from({ length: k + 1 }, (_, i) => {
    const p = lerp2(a, b, i / k);
    return i === 0 || i === k ? p : add(p, mul(perp(norm(sub(b, a))), (R() - 0.5) * jit));
  });
  const L = along(peak, baseL, 3, 14), M = along(peak, base, 3, 22), Rr = along(peak, baseR, 3, 14);
  let g = `<path d="M${pt(baseL)}L${pt(peak)}L${pt(baseR)}Z" fill="${fill}" stroke="none"/>`;
  const strip = (A, B, shade) => {
    for (let i = 0; i < 3; i++) {
      const tri1 = [A[i], A[i + 1], B[i + 1]], tri2 = [A[i], B[i + 1], B[i]];
      if (shade && i % 2 === 0) g += `<path d="M${tri1.map(pt).join('L')}Z" fill="url(#hatch)"/>`;
      if (shade && i % 2 === 1) g += `<path d="M${tri2.map(pt).join('L')}Z" fill="url(#hatch2)"/>`;
      g += `<path d="M${tri1.map(pt).join('L')}Z" fill="none" stroke="${INK}" stroke-width="${n(sw * 0.65)}" stroke-linejoin="round"/>`;
      if (i > 0) g += `<path d="M${tri2.map(pt).join('L')}Z" fill="none" stroke="${INK}" stroke-width="${n(sw * 0.65)}" stroke-linejoin="round"/>`;
    }
  };
  strip(L, M, shadeLeft);
  strip(M, Rr, !shadeLeft);
  g += `<path d="M${pt(baseL)}L${pt(peak)}L${pt(baseR)}" fill="none" stroke="${INK}" stroke-width="${sw}" stroke-linejoin="miter"/>`;
  return g;
}

// Round-brilliant diamond, side view. c = girdle centre, w = width.
export function diamond(c, w, { sw = 1.2, shade = true } = {}) {
  const hw = w / 2, crown = w * 0.24, pav = w * 0.52, tab = w * 0.28;
  const T1 = [c[0] - tab, c[1] - crown], T2 = [c[0] + tab, c[1] - crown];
  const G = [-1, -0.62, -0.2, 0.2, 0.62, 1].map((k) => [c[0] + k * hw, c[1]]);
  const cul = [c[0], c[1] + pav];
  const mid = (k) => [c[0] + k * hw * 0.5, c[1] - crown * 0.45];
  let g = `<path d="M${pt(G[0])}L${pt(T1)}L${pt(T2)}L${pt(G[5])}L${pt(cul)}Z" fill="#fff" stroke="${INK}" stroke-width="${sw}" stroke-linejoin="miter"/>`;
  const line = (a, b, w2 = sw * 0.7) => (g += `<path d="M${pt(a)}L${pt(b)}" stroke="${INK}" stroke-width="${n(w2)}"/>`);
  line(G[0], G[5]);
  [[T1, G[1]], [T1, G[2]], [T2, G[3]], [T2, G[4]], [T1, mid(-1.1)], [T2, mid(1.1)], [[c[0], c[1] - crown], G[2]], [[c[0], c[1] - crown], G[3]]].forEach(([a, b]) => line(a, b));
  G.slice(1, 5).forEach((p) => line(p, cul));
  if (shade) {
    g += `<path d="M${pt(G[0])}L${pt(G[1])}L${pt(cul)}Z" fill="url(#hatch)"/>`;
    g += `<path d="M${pt(G[3])}L${pt(G[4])}L${pt(cul)}Z" fill="url(#hatch2)"/>`;
    g += `<path d="M${pt(T1)}L${pt(G[0])}L${pt(G[1])}Z" fill="url(#hatch)"/>`;
  }
  return g;
}

// Dots spaced evenly along a polyline.
export function dotted(pts, gap = 10, r = 1.6) {
  let g = '', carry = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], d = len(sub(b, a));
    for (let t = carry; t < d; t += gap) {
      const p = lerp2(a, b, t / d);
      g += `<circle cx="${n(p[0])}" cy="${n(p[1])}" r="${r}" fill="${INK}"/>`;
    }
    carry = (carry - d) % gap;
    if (carry < 0) carry += gap;
  }
  return g;
}

// Broken, cracked ground segment.
export function brokenGround(x0, x1, y, seed, { shards = 10, sw = 1.4 } = {}) {
  const R = rng(seed);
  let g = '', x = x0;
  while (x < x1) {
    const seg = 18 + R() * 40, gap = 6 + R() * 14;
    const tilt = (R() - 0.5) * 16 * (1 - (x - x0) / (x1 - x0));
    g += `<path d="M${n(x)},${n(y + (R() - 0.5) * 6)}L${n(Math.min(x1, x + seg))},${n(y + tilt)}" stroke="${INK}" stroke-width="${sw}" stroke-linecap="square"/>`;
    x += seg + gap;
  }
  for (let i = 0; i < shards; i++) {
    const c = [lerp(x0, x1, R() * 0.85), y + 8 + R() * 34], s = 4 + R() * 9, a = R() * 6;
    const v = [0, 1, 2].map((k) => polar(c, s * (0.6 + R() * 0.5), a + k * 2.1));
    g += R() < 0.4 ? `<path d="M${v.map(pt).join('L')}Z" fill="${INK}"/>` : `<path d="M${v.map(pt).join('L')}Z" fill="none" stroke="${INK}" stroke-width="1"/>`;
  }
  return g;
}
