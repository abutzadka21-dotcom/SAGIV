// Design 1 — Black & grey realism: hands breaking rusty chains, fingers growing into a Tree of Life.
import { rng, n, pt, lerp, add, sub, mul, len, norm, perp, polar, qpts, offset, taper, smooth, poly, fontFace, svgDoc } from './lib.mjs';

const W = 1000, H = 1400;
const C = [500, 600], CR = 452;          // tree-of-life ring
const FOCUS = [500, 700];                 // canopy growth origin (radial bias)

export function design1() {
  const R = rng(1987);
  const defs = [];
  const L = { roots: [], bUnder: [], bFill: [], bHi: [], leaves: [], skin: [], skinFx: [], metal: [], fx: [] };
  let gid = 0;

  // Cylindrical black & grey shading across a limb (light from upper-left).
  function limbGrad(a, b, dark = '#141414') {
    const id = `g${gid++}`;
    defs.push(`<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${n(a[0])}" y1="${n(a[1])}" x2="${n(b[0])}" y2="${n(b[1])}">
<stop offset="0" stop-color="${dark}"/><stop offset=".18" stop-color="#5c5c5c"/><stop offset=".42" stop-color="#d9d9d9"/><stop offset=".6" stop-color="#9b9b9b"/><stop offset=".85" stop-color="#3a3a3a"/><stop offset="1" stop-color="${dark}"/></linearGradient>`);
    return `url(#${id})`;
  }
  // Fade skin into bark along a finger.
  function barkFade(a, b) {
    const id = `g${gid++}`;
    defs.push(`<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${n(a[0])}" y1="${n(a[1])}" x2="${n(b[0])}" y2="${n(b[1])}">
<stop offset=".25" stop-color="#2b2b2b" stop-opacity="0"/><stop offset="1" stop-color="#2b2b2b" stop-opacity="1"/></linearGradient>`);
    return `url(#${id})`;
  }

  // ---------- leaves ----------
  function leafCluster(p, ang, depthShade) {
    const k = 2 + Math.floor(R() * 3);
    for (let i = 0; i < k; i++) {
      const a = ang + (R() - 0.5) * 1.6;
      const Ln = 13 + R() * 10, Wd = Ln * 0.42;
      const tip = polar(p, Ln, a), mid = polar(p, Ln * 0.5, a);
      const s1 = add(mid, mul(perp([Math.cos(a), Math.sin(a)]), Wd));
      const s2 = add(mid, mul(perp([Math.cos(a), Math.sin(a)]), -Wd));
      const tones = ['#ffffff', '#f0f0f0', '#d4d4d4', '#a8a8a8', '#6e6e6e'];
      const fill = tones[Math.min(4, Math.floor(R() * 3 + depthShade))];
      L.leaves.push(`<path d="M${pt(p)}Q${pt(s1)} ${pt(tip)}Q${pt(s2)} ${pt(p)}Z" fill="${fill}" stroke="#111" stroke-width="1.1"/>` +
        `<path d="M${pt(p)}L${pt(polar(p, Ln * 0.8, a))}" stroke="#111" stroke-width=".6" opacity=".7"/>`);
    }
  }

  // ---------- recursive branches ----------
  function branch(p, ang, length, w, depth, inward = false) {
    const dir = [Math.cos(ang), Math.sin(ang)];
    let end = add(p, mul(dir, length));
    const ctrl = add(add(p, mul(dir, length * 0.5)), mul(perp(dir), (R() - 0.5) * length * 0.35));
    const out = len(sub(end, C)) > CR - 34;
    if (out) end = add(C, mul(norm(sub(end, C)), CR - 34));
    const pts = qpts(p, ctrl, end, 7);
    const w1 = Math.max(1, w * 0.7);
    const d = taper(pts, w, w1);
    L.bUnder.push(`<path d="${d}"/>`);
    L.bFill.push(`<path d="${d}"/>`);
    if (w > 3) L.bHi.push(`<path d="${poly(offset(pts, -w * 0.22))}" stroke-width="${n(w * 0.22)}"/>`);
    if (depth === 0 || out || w1 < 1.4) { leafCluster(end, ang, 1 - depth * 0.3); return; }
    if (depth <= 2 && R() < 0.6) leafCluster(pts[4], ang + (R() - 0.5), 2);
    const kids = depth > 3 && R() < 0.3 ? 3 : 2;
    for (let i = 0; i < kids; i++) {
      const spread = (i - (kids - 1) / 2) * (0.55 + R() * 0.3);
      let a = ang + spread;
      // Bias growth radially outward from canopy focus so the ring fills evenly.
      const radial = norm(sub(end, FOCUS));
      // Thumb branches arch up into the centre so the canopy closes over the hands.
      const pull = inward ? norm(sub([500, 200], end)) : radial;
      const v = norm(add(mul([Math.cos(a), Math.sin(a)], 0.78), mul(pull, inward ? 0.3 : 0.22)));
      a = Math.atan2(v[1], v[0]);
      branch(end, a, length * (0.74 + R() * 0.1), w1, depth - 1, inward);
    }
  }

  // ---------- roots ----------
  const rootsOut = [];
  function root(p, ang, length, w, depth) {
    const dir = [Math.cos(ang), Math.sin(ang)];
    const end = add(p, mul(dir, length));
    const ctrl = add(add(p, mul(dir, length * 0.5)), mul(perp(dir), (R() - 0.5) * length * 0.5));
    const pts = qpts(p, ctrl, end, 6);
    rootsOut.push(`<path d="${taper(pts, w, Math.max(0.8, w * 0.62))}"/>`);
    if (depth === 0) return;
    for (let i = 0; i < 2; i++) root(end, ang + (i ? 1 : -1) * (0.3 + R() * 0.4), length * 0.72, w * 0.62, depth - 1);
  }

  // ---------- arms / hands ----------
  function arm(side) {
    const s = side; // -1 left, +1 right
    const elbow = [500 + s * 50, 968], wrist = [500 + s * 140, 760];
    const fdir = norm(sub(wrist, elbow)), fn = perp(fdir);
    const at = (t, w) => add(lerp2(elbow, wrist, t), mul(fn, w));
    const lerp2 = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];
    // Forearm silhouette with brachioradialis bulge on the outer side.
    const outer = -s; // normal sign pointing away from centre
    const fore = [at(0, 54 * outer), at(0.3, 63 * outer), at(0.7, 46 * outer), at(1, 37 * outer),
      at(1, -37 * outer), at(0.6, -44 * outer), at(0.25, -52 * outer), at(0, -50 * outer)];
    const foreD = smooth(fore);
    const gA = at(0.5, 60), gB = at(0.5, -60);
    L.skin.push(`<path d="${foreD}" fill="${limbGrad(s < 0 ? gA : gB, s < 0 ? gB : gA)}" stroke="#111" stroke-width="3"/>`);
    // Muscle contours, a vein, and stipple texture.
    L.skinFx.push(`<path d="${smooth([at(0.08, 30 * outer), at(0.45, 26 * outer), at(0.85, 14 * outer)], false)}" fill="none" stroke="#222" stroke-width="1.6" opacity=".55"/>`);
    L.skinFx.push(`<path d="${smooth([at(0.1, -8 * outer), at(0.35, -2 * outer), at(0.55, -14 * outer), at(0.8, -6 * outer), at(0.98, -16 * outer)], false)}" fill="none" stroke="#e8e8e8" stroke-width="3.2" opacity=".55"/>` +
      `<path d="${smooth([at(0.1, -11 * outer), at(0.35, -5 * outer), at(0.55, -17 * outer), at(0.8, -9 * outer), at(0.98, -19 * outer)], false)}" fill="none" stroke="#1a1a1a" stroke-width="1" opacity=".5"/>`);
    for (let i = 0; i < 160; i++) {
      const t = R(), w = (R() - 0.5) * 2 * lerp(50, 36, t);
      const edge = Math.abs(w) / lerp(50, 36, t);
      if (R() < edge * 0.9) L.skinFx.push(`<circle cx="${n(at(t, w)[0])}" cy="${n(at(t, w)[1])}" r="${n(0.6 + R() * 0.9)}" fill="#111" opacity=".55"/>`);
    }

    // Hand: back of hand, splayed open.
    const hAng = Math.atan2(fdir[1], fdir[0]) - s * 0.2;
    const hd = [Math.cos(hAng), Math.sin(hAng)], hn = perp(hd);
    const knuck = add(wrist, mul(hd, 96));
    const palm = [add(wrist, mul(hn, 36)), add(add(wrist, mul(hd, 50)), mul(hn, 46)), add(knuck, mul(hn, 44)), add(add(knuck, mul(hd, 10)), mul(hn, 14)),
      add(add(knuck, mul(hd, 10)), mul(hn, -14)), add(knuck, mul(hn, -42)), add(add(wrist, mul(hd, 46)), mul(hn, -42)), add(wrist, mul(hn, -36))];
    // Fingers: 4 digits fanned from the knuckle line, then the thumb on the inner side.
    const fingerBases = [-33, -11, 11, 32].map((o) => add(knuck, mul(hn, o)));
    const fingerAngs = [-0.42, -0.14, 0.14, 0.4];
    const fingerLen = [74, 90, 96, 88];
    const order = s < 0 ? [0, 1, 2, 3] : [3, 2, 1, 0]; // pinky sits on the outer side
    fingerBases.forEach((b, i) => {
      const k = order[i];
      const a = hAng + fingerAngs[i];
      digit(b, a, fingerLen[k] * (k === 0 ? 0.85 : 1), k === 0 ? 19 : 22, 4);
    });
    // Thumb from the inner side, angled toward the centre line.
    const thumbBase = add(add(wrist, mul(hd, 34)), mul(hn, -40 * s));
    digit(thumbBase, hAng - s * 0.75, 74, 25, 4, true);

    const pg = limbGrad(add(wrist, mul(hn, 50)), add(wrist, mul(hn, -50)));
    L.skin.push(`<path d="${smooth(palm)}" fill="${pg}" stroke="#111" stroke-width="3"/>`);
    // Tendons + knuckle highlights on the back of the hand.
    [-30, -10, 10, 30].forEach((o) => {
      const k = add(knuck, mul(hn, o)), w0 = add(add(wrist, mul(hd, 12)), mul(hn, o * 0.35));
      L.skinFx.push(`<path d="M${pt(w0)}L${pt(k)}" stroke="#ededed" stroke-width="3" opacity=".55" stroke-linecap="round"/>` +
        `<path d="M${pt(add(w0, mul(hn, 3)))}L${pt(add(k, mul(hn, 3)))}" stroke="#151515" stroke-width="1" opacity=".45"/>` +
        `<ellipse cx="${n(k[0])}" cy="${n(k[1])}" rx="7" ry="5" transform="rotate(${n((hAng * 180) / Math.PI)} ${n(k[0])} ${n(k[1])})" fill="#f2f2f2" opacity=".7"/>`);
    });
    return { wrist, elbow, fdir, fn, at };
  }

  function digit(base, ang, length, w, depth, inward = false) {
    const dir = [Math.cos(ang), Math.sin(ang)];
    const end = add(base, mul(dir, length));
    const ctrl = add(add(base, mul(dir, length * 0.5)), mul(perp(dir), (R() - 0.5) * 8));
    const pts = qpts(base, ctrl, end, 8);
    const w1 = w * 0.66;
    const d = taper(pts, w, w1);
    const nn = perp(dir);
    L.skin.push(`<path d="${d}" fill="${limbGrad(add(base, mul(nn, w * 0.6)), add(base, mul(nn, -w * 0.6)))}" stroke="#111" stroke-width="2.6"/>`);
    L.skin.push(`<path d="${d}" fill="${barkFade(base, end)}"/>`);
    // Knuckle creases fade into bark grain.
    [0.33, 0.6].forEach((t) => {
      const c = add(base, mul(dir, length * t));
      L.skinFx.push(`<path d="M${pt(add(c, mul(nn, w * 0.35)))}Q${pt(add(c, mul(dir, 3)))} ${pt(add(c, mul(nn, -w * 0.35)))}" fill="none" stroke="#1a1a1a" stroke-width="1.2" opacity=".6"/>`);
    });
    for (let i = 0; i < 3; i++) {
      const o = (i - 1) * w * 0.22;
      L.skinFx.push(`<path d="${poly(offset(pts.slice(4), o))}" fill="none" stroke="#0e0e0e" stroke-width=".9" opacity=".7"/>`);
    }
    // Finger becomes a branch.
    const kids = 2;
    for (let i = 0; i < kids; i++) {
      const a = ang + (i ? 1 : -1) * (0.28 + R() * 0.25);
      branch(end, a, 82 + R() * 18, w1, depth, inward);
    }
  }

  const left = arm(-1), right = arm(1);

  // Roots from the joined elbows, clipped to the ring.
  for (let i = 0; i < 7; i++) {
    const a = Math.PI / 2 + (i - 3) * 0.36 + (R() - 0.5) * 0.15;
    root([500 + (i - 3) * 22, 985], a, 44 + R() * 10, 16 - Math.abs(i - 3) * 2, 4);
  }

  // ---------- shackles + breaking chain ----------
  function cuff(arm) {
    const c = arm.at(0.84, 0), ang = (Math.atan2(arm.fdir[1], arm.fdir[0]) * 180) / Math.PI + 90;
    const id = `g${gid++}`;
    defs.push(`<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#111"/><stop offset=".25" stop-color="#6d6d6d"/><stop offset=".45" stop-color="#e6e6e6"/><stop offset=".6" stop-color="#8d8d8d"/><stop offset="1" stop-color="#151515"/></linearGradient>`);
    let g = `<g transform="translate(${n(c[0])} ${n(c[1])}) rotate(${n(ang)})">`;
    g += `<rect x="-58" y="-19" width="116" height="38" rx="9" fill="url(#${id})" stroke="#0a0a0a" stroke-width="3.5"/>`;
    g += `<rect x="-58" y="-7" width="116" height="3" fill="#0a0a0a" opacity=".55"/><rect x="-58" y="6" width="116" height="2" fill="#fff" opacity=".35"/>`;
    for (let i = 0; i < 70; i++) g += `<circle cx="${n(-54 + R() * 108)}" cy="${n(-16 + R() * 32)}" r="${n(0.5 + R() * 1.8)}" fill="${R() < 0.6 ? '#1a1a1a' : '#f4f4f4'}" opacity="${n(0.4 + R() * 0.5)}"/>`;
    [-42, 42].forEach((x) => (g += `<circle cx="${x}" cy="0" r="5.5" fill="#cfcfcf" stroke="#0a0a0a" stroke-width="2"/><circle cx="${x - 1.5}" cy="-1.5" r="1.6" fill="#fff"/>`));
    return g + '</g>';
  }
  function link(c, ang, face, broken = 0) {
    // face=true -> open oval seen from the front, else edge-on bar.
    const deg = (ang * 180) / Math.PI;
    const shape = face
      ? broken
        ? `<path d="M${broken * 10},-15 L-12,-15 A15,15 0 0 0 -12,15 L${broken * 10},15"/>`
        : `<rect x="-27" y="-15" width="54" height="30" rx="15"/>`
      : `<line x1="-26" y1="0" x2="26" y2="0"/>`;
    let g = `<g transform="translate(${n(c[0])} ${n(c[1])}) rotate(${n(deg)})${broken < 0 ? ' scale(-1 1)' : ''}" fill="none" stroke-linecap="round">`;
    const w = face ? 1 : 1.25;
    g += `<g stroke="#0a0a0a" stroke-width="${n(13 * w)}">${shape}</g>`;
    g += `<g stroke="#737373" stroke-width="${n(8 * w)}">${shape}</g>`;
    g += `<g stroke="#d6d6d6" stroke-width="${n(2.2 * w)}" transform="translate(-1 -2)">${shape}</g>`;
    for (let i = 0; i < 14; i++) g += `<circle cx="${n(-24 + R() * 48)}" cy="${n(face ? (R() < 0.5 ? -15 : 15) + (R() - 0.5) * 6 : (R() - 0.5) * 8)}" r="${n(0.6 + R() * 1.4)}" fill="${R() < 0.65 ? '#141414' : '#efefef'}" stroke="none"/>`;
    return g + '</g>';
  }
  L.metal.push(cuff(left), cuff(right));
  const lc = left.at(0.84, 0), rc = right.at(0.84, 0);
  const cy = (lc[1] + rc[1]) / 2;
  // Links run from each cuff toward the snap point in the middle.
  const lp = [[lc[0] + 66, cy + 4], [lc[0] + 104, cy + 8]];
  const rp = [[rc[0] - 66, cy + 4], [rc[0] - 104, cy + 8]];
  L.metal.push(link(lp[0], 0.1, false), link(lp[1], 0.1, true, 1));
  L.metal.push(link(rp[0], -0.1, false), link(rp[1], -0.1, true, -1));
  // Snap: flying shards + impact lines.
  const snap = [500, cy + 4];
  for (let i = 0; i < 18; i++) {
    const a = -Math.PI / 2 + (R() - 0.5) * Math.PI * 1.6;
    const r0 = 16 + R() * 8, r1 = r0 + 18 + R() * 34;
    L.fx.push(`<path d="M${pt(polar(snap, r0, a))}L${pt(polar(snap, r1, a))}" stroke="#111" stroke-width="${n(0.8 + R() * 1.4)}" stroke-linecap="round"/>`);
  }
  [[-12, -30, 0.6], [15, -40, -0.8], [2, -58, 1.9], [-26, -50, 2.4]].forEach(([dx, dy, a]) => {
    const p = [snap[0] + dx, snap[1] + dy];
    L.fx.push(`<path d="M${pt(polar(p, 7, a))}L${pt(polar(p, 4, a + 2.2))}L${pt(polar(p, 8, a + 3.6))}L${pt(polar(p, 3, a + 5))}Z" fill="#5a5a5a" stroke="#0a0a0a" stroke-width="1.6"/>`);
  });

  // ---------- ring + banner ----------
  const ring = `<circle cx="${C[0]}" cy="${C[1]}" r="${CR}" fill="none" stroke="#111" stroke-width="3"/>` +
    `<circle cx="${C[0]}" cy="${C[1]}" r="${CR - 10}" fill="none" stroke="#111" stroke-width="1" stroke-dasharray="1 5" stroke-linecap="round"/>`;
  defs.push(`<clipPath id="ring"><circle cx="${C[0]}" cy="${C[1]}" r="${CR - 12}"/></clipPath>`);

  const by = 1122; // banner baseline
  const bannerPath = `M150,${by + 36} Q500,${by - 26} 850,${by + 36}`;
  const banner = `
<g stroke="#111" stroke-width="3" stroke-linejoin="round">
  <path d="M168,${by + 30} L60,${by + 52} L92,${by + 82} L60,${by + 112} L190,${by + 92} Z" fill="#fff"/>
  <path d="M832,${by + 30} L940,${by + 52} L908,${by + 82} L940,${by + 112} L810,${by + 92} Z" fill="#fff"/>
  <path d="M150,${by + 66} L190,${by + 92} L172,${by + 62} Z" fill="#3a3a3a"/>
  <path d="M850,${by + 66} L810,${by + 92} L828,${by + 62} Z" fill="#3a3a3a"/>
  <path d="M150,${by - 2} Q500,${by - 64} 850,${by - 2} L850,${by + 66} Q500,${by + 4} 150,${by + 66} Z" fill="#fff"/>
  <path d="M160,${by + 6} Q500,${by - 55} 840,${by + 6}" fill="none" stroke-width="1"/>
  <path d="M160,${by + 58} Q500,${by - 4} 840,${by + 58}" fill="none" stroke-width="1"/>
</g>
<path id="bp" d="${bannerPath}" fill="none"/>
<text font-family="Cinzel" font-weight="700" font-size="20" letter-spacing=".6" fill="#111"><textPath href="#bp" startOffset="50%" text-anchor="middle" dominant-baseline="central">I’VE BEEN A RICH MAN, AND I’VE BEEN A POOR MAN.</textPath></text>
<text x="500" y="1268" text-anchor="middle" font-family="Pinyon Script" font-size="56" fill="#111">And I choose rich every fucking time.</text>
<path d="M330,1300 Q500,1318 670,1300" fill="none" stroke="#111" stroke-width="1.4"/>
<path d="M480,1313 L500,1306 L520,1313 L500,1320 Z" fill="#111"/>`;

  const body = `<defs>${defs.join('')}</defs>
${ring}
<g clip-path="url(#ring)" fill="#262626" stroke="#0a0a0a" stroke-width="1.5">${rootsOut.join('')}</g>
<g fill="#0a0a0a" stroke="#0a0a0a" stroke-width="5" stroke-linejoin="round">${L.bUnder.join('')}</g>
<g fill="#2e2e2e">${L.bFill.join('')}</g>
<g fill="none" stroke="#a3a3a3" stroke-linecap="round" opacity=".85">${L.bHi.join('')}</g>
${L.leaves.join('')}
${L.skin.join('')}
${L.skinFx.join('')}
${L.metal.join('')}
${L.fx.join('')}
${banner}`;

  return svgDoc(W, H, [fontFace('Cinzel', 'Cinzel.ttf', 'font-weight:400 900;'), fontFace('Pinyon Script', 'PinyonScript-Regular.ttf')], body);
}
