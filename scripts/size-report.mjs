// How big the game is: lines of code by area, tests, and the built download (gzipped).
// Run with `npm run size` (it builds first). Plain Node, no packages.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';

const root = fileURLToPath(new URL('..', import.meta.url));

function files(dir, keep = () => true) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) out.push(...files(path, keep));
    else if (keep(path)) out.push(path);
  }
  return out;
}
const lines = (path) => readFileSync(path, 'utf8').split('\n').length;
const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;
const pad = (s, n) => String(s).padEnd(n);
const num = (n) => String(n).padStart(7);

const code = files(join(root, 'src'), (p) => ['.ts', '.tsx', '.css'].includes(extname(p)));
const areas = [
  ['SQL core (data, levels, checker)', 'src/sql-core/'],
  ['3D world (Three.js)', 'src/game/'],
  ['App & menus (React)', 'src/app/'],
  ['SQL console', 'src/console/'],
  ['Sound', 'src/audio/'],
];
console.log('\nQuery Truck — size report\n');
console.log(`${pad('Area', 34)}${num('files')}${num('lines')}${num('tests')}`);
let total = 0;
let tests = 0;
for (const [label, prefix] of areas) {
  const inArea = code.filter((p) => p.includes(`/${prefix}`));
  const test = inArea.filter((p) => /\.test\.tsx?$/.test(p));
  const n = inArea.reduce((sum, p) => sum + lines(p), 0);
  const t = test.reduce((sum, p) => sum + lines(p), 0);
  total += n;
  tests += t;
  console.log(`${pad(label, 34)}${num(inArea.length)}${num(n)}${num(t)}`);
}
const other = code.filter((p) => !areas.some(([, prefix]) => p.includes(`/${prefix}`)));
const otherLines = other.reduce((sum, p) => sum + lines(p), 0);
total += otherLines;
console.log(`${pad('Other (i18n, entry)', 34)}${num(other.length)}${num(otherLines)}`);
console.log(`${pad('Total', 34)}${num(code.length)}${num(total)}${num(tests)}  (tests are ${Math.round((tests / total) * 100)}% of the code)\n`);

const dist = join(root, 'dist', 'assets');
if (existsSync(dist)) {
  const assets = files(dist).map((p) => {
    const raw = readFileSync(p);
    return { name: p.slice(dist.length + 1), size: raw.length, gz: gzipSync(raw).length };
  });
  assets.sort((a, b) => b.gz - a.gz);
  console.log('Built download (what a player loads), largest first:');
  for (const a of assets.slice(0, 8)) console.log(`  ${pad(a.name, 44)}${pad(kb(a.size), 12)}gzip ${kb(a.gz)}`);
  const gz = assets.reduce((s, a) => s + a.gz, 0);
  const wasm = assets.filter((a) => a.name.endsWith('.wasm') || a.name.endsWith('.data')).reduce((s, a) => s + a.gz, 0);
  console.log(`  ${pad('All assets', 44)}${pad('', 12)}gzip ${kb(gz)}  (of which PostgreSQL/PGlite ${kb(wasm)})\n`);
} else console.log('No build yet: run `npm run build` first to see the download size.\n');
