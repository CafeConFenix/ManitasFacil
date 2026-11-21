#!/usr/bin/env node
/* Descarga de la API de Pexels (GET https://api.pexels.com/v1/search) las fotos de la web y escribe js/imagenes.js.
   La clave NO se guarda en la web: solo se usa aquí, en tu ordenador.
   Windows (PowerShell):  $env:PEXELS_API_KEY="TU_CLAVE"; node scripts/pexels.mjs
   Mac/Linux:             PEXELS_API_KEY=TU_CLAVE node scripts/pexels.mjs
   Para otra foto distinta por hueco:  ... node scripts/pexels.mjs --n=2   (usa el 2.º resultado, 3.º, etc.) */
import { writeFileSync } from "node:fs";

const KEY = process.env.PEXELS_API_KEY;
if (!KEY) { console.error("Falta PEXELS_API_KEY. Consigue una clave gratis en https://www.pexels.com/api/"); process.exit(1); }
const N = Math.max(1, parseInt((process.argv.find(a => a.startsWith("--n=")) || "--n=1").slice(4), 10) || 1);
const OUT = process.env.PEXELS_OUT || "js/imagenes.js";

// hueco: [búsqueda, orientación (landscape | portrait | square), tamaño que se guarda]
const SLOTS = {
  hero: ["herramientas de bricolaje en un taller", "landscape", "large2x"],
  fontaneria: ["fontanero reparando un grifo", "landscape", "landscape"],
  electricidad: ["bombilla encendida en casa", "landscape", "landscape"],
  pintura: ["pintar una pared con rodillo", "landscape", "landscape"],
  carpinteria: ["carpintero trabajando la madera", "landscape", "landscape"],
  jardin: ["jardinería plantas manos", "landscape", "landscape"],
  limpieza: ["limpieza del hogar", "landscape", "landscape"],
  app: ["persona usando el móvil en casa durante una reforma", "landscape", "large2x"],
  porque1: ["manos explicando un plano de reforma", "landscape", "landscape"],
  porque2: ["plano de una casa dibujado a mano", "landscape", "landscape"],
  porque3: ["casco y guantes de seguridad", "landscape", "landscape"],
  porque4: ["smartphone sobre un banco de trabajo", "landscape", "landscape"]
};

const datos = {};
for (const [slot, [query, orientation, tam]] of Object.entries(SLOTS)) {
  const qs = new URLSearchParams({ query, orientation, size: "medium", locale: "es-ES", per_page: String(Math.max(N, 5)) });
  const res = await fetch("https://api.pexels.com/v1/search?" + qs, { headers: { Authorization: KEY } });
  if (!res.ok) { console.error(`✗ ${slot}: HTTP ${res.status}` + (res.status === 429 ? " (límite de peticiones: espera una hora)" : res.status === 401 ? " (clave incorrecta)" : "")); process.exit(1); }
  const { photos = [] } = await res.json();
  const p = photos[Math.min(N - 1, photos.length - 1)];
  if (!p) { console.warn(`· ${slot}: sin resultados para "${query}"`); continue; }
  datos[slot] = { id: p.id, src: p.src[tam] || p.src.large, alt: p.alt || query, autor: p.photographer, url: p.url };
  console.log(`✓ ${slot}: ${p.photographer} — ${p.url}`);
}

const HELPER = 'const foto = (v, w = 1200) => !v ? "" : typeof v === "object" ? v.src : /^\\d+$/.test(String(v)) ? `https://images.pexels.com/photos/${v}/pexels-photo-${v}.jpeg?auto=compress&cs=tinysrgb&w=${w}` : String(v);\n';
writeFileSync(OUT, "/* Generado por scripts/pexels.mjs con la API de Pexels. Fotos de https://www.pexels.com (el pie de la web cita a los fotógrafos). */\nconst PEXELS = " + JSON.stringify(datos, null, 2) + ";\n" + HELPER);
console.log(`\nListo: ${Object.keys(datos).length} fotos escritas en ${OUT}. Sube ese archivo a GitHub.`);
