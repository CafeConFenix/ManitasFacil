(() => {
const LS = "manitasFacil.custom.v1";
const $ = s => document.querySelector(s);
const esc = t => String(t ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm = t => String(t).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const load = () => { try { return JSON.parse(localStorage.getItem(LS)) || []; } catch { return []; } };
const save = a => { try { localStorage.setItem(LS, JSON.stringify(a)); return true; } catch { return false; } };
let custom = load(), cat = "Todas", q = "";
const all = () => [...TUTORIALES, ...custom];

function filtros() {
  const cats = ["Todas", ...new Set(all().map(t => t.categoria))];
  $("#filtros").innerHTML = cats.map(c => `<button class="chip" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  $("#cats").innerHTML = cats.slice(1).map(c => `<option value="${esc(c)}">`).join("");
}
function lista() {
  const nq = norm(q);
  const r = all().filter(t => (cat === "Todas" || t.categoria === cat) &&
    norm([t.titulo, t.categoria, t.resumen, ...(t.herramientas || [])].join(" ")).includes(nq));
  $("#contador").textContent = `${r.length} ${r.length === 1 ? "guía" : "guías"}`;
  $("#lista").innerHTML = r.length ? r.map(t => `<li><a class="tarjeta" href="#/guia/${esc(t.id)}">
    <h2>${esc(t.titulo)}</h2><p>${esc(t.categoria)} · ${esc(t.tiempo)} · ${esc(t.dificultad)}</p>
    ${t.resumen ? `<p>${esc(t.resumen)}</p>` : ""}</a></li>`).join("")
    : `<li class="vacio">No hay guías con eso. Prueba otra palabra o añade tu propio tutorial.</li>`;
}
function guia(id) {
  const t = all().find(x => x.id === id);
  if (!t) { location.hash = ""; return; }
  const propio = String(t.id).startsWith("c-");
  $("#vista-guia").innerHTML = `
  <a class="volver" href="#">← Todas las guías</a>
  <h1>${esc(t.titulo)}</h1><p>${esc(t.categoria)}</p>
  <ul class="meta"><li>⏱ ${esc(t.tiempo)}</li><li>Dificultad: ${esc(t.dificultad)}</li></ul>
  ${t.seguridad ? `<div class="seguridad" role="note"><strong>⚠ Seguridad:</strong> ${esc(t.seguridad)}</div>` : ""}
  <h2 class="sec">Qué necesitas</h2>
  <ul class="herr">${(t.herramientas || []).map(h => `<li>${esc(h)}</li>`).join("")}</ul>
  <h2 class="sec">Paso a paso</h2>
  <ol class="pasos">${(t.pasos || []).map(p => `<li>${esc(p.texto)}${p.svg && !propio ? `<figure>${p.svg}</figure>` : ""}</li>`).join("")}</ol>
  ${(t.problemas || []).length ? `<h2 class="sec">¿Algo salió mal?</h2>${t.problemas.map(p => `<details class="fallo"><summary>${esc(p.fallo)}</summary><p>${esc(p.solucion)}</p></details>`).join("")}` : ""}
  ${propio ? `<button class="btn sec borrar" id="borrar">Borrar este tutorial</button>` : ""}`;
  $("#borrar")?.addEventListener("click", () => {
    if (confirm("¿Borrar este tutorial?")) { custom = custom.filter(x => x.id !== id); save(custom); location.hash = ""; }
  });
}
function ruta() {
  const m = location.hash.match(/^#\/guia\/(.+)$/);
  $("#vista-lista").hidden = !!m; $("#vista-guia").hidden = !m;
  if (m) guia(decodeURIComponent(m[1])); else { filtros(); lista(); }
  scrollTo(0, 0);
}
const lines = s => String(s || "").split("\n").map(x => x.trim()).filter(Boolean);
function añadir(t) {
  if (!t.titulo || !t.categoria || !Array.isArray(t.pasos) || !t.pasos.length) throw new Error("Faltan título, categoría o pasos.");
  const nuevo = { id: "c-" + Date.now(), titulo: String(t.titulo), categoria: String(t.categoria), tiempo: String(t.tiempo || "—"),
    dificultad: String(t.dificultad || "Fácil"), herramientas: (t.herramientas || []).map(String), seguridad: String(t.seguridad || ""),
    pasos: t.pasos.map(p => ({ texto: String(typeof p === "string" ? p : p.texto) })),
    problemas: (t.problemas || []).map(p => ({ fallo: String(p.fallo), solucion: String(p.solucion) })) };
  custom.push(nuevo);
  if (!save(custom)) { custom.pop(); throw new Error("No se pudo guardar en este navegador."); }
  $("#dlg").close(); $("#form").reset(); $("#json").value = ""; $("#err").textContent = "";
  location.hash = "#/guia/" + nuevo.id;
}
$("#q").addEventListener("input", e => { q = e.target.value; lista(); });
$("#filtros").addEventListener("click", e => { const b = e.target.closest("[data-c]"); if (b) { cat = b.dataset.c; filtros(); lista(); } });
$("#btn-nuevo").addEventListener("click", () => { $("#err").textContent = ""; $("#dlg").showModal(); });
$("#form").addEventListener("submit", e => {
  if (e.submitter?.value === "cancel") return;
  e.preventDefault();
  const f = new FormData(e.target);
  try {
    añadir({ titulo: f.get("titulo"), categoria: f.get("categoria"), tiempo: f.get("tiempo"), dificultad: f.get("dificultad"),
      herramientas: lines(f.get("herramientas")), seguridad: f.get("seguridad"), pasos: lines(f.get("pasos")),
      problemas: lines(f.get("problemas")).map(l => { const [a, ...b] = l.split("|"); return { fallo: a.trim(), solucion: b.join("|").trim() || "—" }; }) });
  } catch (x) { $("#err").textContent = x.message; }
});
$("#btn-json").addEventListener("click", () => {
  try { añadir(JSON.parse($("#json").value)); } catch (x) { $("#err").textContent = "JSON no válido: " + x.message; }
});
addEventListener("hashchange", ruta);
ruta();
})();
