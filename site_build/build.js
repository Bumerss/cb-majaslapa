// Generates every page in ../public_html from one template.
// Run from this folder:  node build.js
// Titles and descriptions: meta.json. Image sizes: images.json. Text: below.
const fs = require('fs'), path = require('path');
const OUT = path.join(__dirname, '..', 'public_html');
const META = require('./meta.json'), IMG = require('./images.json');
const VER = '20261127i', SITE = 'https://celubuvnieks.lv/', OG = SITE + 'assets/images/20200916-142039-2000x1500.jpg';

const nb = s => s.replace(/(\d) (km|m²|m³|t|m|gab\.|ZS|000|308)(?![\p{L}])/gu, '$1 $2');
const enc = p => p.split('/').map(encodeURIComponent).join('/').replace(/%28/g, '(').replace(/%29/g, ')');
function pic(k, alt, sizes, o = {}) {
  const m = IMG[k];
  if (!m) throw new Error('image ' + k);
  const set = m.widths.map(w => `assets/img/${k}-${w}.webp ${w}w`).join(', ');
  const load = o.hero ? 'fetchpriority="high"' : o.eager ? '' : 'loading="lazy"';
  return `<picture><source type="image/webp" srcset="${set}" sizes="${sizes}"><img src="${enc(m.src)}" alt="${alt}" width="${m.w}" height="${m.h}" ${load} decoding="async"${o.cls ? ` class="${o.cls}"` : ''}></picture>`;
}
const HALF = '(max-width: 900px) 100vw, 50vw', CARD = '(max-width: 620px) 100vw, (max-width: 1200px) 50vw, 25vw', THIRD = '(max-width: 760px) 100vw, 33vw';
const arrow = '<span class="arrow" aria-hidden="true">→</span>';

const NAV = [['jomas', 'Darbības jomas', '/#jomas'], ['projekti', 'Projekti', 'Projekti.html'], ['tehnika', 'Tehnika', 'Transporta-un-tehnikas-nomas-pakalpojumi.html'], ['kontakti', 'Kontakti', 'Kontakti.html']];
const ICON = {
  celi: '<path d="M8 42 18 6"/><path d="M40 42 30 6"/><path d="M24 8v7M24 21v7M24 34v7"/>',
  hidro: '<path d="M24 6c6 8 10 13 10 18a10 10 0 0 1-20 0c0-5 4-10 10-18Z"/><path d="M5 40c4-3 8-3 12 0s8 3 12 0 8-3 14 0"/>',
  melio: '<path d="M6 12h36M6 24h36M6 36h36"/><path d="M24 12v24M14 12l10 12M34 12 24 24"/>',
  uzt: '<path d="M6 30h10l4-10h14l8 10v6H6Z"/><circle cx="14" cy="38" r="4"/><circle cx="34" cy="38" r="4"/><path d="M4 22 12 30"/>',
  karj: '<path d="M4 40 18 14l10 16 5-8 11 18Z"/><path d="M13 24h10"/><circle cx="38" cy="11" r="3"/>',
  brug: '<rect x="5" y="9" width="38" height="30" rx="2"/><path d="M5 19h38M5 29h38M18 9v10M31 9v10M12 19v10M25 19v10M37 19v10M18 29v10M31 29v10"/>',
  treil: '<path d="M4 32h26V28H4ZM30 32V16h8l6 8v8H30Z"/><path d="M36 16v8h8"/><circle cx="10" cy="37" r="4"/><circle cx="20" cy="37" r="4"/><circle cx="38" cy="37" r="4"/>',
  noma: '<rect x="4" y="34" width="24" height="8" rx="4"/><path d="M8 34V22h12l4 12"/><path d="M20 24 32 8l9 14"/><path d="M41 22l3 8-9 2-1-5Z"/>'
};
const SERVICES = [
  ['Nesaistitu-mineralmaterialu-segumu-celu-buvnieciba.html', 'celi', 'Ceļu būvniecība', 'Zemes darbi, ierakumi, uzbērumi un konstruktīvās kārtas'],
  ['Melioracijas-sistemu-buvnieciba.html', 'melio', 'Meliorācijas sistēmas', 'Upju tīrīšana, caurtekas, drenāža, kolektoru iztekas'],
  ['Autocelu-uzturesana.html', 'uzt', 'Autoceļu uzturēšana', 'Planēšana, bedru labošana, ziemas uzturēšana'],
  ['Hidrotehnisko-buvju-buvnieciba.html', 'hidro', 'Hidrotehniskās būves', 'Grāvju un dambju nostiprināšana, ugunsdzēsības baseini'],
  ['Celu-seguma-atjaunosana.html', 'seg', 'Ceļu seguma atjaunošana', 'Atjaunojam nolietotu segumu, lai ceļš kalpo ilgāk'],
  ['Karjeru-izstrade.html', 'karj', 'Karjeru izstrāde', 'Grants un smilts ieguve, sijāšana un drupināšana'],
  ['Brugesanas-darbi.html', 'brug', 'Bruģēšanas darbi', 'Ietves, piebraucamie ceļi, stāvvietas, atpūtas zonas'],
  ['Treilera-pakalpojumi.html', 'treil', 'Treilera pakalpojumi', 'Kravas līdz 30 t, platforma 9,24 m'],
  ['Transporta-un-tehnikas-nomas-pakalpojumi.html', 'noma', 'Transporta un tehnikas noma', 'Damperi, pašizgāzēji, veltņi, ekskavatori, autogreiders']
];
// Detailed colour icons (assets/icons/*.svg, made by ikonas.js) replace the line icons for these keys.
const ICON_FILE = ['melio', 'uzt', 'brug', 'celi', 'seg', 'karj', 'noma', 'hidro', 'damp', 'pasiz', 'eksk', 'veltn', 'greid', 'treil'];
const ico = i => ICON_FILE.includes(i) ? `<img class="ico ico-img" src="assets/icons/${i}.svg" alt="" width="96" height="96">` : `<svg class="ico" viewBox="0 0 48 48" aria-hidden="true">${ICON[i]}</svg>`;
const row = ([f, i, t, d]) => `<a class="more" href="${f}">${ico(i)}<span class="more-t"><b>${t}</b><span>${d}</span></span>${arrow}</a>`;
const rows = list => `<div class="rows">\n${list.map(row).join('\n')}\n</div>`;
const tile = ([f, i, t, d]) => `<a class="tile" href="${f}">${ico(i)}<b>${t}</b><span>${d}</span></a>`;
const QUICK = [['Nesaistitu-mineralmaterialu-segumu-celu-buvnieciba.html', 'celi', 'Ceļu būve'], ['Melioracijas-sistemu-buvnieciba.html', 'melio', 'Meliorācija'], ['Autocelu-uzturesana.html', 'uzt', 'Uzturēšana'], ['Brugesanas-darbi.html', 'brug', 'Bruģēšana'], ['Karjeru-izstrade.html', 'karj', 'Karjeri'], ['Transporta-un-tehnikas-nomas-pakalpojumi.html', 'noma', 'Tehnikas noma']];
const TECH = [
  ['Damperi.html', 'damp', 'Damperi', '9–10 t kravnesība'],
  ['Pasizgazeji.html', 'pasiz', 'Pašizgāzēji', '17 m³ kravas kaste'],
  ['Kapurkezu-ekskavatori.html', 'eksk', 'Ekskavatori', 'Kāpurķēžu, 21–22 t'],
  ['Grunts-veltni.html', 'veltn', 'Grunts veltņi', '12–13 t'],
  ['Autogreiders.html', 'greid', 'Autogreiders', 'Volvo G940, 225 ZS'],
  ['Treilera-pakalpojumi.html', 'treil', 'Treileris', 'Kravas līdz 30 t']
];

function shell(file, body, o = {}) {
  const m = META[file], home = file === 'index.html';
  const nav = cls => NAV.map(([id, t, href]) => `<a${cls ? ` class="${cls}"` : ''} href="${home && id === 'jomas' ? '#jomas' : href}"${href === file ? ' aria-current="page"' : o.nav === id ? ' aria-current="true"' : ''}>${t}</a>`).join('');
  const ld = [];
  if (home) ld.push(m.ld);
  else ld.push(JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [['Sākums', SITE], ...(o.parent ? [[o.parent[1], SITE + o.parent[0]]] : []), [o.h1, m.url]].map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })) }));
  const heroSet = IMG.hero.widths.map(w => `assets/img/hero-${w}.webp ${w}w`).join(', ');
  return nb(`<!DOCTYPE html>
<html lang="lv">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${m.title}</title>
<meta name="description" content="${m.desc}">
<meta name="theme-color" content="#ffffff">
<link rel="canonical" href="${m.url}">
<link rel="icon" href="assets/images/favicon16.ico" type="image/x-icon">
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/archivo/archivo-latin-wdth-normal.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="assets/fonts/archivo/archivo-latin-ext-wdth-normal.woff2" crossorigin>${home ? `
<link rel="preload" as="image" type="image/webp" imagesrcset="${heroSet}" imagesizes="100vw" fetchpriority="high">` : ''}
<link rel="stylesheet" href="assets/site.css?v=${VER}">
<meta property="og:type" content="website">
<meta property="og:locale" content="lv_LV">
<meta property="og:site_name" content="SIA Ceļu Būvnieks">
<meta property="og:title" content="${m.title}">
<meta property="og:description" content="${m.desc}">
<meta property="og:url" content="${m.url}">
<meta property="og:image" content="${OG}">
${ld.map(x => `<script type="application/ld+json">${x}</script>`).join('\n')}
<script src="assets/site.js?v=${VER}" defer></script>
</head>
<body>
<a class="skip" href="#saturs">Pāriet uz saturu</a>
<header class="top">
<div class="wrap bar">
<a class="logo" href="/" aria-label="Ceļu Būvnieks, sākumlapa"><img src="assets/images/celu-buvnieks-rc-white-background-312x125.png" alt="SIA “Ceļu Būvnieks” logotips" width="312" height="125"></a>
<nav class="desk" aria-label="Galvenā izvēlne">${nav('navl')}</nav>
<a class="btn btn-red call" href="tel:+37125668515">+371 25668515</a>
<details class="mnav"><summary>Izvēlne</summary><nav aria-label="Mobilā izvēlne">${nav('')}</nav></details>
</div>
</header>
<main id="saturs">
${body}
</main>
<footer class="foot">
<p><b>SIA “Ceļu Būvnieks”</b><br>Ventspils iela 48a, Rīga, LV-1002<br>Darba dienās 08:00–18:00</p>
<p><a href="tel:+37125668515">+371 25668515</a><br><a href="tel:+37126649955">+371 26649955</a><br><a href="mailto:celubuvnieks@inbox.lv">celubuvnieks@inbox.lv</a></p>
<p>Reģ. nr. 40003916711<br>Būvkom. nr. 5722-R</p>
<p>© 2026 SIA “Ceļu Būvnieks”<br>Visas tiesības aizsargātas<br><a href="privacy.html">Sīkdatņu politika</a></p>
</footer>
<div class="cookie" id="cookie" role="region" aria-label="Sīkdatņu paziņojums" hidden>
<span>${META['privacy.html'].banner.replace(/'/g, '"')}</span>
<button class="btn btn-red" type="button" data-choice="1">Piekrītu</button>
<button class="btn btn-line" type="button" data-choice="0">Noraidīt</button>
</div>
</body>
</html>
`);
}

const band = `<section class="band" aria-label="Kontakti">
<h2 class="h2">Sāksim ar zvanu</h2>
<div class="btns">
<a class="btn btn-white" href="tel:+37125668515">+371 25668515</a>
<a class="btn btn-ghost" href="tel:+37126649955">+371 26649955</a>
<a class="mail" href="mailto:celubuvnieks@inbox.lv">celubuvnieks@inbox.lv</a>
</div>
</section>`;
const crumbs = (h1, parent) => `<nav class="crumbs" aria-label="Atrašanās vieta lapā"><a href="/">Sākums</a><span aria-hidden="true">/</span>${parent ? `<a href="${parent[0]}">${parent[1]}</a><span aria-hidden="true">/</span>` : ''}<span aria-current="page">${h1}</span></nav>`;

const PAGES = {};

// ---------- Home ----------
const block = (k, alt, t, d, href, label, flip) => `<article class="split${flip ? ' flip' : ''}">
<div class="ph zoom">${pic(k, alt, HALF)}</div>
<div class="txt enter"><h3 class="h3">${t}</h3><p>${d}</p><a class="tlink" href="${href}">${label}</a></div>
</article>`;
const PROJ = [
  ['Kurzemnieku-cels.html', 'p-kurz', 'Kurzemnieku ceļš', '2020 · Priekules novads · AS “Latvijas valsts meži”', '2,307 km', 'kopgarums', '13 000 m²', '08.2020–10.2020'],
  ['Lambartes-purva-cels.html', 'p-lamb', 'Lambārtes purva ceļš', '2020 · Bauskas novads · AS “Latvijas valsts meži”', '0,700 km', 'kopgarums, uz baļķu klājuma', '5167 m²', '12.2019–09.2020'],
  ['Vidus-cela-pagarinajums.html', 'p-vidus', 'Vidus ceļa pagarinājums', '2019 · Brocēnu novads · AS “Latvijas valsts meži”', '1,689 km', 'kopgarums', '10 308 m²', '09.2019–01.2020']
];
const card = ([f, k, t, d]) => `<a class="card zoom" href="${f}"><div class="card-ph">${pic(k, '', CARD)}</div><div class="card-tx"><b>${t}</b>${d ? `<span>${d}</span>` : ''}</div></a>`;
const MAP = 'https://www.google.com/maps?q=Ventspils%20iela%2048a%2C%20R%C4%ABga%2C%20LV-1002&amp;output=embed';

PAGES['index.html'] = shell('index.html', `<section id="top">
<div class="heroimg">${pic('hero', 'Jaunbūvēts grants ceļš mežā', '100vw', { hero: 1, cls: 'settle' })}</div>
<div class="wrap">
<div class="panel">
<h1 class="display rv">Ceļu Būvnieks</h1>
<p class="lead rv d1">SIA “Ceļu Būvnieks” ir 2007. gadā dibināts Latvijas ceļu būves uzņēmums. Specializējamies nesaistīto segumu, meliorācijas sistēmu un hidrotehnisko būvju būvniecībā, kā arī autoceļu uzturēšanā.</p>
<div class="btns rv d2"><a class="btn btn-red" href="Kontakti.html">Pieteikt objektu</a><a class="btn btn-line" href="Projekti.html">Skatīt projektus</a></div>
</div>
</div>
</section>

<nav class="quick wrap" aria-label="Ātrās saites">
${QUICK.map(([f, i, t]) => `<a class="chip" href="${f}">${ico(i)}${t}</a>`).join('')}
</nav>

<section id="jomas" class="sec">
<h2 class="h2 wrap sec-head">Darbības jomas</h2>
${block('celi', 'Ceļa seguma izbūve', 'Ceļu būvniecība', 'Nesaistītu minerālmateriālu segumi, zemes darbi, ierakumu un uzbērumu izbūve ar konstruktīvajām kārtām.', SERVICES[0][0], 'Par ceļu būvniecību')}
${block('melio', 'Meliorācijas sistēma no augšas', 'Meliorācija un hidrotehnika', 'Upju tīrīšana, caurtekas un drenāža. Grāvju un dambju nostiprināšana, ugunsdzēsības baseini.', SERVICES[1][0], 'Par meliorāciju', 1)}
${block('uzt', 'Autoceļa uzturēšanas darbi', 'Autoceļu uzturēšana', 'Planēšana, bedru labošana, caurteku un grāvju tīrīšana. Ziemā sniega tīrīšana un kaisīšana.', SERVICES[2][0], 'Par uzturēšanu')}
<div class="wrap also">
<div class="also-head"><h3 class="h3">Būvniecība</h3><p>Citi darbi, ko veicam pilnā ciklā.</p></div>
<div class="tiles">${SERVICES.slice(3, 7).map(tile).join('')}</div>
</div>
<div class="wrap also">
<div class="also-head"><h3 class="h3">Tehnika un transports</h3><div class="also-cta"><a class="tlink" href="Transporta-un-tehnikas-nomas-pakalpojumi.html">Visa tehnika ${arrow}</a><a class="btn btn-red" href="tel:+37125668515">Nomāt: +371 25668515</a></div></div>
<div class="tiles">${TECH.map(tile).join('')}</div>
</div>
</section>

${band}`);

// ---------- Services ----------
const others = file => `<div class="also"><div class="also-head"><h2 class="h3">Citas darbības jomas</h2></div>
${rows(SERVICES.filter(s => s[0] !== file))}</div>`;
const P_SERV = ['/#jomas', 'Darbības jomas'];
function service(file, h1, k, text, extra = '') {
  PAGES[file] = shell(file, `<div class="page">
${crumbs(h1, P_SERV)}
<div class="duo"><div><h1 class="display rv">${h1}</h1>${text.map(t => `<p class="lead rv d1">${t}</p>`).join('')}<div class="btns rv d2"><a class="btn btn-red" href="Kontakti.html">Pieteikt objektu</a></div></div>
<div class="duo-ph rv d1">${pic(k, h1, HALF, { eager: 1 })}</div></div>
${extra}
${others(file)}
</div>
${band}`, { nav: 'jomas', h1, parent: P_SERV });
}
service('Nesaistitu-mineralmaterialu-segumu-celu-buvnieciba.html', 'Nesaistītu minerālmateriālu segumu ceļu būvniecība', 's-nes', ['SIA “Ceļu Būvnieks” ir uzkrājis lielu pieredzi nesaistītu minerālmateriālu segumu izbūvē: gadu gaitā uzbūvēti vairāk nekā 300 km meža autoceļu un veikti valsts un pašvaldību autoceļu segumu atjaunošanas darbi.', 'Uzņēmums spēj veikt liela apjoma zemes darbus, ierakumu un uzbērumu izbūvi ar konstruktīvo kārtu izbūvi, nodrošinot pilna cikla inerto materiālu sagatavošanu, transportēšanu un iestrādi būvobjektā.']);
service('Melioracijas-sistemu-buvnieciba.html', 'Meliorācijas sistēmu būvniecība', 'melio', ['Uzņēmums veic plaša spektra meliorācijas darbus meža un lauksaimniecības teritorijās. Veicam valsts nozīmes upju tīrīšanas un citu ūdenstilpņu izveides un atjaunošanas darbus.', 'Meliorācijas sistēmu būvniecība/atjaunošana ietver apauguma novākšanu, gultnes rakšanu ar apauguma pazemes daļas izcelšanu, nogāžu atjaunošanu, liekās grunts izlīdzināšanu, caurteku atjaunošanu un izbūvi, drenāžas tīklu izbūvi, drenāžas un lietus ūdens kolektoru izteku izbūvi, inženierkomunikāciju aizsardzību un izpilduzmērījumu sagatavošanu ar objekta nodošanu ekspluatācijā.']);
service('Hidrotehnisko-buvju-buvnieciba.html', 'Hidrotehnisko būvju būvniecība', 's-hidro', ['Uzņēmums veic hidrotehnisko būvju būvniecību, rekonstrukciju un vides projektu realizāciju, kā arī grāvju un dambju nostiprināšanas darbus, ugunsdzēsības baseinu un citu ūdens uzkrāšanas tilpņu izbūves darbus.']);
service('Celu-seguma-atjaunosana.html', 'Ceļu seguma atjaunošana', 's-seg', ['Ceļu segumi ekspluatācijas laikā nolietojas, tāpēc ir svarīga to atjaunošana, un viena no SIA “Ceļu Būvnieks” specializācijām ir seguma atjaunošana, kas ļauj autoceļam turpināt pildīt savu funkciju un nodrošina ilgmūžību.']);
service('Karjeru-izstrade.html', 'Karjeru izstrāde', 's-karj', ['SIA “Ceļu Būvnieks” nodarbojas arī ar grants un smilts karjeru izstrādi. Iegādātas nepieciešamās sijāšanas un drupināšanas iekārtas inerto materiālu ražošanai, kas nodrošina nepieciešamos materiālus nesaistītā seguma autoceļu būvniecībai un uzturēšanai.']);
service('Brugesanas-darbi.html', 'Bruģēšanas darbi', 's-brug', ['Bruģēšana ir viens no populārākajiem seguma izbūves veidiem ietvēm, piebraucamajiem ceļiem, stāvvietām, atpūtas zonām, administratīvajām un ražošanas teritorijām.', 'Bruģa priekšrocība salīdzinājumā ar citiem segumiem ir plašas formas, krāsas un veidu izvēle. Bruģa seguma ieklāšana ir samērā ātrs process, bruģis ir viegli kopjams un atjaunojams, tas labi iederas apkārtējā vidē un ir tai draudzīgs.']);
const li = a => `<ul>${a.map(x => `<li>${x}</li>`).join('')}</ul>`;
service('Autocelu-uzturesana.html', 'Autoceļu uzturēšana', 's-uzt', ['Ilgtspējīga ceļa pamatā ir regulāri un sistemātiski uzturēšanas darbi. SIA “Ceļu Būvnieks” tos veic visu gadu.'], `<div class="lists"><div><h2>Uzturēšanas darbos ietilpst</h2>${li(['Grants segas virskārtas atjaunošana', 'Ceļa konstruktīvo kārtu atjaunošana', 'Ceļa segas planēšana, profilēšana', 'Iesēdumu un bedru labošana', 'Nomaļu uzauguma un nederīgās grunts noņemšana', 'Nogāžu izskalojumu novēršana', 'Nogāžu un caurteku galu nostiprinājumu izbūve', 'Caurteku nomaiņa, atjaunošana un tīrīšana', 'Ceļa sāngrāvju tīrīšana (rakšana) un to profila atjaunošana', 'Ūdens atvedes nodrošināšana', 'Ceļa zīmju uzstādīšana'])}</div><div><h2>Ziemas sezonas uzturēšanas darbi</h2>${li(['Sniega tīrīšana no autoceļiem, ielām un laukumiem', 'Autoceļu un ielu nokaisīšana ar pretslīdes materiāliem', 'Ledus rievošana uz autoceļiem ziemā'])}</div></div>`);

// ---------- Equipment ----------
const P_TEH = ['Transporta-un-tehnikas-nomas-pakalpojumi.html', 'Tehnika'];
const GROUPS = [];
const ask = '<div class="btns"><a class="btn btn-red" href="Kontakti.html">Jautāt pieejamību</a></div>';
function equip(file, h1, list, parent = P_TEH, nav = 'tehnika') {
  GROUPS.push([file, h1, list]);
  PAGES[file] = shell(file, `<div class="page">
${crumbs(h1, parent)}
<h1 class="display rv">${h1}</h1>
<div class="cards wide">
${list.map(([k, t, sp], i) => `<article class="card zoom rv${i ? ' d1' : ''}"><div class="card-ph">${pic(k, t, THIRD, { eager: 1 })}</div><div class="card-tx"><h2>${t}</h2>${li(sp)}</div></article>`).join('\n')}
</div>
${ask}
${others(file)}
</div>
${band}`, { nav, h1, parent });
}
equip('Autogreiders.html', 'Autogreiders', [['g940', 'Autogreiders Volvo G940', ['Darba svars: 21,3 t', 'Jauda: 225 ZS']]]);
equip('Damperi.html', 'Damperi', [['hydrema', 'Dampers Hydrema 912D', ['Kravnesība: 10 t', 'Kravas kaste: 6 m³', 'Pieejami: 2 gab.']], ['thw10', 'Dampers Thwaites, 10 t', ['Kravnesība: 10 t', 'Kravas kaste: 5 m³', 'Pieejami: 3 gab.']], ['thw9', 'Dampers Thwaites, 9 t', ['Kravnesība: 9 t', 'Kravas kaste: 4,5 m³', 'Pieejami: 2 gab.']]]);
equip('Grunts-veltni.html', 'Grunts veltņi', [['asc130', 'Grunts veltnis Ammann ASC130, 13 t', ['Pieejami: 1 gab.']], ['asc110', 'Grunts veltnis Ammann ASC110, 12 t', ['Pieejami: 3 gab.']]]);
equip('Kapurkezu-ekskavatori.html', 'Kāpurķēžu ekskavatori', [['e215', 'Kāpurķēžu ekskavators New Holland E215C', ['Svars: 22,4 t']], ['cx210', 'Kāpurķēžu ekskavators CX210B', ['Svars: 21,5 t']]]);
equip('Pasizgazeji.html', 'Pašizgāzēji', [['fmx', 'Pašizgāzējs Volvo FMX 460', ['Kravas kaste: 17 m³', 'Pieejami: 1 gab.']], ['man400', 'Pašizgāzējs MAN TGS 35.400', ['Kravas kaste: 17 m³', 'Pieejami: 2 gab.']], ['man360', 'Pašizgāzējs MAN TGS 35.360', ['Kravas kaste: 17 m³', 'Pieejami: 2 gab.']]]);
equip('Treilera-pakalpojumi.html', 'Treilera pakalpojumi', [['treil', 'Treilera pakalpojumi līdz 30 t', ['Kopējais garums: 13,19 m', 'Kravas platforma: 9,24 m', 'Platformas platums: 2,55 m + 0,6 m (paplašinājumi)']]]);
{
  const f = P_TEH[0], h1 = 'Transporta un tehnikas nomas pakalpojumi';
  // Order on the overview page; icon tiles filter the groups below (assets/site.js)
  const ORDER = ['Damperi.html', 'Kapurkezu-ekskavatori.html', 'Grunts-veltni.html', 'Pasizgazeji.html', 'Autogreiders.html', 'Treilera-pakalpojumi.html'];
  PAGES[f] = shell(f, `<div class="page">
${crumbs('Tehnika')}
<h1 class="display rv">${h1}</h1>
<p class="lead rv d1">Damperi, pašizgāzēji, grunts veltņi, kāpurķēžu ekskavatori, autogreiders un treileris. Zvaniet, lai uzzinātu pieejamību.</p>
<div class="btns rv d2"><a class="btn btn-red" href="Kontakti.html">Jautāt pieejamību</a></div>
<div class="tiles tfilter" data-tfilter>${ORDER.map(f => TECH.find(t => t[0] === f)).map(([file, i, t, d]) => `<button class="tile" type="button" data-f="${file}" aria-pressed="false">${ico(i)}<b>${t}</b><span>${d}</span></button>`).join('')}</div>
${ORDER.map(f => GROUPS.find(g => g[0] === f)).map(([file, t, list]) => `<section class="group" data-g="${file}"><div class="also-head"><h2 class="h3"><a href="${file}">${t}</a></h2></div>
<div class="cards wide">
${list.map(([k, n, sp]) => `<article class="card zoom"><div class="card-ph">${pic(k, n, THIRD)}</div><div class="card-tx"><h3>${n}</h3>${li(sp)}</div></article>`).join('\n')}
</div></section>`).join('\n')}
</div>
${band}`, { nav: 'tehnika', h1: 'Tehnika' });
}

// ---------- Projects ----------
const P_PRO = ['Projekti.html', 'Projekti'];
PAGES['Projekti.html'] = shell('Projekti.html', `<div class="page">
${crumbs('Projekti')}
<h1 class="display rv">Projekti</h1>
<p class="lead rv d1">Meža autoceļi, kas uzbūvēti AS “Latvijas valsts meži” vajadzībām. Kopumā esam uzbūvējuši vairāk nekā 300 km meža autoceļu.</p>
<div class="stack">
${PROJ.map(([f, k, t, meta, km, kl, m2, time], i) => `<article class="proj zoom">
<div class="proj-ph">${pic(k, t, HALF, { eager: i === 0 })}</div>
<div class="proj-tx"><p class="small">${meta}</p><h2><a href="${f}">${t}</a></h2>
<div class="nums"><p class="num"><b class="red">${km}</b><span>${kl}</span></p><p class="num"><b>${m2}</b><span>brauktuves platība</span></p></div>
<p class="small">Būvniecības laiks: ${time}</p></div>
</article>`).join('\n')}
</div>
</div>
${band}`, { nav: 'projekti', h1: 'Projekti' });
function project(file, h1, k, facts, text) {
  const own = PROJ.find(p => p[0] === file)[1];
  const rest = PROJ.filter(p => p[0] !== file);
  PAGES[file] = shell(file, `<div class="page">
${crumbs(h1, P_PRO)}
<div class="duo"><div><h1 class="display rv">${h1}</h1><p class="lead rv d1">${text}</p>
<dl class="facts rv d2">${facts.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join('')}</dl></div>
<div class="duo-ph rv d1">${pic(k, h1, HALF, { eager: 1 })}</div></div>
<div class="shot rv d2">${pic(own, `${h1}, objekta foto`, '(max-width: 900px) 100vw, 90vw')}</div>
<div class="also"><div class="also-head"><h2 class="h3">Citi projekti</h2></div>
<div class="cards wide">${rest.map(([f, kk, t, , km]) => card([f, kk, t, km])).join('')}</div></div>
</div>
${band}`, { nav: 'projekti', h1, parent: P_PRO });
}
const LVM = ['Pasūtītājs', 'AS “Latvijas valsts meži”'], SELF = ['Būvdarbu veicējs', 'SIA “Ceļu Būvnieks”'];
const USE = 'Būves rezultātā izbūvēts meža autoceļš, kas ir paredzēts meža apsaimniekošanai un kokmateriālu transportēšanai.';
project('Kurzemnieku-cels.html', 'Kurzemnieku ceļš', 'd-kurz', [['Objekts', 'Meža autoceļa “Kurzemnieku ceļš” būve'], ['Adrese', 'Priekules novads, Priekules pagasts'], LVM, SELF, ['Kopgarums', '2,307 km'], ['Brauktuves platība', '13 000 m²'], ['Būvniecības laiks', '08.2020–10.2020']], USE);
project('Lambartes-purva-cels.html', 'Lambārtes purva ceļš', 'd-lamb', [['Objekts', 'Meža autoceļa “Lambārtes purva ceļš” būve'], ['Adrese', 'Bauskas novads, Dāviņu pagasts'], LVM, SELF, ['Kopgarums', '0,700 km'], ['Brauktuves platība', '5167 m²'], ['Būvniecības laiks', '12.2019–09.2020']], USE + ' Projekts paredzēja izbūvēt baļķu klājumu, uz kura tika izbūvēta konstrukcija, kas sastāv no filtrējošas smilts un drupinātas grants.');
project('Vidus-cela-pagarinajums.html', 'Vidus ceļa pagarinājums', 'd-vidus', [['Objekts', 'Meža autoceļa “Vidus ceļa pagarinājums” būve'], ['Adrese', 'Brocēnu novads, Remtes pagasts'], LVM, SELF, ['Kopgarums', '1,689 km'], ['Brauktuves platība', '10 308 m²'], ['Būvniecības laiks', '09.2019–01.2020']], USE);

// ---------- Contact ----------
PAGES['Kontakti.html'] = shell('Kontakti.html', `<section class="contact">
<div class="c-red">
<h1 class="big rv">Kontakti</h1>
<p class="c-lead rv d1">Piezvaniet vai uzrakstiet un pastāstiet par savu objektu.</p>
<div class="c-list rv d2">
<a class="btn btn-white" href="tel:+37125668515">+371 25668515</a>
<a class="btn btn-ghost" href="tel:+37126649955">+371 26649955</a>
<a class="mail" href="mailto:celubuvnieks@inbox.lv">celubuvnieks@inbox.lv</a>
</div>
</div>
<div class="c-gray">
<h2 class="addr">Ventspils iela 48a<br>Rīga, LV-1002</h2>
<p>Darba dienās 08:00–18:00</p>
<dl class="facts">
<div><dt>Uzņēmums</dt><dd>SIA “Ceļu Būvnieks”</dd></div>
<div><dt>Reģ. nr.</dt><dd>40003916711</dd></div>
<div><dt>Būvkom. nr.</dt><dd>5722-R</dd></div>
<div><dt>Banka</dt><dd>Luminor Bank AS</dd></div>
<div><dt>Kods</dt><dd>RIKOLV2X</dd></div>
<div><dt>Konts</dt><dd>LV22RIKO0002013073883</dd></div>
</dl>
</div>
</section>
<section class="mapwide" aria-label="Karte">
<div class="map" data-map-src="${MAP}">
<p>Karte tiek ielādēta no Google Maps tikai pēc jūsu piekrišanas. Google var saņemt jūsu IP adresi un iestatīt savas sīkdatnes.</p>
<button class="btn btn-red" type="button" data-map-load>Rādīt karti</button>
<a href="https://www.google.com/maps/search/?api=1&amp;query=Ventspils%20iela%2048a%2C%20R%C4%ABga%2C%20LV-1002" rel="noopener">Atvērt Google Maps</a>
</div>
</section>`, { nav: 'kontakti', h1: 'Kontakti' });

// ---------- Privacy ----------
PAGES['privacy.html'] = shell('privacy.html', `<div class="page">
${crumbs('Sīkdatņu politika')}
<h1 class="display rv">Sīkdatņu politika</h1>
<div class="legal">${META['privacy.html'].body.replace(/<h2[^>]*><strong>(.*?)<\/strong><\/h2>/g, '<h2>$1</h2>').replace(/ class="text-primary"/g, '').replace(/<button class="btn[^"]*" type="button"|<button type="button" class="btn[^"]*"/g, '<button type="button" class="btn btn-red"').replace(/ style="margin: 0;"/g, '').replace('2026. gada 4. novembrī', '2026. gada 24. novembrī')}</div>
</div>`, { h1: 'Sīkdatņu politika' });

const want = Object.keys(META).sort().join(), got = Object.keys(PAGES).sort().join();
if (want !== got) throw new Error('page list mismatch\n' + want + '\n' + got);
for (const [f, s] of Object.entries(PAGES)) fs.writeFileSync(path.join(OUT, f), s);
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.values(META).map(m => `  <url><loc>${m.url}</loc><lastmod>2026-11-24</lastmod></url>`).join('\n')}\n</urlset>\n`);
console.log('pages written:', Object.keys(PAGES).length);
