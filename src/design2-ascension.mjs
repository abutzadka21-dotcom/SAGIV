// Design 2 — Neo-traditional / blackwork: athlete breaking out of cracked rock toward a geometric sun + summit.
import { rng, n, pt, add, sub, mul, norm, perp, polar, smooth, fontFace, svgDoc } from './lib.mjs';

const W = 1000, H = 1460;
const SUN = [500, 345];

export function design2() {
  const R = rng(4242);
  const mirror = (p) => [1000 - p[0], p[1]];

  // ---------- sun ----------
  let sun = '';
  const rays = 32;
  for (let i = 0; i < rays; i++) {
    const a = (i / rays) * Math.PI * 2 - Math.PI / 2;
    const long = i % 2 === 0;
    const r0 = 138, r1 = long ? 262 : 205, hw = long ? 0.07 : 0.05;
    sun += `<path d="M${pt(polar(SUN, r0, a - hw))}L${pt(polar(SUN, r1, a))}L${pt(polar(SUN, r0, a + hw))}Z" fill="#000"/>`;
  }
  sun += `<circle cx="${SUN[0]}" cy="${SUN[1]}" r="124" fill="#fff" stroke="#000" stroke-width="9"/>`;
  sun += `<circle cx="${SUN[0]}" cy="${SUN[1]}" r="108" fill="none" stroke="#000" stroke-width="2"/>`;
  // Dotwork gradient inside the disk (denser toward the rim).
  for (let i = 0; i < 900; i++) {
    const r = 100 * Math.sqrt(R()), a = R() * Math.PI * 2;
    if (R() < Math.pow(r / 100, 2.2)) {
      const p = polar(SUN, r, a);
      sun += `<circle cx="${n(p[0])}" cy="${n(p[1])}" r="${n(1 + R() * 1.1)}" fill="#000"/>`;
    }
  }
  sun += `<circle cx="${SUN[0]}" cy="${SUN[1]}" r="148" fill="none" stroke="#000" stroke-width="2.5"/>`;

  // ---------- mountain ----------
  const mtn = [[90, 800], [235, 575], [285, 618], [355, 520], [400, 552], [500, 300], [600, 520], [655, 480], [735, 590], [790, 548], [910, 800]];
  let mountain = `<path d="M${mtn.map(pt).join('L')}Z" fill="#000" stroke="#fff" stroke-width="6" paint-order="stroke"/>`;
  // Snow cap + lit faces (negative space).
  // Main peak stays solid black against the white disk; light comes in as white strata.
  for (let i = 0; i < 5; i++) mountain += `<path d="M${n(500 - 12 - i * 9)},${n(330 + i * 22)} l${n(-14 - i * 3)},${n(30 + i * 4)}" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`;
  mountain += `<path d="M355,520 L340,546 L352,542 L346,562 L362,548 L372,556 Z" fill="#fff"/>`;
  mountain += `<path d="M655,480 L640,506 L652,500 L648,522 L664,506 L676,512 Z" fill="#fff"/>`;
  // Ridge hatching on the light (left) faces.
  for (let i = 0; i < 9; i++) {
    const y = 430 + i * 30;
    mountain += `<path d="M${n(500 - (y - 300) * 0.4 + 18)},${y} l${n(-26 - i * 2)},${n(22 + i)}" stroke="#fff" stroke-width="${n(3 - i * 0.2)}" stroke-linecap="round"/>`;
  }
  for (let i = 0; i < 5; i++) mountain += `<path d="M${270 + i * 16},${650 + i * 20} l-30,26" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`;
  for (let i = 0; i < 5; i++) mountain += `<path d="M${712 + i * 14},${640 + i * 20} l-26,24" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`;

  // ---------- figure (front, arms raised in a V) ----------
  const rightSide = [[517, 772], [522, 790], [556, 795], [592, 801], [618, 790], [628, 752], [646, 714], [655, 670], [668, 632], [678, 608],
    [672, 578], [681, 550], [704, 539], [728, 547], [738, 573], [729, 603], [720, 624], [714, 670], [700, 720], [677, 782], [646, 828],
    [636, 852], [640, 884], [622, 940], [596, 996], [578, 1040], [574, 1120]];
  const outline = [...rightSide, ...rightSide.slice().reverse().map(mirror)];
  const head = `<path d="M500,682 C526,682 536,705 535,730 C534,752 520,772 500,774 C480,772 466,752 465,730 C464,705 474,682 500,682Z"/>`;
  const muscle = (d) => d + mirrorPath(d);
  const lines = [
    'M506,806 Q545,812 590,810',                     // clavicle
    'M503,822 L503,868 Q548,892 604,862',            // pec
    'M604,814 Q612,838 614,858',                     // pec/delt split
    'M620,800 Q640,812 650,840',                     // delt
    'M624,764 Q646,744 660,714',                     // biceps
    'M675,705 Q690,668 699,632',                     // forearm
    'M686,566 Q708,558 730,566',                     // fist
    'M500,890 L500,1035',                            // linea alba
    'M507,910 Q526,905 548,909', 'M507,952 Q526,947 546,951', 'M507,994 Q524,990 542,994', // abs
    'M566,896 Q580,955 562,1018',                    // oblique
    'M620,884 L602,896', 'M616,906 L598,917', 'M610,928 L592,938', // serratus
  ];
  function mirrorPath(d) {
    return ' ' + d.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g, (m, x, y) => `${1000 - +x},${y}`);
  }
  const figure = `<g>
  <path d="${smooth(outline)}" fill="#000" stroke="#fff" stroke-width="12" paint-order="stroke" stroke-linejoin="round"/>
  <g fill="#000" stroke="#fff" stroke-width="12" paint-order="stroke">${head}</g>
  <path d="${smooth(outline)}" fill="#000"/>
  <g fill="#000">${head}</g>
  <path d="${lines.map(muscle).join(' ')}" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>
</g>`;

  // ---------- cracked rock ----------
  const rockTop = [[180, 1180], [198, 1112], [240, 1086], [292, 1094], [338, 1062], [392, 1072], [432, 1046], [470, 1060], [500, 1048], [530, 1060],
    [568, 1046], [608, 1072], [662, 1062], [708, 1094], [760, 1086], [802, 1112], [820, 1180]];
  let rock = `<clipPath id="rockClip"><path d="M${rockTop.map(pt).join('L')}Z"/></clipPath>`;
  rock += `<path d="M${rockTop.map(pt).join('L')}Z" fill="#fff" stroke="#000" stroke-width="7" stroke-linejoin="round"/>`;
  // Shadow facets (solid black blocks on the right of each face).
  const facets = [[[338, 1062], [360, 1120], [392, 1072]], [[662, 1062], [640, 1124], [708, 1094]], [[240, 1086], [262, 1150], [292, 1094]],
    [[760, 1086], [742, 1160], [802, 1112]], [[568, 1046], [586, 1110], [608, 1072]], [[432, 1046], [446, 1104], [470, 1060]]];
  facets.forEach((f) => (rock += `<path d="M${f.map(pt).join('L')}Z" fill="#000"/>`));
  // Cracks radiating from the waist.
  const crack = (p, a, length, w, depth) => {
    let d = `M${pt(p)}`, q = p;
    const segs = 4;
    for (let i = 0; i < segs; i++) {
      a += (R() - 0.5) * 0.7;
      q = polar(q, length / segs, a);
      d += `L${pt(q)}`;
    }
    rock += `<path d="${d}" clip-path="url(#rockClip)" fill="none" stroke="#000" stroke-width="${n(w)}" stroke-linecap="round" stroke-linejoin="miter"/>`;
    if (depth > 0) { crack(q, a - 0.5, length * 0.6, w * 0.6, depth - 1); if (R() < 0.6) crack(q, a + 0.5, length * 0.5, w * 0.6, depth - 1); }
  };
  [2.75, 2.45, 2.15, 0.99, 0.69, 0.39].forEach((a, i) => crack([500 + (i < 3 ? -66 : 66), 1056], a, 110 + R() * 50, 6, 2));
  // Debris kicked up around the break.
  for (let i = 0; i < 26; i++) {
    const side = i % 2 ? 1 : -1;
    const c = [500 + side * (90 + R() * 260), 1050 - R() * 170];
    const s = 5 + R() * 13, a0 = R() * 6;
    const shard = [0, 1, 2, 3].map((k) => polar(c, s * (0.6 + R() * 0.6), a0 + k * 1.6 + R() * 0.5));
    rock += `<path d="M${shard.map(pt).join('L')}Z" fill="#000" stroke="#fff" stroke-width="3" paint-order="stroke"/>`;
  }
  // Ground rule.
  rock += `<path d="M120,1180 L880,1180 M200,1192 L800,1192" stroke="#000" stroke-width="3"/><path d="M120,1180 L880,1180" stroke="#000" stroke-width="6"/>`;

  // ---------- typography ----------
  const arcR = 300;
  const arc = `M${pt(polar(SUN, arcR, Math.PI * 0.95))} A${arcR},${arcR} 0 1 1 ${pt(polar(SUN, arcR, Math.PI * 0.05))}`;
  const type = `
<path id="arc" d="${arc}" fill="none"/>
<text font-family="Oswald" font-weight="600" font-size="27" letter-spacing="3.5" fill="#000"><textPath href="#arc" startOffset="50%" text-anchor="middle">I’VE BEEN A RICH MAN ✦ AND I’VE BEEN A POOR MAN</textPath></text>
<text x="500" y="1318" text-anchor="middle" font-family="Bebas Neue" font-size="132" letter-spacing="4" fill="#000">AND I CHOOSE RICH</text>
<g fill="#000"><rect x="110" y="1375" width="96" height="4"/><rect x="794" y="1375" width="96" height="4"/>
<path d="M214,1377 l9,-9 l9,9 l-9,9Z M768,1377 l9,-9 l9,9 l-9,9Z"/></g>
<text x="500" y="1394" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="44" letter-spacing="6" fill="#000">EVERY FUCKING TIME</text>`;

  const body = `${sun}
${mountain}
${figure}
${rock}
${type}`;
  return svgDoc(W, H, [fontFace('Oswald', 'Oswald.ttf', 'font-weight:200 700;'), fontFace('Bebas Neue', 'BebasNeue-Regular.ttf')], body);
}
