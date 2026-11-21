/* Nivel máximo de detalle. Sustituye por id a versiones anteriores. */
DIB.pelado = V("Cobre visible: 8-10 mm", `<rect x="14" y="50" width="116" height="28" rx="5"/><rect x="130" y="57" width="62" height="14" fill="${Y}"/><path d="M130 61h62M130 67h62" stroke-opacity=".5"/><path d="M130 90v10M192 90v10M130 95h62"/><text x="161" y="48" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">cobre pelado</text><text x="72" y="48" font-size="11" text-anchor="middle" fill="currentColor" stroke="none">funda</text>`);
DIB.borne = V("El cobre entra hasta el fondo; la funda llega a la entrada", `<rect x="124" y="46" width="84" height="38" rx="4"/><rect x="150" y="20" width="20" height="28" fill="${Y}"/><path d="M154 26h12"/><rect x="14" y="58" width="94" height="14" rx="4"/><rect x="108" y="61" width="72" height="8" fill="${Y}"/><path d="M108 52v26" stroke-dasharray="3 3"/>${F(48,100,106,76)}<text x="30" y="108" font-size="10" fill="currentColor" stroke="none">la funda llega aquí</text>`);
const NIVEL_MAX = [
{
 id: "cambiar-enchufe", titulo: "Cambiar un enchufe", categoria: "Enchufes y luz",
 resumen: "Todo el proceso al detalle: abrir, sacar el mecanismo, preparar cada cable, conectarlo y volver a montar.",
 tiempo: "45-60 min", dificultad: "Fácil (con cuidado)",
 antes: [
  "Si el enchufe está quemado, derretido, huele a quemado o chisporrotea, NO lo cambies tú: puede haber un cable dañado detrás. Llama a un electricista.",
  "Si al abrir ves cables con funda de tela, cobre negro o cables de aluminio (gris plateado), para: son instalaciones antiguas que necesitan un profesional.",
  "Si no hay cable verde-amarillo (tierra), no inventes uno: el enchufe nuevo se instalará sin tierra y debes decírselo a un electricista.",
  "Trabaja con buena luz y una linterna frontal. Ten a mano un papel y celo."],
 herramientas: ["Comprobador de tensión sin contacto (de bolígrafo)", "Destornilladores plano y de estrella", "Alicates con pelacables o un pelacables aparte", "Alicates de corte", "Linterna frontal", "Cinta de carrocero", "Un trapo o cartón fino"],
 compra: [
  "Base de enchufe empotrable con toma de tierra (tipo Schuko, 16 A, 250 V). Si el viejo no tenía tierra, usa uno igual y avisa a un electricista.",
  "Misma serie y color que los marcos de la casa (Simon, Niessen, BJC, Legrand...). Si no la encuentras, cambia también el marco y la tapa.",
  "Comprobador de tensión sin contacto: unos 5-10 €."],
 seguridad: "Baja el automático ANTES de abrir y comprueba con el comprobador que no hay tensión. Si en algún momento dudas, para y llama a un electricista.",
 pasos: [
  P("Encuentra el automático correcto y bájalo", "Abre el cuadro eléctrico (suele estar junto a la puerta de entrada, en una caja con tapa de plástico). Verás una fila de interruptores pequeños, los automáticos: cada uno protege un circuito. Baja el de ese enchufe, normalmente con etiqueta 'Enchufes' o el nombre de la habitación. Si no hay etiquetas, baja el interruptor general, el más grande de todos, y toda la casa se quedará sin luz. Pega un papel con celo que ponga 'NO SUBIR, hay alguien trabajando'.", S.cuadro),
  P("Comprueba que el comprobador funciona", "Antes de fiarte de él, acércalo al agujero de un enchufe de otra zona de la casa con corriente (uno que sepas que funciona, de un circuito que no hayas bajado). Debe pitar o encender una luz. Si no avisa ahí, sus pilas están gastadas o está roto y no te vale para nada."),
  P("Comprueba que el enchufe viejo no tiene corriente", "Acerca la punta del comprobador a los dos agujeros del enchufe: no debe pitar ni encenderse. Si avisa, el automático que bajaste no es el correcto. Vuelve al cuadro, prueba con otro o baja el general, y repite hasta que no avise."),
  P("Quita la tapa", "Caso A: si ves un tornillo en el centro de la tapa, gíralo a la izquierda con el destornillador que encaje bien, guarda el tornillo en un vaso y tira de la tapa hacia ti.\nCaso B: si no hay tornillo, busca una ranura pequeña en el borde inferior o en un lateral. Mete la punta de un destornillador plano unos 3 mm, pon un cartón o trapo debajo para no marcar la pared y haz palanca suave hacia fuera, como al abrir una lata. Se suelta con un clic. Si no cede, prueba en otro lado: nunca hagas fuerza brusca."),
  P("Quita el marco y localiza los tornillos del mecanismo", "El marco es el rectángulo que rodea el enchufe. En muchas series se retira con la mano al tirar hacia ti; en otras sale al aflojar los tornillos del mecanismo. Debajo verás la base del enchufe (el mecanismo): una pieza de plástico con dos tornillos largos de cabeza ranurada, uno arriba y otro abajo, que lo sujetan a la caja de la pared. Estos son los de fijación."),
  P("Saca el mecanismo de la pared", "Afloja cada tornillo de fijación girando a la izquierda hasta que salga del orificio de la caja; sin dejarlo caer dentro. Agarra con los dedos las dos orejetas metálicas (arriba y abajo) y tira recto hacia ti, despacio. Si no sale, aprietan unas garras laterales: afloja los tornillos otro par de vueltas. Saca unos 5 cm y no más, los cables son rígidos y no deben estirarse. Pega el mecanismo a la pared con un trozo de cinta de carrocero para que no cuelgue de los cables."),
  P("Haz fotos antes de soltar nada", "Haz dos fotos desde ángulos distintos donde se vea cada cable y el borne al que va (borne es el agujero con tornillo donde se aprieta el cobre). Identifica los cables: el verde-amarillo es la tierra; el azul es el neutro; el marrón, negro o gris es la fase, que da la corriente. En instalaciones antiguas los colores pueden variar: guíate por la posición en la foto, no solo por el color. Si hay dos cables en un mismo borne, anótalo: es una derivación hacia otro enchufe.", S.cables),
  P("Revisa el estado de cada cable", "El cobre de la punta debe verse brillante y rígido. Si está negro, verde, oxidado o quebradizo, o si la funda está agrietada o fundida, corta con los alicates unos 15 mm de la punta hasta ver cobre sano. Si no queda cable suficiente para trabajar (menos de 8 cm fuera de la pared), para y llama a un electricista."),
  P("Cambia los cables de uno en uno", "Suelta solo un cable, conéctalo al enchufe nuevo y luego sigue con el siguiente. Así nunca hay duda de dónde iba cada uno. Afloja el tornillo del borne unas 4 vueltas y saca el cable tirando recto, sin retorcerlo."),
  P("Pela 8-10 mm de cobre en cada cable", "Coloca el cable en la muesca del pelacables que corresponda a su grosor (1,5 o 2,5 mm²: viene escrito en el cable), cierra y tira hacia fuera: debe quedar cobre limpio de 8-10 mm. Si cortas hilos de cobre o ves muescas, repite desde más atrás. Si el cable es de hilos finos, retuérceselos con los dedos hacia la derecha para que formen una punta compacta.", DIB.pelado),
  P("Conecta cada cable a su borne", "Mira el enchufe nuevo: el borne de tierra lleva el símbolo de tierra (tres rayas descendentes) o está unido a los clips metálicos laterales; los otros dos están marcados con L (fase) y N (neutro) o sin marcar. Conecta el verde-amarillo a tierra; el marrón, negro o gris a L; y el azul a N. Si no están marcados, sigue la posición de la foto. En cada borne: afloja el tornillo, mete el cobre recto hasta el fondo, de modo que la funda de plástico toque la entrada del borne y no se vea cobre fuera, y aprieta el tornillo hasta que no gire más. Tira suavemente del cable: no debe moverse.", DIB.borne),
  P("Revisa todas las conexiones", "Comprueba que cada cable tiene su borne apretado, que no asoma cobre fuera de ninguno ni queda ningún hilo suelto, y que ningún cable toca otro borne. Compara con las fotos. Si tienes la menor duda, para y llama a un electricista."),
  P("Ordena los cables y vuelve a meter el mecanismo", "Dobla los cables en forma de 'Z' o de 'S' hacia atrás, sin dobleces bruscos ni pegados al borne, y mételos primero en la caja. Alinea el mecanismo con la caja de modo que los orificios de las orejetas coincidan con las roscas de la caja, y empuja con la palma plana. Atornilla los dos tornillos alternando entre uno y otro, sin apretar a tope. Comprueba a ojo que el enchufe queda recto; si no, aflójalos y corrige usando los agujeros alargados de las orejetas."),
  P("Coloca el marco y la tapa", "Encaja el marco sobre el mecanismo y luego la tapa, alineando bien. Presiona en los cuatro lados hasta oír un clic. Si tu modelo lleva tornillo central, atorníllalo con suavidad."),
  P("Sube la corriente y prueba", "Quita el papel del cuadro y sube el automático (y luego el general si lo bajaste). Acerca el comprobador al enchufe: ahora sí debe pitar. Conecta una lámpara o el cargador del móvil. Si el automático salta al subirlo, bájalo y repite los pasos 10-12: hay un cobre sin cubrir o un cable en el borne equivocado.")
 ],
 problemas: [
  Q("Salta el automático al subirlo", "Hay un cortocircuito. Baja la corriente, abre y revisa que el cobre esté metido hasta el fondo, que la funda llegue a la entrada del borne y que ningún cobre toque la caja o un borne vecino."),
  Q("El enchufe no da corriente", "Algún cable quedó flojo o saltó el diferencial (el interruptor con botón de test en el cuadro). Rearma el diferencial y revisa que los tres cables están apretados."),
  Q("No consigo sacar el mecanismo", "Quedan garras laterales apretando la caja. Afloja un par de vueltas más los tornillos de fijación y tira recto de las orejetas."),
  Q("El mecanismo no cabe en la caja", "Los cables están mal plegados o la caja es poco profunda. Sácalo, ordénalos en 'Z' sin dobleces bruscos y, si no cabe, compra un mecanismo de caja corta."),
  Q("Los cables no son del color esperado", "No te fíes solo del color. Haz fotos, sigue la posición original y, si no estás seguro de cuál es cuál, llama a un electricista."),
  Q("Se calienta o huele a quemado tras un rato", "Baja ya la corriente. Una conexión floja produce calor. Revisa los bornes; si persiste, llama a un electricista.")
 ]
},
{
 id: "cambiar-interruptor", titulo: "Cambiar un interruptor de la luz", categoria: "Enchufes y luz",
 resumen: "Cómo identificar si es simple o conmutador, soltar los cables sin equivocarte y volver a conectarlo.",
 tiempo: "30-45 min", dificultad: "Fácil (con cuidado)",
 antes: [
  "Cuenta los cables que llegan al interruptor. Dos cables = interruptor simple: da igual cuál va a cada borne. Tres cables = conmutador (lo usan dos interruptores para una misma luz): aquí SÍ importa cuál va a cada borne.",
  "Si el interruptor está quemado, derretido o huele a quemado, no lo cambies tú: llama a un electricista.",
  "Si ves cables de tela o de aluminio, para y llama a un profesional."],
 herramientas: ["Comprobador de tensión sin contacto", "Destornilladores plano y de estrella", "Pelacables", "Alicates de corte", "Cinta de carrocero y rotulador", "Linterna frontal"],
 compra: [
  "Interruptor unipolar de 10 A (si había dos cables) o conmutador de 10 A (si había tres).",
  "Misma serie y color que los marcos de la casa.",
  "Un comprobador de tensión sin contacto."],
 seguridad: "Baja el automático de alumbrado antes de abrir. Después comprueba con el comprobador, con el interruptor en las dos posiciones, que no hay tensión.",
 pasos: [
  P("Baja el automático de la luz", "En el cuadro eléctrico, baja el automático etiquetado 'Alumbrado' o 'Luces'. Si no hay etiquetas, baja el general. Pega un papel con celo que ponga 'NO SUBIR'.", S.cuadro),
  P("Comprueba que el comprobador funciona", "Acércalo a un enchufe de otra zona con corriente: debe pitar o encender una luz."),
  P("Quita la tapa y el marco", "Mira si hay tornillo central en la tecla o en la tapa. Si lo hay, quítalo. Si no, haz palanca suave con un destornillador plano en la ranura del borde, con un cartón debajo para no marcar la pared. Retira después el marco."),
  P("Comprueba que no hay tensión", "Acerca el comprobador al interruptor con la palanca en la posición ON y luego en OFF, y después a los cables que se ven. No debe avisar nunca."),
  P("Desatornilla y saca el mecanismo", "Quita los dos tornillos largos de fijación, uno arriba y otro abajo, y tira de las orejetas metálicas recto hacia ti hasta sacar unos 5 cm. Pega el mecanismo a la pared con cinta para que no cuelgue de los cables."),
  P("Marca los cables antes de soltarlos", "Cuenta los cables y haz una foto. Si hay tres cables, es un conmutador: un borne es el común (a veces marcado con 'C' o con un punto negro) y los otros dos son los viajeros. Pega un trozo de cinta de carrocero en el cable que va al borne común y escribe 'C'."),
  P("Suelta y prepara los cables", "Afloja el tornillo de cada borne unas 4 vueltas y saca el cable. Revisa el cobre: debe estar brillante. Si no, corta 15 mm y pela 8-10 mm con el pelacables.", DIB.pelado),
  P("Conecta los cables al interruptor nuevo", "Interruptor simple: cada cable va a un borne, da igual cuál. Conmutador: el cable con 'C' va al borne común del nuevo, y los otros dos a los dos restantes, igual que en la foto. En cada borne: afloja el tornillo, mete el cobre recto hasta el fondo con la funda tocando la entrada, y aprieta. Tira suavemente de cada cable.", DIB.borne),
  P("Revisa y vuelve a montar", "Comprueba que no asoma cobre y que todo coincide con la foto. Dobla los cables en 'Z', mete el mecanismo, atornilla alternando los dos tornillos y comprueba que queda recto. Coloca el marco y la tecla."),
  P("Sube la corriente y prueba", "Sube el automático. Acciona el interruptor: la luz debe encender y apagar. Si es conmutador, prueba también desde el otro interruptor en las dos posiciones.")
 ],
 problemas: [
  Q("La luz no enciende", "Revisa la bombilla y los bornes. Si es conmutador, puede que el cable común esté en el borne equivocado."),
  Q("Salta el automático al subirlo", "Hay un cortocircuito: algún cobre sin cubrir toca otro borne. Baja y revisa."),
  Q("Con un conmutador, solo funciona desde un interruptor", "Seguramente intercambiaste el cable común con uno de los viajeros. Comprueba con la foto y la cinta."),
  Q("El interruptor hace ruido o chispa", "Baja la corriente y revisa los bornes. Si persiste, llama a un electricista.")
 ]
},
{
 id: "desatascar-fregadero", titulo: "Desatascar un fregadero", categoria: "Fontanería",
 resumen: "Desde la ventosa hasta abrir el sifón y usar un muelle, con todo lo que hay que mirar.",
 tiempo: "20-60 min", dificultad: "Fácil-Media",
 antes: [
  "Mira si se atasca solo ese fregadero (el atasco está en el sifón o el tubo) o también lo hacen la ducha o el váter (el problema está en el bajante general: avisa al administrador o a un fontanero).",
  "Si tiene dos senos (dos pilas), tapa uno con un trapo húmedo antes de usar la ventosa.",
  "No mezcles productos químicos entre sí. No uses agua hirviendo en tuberías de plástico: puede deformarlas; basta con agua caliente del grifo."],
 herramientas: ["Desatascador de ventosa", "Cubo y trapos", "Guantes", "Cepillo de botellas", "Muelle desatascador de 3-5 m (si hace falta)", "Linterna"],
 compra: [
  "Ventosa de goma de campana plana (para fregaderos). La de campana con reborde es para váter.",
  "Muelle desatascador manual de 3-5 m, unos 10-15 €.",
  "Bicarbonato y vinagre blanco."],
 seguridad: "Usa guantes. Las tuberías pueden tener agua con grasa y restos: no te salpiques la cara.",
 pasos: [
  P("Prepara la zona", "Retira lo que haya debajo del fregadero. Coloca un cubo y trapos. Si el fregadero tiene rebosadero (agujero pequeño cerca del borde), tápalo con un trapo mojado. Si tiene dos senos, tapa el otro desagüe."),
  P("Pon un poco de agua", "La ventosa funciona con 3-4 cm de agua sobre el desagüe, no seco ni lleno. Quita la rejilla del desagüe si se puede."),
  P("Usa la ventosa", "Coloca la ventosa centrada sobre el desagüe, sellando bien contra el fondo. Empuja y tira 15-20 veces con movimientos rápidos, sin despegarla. Debes sentir resistencia al tirar. Levántala de golpe al final: si el agua baja con ruido, se ha movido el atasco."),
  P("Si no baja, abre el sifón", "Coloca el cubo bajo el sifón, el tubo con forma de U bajo el desagüe. Antes de tocar nada, haz una foto. Desenrosca a mano las dos tuercas grandes, girando a la izquierda, sujetando el tubo con la otra mano. Cae agua sucia: déjala caer al cubo.", DIB.sifon),
  P("Limpia el sifón", "Saca el sifón. Con guantes, retira el pelo y la grasa. Pasa un cepillo de botellas por dentro y aclara con agua. Mira si las juntas de goma (anillos cónicos) están agrietadas: si es así, cámbialas por otras iguales."),
  P("Mira el tubo de la pared", "Con la linterna, mira hacia el tubo de pared. Si ves restos, limpia con el cepillo o con un trapo en la punta de un listón."),
  P("Vuelve a montar el sifón", "Coloca cada junta y cada tuerca igual que en la foto. Atornilla las tuercas a mano hasta que queden firmes. Abre el grifo y comprueba que no hay fugas con un papel de cocina debajo."),
  P("Si sigue atascado, usa el muelle", "Introduce la punta del muelle en el tubo de la pared. Empuja y gira la manivela mientras avanzas. Cuando notes resistencia, gira y avanza y retrocede varias veces para romper el atasco. Saca el muelle poco a poco con un trapo y limpia. Echa agua caliente del grifo para arrastrar los restos.")
 ],
 problemas: [
  Q("La ventosa no hace presión", "Falta agua o no sella bien. Pon más agua, sécala y ponla recta sobre el desagüe."),
  Q("Gotea por las uniones del sifón", "Falta junta o está mal puesta. Desmonta, coloca la junta igual que estaba y aprieta a mano."),
  Q("Huele mal aunque desatasqué", "Limpia el sifón por dentro y echa agua caliente con un chorrito de lavavajillas."),
  Q("Se vuelve a atascar en pocos días", "Hay grasa acumulada más adentro: usa el muelle. Evita tirar aceite al fregadero y usa una rejilla.")
 ]
}
];
NIVEL_MAX.forEach(n => { const i = TUTORIALES.findIndex(t => t.id === n.id); if (i >= 0) TUTORIALES[i] = n; else TUTORIALES.push(n); });
