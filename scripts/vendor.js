// Copia las librerías instaladas con npm a /vendor como scripts clásicos,
// para que el sitio funcione abriendo index.html sin servidor ni CDN.
// Uso: npm run vendor
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const nm = path.join(root, 'node_modules');
const out = path.join(root, 'vendor');
fs.mkdirSync(out, { recursive: true });

const copy = (from, to) => {
  fs.copyFileSync(path.join(nm, from), path.join(out, to));
  console.log('vendor/' + to);
};

copy('gsap/dist/gsap.min.js', 'gsap.min.js');
copy('gsap/dist/ScrollTrigger.min.js', 'ScrollTrigger.min.js');
copy('motion/dist/motion.js', 'motion.js'); // UMD: expone window.Motion

// AutoAnimate solo trae build ESM: se envuelve en una IIFE que expone window.autoAnimate.
const aaSrc = fs.readFileSync(path.join(nm, '@formkit/auto-animate/index.min.js'), 'utf8');
const exp = aaSrc.match(/export\s*\{([^}]*)\};?\s*$/);
if (!exp) throw new Error('No se encontró el export de AutoAnimate');
const local = exp[1].split(',').map(s => s.trim().split(/\s+as\s+/))
  .find(([, name]) => name === 'default' || name === 'autoAnimate')[0];
const body = aaSrc.slice(0, exp.index);
fs.writeFileSync(path.join(out, 'auto-animate.js'),
  `/* @formkit/auto-animate (MIT) envuelto como script clásico */\n(function(){${body}\nwindow.autoAnimate=${local};})();\n`);
console.log('vendor/auto-animate.js');
