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
const FAV = "manitasFacil.fav.v1", PRG = "manitasFacil.prog.v1";
const getJ = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const setJ = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
let custom = load(), cat = "Todas", q = "", niv = 0, favs = getJ(FAV, []), prog = getJ(PRG, {});
const all = () => [...TUTORIALES, ...custom];

function filtros() {
  const cats = ["Todas", ...new Set(all().map(t => t.categoria))];
  $("#filtros").innerHTML = `<button class="chip" aria-pressed="${cat === "★"}" data-c="★">⭐ Favoritos (${favs.length})</button>` + cats.map(c => `<button class="chip" aria-pressed="${c === cat}" data-c="${esc(c)}">${c === "Todas" ? "✨" : ci(c)[0]} ${esc(c)}</button>`).join("");
  $("#cats").innerHTML = cats.slice(1).map(c => `<option value="${esc(c)}">`).join("");
  $("#stats").textContent = `${all().length} guías disponibles.`;
}
function lista() {
  const nq = norm(q);
  const r = all().filter(t => (cat === "Todas" || (cat === "★" ? favs.includes(t.id) : t.categoria === cat)) && (!niv || nivel(t.dificultad) === niv) &&
    norm([t.titulo, t.categoria, t.resumen, ...(t.herramientas || [])].join(" ")).includes(nq));
  $("#contador").textContent = `${r.length} ${r.length === 1 ? "guía" : "guías"}`;
  $("#lista").innerHTML = r.length ? r.map(t => { const [e, h] = ci(t.categoria); return `<li class="rel"><button class="fav" data-f="${esc(t.id)}" aria-pressed="${favs.includes(t.id)}" aria-label="Guardar en favoritos">♥</button><a class="tarjeta" style="--h:${h}" href="#/guia/${esc(t.id)}">
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
    <ul class="meta"><li>⏱ ${esc(t.tiempo)}</li><li>${dots(nivel(t.dificultad))}${esc(t.dificultad)}</li><li>📋 ${n} pasos</li></ul>
    <div class="acc"><button class="btn" id="a-modo">▶ Modo paso a paso</button><button class="btn sec" id="a-fav"></button><button class="btn sec" id="a-lista">🛒 Copiar lista</button><button class="btn sec" id="a-share">🔗 Compartir</button><button class="btn sec" id="a-print">🖨 Imprimir</button>${CALCS[t.id] ? `<button class="btn sec" id="a-calc">🧮 Calculadora</button>` : ""}</div></header>
  ${t.seguridad ? `<div class="seguridad" role="note"><span class="sico" aria-hidden="true">⚠️</span><div><strong>Seguridad primero</strong><p>${esc(t.seguridad)}</p></div></div>` : ""}
  ${(t.antes || []).length ? `<section class="card azul"><h2>👀 Antes de empezar</h2>${lst(t.antes)}</section>` : ""}
  <div class="cols"><section class="card"><h2>🧰 Herramientas y materiales</h2>${lst(t.herramientas || [])}</section>
  ${(t.compra || []).length ? `<section class="card"><h2>🛒 Qué comprar exactamente</h2>${lst(t.compra)}</section>` : ""}</div>
  <h2 class="sec">Paso a paso</h2>
  <p class="prog"><span id="progt">0 de ${n} pasos hechos</span><span class="bar"><i id="progb"></i></span><button class="lnk" id="reset">Reiniciar</button></p>
  <ol class="pasos">${(t.pasos || []).map((p, i) => `<li><button class="num" aria-pressed="false" aria-label="Marcar el paso ${i + 1} como hecho"><span>${i + 1}</span></button><div class="pbody"><strong>${esc(p.texto)}</strong>${p.detalle ? `<p class="detalle">${esc(p.detalle)}</p>` : ""}${tbtn(p)}${p.svg && !propio ? `<figure>${p.svg}</figure>` : ""}</div></li>`).join("")}</ol>
  ${(t.problemas || []).length ? `<h2 class="sec">¿Algo salió mal?</h2>${t.problemas.map(p => `<details class="fallo"><summary>${esc(p.fallo)}</summary><p>${esc(p.solucion)}</p></details>`).join("")}` : ""}
  ${propio ? `<button class="btn sec borrar" id="borrar">Borrar este tutorial</button>` : ""}`;
  const nums = [...document.querySelectorAll(".num")];
  const marca = (i, on) => { const b = nums[i]; if (!b) return; b.setAttribute("aria-pressed", on); b.closest("li").classList.toggle("hecho", on); };
  const refresh = () => { const d = nums.filter(b => b.getAttribute("aria-pressed") === "true").length;
    $("#progt").textContent = `${d} de ${n} pasos hechos`; $("#progb").style.width = (n ? d / n * 100 : 0) + "%";
    prog[id] = nums.map((b, i) => b.getAttribute("aria-pressed") === "true" ? i : -1).filter(i => i >= 0); setJ(PRG, prog); };
  (prog[id] || []).forEach(i => marca(i, true)); refresh();
  nums.forEach((b, i) => b.addEventListener("click", () => { marca(i, b.getAttribute("aria-pressed") !== "true"); refresh(); }));
  $("#reset").addEventListener("click", () => { nums.forEach((_, i) => marca(i, false)); refresh(); });
  $("#a-modo").addEventListener("click", () => abrirModo(t, nums, marca, refresh));
  const fb = $("#a-fav"), pf = () => { const f = favs.includes(id); fb.textContent = f ? "♥ En favoritos" : "♡ Guardar"; fb.setAttribute("aria-pressed", f); };
  pf(); fb.addEventListener("click", () => { toggleFav(id); pf(); });
  $("#a-lista").addEventListener("click", () => copiar(listaTexto(t), "Lista copiada ✓"));
  $("#a-share").addEventListener("click", () => compartir(t));
  $("#a-print").addEventListener("click", () => print());
  $("#a-calc")?.addEventListener("click", () => abrirCalc(CALCS[t.id]));
  $("#borrar")?.addEventListener("click", () => {
    if (confirm("¿Borrar este tutorial?")) { custom = custom.filter(x => x.id !== id); save(custom); location.hash = ""; }
  });
}
const num = id => Math.max(0, parseFloat($(id).value) || 0);
const f1 = x => x.toLocaleString("es-ES", { maximumFractionDigits: 1 });
function calcP() {
  const l = num("#p-l"), a = num("#p-a"), h = num("#p-h"), pu = num("#p-pu"), ve = num("#p-ve"), m = num("#p-m") || 1, r = num("#p-r") || 10;
  const par = Math.max(0, 2 * (l + a) * h - pu * 1.6 - ve * 1.4), te = $("#p-t").checked ? l * a : 0, tot = par + te, lit = tot * m / r * 1.1;
  $("#r-p").innerHTML = tot ? `<strong>${f1(lit)} L</strong> de pintura (con un 10 % de margen)<p>Superficie a pintar: ${f1(tot)} m² (paredes ${f1(par)} m²${te ? ` + techo ${f1(te)} m²` : ""}), ${m} ${m === 1 ? "mano" : "manos"}, rinde ${f1(r)} m²/L.</p><p>Te sirven, por ejemplo, <b>${Math.ceil(lit / 4)}</b> bote(s) de 4 L o <b>${Math.ceil(lit / 15)}</b> de 15 L.</p>` : "Introduce las medidas de la habitación.";
}
function calcS() {
  const m2 = num("#s-l") * num("#s-a") || num("#s-m"), g = num("#s-d"), ab = m2 * 35;
  $("#r-s").innerHTML = m2 ? `<strong>${f1(m2 * g / 1000)} kg</strong> de semilla (${f1(m2 * g)} g)<p>Superficie: ${f1(m2)} m². Dosis: ${g} g/m².</p><p>Abono de arranque: unos ${f1(ab / 1000)} kg (35 g/m²). Mantillo para cubrir (capa de 0,5 cm): unos ${f1(m2 * 5)} litros.</p>` : "Introduce el largo y ancho, o los m² directamente.";
}
const CALCS = { "pintar-pared": "p", "sembrar-cesped": "s", "abonar-cesped": "s" };
function abrirCalc(t = "p") {
  document.querySelectorAll("[data-t]").forEach(b => b.setAttribute("aria-pressed", b.dataset.t === t));
  $("#t-p").hidden = t !== "p"; $("#t-s").hidden = t !== "s"; calcP(); calcS(); $("#calc").showModal();
}
const toggleFav = id => { favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id]; setJ(FAV, favs); };
let tt; const toast = m => { const el = $("#toast"); el.textContent = m; el.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => el.classList.remove("on"), 2200); };
async function copiar(txt, msg) { try { await navigator.clipboard.writeText(txt); toast(msg); } catch { prompt("Copia el texto:", txt); } }
const listaTexto = t => `🛒 ${t.titulo}\n\nQué comprar:\n${((t.compra && t.compra.length ? t.compra : t.herramientas) || []).map(x => "• " + x).join("\n")}\n\nHerramientas y materiales:\n${(t.herramientas || []).map(x => "• " + x).join("\n")}`;
async function compartir(t) {
  const url = location.href.split("#")[0] + "#/guia/" + t.id;
  try { if (navigator.share) await navigator.share({ title: t.titulo, text: "Mira esta guía: " + t.titulo, url }); else copiar(url, "Enlace copiado ✓"); } catch {}
}
const durs = p => { const out = [], re = /(\d+)(?:\s*[-–]\s*(\d+))?\s*(segundos?|minutos?|min\b|horas?)/gi, txt = (p.texto || "") + " " + (p.detalle || ""); let m;
  while ((m = re.exec(txt))) { const v = Math.max(+m[1], +(m[2] || 0)), u = m[3].toLowerCase(), h = u.startsWith("h"), sg = u.startsWith("s"), min = h ? v * 60 : sg ? v / 60 : v;
    if (min > 0 && min <= 180 && !out.some(o => o.min === min)) out.push({ min, txt: `${v} ${h ? "h" : sg ? "s" : "min"}` }); }
  return out.slice(0, 3); };
const tbtn = p => { const d = durs(p); return d.length ? `<p class="tm-row">${d.map(x => `<button class="tmr" data-m="${x.min}" data-l="${esc(p.texto)}">⏲ ${x.txt}</button>`).join("")}</p>` : ""; };
let tint = null, ac = null;
const fmt = s => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
function temporizador(min, label) {
  clearInterval(tint); try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); } catch {}
  const fin = Date.now() + min * 60000; $("#tm").hidden = false; $("#tm-l").textContent = label;
  const tick = () => { const s = Math.max(0, Math.round((fin - Date.now()) / 1000)); $("#tm-t").textContent = fmt(s); if (!s) { clearInterval(tint); alarma(label); } };
  tick(); tint = setInterval(tick, 500);
}
function alarma(label) {
  toast("⏰ ¡Tiempo! " + label); try { navigator.vibrate?.([300, 150, 300, 150, 600]); } catch {}
  try { [0, .35, .7].forEach(d => { const o = ac.createOscillator(), g = ac.createGain(); o.connect(g); g.connect(ac.destination); o.frequency.value = 880; g.gain.value = .25; o.start(ac.currentTime + d); o.stop(ac.currentTime + d + .22); }); } catch {}
}
let wl = null;
async function abrirModo(t, nums, marca, refresh) {
  const n = t.pasos.length, m = $("#modo"), propio = String(t.id).startsWith("c-");
  let i = Math.max(0, nums.findIndex(b => b.getAttribute("aria-pressed") !== "true"));
  const pinta = () => { const p = t.pasos[i];
    $("#m-tit").textContent = t.titulo; $("#m-n").textContent = `Paso ${i + 1} de ${n}`; $("#m-t").textContent = p.texto; $("#m-d").textContent = p.detalle || "";
    $("#m-f").innerHTML = tbtn(p) + (p.svg && !propio ? `<figure>${p.svg}</figure>` : ""); $("#m-prev").disabled = i === 0;
    $("#m-next").textContent = i === n - 1 ? "Terminar ✓" : "Siguiente →"; $("#m-bar").style.width = ((i + 1) / n * 100) + "%"; };
  const cerrar = () => { m.hidden = true; document.body.classList.remove("sin-scroll"); try { wl?.release(); } catch {} wl = null; removeEventListener("keydown", tecla); };
  const ir = d => { if (d > 0) { marca(i, true); refresh(); } i += d; if (i >= n) { cerrar(); toast("¡Terminaste! 🎉"); return; } if (i < 0) i = 0; pinta(); };
  const tecla = e => { if (e.key === "ArrowRight") ir(1); else if (e.key === "ArrowLeft") ir(-1); else if (e.key === "Escape") cerrar(); };
  $("#m-prev").onclick = () => ir(-1); $("#m-next").onclick = () => ir(1); $("#m-x").onclick = cerrar;
  addEventListener("keydown", tecla); pinta(); m.hidden = false; document.body.classList.add("sin-scroll");
  try { wl = await navigator.wakeLock?.request("screen"); } catch {}
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
$("#niv").addEventListener("change", e => { niv = +e.target.value; lista(); });
$("#lista").addEventListener("click", e => { const b = e.target.closest("[data-f]"); if (b) { toggleFav(b.dataset.f); filtros(); lista(); } });
$("#btn-calc").addEventListener("click", () => abrirCalc("p"));
$("#calc-x").addEventListener("click", () => $("#calc").close());
$("#calc").addEventListener("input", () => { calcP(); calcS(); });
document.querySelectorAll("[data-t]").forEach(b => b.addEventListener("click", () => abrirCalc(b.dataset.t)));
document.addEventListener("click", e => { const b = e.target.closest(".tmr"); if (b) temporizador(+b.dataset.m, b.dataset.l); });
$("#tm-x").addEventListener("click", () => { clearInterval(tint); $("#tm").hidden = true; });
let ip = null;
addEventListener("beforeinstallprompt", e => { e.preventDefault(); ip = e; $("#btn-instalar").hidden = false; });
$("#btn-instalar").addEventListener("click", async () => { if (!ip) return; ip.prompt(); await ip.userChoice; ip = null; $("#btn-instalar").hidden = true; });
if ("serviceWorker" in navigator) addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
addEventListener("hashchange", ruta);
ruta();
})();
