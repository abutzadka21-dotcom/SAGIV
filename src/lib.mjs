// Shared geometry + SVG helpers for procedural flash generation.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const FONT_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'fonts');

// Deterministic PRNG so every render is reproducible.
export function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const n = (v) => Math.round(v * 10) / 10;
export const pt = (p) => `${n(p[0])},${n(p[1])}`;
export const lerp = (a, b, t) => a + (b - a) * t;
export const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
export const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
export const mul = (a, k) => [a[0] * k, a[1] * k];
export const len = (a) => Math.hypot(a[0], a[1]);
export const norm = (a) => { const l = len(a) || 1; return [a[0] / l, a[1] / l]; };
export const perp = (a) => [-a[1], a[0]];
export const polar = (c, r, ang) => [c[0] + Math.cos(ang) * r, c[1] + Math.sin(ang) * r];

// Sample a quadratic bezier into k+1 points.
export function qpts(p0, c, p1, k = 8) {
  const out = [];
  for (let i = 0; i <= k; i++) {
    const t = i / k, u = 1 - t;
    out.push([u * u * p0[0] + 2 * u * t * c[0] + t * t * p1[0], u * u * p0[1] + 2 * u * t * c[1] + t * t * p1[1]]);
  }
  return out;
}

// Offset a polyline sideways by d (positive = left normal).
export function offset(pts, d) {
  return pts.map((p, i) => {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    return add(p, mul(norm(perp(sub(b, a))), d));
  });
}

// Closed polygon of a stroke whose width tapers from w0 to w1 along pts.
export function taper(pts, w0, w1) {
  const L = [], R = [];
  pts.forEach((p, i) => {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    const nn = norm(perp(sub(b, a)));
    const w = lerp(w0, w1, i / (pts.length - 1)) / 2;
    L.push(add(p, mul(nn, w)));
    R.push(sub(p, mul(nn, w)));
  });
  const tip = pts[pts.length - 1], dir = norm(sub(tip, pts[pts.length - 2]));
  const cap = add(tip, mul(dir, w1 * 0.45));
  return `M${L.map(pt).join('L')}Q${pt(cap)} ${pt(R[R.length - 1])}L${R.reverse().map(pt).join('L')}Z`;
}

export const poly = (pts) => `M${pts.map(pt).join('L')}`;

// Catmull-Rom spline through points -> cubic bezier path.
export function smooth(P, closed = true) {
  const m = P.length;
  const get = (i) => (closed ? P[(i + m) % m] : P[Math.max(0, Math.min(m - 1, i))]);
  let d = `M${pt(P[0])}`;
  const segs = closed ? m : m - 1;
  for (let i = 0; i < segs; i++) {
    const p0 = get(i - 1), p1 = get(i), p2 = get(i + 1), p3 = get(i + 2);
    const c1 = add(p1, mul(sub(p2, p0), 1 / 6));
    const c2 = sub(p2, mul(sub(p3, p1), 1 / 6));
    d += `C${pt(c1)} ${pt(c2)} ${pt(p2)}`;
  }
  return closed ? d + 'Z' : d;
}

export function fontFace(family, file, extra = '') {
  const b64 = readFileSync(join(FONT_DIR, file)).toString('base64');
  return `@font-face{font-family:'${family}';src:url(data:font/ttf;base64,${b64}) format('truetype');${extra}}`;
}

export function svgDoc(w, h, fonts, body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
<style>${fonts.join('')}</style>
<rect width="${w}" height="${h}" fill="#fff"/>
${body}
</svg>`;
}
