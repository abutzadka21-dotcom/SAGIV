// Direction 3 variations — geometric fine-line climber: struggle → summit → multi-faceted wealth.
import { n, pt, polar, fontFace, svgDoc, rng, lerp } from './lib.mjs';
import { POSES, INK, hatchDefs, figure, starFigure, sparkle, facetMountain, diamond, dotted, brokenGround } from './lowpoly.mjs';

const FONTS = {
  oswald: () => fontFace('Oswald', 'Oswald.ttf', 'font-weight:200 700;'),
  cinzel: () => fontFace('Cinzel', 'Cinzel.ttf', 'font-weight:400 900;'),
  dafoe: () => fontFace('Mr Dafoe', 'MrDafoe-Regular.ttf'),
  allura: () => fontFace('Allura', 'Allura-Regular.ttf'),
};

// 3A — "The Climb": closest to the reference, cleaned up and stencil-safe.
export function v3a() {
  const W = 1400, H = 720, Y = 500;
  let g = hatchDefs;
  g += brokenGround(70, 300, Y, 5, { shards: 9 });
  g += dotted([[80, 560], [140, 548], [200, 572], [262, 540], [318, 528]], 11, 1.7);
  // Stepping blocks rising to the summit.
  const steps = [[480, 452, 420, 545], [585, 400, 515, 660], [690, 340, 610, 775]];
  steps.forEach(([px, py, l, r], i) => (g += facetMountain([px, py], [l, Y], [r, Y], { seed: 20 + i, sw: 1.2 })));
  g += facetMountain([1000, 150], [740, Y], [1280, Y], { seed: 9, ridgeT: 0.48, sw: 1.5 });
  g += `<path d="M60,${Y}L1340,${Y}" stroke="${INK}" stroke-width="1.5"/>`;
  // Rising line over the peaks, ending under the diamond.
  g += `<path d="M418,${Y - 40}L480,452L585,400L690,340L800,290L1000,150" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linejoin="miter"/>`;
  g += `<path d="M418,${Y - 40}L380,${Y - 40}L380,${Y}L418,${Y}Z" fill="#fff" stroke="${INK}" stroke-width="1.3"/>`;
  g += figure(POSES.climb, [360, Y], 1.25);
  g += diamond([1000, 82], 78);
  [[-60, 0], [60, 0], [-44, -38], [44, -38]].forEach(([dx, dy]) => (g += `<path d="M${1000 + dx * 0.75},${82 + dy * 0.75}L${1000 + dx},${82 + dy}" stroke="${INK}" stroke-width="1.1"/>`));
  g += sparkle([1090, 40], 9) + sparkle([905, 58], 6);
  g += `<text x="640" y="250" font-family="Mr Dafoe" font-size="96" fill="${INK}" transform="rotate(-12 640 250)">Rich</text>`;
  g += `<text x="700" y="590" text-anchor="middle" font-family="Oswald" font-weight="400" font-size="24" letter-spacing="4" fill="${INK}">I’VE BEEN A RICH MAN, AND I’VE BEEN A POOR MAN.</text>`;
  g += `<text x="700" y="636" text-anchor="middle" font-family="Oswald" font-weight="600" font-size="30" letter-spacing="5" fill="${INK}">AND I CHOOSE RICH EVERY FUCKING TIME.</text>`;
  return svgDoc(W, H, [FONTS.oswald(), FONTS.dafoe()], g);
}

// 3B — "Three Stages": on your knees → on your feet → on the summit.
export function v3b() {
  const W = 1400, H = 680, Y = 470;
  let g = hatchDefs;
  g += brokenGround(50, 400, Y, 17, { shards: 14 });
  g += `<path d="M400,${Y}L780,${Y}" stroke="${INK}" stroke-width="1.5"/>`;
  g += facetMountain([1090, 175], [780, Y], [1360, Y], { seed: 44, ridgeT: 0.5, sw: 1.5 });
  g += figure(POSES.kneel, [215, Y], 1.2);
  g += figure(POSES.walk, [590, Y], 1.2);
  g += figure(POSES.victory, [1090, 175], 0.78, { hatch: false });
  // Constellation thread tying the three moments together.
  const nodes = [[268, 318], [596, 250], [790, 130], [1054, 26]];
  g += dotted(nodes, 12, 1.6);
  nodes.forEach((p, i) => (g += i % 2 ? sparkle(p, 9, 3) : `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${INK}"/>`));
  g += `<text x="700" y="580" text-anchor="middle" font-family="Cinzel" font-weight="500" font-size="31" letter-spacing="6" fill="${INK}">AND I CHOOSE RICH EVERY FUCKING TIME.</text>`;
  g += `<path d="M560,612L840,612" stroke="${INK}" stroke-width=".9"/><path d="M700,606l6,6l-6,6l-6,-6Z" fill="${INK}"/>`;
  return svgDoc(W, H, [FONTS.cinzel()], g);
}

// 3C — "Constellation": the whole climb mapped in stars. Lightest, airiest option (vertical forearm).
export function v3c() {
  const W = 700, H = 1320;
  const R = rng(77);
  let g = '';
  // Scattered stars = chaos at the bottom.
  for (let i = 0; i < 46; i++) {
    const p = [60 + R() * 580, 1060 + R() * 100];
    g += R() < 0.2 ? sparkle(p, 5) : `<circle cx="${n(p[0])}" cy="${n(p[1])}" r="${n(0.8 + R() * 1.6)}" fill="${INK}"/>`;
  }
  for (let i = 0; i < 9; i++) {
    const a = [70 + R() * 520, 1065 + R() * 85], b = polar(a, 20 + R() * 40, R() * 6.3);
    g += `<path d="M${pt(a)}L${pt(b)}" stroke="${INK}" stroke-width=".8"/>`;
  }
  g += starFigure(POSES.climb, [190, 1035], 1.4);
  // Climbing path through a constellation mountain.
  const path = [[240, 993], [320, 925], [290, 845], [380, 720], [330, 640], [420, 560], [380, 470], [350, 330]];
  g += dotted(path, 11, 1.5);
  const tri = [[150, 760], [350, 330], [580, 760]];
  g += `<path d="M${tri.map(pt).join('L')}Z" fill="none" stroke="${INK}" stroke-width=".9"/>`;
  [[350, 330, 290, 580], [350, 330, 440, 615], [290, 580, 440, 615], [290, 580, 150, 760], [440, 615, 580, 760], [290, 580, 360, 760], [440, 615, 360, 760]].forEach(([a, b, c, d]) => (g += `<path d="M${a},${b}L${c},${d}" stroke="${INK}" stroke-width=".7"/>`));
  [[150, 760], [580, 760], [290, 580], [440, 615], [360, 760]].forEach((p) => (g += `<circle cx="${p[0]}" cy="${p[1]}" r="3.4" fill="${INK}"/>`));
  g += `<path d="M150,760L580,760" stroke="${INK}" stroke-width=".9" stroke-dasharray="2 6"/>`;
  // Summit star = the diamond.
  g += `<path d="M350,330L350,250" stroke="${INK}" stroke-width=".9"/>`;
  g += `<path d="M350,140L395,195L350,255L305,195Z" fill="none" stroke="${INK}" stroke-width="1.2"/><path d="M305,195L395,195M350,140L330,195L350,255L370,195Z" fill="none" stroke="${INK}" stroke-width=".8"/>`;
  g += sparkle([350, 120], 22) + sparkle([430, 150], 7) + sparkle([275, 172], 6);
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    g += `<path d="M${pt(polar([350, 195], 82, a))}L${pt(polar([350, 195], i % 2 ? 96 : 110, a))}" stroke="${INK}" stroke-width=".8"/>`;
  }
  g += `<text x="350" y="1238" text-anchor="middle" font-family="Allura" font-size="76" fill="${INK}">I choose rich</text>`;
  g += `<text x="350" y="1288" text-anchor="middle" font-family="Cinzel" font-weight="500" font-size="21" letter-spacing="9" fill="${INK}">EVERY FUCKING TIME</text>`;
  return svgDoc(W, H, [FONTS.cinzel(), FONTS.allura()], g);
}

// 3D — "Diamond Summit": the mountain IS the diamond — wealth with many faces. Climb from the culet to the peak.
export function v3d() {
  const W = 900, H = 1250, cx = 450, GY = 560, CUL = [450, 1000];
  let g = hatchDefs;
  const ridge = [[120, GY], [215, 420], [285, 455], [450, 175], [590, 375], [655, 340], [780, GY]];
  const gird = [120, 225, 330, 450, 570, 675, 780].map((x) => [x, GY]);
  g += `<path d="M${ridge.map(pt).join('L')}L${pt(CUL)}Z" fill="#fff" stroke="${INK}" stroke-width="1.8" stroke-linejoin="miter"/>`;
  // Crown facets: each ridge vertex fans to the girdle.
  const fan = [[1, [0, 1, 2]], [2, [1, 2, 3]], [3, [2, 3, 4]], [4, [3, 4, 5]], [5, [4, 5, 6]]];
  fan.forEach(([ri, gs]) => gs.forEach((gi) => (g += `<path d="M${pt(ridge[ri])}L${pt(gird[gi])}" stroke="${INK}" stroke-width=".9"/>`)));
  g += `<path d="M${pt(ridge[1])}L${pt(gird[1])}L${pt(ridge[2])}Z" fill="url(#hatch)"/>`;
  g += `<path d="M${pt(ridge[3])}L${pt(gird[2])}L${pt(gird[3])}Z" fill="url(#hatch)"/>`;
  g += `<path d="M${pt(ridge[4])}L${pt(gird[5])}L${pt(ridge[5])}Z" fill="url(#hatch2)"/>`;
  g += `<path d="M120,${GY}L780,${GY}" stroke="${INK}" stroke-width="1.6"/><path d="M128,${GY + 7}L772,${GY + 7}" stroke="${INK}" stroke-width=".7"/>`;
  // Pavilion facets.
  gird.slice(1, 6).forEach((p) => (g += `<path d="M${pt(p)}L${pt(CUL)}" stroke="${INK}" stroke-width=".9"/>`));
  [[172, 0.42], [390, 0.42], [510, 0.42], [728, 0.42]].forEach(([x, t]) => {
    const a = [x, GY + 7], b = [lerp(x, CUL[0], 0.5), lerp(GY, CUL[1], 0.5)];
    g += `<path d="M${pt(a)}L${pt(b)}" stroke="${INK}" stroke-width=".7"/>`;
  });
  g += `<path d="M${pt(gird[0])}L${pt(gird[1])}L${pt(CUL)}Z" fill="url(#hatch)"/>`;
  g += `<path d="M${pt(gird[4])}L${pt(gird[5])}L${pt(CUL)}Z" fill="url(#hatch2)"/>`;
  // The climb: from the lowest point of the stone up to the peak.
  g += dotted([[450, 985], [410, 880], [480, 780], [400, 690], [470, 600], [380, 500], [362, 412]], 12, 1.8);
  g += figure(POSES.climb, [365, 412], 0.62, { hatch: false });
  g += sparkle([450, 140], 20) + sparkle([520, 115], 7) + sparkle([382, 120], 5);
  g += `<text x="${cx}" y="1110" text-anchor="middle" font-family="Cinzel" font-weight="600" font-size="44" letter-spacing="8" fill="${INK}">AND I CHOOSE RICH</text>`;
  g += `<text x="${cx}" y="1160" text-anchor="middle" font-family="Cinzel" font-weight="500" font-size="22" letter-spacing="12" fill="${INK}">EVERY FUCKING TIME</text>`;
  return svgDoc(W, H, [FONTS.cinzel()], g);
}
