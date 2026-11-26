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

// ---------- shared helpers ----------
const GRAV = '#d9d2c6', DIRT = '#d6c3ad';
const wheel = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="${INK}" stroke-width="2.6"/><circle cx="${x}" cy="${y}" r="${f(r * 0.28)}" fill="${INK}"/>`;
const dots = (x0, x1, y0, y1, step, r, col = INK, op = 0.55) => { let o = ''; let k = 0; for (let y = y0; y <= y1; y += step) { for (let x = x0 + (k % 2) * step / 2; x <= x1; x += step) o += `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="${col}" fill-opacity="${op}"/>`; k++; } return o; };
const tree = (x, y, s = 1) => `<path d="M${x} ${f(y - 2 * s)} V${y}" stroke="${INK}" stroke-width="${f(2 * s)}" ${S}/><path d="M${x} ${f(y - 18 * s)} L${f(x + 6.5 * s)} ${f(y - 2 * s)} H${f(x - 6.5 * s)} Z" fill="${GR1}" stroke="${GR}" stroke-width="2" ${S}/>`;

// ---------- Ceļu būve ----------
const celiA = `
<path d="M4 64 H92 V70 H4 Z" fill="${GRAV}"/>${dots(7, 90, 66.5, 68.5, 5, 0.9)}
<rect x="4" y="70" width="88" height="9" fill="${SOIL2}"/>${dots(8, 90, 72.5, 76.5, 7, 1.7, '#fff', 0.8)}
<path d="M4 79 H92 V84 Q92 90 86 90 H10 Q4 90 4 84 Z" fill="${SOIL}"/>${dots(7, 90, 82, 87, 4, 0.6)}
<path d="M4 70 H92 M4 79 H92" stroke="${R}" stroke-width="1.2" stroke-opacity=".5"/>
<path d="M4 64 H92" stroke="${INK}" stroke-width="2.6" ${S}/>
<path d="M50 46 L58 32 H82 Q88 32 88 40 V48" stroke="${R}" stroke-width="4" fill="none" ${S}/>
<rect x="10" y="40" width="44" height="14" rx="3" fill="#fff" stroke="${R}" stroke-width="2.6"/>
<rect x="16" y="16" width="20" height="24" rx="3" fill="#fff" stroke="${R}" stroke-width="2.6"/>
<rect x="19" y="19" width="14" height="10" rx="1.5" fill="${W1}"/>
<path d="M40 46 H50" stroke="${INK}" stroke-width="1.8" stroke-opacity=".5" ${S}/>
<rect x="50" y="43" width="8" height="8" rx="1.5" fill="${INK}"/>
${wheel(24, 55, 9)}
<circle cx="72" cy="50" r="14" fill="#fff" stroke="${R}" stroke-width="2.6"/>
<circle cx="72" cy="50" r="9" stroke="${R}" stroke-width="1.4" stroke-opacity=".5"/>
<circle cx="72" cy="50" r="3" fill="${INK}"/>
<path d="M89 58 q3 -3 0 -6 M92.5 60 q4.5 -5 0 -10" stroke="${INK}" stroke-width="1.8" fill="none" ${S}/>`;

const celiB = `
<path d="M4 64 H6 L9 72 L12 64 H84 L87 72 L90 64 H92 V84 Q92 90 86 90 H10 Q4 90 4 84 Z" fill="${DIRT}"/>
<path d="M5.4 68 H12.6 L12 64 H6 Z M83.4 68 H90.6 L90 64 H84 Z" fill="none"/>
<polygon points="7.5,68 10.5,68 9,72" fill="${W1}"/><polygon points="85.5,68 88.5,68 87,72" fill="${W1}"/>
<path d="M19.1 50 Q48 44 77 50 L81.9 64 H14.1 Z" fill="${SOIL}"/>${dots(22, 74, 54, 61, 4, 0.6)}
<path d="M22.5 40 Q48 34 73.5 40 L77 50 Q48 44 19.1 50 Z" fill="${SOIL2}"/>${dots(26, 70, 43, 47, 6, 1.6, '#fff', 0.8)}
<path d="M26 30 Q48 24 70 30 L73.5 40 Q48 34 22.5 40 Z" fill="${GRAV}"/>${dots(30, 66, 31, 35, 4, 0.9)}
<path d="M22.5 40 Q48 34 73.5 40 M19.1 50 Q48 44 77 50" stroke="${R}" stroke-width="1.4" stroke-opacity=".6" fill="none"/>
<path d="M4 64 H6 L9 72 L12 64 H14.1 L26 30 Q48 24 70 30 L81.9 64 H84 L87 72 L90 64 H92" stroke="${INK}" stroke-width="2.6" fill="none" ${S}/>
<path d="M43 20 Q35 21 29 24 M53 20 Q61 21 67 24" stroke="${W2}" stroke-width="2" fill="none" ${S}/>
<path d="M32 21 l-3 3 l4 1 M64 21 l3 3 l-4 1" stroke="${W2}" stroke-width="2" fill="none" ${S}/>
${tuft(16, 64)}${tuft(80, 64)}`;

function celiC() {
  const yF = 24, yN = 66, L = y => 30 - (y - yF) * 16 / 42, Rr = y => 66 + (y - yF) * 16 / 42;
  let o = `<path d="M4 30 Q4 24 10 24 H86 Q92 24 92 30 V66 H4 Z" fill="${GR1}"/>`;
  o += `<polygon points="${pts([[L(yN), yN], [L(yF), yF], [Rr(yF), yF], [Rr(yN), yN]])}" fill="${GRAV}"/>`;
  for (let i = 0; i < 9; i++) {
    const t = i / 8, y = yF + 3 + (yN - yF - 5) * t * t, r = 0.4 + 0.9 * t, n = 4 + i;
    for (let j = 0; j < n; j++) { const q = (j + 0.5 + (i % 2) * 0.3) / n; o += `<circle cx="${f(L(y) + q * (Rr(y) - L(y)))}" cy="${f(y)}" r="${f(r)}" fill="${INK}" fill-opacity=".45"/>`; }
  }
  o += `<path d="M32 66 L41 24 M64 66 L55 24" stroke="#bdb2a3" stroke-width="3" ${S}/>`;
  o += `<path d="M${L(yN)} ${yN} L${L(yF)} ${yF} M${Rr(yN)} ${yN} L${Rr(yF)} ${yF}" stroke="${INK}" stroke-width="2" ${S}/>`;
  o += `<path d="M4 66 H92 V82 Q92 88 86 88 H10 Q4 88 4 82 Z" fill="${DIRT}"/>`;
  o += `<rect x="14" y="66" width="68" height="5" fill="${GRAV}"/><rect x="14" y="71" width="68" height="7" fill="${SOIL2}"/><rect x="14" y="78" width="68" height="10" fill="${SOIL}"/>`;
  o += dots(17, 80, 68.5, 68.5, 4, 0.9) + dots(18, 80, 74.5, 74.5, 6, 1.6, '#fff', 0.8) + dots(17, 80, 81, 86, 4, 0.6);
  o += `<path d="M14 71 H82 M14 78 H82" stroke="${R}" stroke-width="1.2" stroke-opacity=".6"/><path d="M14 66 V88 M82 66 V88" stroke="${INK}" stroke-width="1.4" stroke-opacity=".5"/>`;
  o += `<path d="M14 66 H82" stroke="${INK}" stroke-width="2.6" ${S}/><path d="M4 66 H14 M82 66 H92" stroke="${GR}" stroke-width="2.6" ${S}/>`;
  o += tree(12, 34, 0.8) + tree(24, 30, 0.6) + tree(84, 34, 0.8) + tree(72, 30, 0.6) + tuft(8, 60) + tuft(88, 60);
  return o;
}

// ---------- Karjeri ----------
const karjA = `
<path d="M4 14 H20 L26 28 H40 L46 42 H60 L66 56 H4 Z" fill="${SOIL2}"/>
<path d="M4 56 H92 V82 Q92 88 86 88 H10 Q4 88 4 82 Z" fill="${SOIL}"/>
${dots(8, 18, 20, 52, 7, 1.3, INK, 0.3)}${dots(28, 38, 34, 52, 7, 1.3, INK, 0.3)}
<path d="M4 14 H20 L26 28 H40 L46 42 H60 L66 56 H92" stroke="${INK}" stroke-width="2.6" fill="none" ${S}/>
<path d="M42 42 Q52 30 62 37 Q72 29 84 42 Z" fill="${SOIL2}" stroke="${INK}" stroke-width="2" ${S}/>${dots(50, 78, 37, 40, 5, 1, INK, 0.5)}
<path d="M40 42 H86 L84 64 H42 Z" fill="#fff" stroke="${R}" stroke-width="2.6" ${S}/>
<path d="M44 50 H82 M45 57 H82" stroke="${R}" stroke-width="1.4" stroke-opacity=".5"/>
<path d="M26 66 V50 Q26 44 32 44 H40 V66 Z" fill="#fff" stroke="${R}" stroke-width="2.6" ${S}/>
<rect x="29" y="47" width="8" height="8" rx="1.5" fill="${W1}"/>
<rect x="24" y="64" width="64" height="6" rx="3" fill="${INK}"/>
${wheel(34, 75, 8)}${wheel(62, 75, 8)}${wheel(79, 75, 8)}`;

const karjB = `
<path d="M4 30 H18 L22 42 H30 L34 56 H40 L44 72 H52 L56 56 H62 L66 42 H74 L78 30 H92 V84 Q92 90 86 90 H10 Q4 90 4 84 Z" fill="${SOIL}"/>
<path d="M4 30 H18 L19.3 34 H4 Z M92 30 H78 L76.7 34 H92 Z" fill="${DIRT}"/>
<path d="M4 50 H28 M4 66 H34 M4 80 H92 M68 50 H92 M62 66 H92" stroke="${SOIL2}" stroke-width="3"/>
${dots(8, 26, 40, 76, 8, 1.3, INK, 0.3)}${dots(70, 88, 40, 76, 8, 1.3, INK, 0.3)}
<polygon points="42,64 54,64 52,72 44,72" fill="${W1}"/>
<path d="M43 66 q2.5 -1.6 5 0 t5 0" stroke="${W2}" stroke-width="1.8" fill="none" ${S}/>
<path d="M4 30 H18 L22 42 H30 L34 56 H40 L44 72 H52 L56 56 H62 L66 42 H74 L78 30 H92" stroke="${INK}" stroke-width="2.6" fill="none" ${S}/>
<path d="M23 42 h6 M35 56 h4 M57 56 h4 M67 42 h6" stroke="${R}" stroke-width="3" ${S}/>
${tree(10, 30)}${tree(86, 30)}${tree(72, 30, 0.7)}${tuft(15, 30)}`;

const karjC = `
<path d="M4 84 H92" stroke="${INK}" stroke-width="2.6" ${S}/>
<path d="M64 38 L59 84 M64 38 L70 84 M82 55 V84" stroke="${INK}" stroke-width="2.4" ${S}/>
<path d="M6 84 C20 64 30 36 40 36 C50 36 60 64 74 84 Z" fill="${SOIL}" stroke="${INK}" stroke-width="2.4" ${S}/>${dots(22, 58, 56, 80, 5, 0.6)}
<path d="M90 63 L50 25" stroke="${R}" stroke-width="5" ${S}/>
<path d="M88 66 L48 28" stroke="${INK}" stroke-width="1.6" stroke-dasharray="1 5" ${S}/>
<circle cx="50" cy="25" r="3" fill="${INK}"/><circle cx="90" cy="63" r="3" fill="${INK}"/>
<circle cx="46" cy="30" r="1.2" fill="${INK}"/><circle cx="44" cy="33" r="1.2" fill="${INK}"/><circle cx="47" cy="34" r="1" fill="${INK}"/>
<path d="M52 84 C60 72 66 62 74 62 C82 62 88 72 92 84 Z" fill="${GRAV}" stroke="${INK}" stroke-width="2.4" ${S}/>${dots(62, 86, 70, 80, 4, 0.9, INK, 0.5)}`;

// ---------- Tehnikas noma ----------
const nomaA = `
<path d="M4 84 H92" stroke="${INK}" stroke-width="2.6" stroke-opacity=".35" ${S}/>
<path d="M40 54 L58 30 L72 62" stroke="${R}" stroke-width="5.5" fill="none" ${S}/>
<path d="M36 50 L52 34" stroke="${INK}" stroke-width="2" ${S}/>
<path d="M68 60 L78 59 L80 67 Q75 74 68 70 Z" fill="${T2}" stroke="${R}" stroke-width="2.4" ${S}/>
<path d="M70 71.5 l-1 2.5 M74 72.5 l-0.6 2.6" stroke="${R}" stroke-width="1.8" ${S}/>
<rect x="10" y="50" width="34" height="16" rx="2" fill="#fff" stroke="${R}" stroke-width="2.6"/>
<rect x="13" y="32" width="15" height="18" rx="2" fill="#fff" stroke="${R}" stroke-width="2.6"/>
<rect x="16" y="35" width="9" height="8" rx="1" fill="${W1}"/>
<rect x="6" y="66" width="44" height="14" rx="7" fill="#fff" stroke="${INK}" stroke-width="2.6"/>
<circle cx="13" cy="73" r="2" fill="${INK}"/><circle cx="23" cy="73" r="2" fill="${INK}"/><circle cx="33" cy="73" r="2" fill="${INK}"/><circle cx="43" cy="73" r="2" fill="${INK}"/>
<circle cx="80" cy="16" r="7.5" fill="${T1}" stroke="${INK}" stroke-width="3"/><circle cx="80" cy="16" r="2.4" fill="#fff" stroke="${INK}" stroke-width="2"/>
<path d="M80 23.5 V48 M80 39 H86 M80 45 H87" stroke="${INK}" stroke-width="3.4" ${S}/>`;

const nomaB = `
<rect x="58" y="10" width="30" height="26" rx="4" fill="#fff" stroke="${R}" stroke-width="2.6"/>
<path d="M58 14 Q58 10 62 10 H84 Q88 10 88 14 V18 H58 Z" fill="${R}"/>
<path d="M65 7 v6 M81 7 v6" stroke="${INK}" stroke-width="2.6" ${S}/>
<rect x="62" y="22" width="5" height="4" rx="1" fill="${T2}"/><rect x="70.5" y="22" width="5" height="4" rx="1" fill="${T2}"/><rect x="79" y="22" width="5" height="4" rx="1" fill="${T2}"/>
<rect x="62" y="29" width="5" height="4" rx="1" fill="${T2}"/><rect x="70.5" y="29" width="5" height="4" rx="1" fill="${R}"/><rect x="79" y="29" width="5" height="4" rx="1" fill="${T2}"/>
<path d="M12 44 Q22 33 32 39 Q42 31 56 44 Z" fill="${SOIL2}" stroke="${INK}" stroke-width="2" ${S}/>${dots(20, 50, 39, 42, 5, 1, INK, 0.5)}
<path d="M10 44 H58 L56 64 H14 Z" fill="#fff" stroke="${R}" stroke-width="2.6" ${S}/>
<path d="M14 51 H55 M15 58 H55" stroke="${R}" stroke-width="1.4" stroke-opacity=".5"/>
<path d="M62 66 V46 Q62 40 68 40 H76 L86 52 V66 Z" fill="#fff" stroke="${R}" stroke-width="2.6" ${S}/>
<path d="M66 44 H75 L82 53 H66 Z" fill="${W1}"/>
<rect x="8" y="64" width="80" height="6" rx="3" fill="${INK}"/>
${wheel(22, 75, 8)}${wheel(40, 75, 8)}${wheel(76, 75, 8)}`;

const nomaC = `
<path d="M4 82 H92" stroke="${INK}" stroke-width="2.6" stroke-opacity=".35" ${S}/>
<path d="M13 64 L5 81" stroke="${INK}" stroke-width="4" ${S}/>
<path d="M80 63.5 L90 67" stroke="${INK}" stroke-width="3" ${S}/><circle cx="90.5" cy="67" r="2.6" fill="#fff" stroke="${INK}" stroke-width="2"/>
<path d="M50 42 L66 46 L70 52" stroke="${R}" stroke-width="5" fill="none" ${S}/>
<path d="M66 43 H74 Q79 50 78 58 H64 Z" fill="${T2}" stroke="${R}" stroke-width="2.4" ${S}/>
<rect x="18" y="36" width="36" height="14" rx="3" fill="#fff" stroke="${R}" stroke-width="2.6"/>
<rect x="22" y="18" width="17" height="18" rx="2.5" fill="#fff" stroke="${R}" stroke-width="2.6"/>
<rect x="25" y="21" width="11" height="9" rx="1.5" fill="${W1}"/>
${wheel(27, 53, 6.5)}${wheel(47, 53, 6.5)}
<rect x="10" y="60" width="70" height="7" rx="2" fill="#fff" stroke="${INK}" stroke-width="2.6"/>
<path d="M38 70 Q38 66 44 66 H68 Q74 66 74 70" stroke="${INK}" stroke-width="2" fill="none" stroke-opacity=".5"/>
${wheel(48, 74, 7)}${wheel(64, 74, 7)}`;


const EUR = (x, y, sz) => `<text x="${x}" y="${y}" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="${sz}" fill="${R}" text-anchor="middle">€</text>`;
const nomaC1 = nomaC + `
<rect x="60" y="6" width="30" height="17" rx="2.5" fill="${T2}" stroke="${R}" stroke-width="2" transform="rotate(-8 75 14)"/>
<rect x="56" y="12" width="32" height="18" rx="3" fill="#fff" stroke="${R}" stroke-width="2.4"/>
<circle cx="72" cy="21" r="6" fill="${T1}"/>${EUR(72, 25, 10)}
<circle cx="60.5" cy="16.5" r="1.2" fill="${R}"/><circle cx="83.5" cy="25.5" r="1.2" fill="${R}"/>`;
const nomaC2 = nomaC + `
<rect x="46" y="16" width="18" height="13" rx="3" fill="${R}"/><rect x="80" y="16" width="14" height="13" rx="3" fill="${INK}"/>
<path d="M61 16 V29 M82 16 V29" stroke="#fff" stroke-width="2"/>
<rect x="62" y="12" width="20" height="19" rx="8" fill="#f3d2b8" stroke="${INK}" stroke-width="2.2"/>
<path d="M67 12.5 V21 M71.5 12 V22 M76 12.5 V21" stroke="${INK}" stroke-width="1.8" ${S}/>
<path d="M63 24 Q68 20 74 25" stroke="${INK}" stroke-width="2" fill="none" ${S}/>`;
const nomaC3 = nomaC + `
<path d="M48 6 Q52 14 56 22" stroke="${INK}" stroke-width="1.6" fill="none" ${S}/>
<path d="M62 10 H86 Q90 10 90 14 V30 Q90 34 86 34 H62 L54 22 Z" fill="${T1}" stroke="${R}" stroke-width="2.4" ${S}/>
<circle cx="60" cy="22" r="2.2" fill="#fff" stroke="${R}" stroke-width="1.8"/>${EUR(76, 28, 16)}`;

// ---------- Tehnika (one precise icon per machine) ----------
const GL = `<path d="M4 84 H92" stroke="${INK}" stroke-width="2.6" stroke-opacity=".35" ${S}/>`;
const tEksk = `<g transform="translate(6 -2)">${nomaA.split('<circle cx="80" cy="16"')[0]}</g>`;
const tPasiz = GL + nomaB.slice(nomaB.indexOf('<path d="M12 44 Q22'));
const tVeltn = GL + `<g transform="translate(-4 14) scale(1.08)">${celiA.slice(celiA.indexOf('<path d="M50 46 L58 32')).split('<path d="M89 58')[0]}</g>`;
const tGreid = uztB;
const tDamp = GL + `
<path d="M10 44 Q16 36 26 40 Q34 34 42 44 Z" fill="${SOIL2}" stroke="${INK}" stroke-width="2" ${S}/>${dots(16, 38, 40, 42, 5, 1, INK, 0.5)}
<path d="M8 44 H44 L42 62 L20 64 Q8 58 8 44 Z" fill="#fff" stroke="${R}" stroke-width="2.6" ${S}/>
<path d="M12 51 H42 M15 57 H41" stroke="${R}" stroke-width="1.4" stroke-opacity=".5"/>
<rect x="64" y="48" width="24" height="15" rx="3" fill="#fff" stroke="${R}" stroke-width="2.6"/>
<path d="M68 53 H84 M68 57 H84" stroke="${INK}" stroke-width="1.6" stroke-opacity=".5" ${S}/>
<path d="M50 62 V28 M70 48 V28" stroke="${R}" stroke-width="3.5" ${S}/>
<rect x="46" y="24" width="28" height="5" rx="2" fill="${R}"/>
<path d="M56 56 V48 H62 M54 44 L50 50" stroke="${INK}" stroke-width="2.4" fill="none" ${S}/>
<rect x="12" y="62" width="74" height="7" rx="3" fill="${INK}"/>
${wheel(27, 74, 10)}${wheel(72, 74, 10)}`;
const tTreil = GL + `
<rect x="12" y="58" width="30" height="8" rx="4" fill="#fff" stroke="${INK}" stroke-width="2.2"/>
<path d="M32 50 L44 37 L50 54" stroke="${R}" stroke-width="4" fill="none" ${S}/>
<path d="M47 53 L54 53 L54 58 Q50 61 47 59 Z" fill="${T2}" stroke="${R}" stroke-width="2" ${S}/>
<rect x="14" y="46" width="22" height="12" rx="2" fill="#fff" stroke="${R}" stroke-width="2.4"/>
<rect x="16" y="34" width="11" height="12" rx="2" fill="#fff" stroke="${R}" stroke-width="2.4"/>
<rect x="18" y="36.5" width="7" height="5" rx="1" fill="${W1}"/>
<polygon points="4,66 56,66 62,56 76,56 76,62 64,62 58,72 4,72" fill="#fff" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/>
<path d="M76 70 V46 Q76 40 81 40 H86 Q90 40 91 46 V70 Z" fill="#fff" stroke="${R}" stroke-width="2.6" ${S}/>
<path d="M80 44 H86 Q88 44 88 48 V53 H80 Z" fill="${W1}"/>
<rect x="62" y="68" width="30" height="5" rx="2.5" fill="${INK}"/>
${wheel(12, 77, 5.5)}${wheel(25, 77, 5.5)}${wheel(70, 77, 6)}${wheel(85, 77, 6)}`;

// ---------- Hidrotehniskās būves ----------
const hidroA = `
<path d="M4 70 H92 V84 Q92 90 86 90 H10 Q4 90 4 84 Z" fill="${GR1}"/>
<path d="M4 70 L22 32 H74 L92 70 Z" fill="${SOIL}"/>
<path d="M22 32 H74 L76 37 H20 Z" fill="${GRAV}"/>
<path d="M4 70 L22 32 H74 L92 70" stroke="${INK}" stroke-width="2.6" fill="none" ${S}/>
<polygon points="37,70 59,70 68,90 28,90" fill="${W1}"/>
<path d="M36 77 q3 -2 6 0 t6 0 t6 0 t6 0 M34 84 q3 -2 6 0 t6 0 t6 0 t6 0 t6 0" stroke="${W2}" stroke-width="1.8" fill="none" ${S}/>
<rect x="30" y="44" width="36" height="28" rx="3" fill="${ROAD2}" stroke="${INK}" stroke-width="2.2"/>
<circle cx="48" cy="60" r="12" fill="#fff" stroke="${INK}" stroke-width="2.6"/>
<circle cx="48" cy="60" r="8" fill="#4a5259"/>
<path d="M40.4 62.5 A8 8 0 0 0 55.6 62.5 Z" fill="${W1}"/>
${tuft(12, 72)}${tuft(84, 72)}`;
const hidroB = `
<path d="M4 72 H92 V84 Q92 90 86 90 H10 Q4 90 4 84 Z" fill="${W1}"/>
<path d="M30 78 q3 -2 6 0 t6 0 M54 78 q3 -2 6 0 t6 0 M40 85 q3 -2 6 0 t6 0" stroke="${W2}" stroke-width="1.8" fill="none" ${S}/>
<polygon points="4,52 22,52 32,76 4,76" fill="${SOIL}" stroke="${INK}" stroke-width="2.2" stroke-linejoin="round"/>
<polygon points="92,52 74,52 64,76 92,76" fill="${SOIL}" stroke="${INK}" stroke-width="2.2" stroke-linejoin="round"/>
<rect x="44" y="50" width="8" height="30" fill="${ROAD2}" stroke="${INK}" stroke-width="2.2"/>
<path d="M6 30 H90 M9 44 V30 M21 44 V30 M33 44 V30 M45 44 V30 M57 44 V30 M69 44 V30 M81 44 V30 M87 44 V30" stroke="${INK}" stroke-width="2.2" ${S}/>
<rect x="4" y="44" width="88" height="8" rx="2" fill="#fff" stroke="${R}" stroke-width="2.6"/>
${tuft(10, 52)}${tuft(86, 52)}`;
const hidroC = `
<path d="M4 38 H42 V88 H4 Z" fill="${W1}"/>
<path d="M8 44 q3 -2 6 0 t6 0 t6 0 M10 54 q3 -2 6 0 t6 0 t6 0 M8 64 q3 -2 6 0 t6 0 t6 0" stroke="${W2}" stroke-width="1.8" fill="none" ${S}/>
<path d="M54 72 H92 V84 Q92 90 86 90 H54 Z" fill="${W1}"/>
<polygon points="40,32 52,32 62,88 40,88" fill="${ROAD2}" stroke="${INK}" stroke-width="2.6" stroke-linejoin="round"/>
<path d="M40 38 Q53 37 56 54 Q59 70 68 74" stroke="${W2}" stroke-width="4" fill="none" ${S}/>
<path d="M64 76 q2 -4 5 -1 M72 74 q3 -4 6 0" stroke="${W2}" stroke-width="1.8" fill="none" ${S}/>
<path d="M70 80 q3 -2 6 0 t6 0 t6 0" stroke="${W2}" stroke-width="1.8" fill="none" ${S}/>
<path d="M4 38 H40 M4 88 H92" stroke="${INK}" stroke-width="2.6" ${S}/>
<path d="M44 32 V20 M48 32 V20 M42 20 H50" stroke="${INK}" stroke-width="2.4" ${S}/>`;

const groups = [
  ['Tehnika', [['Damperi', 'Celtnieku damperis ar kausu', tDamp], ['Pašizgāzēji', 'Pašizgāzējs ar kravu', tPasiz], ['Ekskavatori', 'Kāpurķēžu ekskavators', tEksk], ['Grunts veltņi', 'Vienvaļča grunts veltnis', tVeltn], ['Autogreiders', 'Autogreiders', tGreid], ['Treileris', 'Vilcējs ar zemo treileri un ekskavatoru', tTreil]]],
  ['Hidrotehniskās būves', [['A', 'Caurteka zem ceļa uzbēruma', hidroA], ['B', 'Tilts pār upīti', hidroB], ['C', 'Aizsprosts / slūžas ar pārgāzni', hidroC]]],
  ['Ceļu būve', [['A', 'Veltnis blīvē grants segumu, zem tā redzamas kārtas', celiA], ['B', 'Ceļa šķērsgriezums: kārtas, slīpums ūdens noteci, grāvji', celiB], ['C', 'Grants ceļš perspektīvā, priekšā redzamas kārtas', celiC()]]],
  ['Karjeri', [['A', 'Pašizgāzējs ar kravu pie karjera terasēm', karjA], ['B', 'Karjers griezumā: terases, ūdens apakšā', karjB], ['C', 'Materiāla kaudzes un konveijers', karjC]]],
  ['Tehnikas noma', [['A', 'Ekskavators + atslēga (noma)', nomaA], ['B', 'Pašizgāzējs + kalendārs (noma pa dienām)', nomaB], ['C', 'Treileris ar iekrāvēju (pārvadāšana + noma)', nomaC], ['C1', 'C + naudas zīmīte', nomaC1], ['C2', 'C + rokasspiediens (darījums)', nomaC2], ['C3', 'C + cenas birka ar €', nomaC3]]],
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
const slug = { 'Tehnika': 'tehnika', 'Hidrotehniskās būves': 'hidro', 'Ceļu būve': 'celubuve', 'Karjeri': 'karjeri', 'Tehnikas noma': 'noma', 'Meliorācija': 'melioracija', 'Autoceļu uzturēšana': 'uzturesana', 'Bruģēšana': 'brugesana' };
groups.forEach(([t, list]) => list.forEach(([k, , b]) =>
  fs.writeFileSync(path.join(DIR, `${slug[t]}-${k.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "-").toLowerCase()}.svg`), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96" fill="none">${b}</svg>\n`)));
