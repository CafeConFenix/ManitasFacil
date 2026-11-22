/* Dibujos técnicos sencillos y reutilizables + asignación a pasos */
const F = (a, b, c, d) => { const g = Math.atan2(d - b, c - a), h = 8;
  return `<path d="M${a} ${b}L${c} ${d}"/><path d="M${c} ${d}l${-h * Math.cos(g - .45)} ${-h * Math.sin(g - .45)}M${c} ${d}l${-h * Math.cos(g + .45)} ${-h * Math.sin(g + .45)}"/>`; };
const V = (l, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 140" role="img" aria-label="${l}"><defs><pattern id="gr" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M14 0H0V14" fill="none" stroke="#9fb3bb" stroke-opacity=".28"/></pattern></defs><rect width="240" height="140" rx="14" fill="#eef3f5"/><rect width="240" height="140" rx="14" fill="url(#gr)"/><g transform="translate(0 8)" fill="none" stroke="#37474f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;
const Y = "#f7c600", G = "#6aa84f";
const DIB = {
 llave: X.llave, taco: X.taco,
 grifo: V("El goteo viene de la pieza interior", `<path d="M20 100h200"/><rect x="70" y="52" width="30" height="48"/><rect x="64" y="38" width="42" height="16" fill="${Y}"/><path d="M85 38V26h50q18 0 18 18v8"/><path d="M72 18h26"/><path d="M153 66q-6 10 0 14 6-4 0-14z" fill="${Y}"/>${F(30,40,62,46)}`),
 sifon: V("Cubo debajo del sifón", `<path d="M40 14h110v10H40z"/><path d="M90 24v40q0 24 24 24h22q24 0 24-24V56h30" stroke="${Y}" stroke-width="9"/><path d="M90 24v40q0 24 24 24h22q24 0 24-24V56h30"/><path d="M100 98l4 22h40l4-22z"/>`),
 bombilla: V("Izquierda para quitar, derecha para poner", `<circle cx="110" cy="48" r="28" fill="${Y}" fill-opacity=".45"/><path d="M98 78h24v16H98zM100 84h20M100 89h20M104 94h12"/><path d="M172 36a44 44 0 0 0-2 46"/><path d="M170 82l-8-7M170 82l8-6"/>`),
 masilla: V("Rellena y alisa con la espátula", `<rect x="30" y="10" width="180" height="96"/><path d="M104 22l12 20-14 14 16 20"/><path d="M150 66l40-16 4 10-40 16z" fill="${Y}"/><path d="M194 60l16-6"/>`),
 pintura: V("Pinta en W y reparte", `<rect x="30" y="10" width="180" height="96"/><path d="M56 56l20 40 20-40 20 40 20-40" stroke="${Y}" stroke-width="9" stroke-opacity=".7"/><rect x="60" y="20" width="76" height="18" rx="5" fill="${Y}"/><path d="M136 29h16v18h-40v12"/>`),
 bisagra: V("Unas gotas en el pasador", `<rect x="84" y="30" width="34" height="62"/><rect x="122" y="30" width="34" height="62"/><rect x="116" y="26" width="10" height="70" rx="3" fill="${Y}"/><path d="M121 4q-6 10 0 14 6-4 0-14z" fill="${Y}"/>${F(121,18,121,25)}`),
 ventana: V("Burlete en el borde donde cierra", `<rect x="50" y="8" width="140" height="100"/><path d="M62 20h116v76H62z" stroke="${Y}" stroke-width="7"/><path d="M62 20h116v76H62z"/><path d="M120 20v76"/>`),
 escalera: V("Bien apoyada y con alguien sujetando abajo", `<path d="M20 108h200M190 6v102"/><path d="M104 108L152 14M130 108L178 14"/><path d="M112 92l26 0M120 76h26M128 60h26M136 44h26M144 28h26"/><path d="M60 108a46 46 0 0 1 12-22" stroke="${Y}" stroke-width="4"/>`),
 seto: V("Corta siguiendo la cuerda", `<path d="M50 104V62q0-22 22-22h96q22 0 22 22v42z" fill="${G}" fill-opacity=".45"/><path d="M26 40h188" stroke-dasharray="6 4"/><path d="M26 34v70M214 34v70"/>`),
 goteo: V("Un gotero junto a cada planta", `<defs><g id="pl"><path d="M0 90V58M0 74q-14-4-16-18M0 68q14-4 16-18" stroke="${G}"/><path d="M-3 98q3 8 6 0z" fill="${Y}"/></g></defs><path d="M20 94h200"/><use href="#pl" x="60"/><use href="#pl" x="120"/><use href="#pl" x="180"/>`),
 planta: V("Sujeta por la base y suelta las raíces", `<path d="M80 74h80l-10 38H90z"/><path d="M120 74V30M120 50q-18-4-20-22M120 42q18-4 20-22" stroke="${G}"/><path d="M108 78q-8 12 0 22M120 78v26M132 78q8 12 0 22" stroke="${Y}" stroke-width="3"/>`),
 radiador: V("Purgador arriba: medio giro", `<rect x="40" y="34" width="140" height="68" rx="6"/><path d="M62 34v68M84 34v68M106 34v68M128 34v68M150 34v68"/><circle cx="170" cy="30" r="8" fill="${Y}"/>${F(214,10,182,24)}`),
 silicona: V("Cinta a los lados, silicona en medio", `<rect x="20" y="8" width="200" height="60"/><path d="M20 28h200M20 48h200M70 8v60M120 8v60M170 8v60" stroke-opacity=".35"/><rect x="20" y="68" width="200" height="10" fill="${Y}"/><path d="M20 64h200M20 82h200" stroke-dasharray="6 4"/><rect x="20" y="82" width="200" height="30"/>`),
 nevera: V("La goma debe sujetar un papel", `<rect x="80" y="6" width="80" height="112" rx="6"/><path d="M80 42h80"/><rect x="86" y="12" width="68" height="100" rx="3" stroke="${Y}" stroke-width="5"/><path d="M146 56v22"/><rect x="146" y="90" width="38" height="14" fill="${Y}"/>`),
 alarma: V("En el techo, lejos de paredes y cocina", `<path d="M20 20h200M20 20v88M220 20v88"/><circle cx="120" cy="34" r="14" fill="${Y}"/><circle cx="120" cy="34" r="5"/><path d="M120 62q-8 10 0 20t0 20" stroke-dasharray="4 4"/>`)
};
const IL = {
 "grifo-gotea":[[3,"grifo"]], "desatascar-fregadero":[[5,"sifon"]], "cisterna-pierde":[[0,"llave"]],
 "cambiar-bombilla":[[2,"bombilla"]], "tapar-agujeros":[[2,"masilla"]], "arreglar-pladur":[[2,"masilla"]],
 "pintar-pared":[[3,"pintura"]], "pintar-puerta":[[2,"pintura"]], "bisagras-chirrian":[[2,"bisagra"]],
 "sellar-ventana":[[2,"ventana"]], "limpiar-canalones":[[0,"escalera"]], "podar-seto":[[1,"seto"]],
 "riego-goteo":[[3,"goteo"]], "quitar-malas-hierbas":[[1,"planta"]], "trasplantar":[[3,"planta"]],
 "purgar-radiadores":[[2,"radiador"]], "silicona-banera":[[3,"silicona"]], "junta-nevera":[[3,"nevera"]],
 "cambiar-sifon":[[1,"sifon"]], "desague-ducha":[[1,"sifon"]], "instalar-cortinero":[[2,"taco"]],
 "espejo-pesado":[[1,"taco"]], "alarma-humo":[[0,"alarma"]], "instalar-grifo":[[0,"llave"],[3,"grifo"]],
 "burlete-puerta":[[2,"ventana"]], "cambiar-interruptor":[[2,"cables"]]
};
IL["cambiar-interruptor"] = [];
TUTORIALES.forEach(t => (IL[t.id] || []).forEach(([i, k]) => { if (t.pasos[i] && !t.pasos[i].svg) t.pasos[i].svg = DIB[k]; }));

DIB.lavadora = V("Trampilla del filtro: abajo a la derecha", `<rect x="70" y="8" width="100" height="108" rx="8"/><rect x="82" y="16" width="76" height="16" rx="3"/><circle cx="120" cy="64" r="26"/><circle cx="120" cy="64" r="16" stroke-opacity=".4"/><rect x="128" y="98" width="34" height="12" rx="3" fill="${Y}"/>${F(214,84,168,100)}`);
DIB.vinagre = V("Bolsa con vinagre atada al grifo", `<path d="M20 112h200"/><rect x="88" y="62" width="30" height="50"/><rect x="82" y="46" width="42" height="16" fill="${Y}"/><path d="M103 46V30h50q18 0 18 18v14"/><path d="M148 52h44v38q0 18-22 18t-22-18z" fill="${Y}" fill-opacity=".5"/><path d="M146 52h48" stroke-width="5"/>`);
