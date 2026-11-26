// Generates ikonu-varianti.html with 9 icon proposals (viewBox 0 0 96 96).
const fs = require('fs');
const OUT = process.argv[2];
const R = '#c41d00', INK = '#33383d', T1 = '#fbe9e5', T2 = '#f2c6bc', SOIL = '#efe3d6', SOIL2 = '#e2cfbb',
  W1 = '#d3e9f8', W2 = '#2b86d1', ROAD = '#e6e8ea', ROAD2 = '#cfd3d7';
const f = n => Math.round(n * 10) / 10;
const pts = a => a.map(p => p.map(f).join(',')).join(' ');
const S = `stroke-linecap="round" stroke-linejoin="round"`;
const GR = '#5f8f3e', GR1 = '#eef4e4';
const tuft = (x, y) => `<path d="M${x - 3.5} ${y} q0.4 -3 -1.4 -5 M${x} ${y} q0 -4 0.8 -6.5 M${x + 3.5} ${y} q-0.4 -3 1.4 -5" stroke="${GR}" stroke-width="1.8" fill="none" ${S}/>`;
const drop = (x, y, s = 1) => `<path d="M${x} ${y - 5 * s} c2.5 3.2 3.6 5 3.6 6.4 a3.6 3.6 0 0 1 -7.2 0 c0 -1.4 1.1 -3.2 3.6 -6.4Z" fill="${W1}" stroke="${W2}" stroke-width="1.8" ${S}/>`;

// ---------- Meliorācija ----------
const melioA = `
<path d="M4 56 H46 L60 78 H66 L80 56 H92 V80 Q92 86 86 86 H10 Q4 86 4 80 Z" fill="${SOIL}"/>
<polygon points="54.9,70 71.1,70 66,78 60,78" fill="${W1}"/>
<path d="M55.8 70 q2.6 -2 5.1 0 t5.1 0 t5.1 0" stroke="${W2}" stroke-width="2" fill="none" ${S}/>
<path d="M4 56 H46 L60 78 H66 L80 56 H92" stroke="${INK}" stroke-width="2.6" fill="none" ${S}/>
${tuft(86, 56)}
<path d="M30 38 L49 19 L56 54" stroke="${R}" stroke-width="5.5" fill="none" ${S}/>
<path d="M27 35 L41 23" stroke="${INK}" stroke-width="2" ${S}/>
<path d="M52 53 L61 52 L63 59 Q59 66 52 62 Z" fill="${T2}" stroke="${R}" stroke-width="2.4" ${S}/>
<path d="M53.5 62.5 l-1 2.5 M57 64 l-0.6 2.6 M60.5 63 l0 2.6" stroke="${R}" stroke-width="1.8" ${S}/>
<rect x="8" y="36" width="26" height="12" rx="2" fill="#fff" stroke="${R}" stroke-width="2.6"/>
<rect x="11" y="23" width="12" height="13" rx="2" fill="#fff" stroke="${R}" stroke-width="2.6"/>
<rect x="13.5" y="25.5" width="7" height="6" rx="1" fill="${W1}"/>
<rect x="5" y="48" width="34" height="8" rx="4" fill="#fff" stroke="${INK}" stroke-width="2.6"/>
<circle cx="11" cy="52" r="1.6" fill="${INK}"/><circle cx="22" cy="52" r="1.6" fill="${INK}"/><circle cx="33" cy="52" r="1.6" fill="${INK}"/>`;

const melioB = `
${drop(14, 18)}${drop(28, 12)}${drop(42, 20)}
<polygon points="4,40 46,40 60,70 66,70 80,40 92,40 92,92 4,92" fill="${SOIL}"/>
<path d="M14 45 v6 M14 54 l0 0 M28 45 v6 M40 45 v4" stroke="${W2}" stroke-width="2" stroke-dasharray="2 3" ${S}/>
<path d="M11 49 l3 3 l3 -3 M25 49 l3 3 l3 -3" stroke="${W2}" stroke-width="2" fill="none" ${S}/>
<rect x="6" y="54" width="47" height="7" rx="3.5" fill="#fff" stroke="${R}" stroke-width="2.4"/>
<path d="M13 57.5 h0 M20 57.5 h0 M27 57.5 h0 M34 57.5 h0 M41 57.5 h0" stroke="${R}" stroke-width="2.4" ${S}/>
<path d="M53 57.5 q4 1 5.5 6.5" stroke="${W2}" stroke-width="2.4" fill="none" ${S}/>
<polygon points="57.2,64 68.8,64 66,70 60,70" fill="${W1}"/>
<path d="M57.5 64 h11" stroke="${W2}" stroke-width="2" ${S}/>
<path d="M4 40 H46 L60 70 H66 L80 40 H92" stroke="${INK}" stroke-width="2.6" fill="none" ${S}/>
${tuft(10, 40)}${tuft(34, 40)}${tuft(86, 40)}`;

const melioC = `
<rect x="6" y="6" width="84" height="84" rx="10" fill="${GR1}" stroke="${GR}" stroke-width="2"/>
<path d="M14 16 H40 M14 22 H40 M14 44 H40 M14 50 H40 M14 56 H40 M14 80 H40 M58 16 H82 M58 22 H82 M58 28 H82 M58 34 H82 M58 72 H82 M58 78 H82" stroke="${GR}" stroke-width="1.4" stroke-opacity=".55" ${S}/>
<path d="M50 6 C42 30 58 58 47 90" stroke="${W2}" stroke-width="7" fill="none" ${S}/>
<path d="M50 6 C42 30 58 58 47 90" stroke="${W1}" stroke-width="2.5" fill="none" ${S}/>
<path d="M6 33 H46 M53 50 H90 M6 67 H50" stroke="${W2}" stroke-width="3.5" ${S}/>
<path d="M22 29 l4 4 l-4 4 M32 29 l4 4 l-4 4 M76 46 l-4 4 l4 4 M66 46 l-4 4 l4 4 M22 63 l4 4 l-4 4 M32 63 l4 4 l-4 4" stroke="${W2}" stroke-width="2" fill="none" ${S}/>
<path d="M41 80 l5 6 l6 -5" stroke="#fff" stroke-width="2.4" fill="none" ${S}/>`;

// ---------- Uzturēšana ----------
const uztA = `
<polygon points="12,92 40,22 56,22 84,92" fill="${ROAD}"/>
<path d="M12 92 L40 22 M84 92 L56 22" stroke="${INK}" stroke-width="2.6" ${S}/>
<path d="M48 92 V22" stroke="#fff" stroke-width="2.4" stroke-dasharray="7 6"/>
<path d="M41 27 L37 35 L41 42 L33.5 52" stroke="${INK}" stroke-width="2" fill="none" ${S}/>
<path d="M33.5 52 L37 60 L30 70 L33 77 L26 87" stroke="${R}" stroke-width="5" fill="none" ${S}/>
<path d="M45 38.5 L37.5 47" stroke="${INK}" stroke-width="3" ${S}/>
<path d="M37.5 47 L34 51" stroke="${R}" stroke-width="2.6" ${S}/>
<path d="M50 30 Q58 18 64 35" stroke="${INK}" stroke-width="2.4" fill="none" ${S}/>
<rect x="46" y="32" width="16" height="12" rx="3" transform="rotate(25 54 38)" fill="${INK}"/>
<rect x="49" y="34.5" width="6" height="2.6" rx="1.3" transform="rotate(25 54 38)" fill="#fff" fill-opacity=".35"/>
<path d="M74 58 L80 82 H68 Z" fill="${R}" stroke="${R}" stroke-width="2" ${S}/>
<path d="M71.5 68 h5.6 M70 74 h8.6" stroke="#fff" stroke-width="2.4" ${S}/>
<rect x="64" y="82" width="20" height="4" rx="1.5" fill="${INK}"/>`;

const uztB = `<g transform="translate(0 -2)">
<path d="M4 78 H48" stroke="${INK}" stroke-width="2.6" ${S}/>
<path d="M48 78 q4 -5 8 -1 q3 2 6 -2 q4 -4 8 1 q3 3 6 -1 q4 -4 8 0 q3 2 8 0" stroke="${INK}" stroke-width="2.6" fill="none" ${S}/>
<circle cx="66" cy="73" r="1.8" fill="${INK}"/><circle cx="83" cy="73.5" r="1.5" fill="${INK}"/>
<path d="M6 72 h8 M8 67 h6" stroke="${INK}" stroke-width="1.8" stroke-opacity=".5" ${S}/>
<path d="M30 44 L82 44 L82 64" stroke="${R}" stroke-width="5" fill="none" ${S}/>
<path d="M50 44 L52 58 M60 44 L58 58" stroke="${INK}" stroke-width="2" ${S}/>
<path d="M46 74 Q47 62 58 58 L60 60 Q51 64 52 76 Z" fill="${T2}" stroke="${R}" stroke-width="2.4" ${S}/>
<rect x="8" y="48" width="12" height="16" rx="2" fill="#fff" stroke="${R}" stroke-width="2.6"/>
<rect x="18" y="30" width="16" height="30" rx="2.5" fill="#fff" stroke="${R}" stroke-width="2.6"/>
<rect x="21" y="33" width="10" height="11" rx="1.5" fill="${W1}"/>
<circle cx="19" cy="70" r="7" fill="#fff" stroke="${INK}" stroke-width="2.6"/><circle cx="19" cy="70" r="2" fill="${INK}"/>
<circle cx="35" cy="70" r="7" fill="#fff" stroke="${INK}" stroke-width="2.6"/><circle cx="35" cy="70" r="2" fill="${INK}"/>
<circle cx="82" cy="70" r="7" fill="#fff" stroke="${INK}" stroke-width="2.6"/><circle cx="82" cy="70" r="2" fill="${INK}"/></g>`;

const flake = (x, y, r) => { let d = ''; for (let i = 0; i < 3; i++) { const a = i * Math.PI / 3, c = Math.cos(a) * r, s = Math.sin(a) * r; d += `M${f(x - c)} ${f(y - s)} L${f(x + c)} ${f(y + s)} `; } return `<path d="${d}" stroke="${W2}" stroke-width="2.2" ${S}/>`; };
const uztC = `
${flake(16, 18, 8)}${flake(36, 12, 5)}${flake(84, 22, 5)}
<path d="M4 80 H92" stroke="${INK}" stroke-width="2.6" ${S}/>
<path d="M80 80 Q83 69 89 68 Q94 68 94 80 Z" fill="#fff" stroke="${W2}" stroke-width="2" ${S}/>
<polygon points="16,40 54,40 52,64 18,64" fill="#fff" stroke="${R}" stroke-width="2.6" ${S}/>
<path d="M18 48 H52 M19 56 H51" stroke="${R}" stroke-width="1.6" stroke-opacity=".5"/>
<path d="M56 64 V46 Q56 42 60 42 H68 L74 52 V64" fill="#fff" stroke="${R}" stroke-width="2.6" ${S}/>
<path d="M60 45 H67 L71 52 H60 Z" fill="${W1}"/>
<rect x="62" y="37" width="6" height="4" rx="1" fill="#f0a020"/>
<path d="M14 66 H76" stroke="${INK}" stroke-width="3" ${S}/>
<path d="M76 58 L80 60 M76 66 L80 66" stroke="${INK}" stroke-width="2.2" ${S}/>
<path d="M80 54 Q88 64 82 80 L78 80 Q83 66 77 56 Z" fill="${T2}" stroke="${R}" stroke-width="2.4" ${S}/>
<circle cx="26" cy="72" r="7" fill="#fff" stroke="${INK}" stroke-width="2.6"/>
<circle cx="44" cy="72" r="7" fill="#fff" stroke="${INK}" stroke-width="2.6"/>
<circle cx="66" cy="72" r="7" fill="#fff" stroke="${INK}" stroke-width="2.6"/>
<path d="M12 68 l-4 4 M10 64 l-6 2" stroke="${INK}" stroke-width="2" ${S}/>
<circle cx="5" cy="74" r="1.3" fill="${INK}"/><circle cx="9" cy="77" r="1.3" fill="${INK}"/><circle cx="4" cy="69" r="1.3" fill="${INK}"/><circle cx="11" cy="74" r="1.1" fill="${INK}"/>`;

// ---------- Bruģēšana ----------
function brugA() {
  const s = 17, h = 0.4, g = 0.06, cx = 48, cy = 28;
  const iso = (x, y, z) => [cx + (x - y) * 0.866 * s, cy + (x + y) * 0.5 * s - z * s];
  const tile = (x, y, z0, top = T1) => {
    const x0 = x + g, y0 = y + g, x1 = x + 1 - g, y1 = y + 1 - g, zt = z0 + h;
    const A = iso(x0, y0, zt), B = iso(x1, y0, zt), C = iso(x1, y1, zt), D = iso(x0, y1, zt);
    const C0 = iso(x1, y1, z0), D0 = iso(x0, y1, z0), B0 = iso(x1, y0, z0);
    const st = `stroke="${R}" stroke-width="1.6" ${S}`;
    return `<polygon points="${pts([D, C, C0, D0])}" fill="${T2}" ${st}/><polygon points="${pts([B, C, C0, B0])}" fill="#e4a597" ${st}/><polygon points="${pts([A, B, C, D])}" fill="${top}" ${st}/>`;
  };
  const N = 3, hole = [2, 0];
  let o = '';
  // sand bed edge
  const e = [iso(0, N, 0), iso(N, N, 0), iso(N, 0, 0)], eb = [iso(0, N, -0.3), iso(N, N, -0.3), iso(N, 0, -0.3)];
  o += `<polygon points="${pts([e[0], e[1], eb[1], eb[0]])}" fill="${SOIL2}"/><polygon points="${pts([e[1], e[2], eb[2], eb[1]])}" fill="${SOIL}"/>`;
  o += `<polygon points="${pts([iso(hole[0], hole[1], 0), iso(hole[0] + 1, hole[1], 0), iso(hole[0] + 1, hole[1] + 1, 0), iso(hole[0], hole[1] + 1, 0)])}" fill="${SOIL2}"/>`;
  const cells = []; for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) if (!(x === hole[0] && y === hole[1])) cells.push([x, y]);
  cells.sort((a, b) => a[0] + a[1] - b[0] - b[1]).forEach(([x, y]) => o += tile(x, y, 0));
  o += tile(hole[0], hole[1], 1.5, '#fff');
  const [ax, ay] = iso(hole[0] + 0.5, hole[1] + 0.5, 1.1);
  o += `<path d="M${f(ax + 17)} ${f(ay - 22)} v14 m-4 -4 l4 4 l4 -4" stroke="${INK}" stroke-width="2.2" fill="none" ${S}/>`;
  return o;
}

function brugB() {
  const u = 7.2, cx = 46, cy = 52, r = 36;
  let b = '';
  for (let m = -8; m <= 8; m++) for (let k = -10; k <= 10; k++) {
    const ox = (k + 2 * m) * u, oy = (k - 2 * m) * u;
    const fill = (k + m) % 3 === 0 ? T2 : T1;
    b += `<rect x="${f(ox)}" y="${f(oy)}" width="${f(2 * u)}" height="${f(u)}" fill="${fill}" stroke="${R}" stroke-width="1.5"/>`;
    b += `<rect x="${f(ox)}" y="${f(oy + u)}" width="${f(u)}" height="${f(2 * u)}" fill="${fill === T1 ? T2 : T1}" stroke="${R}" stroke-width="1.5"/>`;
  }
  return `<defs><clipPath id="hb"><rect x="8" y="16" width="72" height="72" rx="10"/></clipPath></defs>
<g clip-path="url(#hb)"><g transform="translate(${cx} ${cy}) rotate(45)">${b}</g></g>
<rect x="8" y="16" width="72" height="72" rx="10" fill="none" stroke="${INK}" stroke-width="4"/>
<g transform="translate(70 24) rotate(40)">
<rect x="-2.6" y="-30" width="5.2" height="26" rx="2.6" fill="#d9a066" stroke="${INK}" stroke-width="2"/>
<rect x="-13" y="-6" width="26" height="12" rx="4" fill="${INK}"/>
<rect x="-10" y="-3.5" width="8" height="3" rx="1.5" fill="#fff" fill-opacity=".35"/>
</g>`;
}


function brugD() {
  const yT = 24, yB = 84, xl0 = 20, xl1 = 31, xr0 = 76, xr1 = 65;
  const L = y => xl0 + (xl1 - xl0) * (yB - y) / (yB - yT), Rr = y => xr0 - (xr0 - xr1) * (yB - y) / (yB - yT);
  const rows = [84, 74.5, 66, 58.5, 51.5, 45, 39, 33.5, 28.5, 24];
  const P = (q, y) => [L(y) + q * (Rr(y) - L(y)), y];
  let o = '';
  // grass strips outside the curbs
  o += `<polygon points="${pts([[4, yB], [xl0 - 9, yB], [xl1 - 6, yT], [14, yT]])}" fill="${GR1}"/><polygon points="${pts([[xr0 + 9, yB], [92, yB], [82, yT], [xr1 + 6, yT]])}" fill="${GR1}"/>`;
  for (let i = 0; i < rows.length - 1; i++) {
    const y1 = rows[i], y2 = rows[i + 1], th = (y1 - y2) * 0.22;
    const cuts = i % 2 ? [0, 0.25, 0.5, 0.75, 1] : [0, 0.125, 0.375, 0.625, 0.875, 1];
    for (let j = 0; j < cuts.length - 1; j++) {
      const a = cuts[j], b = cuts[j + 1], gap = 0.012;
      const A = P(a + (j ? gap : 0), y1), B = P(b - (j < cuts.length - 2 ? gap : 0), y1), C = P(b - (j < cuts.length - 2 ? gap : 0), y2 + 0.8), D = P(a + (j ? gap : 0), y2 + 0.8);
      const At = [A[0], A[1] - th], Bt = [B[0], B[1] - th];
      const fill = (i * 7 + j * 3) % 5 === 0 ? T2 : T1;
      o += `<polygon points="${pts([A, B, Bt, At])}" fill="#e4a597"/>`;
      o += `<polygon points="${pts([At, Bt, C, D])}" fill="${fill}" stroke="${R}" stroke-width="1.3" ${S}/>`;
    }
  }
  // curbs: top face + inner side face
  const curb = (x0, x1, w0, w1, side) => {
    const top = [[x0 + side * w0, yB], [x1 + side * w1, yT], [x1, yT], [x0, yB]];
    const face = [[x0, yB], [x1, yT], [x1, yT + 1.6], [x0, yB + 3]];
    return `<polygon points="${pts(face)}" fill="${ROAD2}"/><polygon points="${pts(top)}" fill="#f4f5f6" stroke="${INK}" stroke-width="1.8" ${S}/>`;
  };
  o += curb(xl0, xl1, 9, 6, -1) + curb(xr0, xr1, 9, 6, 1);
  o += tuft(9, 80) + tuft(13, 50) + tuft(88, 80) + tuft(83, 50);
  return o;
}

function brugE() {
  // Paved street in mild perspective: asphalt sidewalks, curbs, paved roadway, street lamps
  const yT = 34, yB = 88, l0 = 2, l1 = 24, r0 = 94, r1 = 72;
  const L = y => l0 + (l1 - l0) * (yB - y) / (yB - yT), Rr = y => r0 - (r0 - r1) * (yB - y) / (yB - yT);
  const X = (q, y) => L(y) + q * (Rr(y) - L(y));
  const band = (q0, q1, fill, st = '') => `<polygon points="${pts([[X(q0, yB), yB], [X(q0, yT), yT], [X(q1, yT), yT], [X(q1, yB), yB]])}" fill="${fill}" ${st}/>`;
  const a = 0.2, b = 0.25, c = 0.75, d = 0.8; // sidewalk | curb | road | curb | sidewalk
  let o = band(0, a, '#c9cdd1') + band(d, 1, '#c9cdd1') + band(b, c, T1);
  // roadway paving, running bond rows
  const rows = [88, 78.5, 70.5, 63.5, 57.5, 52, 47, 42.5, 38, 34];
  let dd = '';
  rows.forEach(y => dd += `M${f(X(b, y))} ${f(y)} H${f(X(c, y))} `);
  for (let i = 0; i < rows.length - 1; i++) {
    const y1 = rows[i], y2 = rows[i + 1], n = i % 2 ? [1, 3, 5, 7] : [2, 4, 6];
    n.forEach(k => { const q = b + (c - b) * k / 8; dd += `M${f(X(q, y1))} ${f(y1)} L${f(X(q, y2))} ${f(y2)} `; });
  }
  o += `<path d="${dd}" stroke="${R}" stroke-width="1.4" ${S}/>`;
  // curbs with a visible side face toward the road
  o += band(a, b, '#fff', `stroke="${INK}" stroke-width="1.6" ${S}`) + band(c, d, '#fff', `stroke="${INK}" stroke-width="1.6" ${S}`);
  o += `<path d="M${f(X(b, yB))} ${yB} L${f(X(b, yT))} ${yT} M${f(X(c, yB))} ${yB} L${f(X(c, yT))} ${yT}" stroke="${ROAD2}" stroke-width="2.4"/>`;
  // street lamps on the sidewalks, near and far
  const lamp = (q, y, h, dir) => {
    const x = X(q, y), k = h / 40, top = y - h, arm = 9 * k * dir;
    return `<path d="M${f(x)} ${f(y)} V${f(top)} q0 -${f(3 * k)} ${f(arm * 0.5)} -${f(3 * k)} H${f(x + arm)}" stroke="${INK}" stroke-width="${f(2.4 * k + 0.6)}" fill="none" ${S}/>` +
      `<rect x="${f(x + arm - 3.2 * k)}" y="${f(top - 3 * k)}" width="${f(6.4 * k)}" height="${f(3 * k)}" rx="${f(1.2 * k)}" fill="${INK}"/>` +
      `<ellipse cx="${f(x + arm)}" cy="${f(top + 0.6 * k)}" rx="${f(2.6 * k)}" ry="${f(1.4 * k)}" fill="#f6c343"/>` +
      `<rect x="${f(x - 1.8 * k)}" y="${f(y - 1.2 * k)}" width="${f(3.6 * k)}" height="${f(1.6 * k)}" rx=".6" fill="${INK}"/>`;
  };
  o += lamp(0.07, 50, 20, 1) + lamp(0.93, 50, 20, -1) + lamp(0.06, 84, 42, 1) + lamp(0.94, 84, 42, -1);
  return o;
}

function brugF() {
  // Street seen from eye level: real perspective, sidewalks raised above the paved roadway
  const VX = 48, VY = 2.4, KX = 78, KY = 168, EYE = 3.2, H = 0.18; // H = curb/sidewalk height (exaggerated)
  const P = (x, z, d) => [VX + KX * x / d, VY + KY * (EYE - z) / d];
  const poly = (a, fill, st = '') => `<polygon points="${pts(a)}" fill="${fill}" ${st}/>`;
  const D0 = 6, D1 = 16, RW = 2.6, CW = 0.22, SW = 4.4;
  let o = '';
  // roadway
  o += poly([P(-RW, 0, D0), P(-RW, 0, D1), P(RW, 0, D1), P(RW, 0, D0)], T1);
  let d = '';
  const rows = []; for (let z = D0; z < D1 * 1.001; z *= 1.065) rows.push(z);
  rows.forEach(z => d += `M${f(P(-RW, 0, z)[0])} ${f(P(0, 0, z)[1])} H${f(P(RW, 0, z)[0])} `);
  for (let i = 0; i < rows.length - 1; i++) {
    const z1 = rows[i], z2 = rows[i + 1], off = i % 2 ? 0.5 : 0;
    for (let j = 1; j < 7; j++) { const x = -RW + (j - off) * (2 * RW / 6); if (x <= -RW || x >= RW) continue; const a = P(x, 0, z1), b = P(x, 0, z2); d += `M${f(a[0])} ${f(a[1])} L${f(b[0])} ${f(b[1])} `; }
  }
  o += `<path d="${d}" stroke="${R}" stroke-width="1.2" stroke-opacity=".9" ${S}/>`;
  // each side: curb face, curb top, raised asphalt sidewalk
  [-1, 1].forEach(sd => {
    const x0 = sd * RW, x1 = sd * (RW + CW), x2 = sd * SW;
    o += poly([P(x0, 0, D0), P(x0, 0, D1), P(x0, H, D1), P(x0, H, D0)], ROAD2, `stroke="${INK}" stroke-width="1.2" ${S}`);
    o += poly([P(x1, H, D0), P(x1, H, D1), P(x2, H, D1), P(x2, H, D0)], '#c3c8cc');
    o += poly([P(x0, H, D0), P(x0, H, D1), P(x1, H, D1), P(x1, H, D0)], '#fff', `stroke="${INK}" stroke-width="1.4" ${S}`);
  });
  // street lamps on the sidewalks
  const lamp = (sd, z) => {
    const x = sd * 3.7, w = Math.max(1, 22 / z), base = P(x, H, z), top = P(x, 2.8, z), arm = P(x - sd * 1, 2.8, z), bend = P(x - sd * 0.3, 3, z);
    return `<path d="M${f(base[0])} ${f(base[1])} L${f(top[0])} ${f(top[1])} Q${f(bend[0])} ${f(bend[1])} ${f(arm[0])} ${f(arm[1])}" stroke="${INK}" stroke-width="${f(w)}" fill="none" ${S}/>` +
      `<ellipse cx="${f(arm[0])}" cy="${f(arm[1] + w * 0.6)}" rx="${f(w * 1.6)}" ry="${f(w * 0.8)}" fill="#f6c343" stroke="${INK}" stroke-width="${f(w * 0.4)}"/>`;
  };
  [14, 8].forEach(z => o += lamp(-1, z) + lamp(1, z));
  return o;
}

function brugC() {
  const yT = 30, yB = 92, L = y => 6 + (40 - 6) * (yB - y) / (yB - yT), Rr = y => 90 - (90 - 56) * (yB - y) / (yB - yT);
  const rows = [92, 77, 65.5, 56.5, 49.5, 44, 39.5, 36, 33, 30];
  let o = `<polygon points="${pts([[L(yB), yB], [L(yT), yT], [Rr(yT), yT], [Rr(yB), yB]])}" fill="${T1}"/>`;
  let d = '';
  rows.forEach(y => d += `M${f(L(y))} ${f(y)} H${f(Rr(y))} `);
  for (let i = 0; i < rows.length - 1; i++) {
    const y1 = rows[i], y2 = rows[i + 1], fr = i % 2 ? [0.2, 0.4, 0.6, 0.8] : [0.1, 0.3, 0.5, 0.7, 0.9];
    fr.forEach(q => d += `M${f(L(y1) + q * (Rr(y1) - L(y1)))} ${f(y1)} L${f(L(y2) + q * (Rr(y2) - L(y2)))} ${f(y2)} `);
  }
  o += `<path d="${d}" stroke="${R}" stroke-width="1.6" ${S}/>`;
  // curbs
  o += `<polygon points="${pts([[L(yB) - 6, yB], [L(yT) - 1.5, yT], [L(yT), yT], [L(yB), yB]])}" fill="#fff" stroke="${INK}" stroke-width="2.2" ${S}/>`;
  o += `<polygon points="${pts([[Rr(yB), yB], [Rr(yT), yT], [Rr(yT) + 1.5, yT], [Rr(yB) + 6, yB]])}" fill="#fff" stroke="${INK}" stroke-width="2.2" ${S}/>`;
  o += `<path d="M4 30 H92" stroke="${INK}" stroke-width="1.6" stroke-opacity=".5"/>`;
  o += tuft(10, 50) + tuft(86, 50) + tuft(20, 36) + tuft(76, 36);
  return o;
}

const groups = [
  ['Meliorācija', [['A', 'Ekskavators rok trīsstūra grāvi, apakšā ūdens', melioA], ['B', 'Drenāža: lietus → caurule zemē → grāvis', melioB], ['C', 'Sistēma no augšas: grāvji savāc ūdeni no laukiem', melioC]]],
  ['Autoceļu uzturēšana', [['A', 'Plaisas aizpildīšana + konuss', uztA], ['B', 'Autogreiders nolīdzina grants ceļu', uztB], ['C', 'Ziemas uzturēšana: sniega tīrītājs + kaisīšana', uztC]]],
  ['Bruģēšana', [['A', '3D bruģis, viens akmens tiek ielikts', brugA()], ['B', 'Eglīšu raksts + gumijas āmurs', brugB()], ['C', 'Bruģēts celiņš ar apmalēm perspektīvā', brugC()], ['D', 'Kā C, bet mazāk slīps: 3D akmeņi un apmales, bez debesīm', brugD()], ['E', 'Bruģēta iela: brauktuve ar bruģi, asfalta ietves, apmales, laternas', brugE()], ['F', 'Bruģēta iela no gara cilvēka skata, īsāka, apmales nedaudz augstāk', brugF()]]]
];
const svg = (body, px) => `<svg viewBox="0 0 96 96" width="${px}" height="${px}" fill="none">${body}</svg>`;
const html = `<!DOCTYPE html><html lang="lv"><head><meta charset="UTF-8"><title>Ikonu varianti</title>
<style>body{margin:0;padding:32px 16px;font:16px/1.4 system-ui,sans-serif;color:${INK};background:#f4f4f2}
h1{margin:0 0 8px}h2{margin:40px 0 16px}.row{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;max-width:1100px}
.c{background:#fff;border:1px solid #ddd;border-radius:16px;padding:20px;display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center}
.small{display:flex;gap:16px;align-items:center}.k{font-weight:800;font-size:22px;color:${R}}</style></head><body>
<h1>Ikonu varianti</h1><p>Katrai jomai 3 varianti. Lielā = kartiņā, mazās = īsceļu pogā (48 px un 28 px).</p>
${groups.map(([t, list]) => `<h2>${t}</h2><div class="row">${list.map(([k, d, b]) => `<div class="c"><div class="k">${k}</div>${svg(b, 200)}<div class="small">${svg(b, 48)}${svg(b, 28)}</div><div>${d}</div></div>`).join('')}</div>`).join('')}
</body></html>`;
fs.writeFileSync(OUT, html);
console.log('ok');

// Also save each icon as its own SVG file in ../ikonas/
const path = require('path');
const DIR = path.join(__dirname, '..', 'ikonas');
fs.mkdirSync(DIR, { recursive: true });
const slug = { 'Meliorācija': 'melioracija', 'Autoceļu uzturēšana': 'uzturesana', 'Bruģēšana': 'brugesana' };
groups.forEach(([t, list]) => list.forEach(([k, , b]) =>
  fs.writeFileSync(path.join(DIR, `${slug[t]}-${k}.svg`), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96" fill="none">${b}</svg>\n`)));
