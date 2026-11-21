/* Efectos de la portada: fotos, aparición al hacer scroll, contadores, parallax y cabecera que se encoge */
(() => {
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
$$("[data-img]").forEach(el => { const u = foto(PEXELS[el.dataset.img]); if (u) { el.style.backgroundImage = `url("${u}")`; el.classList.add("con-foto"); } });
$("#c-guias").dataset.count = TUTORIALES.length; $("#c-cats").dataset.count = new Set(TUTORIALES.map(t => t.categoria)).size;
$$(".tiles .tile,.porque .item").forEach((e, i) => { e.classList.add("reveal"); e.dataset.d = (i % 6) * 90; });
function cuenta(el) { const n = +el.dataset.count; if (rm) { el.textContent = n; return; } const t0 = performance.now();
  (function f(t) { const p = Math.min(1, (t - t0) / 1200); el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); })(t0); }
const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; e.target.classList.add("in"); io.unobserve(e.target); if (e.target.dataset.count !== undefined) cuenta(e.target); }), { threshold: .15 });
$$(".reveal,[data-count]").forEach(el => { el.style.transitionDelay = (el.dataset.d || 0) + "ms"; io.observe(el); });
const top = $(".top"), hi = $(".hero-img");
addEventListener("scroll", () => { top.classList.toggle("peq", scrollY > 40); if (hi && !rm && scrollY < 900) hi.style.transform = `translateY(${scrollY * .18}px)`; }, { passive: true });
$$(".tile").forEach(t => t.addEventListener("click", () => { const ch = $(`[data-c="${t.dataset.cat}"]`); if (ch) ch.click(); $("#contador").scrollIntoView({ behavior: "smooth", block: "start" }); }));
["#b-guias", "#b-hero"].forEach(s => $(s)?.addEventListener("click", e => { e.preventDefault(); scrollTo({ top: 0, behavior: "smooth" }); $("#q").focus({ preventScroll: true }); }));
const cr = new Map(), eh = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
Object.values(PEXELS).forEach(v => { if (v && typeof v === "object" && v.autor) cr.set(v.autor, v.url); });
if ($("#creditos") && cr.size) $("#creditos").innerHTML = "Fotos de " + [...cr].map(([a, u]) => `<a href="${eh(u)}" rel="noopener">${eh(a)}</a>`).join(", ") + ' en <a href="https://www.pexels.com/es-es/" rel="noopener">Pexels</a>.';
})();
