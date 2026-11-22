/* Dibujos de pasos en estilo ilustración (lámina clara, dos tonos). Sustituyen a los de línea simple. */
const R = (x, y, w, h, f, rx = 4, s = "") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f}" ${s}/>`;
const C = (x, y, r, f, s = "") => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${s}/>`;
const Pa = (d, f = "none", s = "") => `<path d="${d}" fill="${f}" ${s}/>`;
const ACE = "#b0bec5", ACE2 = "#90a4ae", CLA = "#e3eaed", AMA = "#ffc800", AMB = "#ffb300", ROJ = "#e53935", AZU = "#4aa3df", MAD = "#c98b4a", OSC = "#37474f";
const trazo = (c, w, extra = "") => `stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" ${extra}`;

DIB.llave = X.llave = lamina("Llave de paso: gira el volante hacia la derecha para cerrar el agua",
  R(0, 58, 240, 26, ACE) + R(0, 61, 240, 6, "#fff", 3, 'fill-opacity=".55"') + R(82, 48, 8, 46, "#78909c", 3) + R(150, 48, 8, 46, "#78909c", 3) + R(88, 44, 64, 54, ACE2, 10) + R(94, 48, 52, 8, "#fff", 4, 'fill-opacity=".35"') +
  R(106, 26, 28, 22, "#78909c", 4) + R(114, 14, 12, 14, OSC, 3) + R(88, 6, 64, 12, ROJ, 6) + Pa("M164 12a30 30 0 0 1 22 24", "none", trazo(AMB, 5)) + Pa("M178 36l9 2 1-10", "none", trazo(AMB, 5)));

DIB.taco = X.taco = lamina("Taco en la pared con el tornillo que sujeta el soporte",
  R(14, 20, 126, 100, "#cfd8dc", 6) + Pa("M14 53H140M14 86H140M62 20V53M104 53V86M62 86V120", "none", 'stroke="#aebcc3" stroke-width="2"') + R(66, 62, 74, 18, "#78909c", 2) +
  R(86, 63, 54, 16, "#f3ecd6", 4, 'stroke="#c9b97a" stroke-width="2"') + Pa("M96 63v16M106 63v16M116 63v16M126 63v16", "none", 'stroke="#c9b97a" stroke-width="2"') +
  R(140, 40, 10, 62, ACE2, 3) + R(100, 68.5, 70, 5, "#78909c", 2) + R(170, 58, 14, 26, ACE, 4, 'stroke="#78909c" stroke-width="2"') + Pa("M174 71h6", "none", trazo(OSC, 2.5)) + txt(76, 134, "taco", 10) + txt(177, 110, "tornillo", 10));

DIB.grifo = lamina("Grifo que gotea: el fallo suele estar en el cartucho, la pieza interior",
  R(0, 118, 240, 22, ACE) + Pa("M96 70V42Q96 22 118 22H158Q178 22 178 44V64", "none", trazo(ACE, 16)) + Pa("M96 66V44Q96 28 118 28H158", "none", trazo("#eef3f5", 4)) + R(80, 62, 32, 58, "#cfd8dc", 6, 'stroke="#90a4ae" stroke-width="2"') + R(68, 10, 56, 11, ACE2, 5) +
  C(96, 74, 24, "none", `stroke="${ROJ}" stroke-width="2.5" stroke-dasharray="5 4"`) + Pa("M178 76q-9 13 0 19 9-6 0-19z", AZU) + Pa("M178 104q-6 9 0 13 6-4 0-13z", AZU, 'fill-opacity=".7"') + txt(60, 108, "cartucho", 10, "end"));

DIB.sifon = lamina("Sifón con un cubo debajo para recoger el agua",
  R(34, 8, 120, 13, ACE, 5) + Pa("M95 21V58", "none", trazo(ACE, 15)) + Pa("M95 58V82Q95 108 121 108H133Q159 108 159 82V70H214", "none", trazo(ACE, 15)) + Pa("M95 58V82Q95 108 121 108H133", "none", trazo("#eef3f5", 4, 'stroke-opacity=".8"')) +
  R(86, 46, 18, 12, "#78909c", 3) + R(150, 62, 14, 16, "#78909c", 3) + Pa("M92 116h60l-7 22h-46z", AZU, 'fill-opacity=".85" stroke="#2f7fb5" stroke-width="2"'));

DIB.masilla = lamina("Rellena la grieta con masilla y alisa con la espátula",
  R(16, 12, 208, 116, "#e8edf0", 8) + Pa("M104 18l12 22-14 18 16 22-8 24", "none", trazo(OSC, 3)) + Pa("M110 60q12-9 24 0t0 20q-12 9-24 0t0-20z", "#fff", 'stroke="#cfd8dc" stroke-width="2"') +
  Pa("M138 80l58-12 5 24-58 12z", ACE, 'stroke="#78909c" stroke-width="2"') + Pa("M196 68l30-6 5 22-30 6z", MAD));

DIB.pintura = lamina("Pinta en pasadas largas y reparte la pintura con el rodillo",
  R(16, 12, 208, 116, "#e8edf0", 8) + Pa("M24 12H128V128H24a8 8 0 0 1-8-8V20a8 8 0 0 1 8-8z", AMA) + R(96, 38, 104, 28, "#fff", 9, 'stroke="#90a4ae" stroke-width="2.5"') + R(100, 42, 96, 8, AMA, 4, 'fill-opacity=".7"') +
  Pa("M200 52h16q8 0 8 8v14H150v20", "none", trazo("#78909c", 5)) + R(142, 92, 16, 34, MAD, 6));

DIB.bisagra = lamina("Unas gotas de lubricante en el pasador de la bisagra",
  R(10, 8, 62, 124, "#cfd8dc", 3) + R(142, 8, 86, 124, "#d7b98c", 4) + Pa("M156 24h58v36h-58zM156 74h58v44h-58z", "none", 'stroke="#b8975f" stroke-width="2"') + R(72, 34, 34, 72, ACE, 3, 'stroke="#78909c" stroke-width="2"') + R(106, 34, 34, 72, CLA, 3, 'stroke="#78909c" stroke-width="2"') +
  R(100, 30, 14, 80, ACE2, 7) + R(97, 20, 20, 10, OSC, 3) + C(86, 48, 3.5, OSC) + C(86, 92, 3.5, OSC) + C(126, 48, 3.5, "#78909c") + C(126, 92, 3.5, "#78909c") + Pa("M107 0q-7 11 0 16 7-5 0-16z", AMB));

DIB.ventana = lamina("Burlete en el borde donde cierra la ventana",
  R(36, 8, 168, 124, "#fff", 6, 'stroke="#90a4ae" stroke-width="3"') + R(52, 22, 136, 96, "#cfeaf6", 3) + R(116, 22, 8, 96, "#fff", 0) + Pa("M70 104L102 40", "none", trazo("#fff", 6, 'stroke-opacity=".55"')) +
  Pa("M48 18H192V122H48z", "none", trazo(OSC, 5)) + Pa("M226 62h-24M212 54l-10 8 10 8", "none", trazo(AZU, 3.5)) + Pa("M226 88h-24", "none", trazo(AZU, 3.5)));

DIB.seto = lamina("Corta el seto siguiendo la cuerda guía",
  R(0, 118, 240, 22, "#8d6e4a") + Pa("M36 118V64Q36 40 60 40H180Q204 40 204 64V118z", "#4caf50") + [[66, 62, 11], [104, 54, 13], [146, 60, 12], [184, 70, 10], [84, 92, 13], [128, 90, 12], [170, 98, 11], [54, 104, 9]].map(([x, y, r]) => C(x, y, r, "#388e3c", 'fill-opacity=".7"')).join("") +
  Pa("M12 40H228", "none", `stroke="${ROJ}" stroke-width="2.5" stroke-dasharray="6 4"`) + R(10, 30, 6, 92, MAD, 2) + R(224, 30, 6, 92, MAD, 2));

DIB.goteo = lamina("Un gotero junto a cada planta",
  R(0, 100, 240, 40, "#8d6e4a") + R(0, 94, 240, 9, OSC, 4.5) + [48, 120, 192].map(x => Pa(`M${x} 94V62`, "none", trazo("#388e3c", 4)) + Pa(`M${x} 82q-24-2-26-24 24 2 26 24zM${x} 74q24-2 26-26-24 2-26 26z`, "#66bb6a") + R(x - 6, 92, 12, 14, AMA, 3) + Pa(`M${x} 110q-5 8 0 12 5-4 0-12z`, AZU)).join(""));

DIB.planta = lamina("Saca la planta sujetándola por la base, con todas las raíces",
  Pa("M120 78V42", "none", trazo("#388e3c", 5)) + Pa("M120 62q-30-2-34-30 30 2 34 30zM120 50q30-2 34-30-30 2-34 30z", "#66bb6a") + Pa("M82 84q38-18 76 0 10 26-38 38-48-12-38-38z", "#8d6e4a") + Pa("M96 108q-12 12-8 24M112 114q-5 10 0 20M128 114q5 10 0 20M144 108q12 12 8 24", "none", trazo("#e8d6b0", 3)) + Pa("M70 90q-8 8-4 18M170 90q8 8 4 18", "none", trazo("#e8d6b0", 3)));

DIB.silicona = lamina("Cinta a los lados de la junta y silicona en el medio",
  R(16, 8, 208, 66, "#fff", 4) + Pa("M16 30H224M16 52H224M68 8V74M120 8V74M172 8V74", "none", 'stroke="#cfd8dc" stroke-width="2"') + R(16, 90, 208, 44, "#e8edf0", 4) + R(16, 74, 208, 10, "#e6d3a3", 0) + R(16, 94, 208, 10, "#e6d3a3", 0) +
  R(16, 84, 208, 10, "#fff", 5, 'stroke="#b0bec5" stroke-width="2"') + `<g transform="rotate(-35 204 24)">${R(180, 12, 52, 24, AMA, 6, 'stroke="#c99a00" stroke-width="2"')}${Pa("M180 20l-50 6 50 8z", ACE, 'stroke="#78909c" stroke-width="2"')}</g>`);

DIB.nevera = lamina("La goma de la puerta debe sujetar un papel",
  R(64, 4, 112, 132, "#eef3f5", 10, 'stroke="#90a4ae" stroke-width="3"') + R(74, 14, 92, 112, "none", 6, `stroke="${AMB}" stroke-width="5"`) + R(160, 44, 6, 36, ACE2, 3) + R(150, 84, 62, 26, "#fff", 2, 'stroke="#90a4ae" stroke-width="2"') + Pa("M216 97h14M224 90l8 7-8 7", "none", trazo(OSC, 3)) + Pa("M158 91h46M158 97h40M158 103h46", "none", 'stroke="#cfd8dc" stroke-width="2"'));

DIB.alarma = lamina("Detector en el techo, a 30–50 cm de las paredes",
  R(0, 0, 240, 20, "#d3dce0", 0) + R(0, 0, 12, 140, "#d3dce0", 0) + C(120, 46, 30, "#fff", 'stroke="#90a4ae" stroke-width="3"') + C(120, 46, 19, "none", 'stroke="#cfd8dc" stroke-width="3"') + C(120, 46, 6, "#cfd8dc") + C(142, 62, 3.5, ROJ) +
  Pa("M120 86q-12 12 0 24t0 22", "none", trazo(ACE, 5)) + Pa("M16 46H86M24 40l-8 6 8 6M78 40l8 6-8 6", "none", trazo(OSC, 2)) + txt(52, 38, "30–50 cm", 10));

DIB.lavadora = lamina("La trampilla del filtro está abajo a la derecha de la lavadora",
  R(58, 6, 124, 128, "#fff", 10, 'stroke="#90a4ae" stroke-width="3"') + R(68, 14, 104, 20, "#eef3f5", 4) + C(84, 24, 5, ACE2) + R(118, 19, 44, 10, OSC, 3) + C(120, 78, 32, "#cfe8f5", 'stroke="#90a4ae" stroke-width="5"') + C(120, 78, 21, "#eaf6fc") + Pa("M106 70q14-12 28 2", "none", trazo("#fff", 4)) +
  R(128, 114, 42, 14, AMA, 3, 'stroke="#c99a00" stroke-width="2"') + Pa("M214 104l-40 14M174 118l9-2M174 118l5-8", "none", trazo(ROJ, 3)));

S.puerta = lamina("Zona donde la puerta roza con el marco",
  R(44, 4, 152, 132, "#cfd8dc", 4) + R(54, 10, 126, 126, "#d7b98c", 3) + Pa("M70 26h46v42H70zM126 26h42v42h-42zM70 80h46v44H70zM126 80h42v44h-42z", "none", 'stroke="#b8975f" stroke-width="2"') +
  R(48, 26, 10, 24, ACE2, 2) + R(48, 92, 10, 24, ACE2, 2) + C(166, 74, 5, ACE2) + Pa("M184 8v62", "none", trazo(ROJ, 6, 'stroke-opacity=".85"')) + Pa("M214 40l-24 10M196 40l-6 10 10 4", "none", trazo(ROJ, 3)) + txt(214, 34, "roza", 11) );

S.desbroz = lamina("Barridos suaves de lado a lado con la desbrozadora",
  R(0, 106, 240, 34, "#7cb342") + Array.from({ length: 22 }, (_, i) => Pa(`M${6 + i * 11} 112l${(i % 3) - 1} -${14 + (i % 4) * 4}`, "none", trazo("#558b2f", 3))).join("") + Pa("M206 14L112 98", "none", trazo(OSC, 7)) + R(192, 8, 28, 28, ROJ, 6) + R(88, 96, 48, 13, AMA, 6, 'stroke="#c99a00" stroke-width="2"') +
  Pa("M54 88Q112 62 170 86", "none", trazo("#fff", 3.5, 'stroke-dasharray="7 6"')) + Pa("M162 76l10 11-14 3", "none", trazo("#fff", 3.5)));
