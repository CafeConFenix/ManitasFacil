(() => {
const LS = "manitasFacil.custom.v1";
const $ = s => document.querySelector(s);
const esc = t => String(t ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm = t => String(t).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const load = () => { try { return JSON.parse(localStorage.getItem(LS)) || []; } catch { return []; } };
const save = a => { try { localStorage.setItem(LS, JSON.stringify(a)); return true; } catch { return false; } };
const CAT = {"Fontanería":["💧",205],"Enchufes y luz":["💡",45],"Paredes y pintura":["🎨",330],"Puertas y carpintería":["🚪",25],"Ventanas y exteriores":["🪟",190],"Jardinería":["🌿",130],"Huerto":["🍅",5],"Limpieza y mantenimiento":["🧽",170],"Electrodomésticos":["🔌",260],"Climatización":["❄️",215],"Muebles y montaje":["🪑",35],"Seguridad en casa":["🛡️",350],"Exterior y terraza":["☀️",80]};
const ci = c => CAT[c] || ["🔧", 220];
const nivel = d => /muy f/i.test(d) ? 1 : /media|cuidado/i.test(d) ? 3 : 2;
const dots = n => `<span class="dots" aria-hidden="true">${[1,2,3].map(i => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</span>`;
let custom = load(), cat = "Todas", q = "";
const all = () => [...TUTORIALES, ...custom];

function filtros() {
  const cats = ["Todas", ...new Set(all().map(t => t.categoria))];
  $("#filtros").innerHTML = cats.map(c => `<button class="chip" aria-pressed="${c === cat}" data-c="${esc(c)}">${c === "Todas" ? "✨" : ci(c)[0]} ${esc(c)}</button>`).join("");
  $("#cats").innerHTML = cats.slice(1).map(c => `<option value="${esc(c)}">`).join("");
  $("#stats").textContent = `${all().length} guías disponibles.`;
}
function lista() {
  const nq = norm(q);
  const r = all().filter(t => (cat === "Todas" || t.categoria === cat) &&
    norm([t.titulo, t.categoria, t.resumen, ...(t.herramientas || [])].join(" ")).includes(nq));
  $("#contador").textContent = `${r.length} ${r.length === 1 ? "guía" : "guías"}`;
  $("#lista").innerHTML = r.length ? r.map(t => { const [e, h] = ci(t.categoria); return `<li><a class="tarjeta" style="--h:${h}" href="#/guia/${esc(t.id)}">
    <span class="ico" aria-hidden="true">${e}</span><div><span class="cat">${esc(t.categoria)}</span><h2>${esc(t.titulo)}</h2>
    ${t.resumen ? `<p class="res">${esc(t.resumen)}</p>` : ""}
    <p class="ms"><span>⏱ ${esc(t.tiempo)}</span><span>${dots(nivel(t.dificultad))}${esc(t.dificultad)}</span></p></div></a></li>`; }).join("")
    : `<li class="vacio">No hay guías con eso. Prueba otra palabra o añade tu propio tutorial.</li>`;
}
const lst = a => `<ul class="lst">${a.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
function guia(id) {
  const t = all().find(x => x.id === id);
  if (!t) { location.hash = ""; return; }
  const propio = String(t.id).startsWith("c-"), [e, h] = ci(t.categoria), n = (t.pasos || []).length;
  $("#vista-guia").style.setProperty("--h", h);
  $("#vista-guia").innerHTML = `
  <a class="volver" href="#">← Todas las guías</a>
  <header class="g-head"><span class="cat">${e} ${esc(t.categoria)}</span><h1>${esc(t.titulo)}</h1>
    ${t.resumen ? `<p class="res">${esc(t.resumen)}</p>` : ""}
    <ul class="meta"><li>⏱ ${esc(t.tiempo)}</li><li>${dots(nivel(t.dificultad))}${esc(t.dificultad)}</li><li>📋 ${n} pasos</li></ul></header>
  ${t.seguridad ? `<div class="seguridad" role="note"><span class="sico" aria-hidden="true">⚠️</span><div><strong>Seguridad primero</strong><p>${esc(t.seguridad)}</p></div></div>` : ""}
  ${(t.antes || []).length ? `<section class="card azul"><h2>👀 Antes de empezar</h2>${lst(t.antes)}</section>` : ""}
  <div class="cols"><section class="card"><h2>🧰 Herramientas y materiales</h2>${lst(t.herramientas || [])}</section>
  ${(t.compra || []).length ? `<section class="card"><h2>🛒 Qué comprar exactamente</h2>${lst(t.compra)}</section>` : ""}</div>
  <h2 class="sec">Paso a paso</h2>
  <p class="prog"><span id="progt">0 de ${n} pasos hechos</span><span class="bar"><i id="progb"></i></span><span>Toca el número para marcar</span></p>
  <ol class="pasos">${(t.pasos || []).map((p, i) => `<li><button class="num" aria-pressed="false" aria-label="Marcar el paso ${i + 1} como hecho"><span>${i + 1}</span></button><div class="pbody"><strong>${esc(p.texto)}</strong>${p.detalle ? `<p class="detalle">${esc(p.detalle)}</p>` : ""}${p.svg && !propio ? `<figure>${p.svg}</figure>` : ""}</div></li>`).join("")}</ol>
  ${(t.problemas || []).length ? `<h2 class="sec">¿Algo salió mal?</h2>${t.problemas.map(p => `<details class="fallo"><summary>${esc(p.fallo)}</summary><p>${esc(p.solucion)}</p></details>`).join("")}` : ""}
  ${propio ? `<button class="btn sec borrar" id="borrar">Borrar este tutorial</button>` : ""}`;
  document.querySelectorAll(".num").forEach(b => b.addEventListener("click", () => {
    const on = b.getAttribute("aria-pressed") !== "true";
    b.setAttribute("aria-pressed", on); b.closest("li").classList.toggle("hecho", on);
    const d = document.querySelectorAll(".num[aria-pressed=true]").length;
    $("#progt").textContent = `${d} de ${n} pasos hechos`; $("#progb").style.width = (n ? d / n * 100 : 0) + "%";
  }));
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
