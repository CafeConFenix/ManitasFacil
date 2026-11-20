/* Tutoriales precargados. Cada paso: { texto, svg? } */
const S = {
cuadro: `<svg viewBox="0 0 200 110" role="img" aria-label="Cuadro eléctrico con el interruptor general bajado"><rect x="20" y="8" width="160" height="94" rx="6" fill="none" stroke="currentColor" stroke-width="3"/><g fill="currentColor" opacity=".3"><rect x="38" y="26" width="20" height="40" rx="3"/><rect x="68" y="26" width="20" height="40" rx="3"/><rect x="98" y="26" width="20" height="40" rx="3"/></g><rect x="136" y="26" width="28" height="40" rx="3" fill="#f7c600" stroke="currentColor" stroke-width="2"/><rect x="141" y="48" width="18" height="16" fill="#14323a"/><text x="150" y="86" font-size="10" text-anchor="middle" fill="currentColor">GENERAL: abajo</text></svg>`,
cables: `<svg viewBox="0 0 200 110" role="img" aria-label="Enchufe con tres cables: marrón, azul y verde-amarillo"><circle cx="100" cy="36" r="30" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="88" cy="36" r="4" fill="currentColor"/><circle cx="112" cy="36" r="4" fill="currentColor"/><g stroke-width="5" fill="none" stroke-linecap="round"><path d="M40 92q20-18 52-24" stroke="#7a4a21"/><path d="M100 98V70" stroke="#1f6fd0"/><path d="M160 92q-20-18-52-24" stroke="#6aa84f"/></g><g font-size="9" fill="currentColor"><text x="8" y="106">Marrón</text><text x="84" y="108">Azul</text><text x="130" y="106">Verde-amarillo</text></g></svg>`,
puerta: `<svg viewBox="0 0 200 110" role="img" aria-label="Puerta con zona de roce marcada junto al marco"><rect x="30" y="6" width="8" height="98" fill="currentColor"/><rect x="38" y="10" width="120" height="94" fill="none" stroke="currentColor" stroke-width="3"/><rect x="150" y="10" width="8" height="40" fill="#f7c600" stroke="#b3261e" stroke-width="2"/><g fill="currentColor"><rect x="30" y="22" width="14" height="10"/><rect x="30" y="78" width="14" height="10"/></g><text x="96" y="62" font-size="11" text-anchor="middle" fill="currentColor">roce aquí ↗</text></svg>`,
desbroz: `<svg viewBox="0 0 200 110" role="img" aria-label="Desbrozadora cortando la hierba de lado a lado"><path d="M10 100h180" stroke="currentColor" stroke-width="3"/><g stroke="#6aa84f" stroke-width="3" stroke-linecap="round"><path d="M20 100l-4-30M40 100l3-40M60 100l-3-34M140 100l4-38M160 100l-3-30M180 100l3-40"/></g><path d="M170 24L90 72" stroke="currentColor" stroke-width="5"/><ellipse cx="86" cy="84" rx="26" ry="5" fill="#f7c600" stroke="currentColor" stroke-width="2"/><text x="10" y="14" font-size="10" fill="currentColor">Barrido: izquierda → derecha</text></svg>`
};

const TUTORIALES = [
{
  id: "cambiar-enchufe", titulo: "Cambiar un enchufe", categoria: "Enchufes y luz",
  resumen: "Sustituye un enchufe roto o suelto por uno nuevo.",
  tiempo: "20-30 min", dificultad: "Fácil",
  herramientas: ["Destornillador plano y de estrella", "Comprobador de tensión (el de bolígrafo)", "Enchufe nuevo (tipo empotrable)", "Pelacables o alicates", "Linterna"],
  seguridad: "Baja el interruptor general en el cuadro de luz ANTES de tocar nada y comprueba que no hay corriente. Si no estás seguro, llama a un electricista.",
  pasos: [
    { texto: "Baja el interruptor general del cuadro eléctrico. Avisa en casa para que nadie lo suba.", svg: S.cuadro },
    { texto: "Acerca el comprobador a los cables del enchufe viejo. Si se enciende o pita, hay corriente: no sigas." },
    { texto: "Quita la tapa con el destornillador y saca el enchufe de la pared con cuidado." },
    { texto: "Haz una foto de cómo están conectados los cables. Te salvará luego." },
    { texto: "Afloja los tornillos y suelta los tres cables: marrón, azul y verde-amarillo.", svg: S.cables },
    { texto: "Conecta los cables al enchufe nuevo igual que en la foto. Aprieta bien: ninguno debe moverse." },
    { texto: "Mete el enchufe en la caja, atornilla y pon la tapa. Sube el general y prueba con una lámpara." }
  ],
  problemas: [
    { fallo: "Al subir el general salta el interruptor", solucion: "Baja otra vez la corriente y revisa que ningún cable pelado toque a otro." },
    { fallo: "El enchufe no funciona", solucion: "Comprueba que los cables están bien apretados y no hay cobre suelto fuera del borne." },
    { fallo: "El enchufe nuevo no cabe en la caja", solucion: "Dobla los cables con suavidad hacia atrás, en forma de 'Z', antes de meterlo." }
  ]
},
{
  id: "puerta-roza", titulo: "Arreglar una puerta que roza", categoria: "Puertas y carpintería",
  resumen: "Deja de oír el roce y cierra la puerta sin dar golpes.",
  tiempo: "30-45 min", dificultad: "Fácil",
  herramientas: ["Destornillador", "Lápiz", "Lija gruesa (80) y fina (180)", "Cepillo de carpintero (si roza mucho)", "Trapo y pintura o barniz"],
  seguridad: "Usa mascarilla y gafas al lijar y trabaja con la ventana abierta.",
  pasos: [
    { texto: "Cierra despacio la puerta y mira dónde roza. Marca esa zona con lápiz.", svg: S.puerta },
    { texto: "Aprieta los tornillos de todas las bisagras. Muchas veces el roce era solo eso." },
    { texto: "Si siguen flojos, mete un palillo con cola en el agujero y vuelve a atornillar." },
    { texto: "Prueba otra vez. Si aún roza, ábrela, súbela un poco y sácala de las bisagras." },
    { texto: "Lija la zona marcada con lija gruesa, siempre en el sentido de la veta. Prueba a menudo." },
    { texto: "Termina con lija fina, quita el polvo con un trapo y repinta o barniza el canto." }
  ],
  problemas: [
    { fallo: "Sigue rozando abajo", solucion: "La bisagra de arriba puede haberse aflojado: apriétala o pon una arandela fina detrás." },
    { fallo: "He lijado demasiado y queda hueco", solucion: "Un poco de hueco es normal. Si es mucho, pon burlete adhesivo en el marco." },
    { fallo: "Roza solo cuando hay humedad", solucion: "La madera se hincha. Lija un poco más y sella bien el canto con barniz." }
  ]
},
{
  id: "desbrozar-jardin", titulo: "Desbrozar el jardín", categoria: "Jardinería",
  resumen: "Limpia hierba alta y maleza con desbrozadora, sin sustos.",
  tiempo: "1-2 horas", dificultad: "Media",
  herramientas: ["Desbrozadora con cabezal de hilo", "Gafas y pantalla facial", "Guantes y botas cerradas", "Pantalón largo", "Rastrillo y sacos"],
  seguridad: "Nunca desbroces sin gafas y botas. Mantén a niños y mascotas lejos y revisa que no haya piedras ni cables.",
  pasos: [
    { texto: "Camina por la zona y retira piedras, palos, juguetes y cables. Salen disparados al cortar." },
    { texto: "Ponte gafas, guantes, botas y pantalón largo. Ajusta el arnés a tu altura." },
    { texto: "Revisa el hilo: debe sobresalir unos 10 cm. Si no, saca más del cabezal." },
    { texto: "Arranca en suelo llano, con el cabezal separado del suelo. Sujétala con las dos manos." },
    { texto: "Corta con barridos de izquierda a derecha, sin hundir el hilo en la tierra.", svg: S.desbroz },
    { texto: "Si la hierba es muy alta, corta primero la parte de arriba y luego baja al nivel que quieras." },
    { texto: "Rastrilla la hierba cortada, recógela y guarda la máquina limpia." }
  ],
  problemas: [
    { fallo: "El hilo se acaba rápido", solucion: "Cortas muy pegado al suelo o a piedras. Sube el cabezal unos centímetros." },
    { fallo: "La hierba se enreda en el eje", solucion: "Apaga, espera a que pare del todo y quítala con guantes." },
    { fallo: "No arranca", solucion: "Revisa gasolina, mezcla y bujía. Si es eléctrica, mira batería o cable." }
  ]
}
];
