/* Versiones en profundidad. Sustituyen a las simples con el mismo id. */
const P = (texto, detalle, svg) => ({ texto, detalle, svg });
const Q = (fallo, solucion) => ({ fallo, solucion });
const PROFUNDOS = [
{
 id: "cambiar-enchufe", titulo: "Cambiar un enchufe", categoria: "Enchufes y luz",
 resumen: "Sustituir una base de enchufe rota o floja, paso a paso y con todas las comprobaciones de seguridad.",
 tiempo: "30-45 min", dificultad: "Fácil (con cuidado)",
 antes: [
  "Si el enchufe está quemado, derretido, huele a quemado o chisporrotea, NO lo cambies tú: puede haber un cable dañado detrás. Llama a un electricista.",
  "Si al abrir ves cables con funda de tela, cobre negro o cables de aluminio (gris plateado), para: son instalaciones muy antiguas y conviene un profesional.",
  "Trabaja con buena luz. Mejor con una linterna frontal para tener las dos manos libres."],
 herramientas: ["Comprobador de tensión sin contacto (el de bolígrafo)", "Destornilladores plano y de estrella", "Alicates con pelacables", "Linterna", "Un papel y celo para avisar en el cuadro"],
 compra: [
  "Base de enchufe empotrable con toma de tierra (tipo Schuko, 16 A, 250 V). Un enchufe sin tierra solo si el viejo tampoco la tenía.",
  "Misma serie y color que tus marcos (Simon, Niessen, BJC, Legrand…). Si no, cambia también el marco y la tapa.",
  "Comprobador de tensión sin contacto: unos 5-10 €. No lo sustituyas por 'a ojo'."],
 seguridad: "Baja el automático ANTES de abrir y comprueba que no hay tensión con el comprobador. Si en algún momento dudas, para y llama a un electricista. No toques nunca dos cables a la vez.",
 pasos: [
  P("Encuentra el automático correcto y bájalo", "Abre el cuadro eléctrico (suele estar junto a la puerta de entrada). Verás interruptores pequeños con etiquetas: son los automáticos de cada circuito. Baja el de ese enchufe (suele llamarse 'Enchufes' o llevar el nombre de la habitación). Si no hay etiquetas, baja el interruptor general, el más grande, y toda la casa se queda sin luz. Pega un papel que diga 'NO SUBIR, hay alguien trabajando'.", S.cuadro),
  P("Prueba el comprobador en un enchufe con corriente", "Antes de fiarte de él, acércalo a un enchufe de otra zona que sepas que tiene corriente: debe pitar o encenderse. Así sabes que funciona y que tiene pilas. Si no avisa ahí, no te sirve para comprobar nada."),
  P("Comprueba que el enchufe viejo no tiene corriente", "Acerca la punta del comprobador a los dos agujeros del enchufe. No debe pitar ni encenderse. Si lo hace, el automático que bajaste no era el correcto: vuelve al cuadro y busca otro o baja el general."),
  P("Quita la tapa y saca el mecanismo", "La tapa suele ir con un tornillo central o se saca haciendo palanca suave con un destornillador plano en el borde. Debajo verás el mecanismo sujeto con dos tornillos (arriba y abajo). Quítalos y tira de él hacia ti despacio: los cables tienen 3-5 cm de margen, no los estires."),
  P("Haz una foto de los cables antes de tocarlos", "En un enchufe normal hay 3 cables: marrón (o negro o gris) es la fase, que da la corriente; azul es el neutro; verde-amarillo es la tierra. Cada uno va a un borne, que es el agujero con tornillo donde se aprieta el cobre. La foto es tu mapa para no equivocarte.", S.cables),
  P("Suelta los cables y mira el cobre", "Afloja el tornillo de cada borne girando a la izquierda y saca el cable. El cobre pelado debe verse brillante, rígido y de unos 8-10 mm de largo. Si está negro, verde o se parte, córtalo con los alicates y pela 10 mm nuevos con el pelacables sin cortar los hilos de cobre."),
  P("Conecta los cables al enchufe nuevo", "La tierra (verde-amarillo) va al borne con el símbolo de tierra o a las pinzas laterales; la fase y el neutro van a los otros dos bornes, da igual en cuál en un enchufe de pared. Mete el cobre hasta el fondo, aprieta fuerte y tira suavemente de cada cable: si se mueve, no está bien. No debe asomar cobre fuera del borne."),
  P("Guarda los cables y fija el mecanismo", "Dobla los cables en forma de 'Z' hacia atrás, sin dobleces bruscos, y mete el mecanismo en la caja. Atornilla los dos tornillos (o las garras laterales si tu modelo las tiene) hasta que no se mueva. Pon el marco y la tapa."),
  P("Sube la corriente y prueba", "Quita el papel del cuadro y sube el automático (y luego el general si lo bajaste). Prueba con una lámpara o el cargador del móvil. Si el automático salta al subirlo, bájalo y vuelve a abrir: algún cobre sin cubrir toca otro borne o la caja.")
 ],
 problemas: [
  Q("Salta el automático al subirlo", "Hay un cortocircuito: normalmente un trozo de cobre sin cubrir toca otro borne o la caja. Baja la corriente, abre y revisa que el cobre esté metido hasta el fondo y que la funda de plástico llegue hasta el borne."),
  Q("El enchufe no da corriente", "Algún cable quedó flojo o saltó el diferencial (el interruptor con botón de test en el cuadro). Rearma el diferencial y revisa que los tres cables están apretados."),
  Q("El mecanismo no cabe en la caja", "Los cables están mal plegados. Sácalo, ordénalos en 'Z' y, si la caja es poco profunda, compra un mecanismo de caja corta."),
  Q("Se calienta o huele a quemado tras un rato", "Baja ya la corriente. Una conexión floja produce calor. Revisa los bornes; si persiste, llama a un electricista.")
 ]
},
{
 id: "puerta-roza", titulo: "Arreglar una puerta que roza", categoria: "Puertas y carpintería",
 resumen: "Encuentra por qué roza y arréglalo: tornillos, bisagras o madera hinchada.",
 tiempo: "1-2 horas", dificultad: "Fácil-Media",
 antes: [
  "Fíjate DÓNDE roza: arriba en el lado del picaporte, abajo, o en el lado de las bisagras. Cada sitio tiene una causa distinta.",
  "Si roza siempre, casi siempre son tornillos o bisagras flojas. Si roza más en verano o tras lluvia, es la madera hinchada por humedad.",
  "El hueco normal entre puerta y marco es de 2-3 mm en los lados y arriba."],
 herramientas: ["Destornillador", "Martillo y clavo grande o destornillador fino (para sacar pasadores)", "Lápiz y regla", "Taco de lija con lija 80 y 120", "Cepillo de carpintero (opcional)", "Mascarilla y gafas", "Dos sillas o caballetes con mantas", "Alguien que te ayude"],
 compra: [
  "Palillos de madera y cola blanca, para tornillos que giran en vacío.",
  "Tornillos de 60-70 mm del mismo grosor, para la bisagra de arriba.",
  "Barniz o pintura del mismo acabado que la puerta, para sellar lo que lijes."],
 seguridad: "Usa mascarilla y gafas al lijar. La puerta pesa entre 15 y 30 kg: no la quites sin ayuda y ponte guantes.",
 pasos: [
  P("Localiza dónde roza", "Cierra la puerta despacio y pasa un folio doblado por el hueco: donde se atasca, roza. Para verlo mejor, frota la puerta con tiza o lápiz en el borde, ciérrala y ábrela: la marca se pasa al marco justo donde se tocan.", S.puerta),
  P("Comprueba si la puerta se ha caído", "Abre la puerta unos 45 grados, agárrala por el borde del lado del picaporte y levántala suavemente. Si se mueve arriba y abajo o se ve juego en las bisagras, es que está colgando por tornillos flojos."),
  P("Aprieta todos los tornillos de las bisagras", "Hazlo con un destornillador que encaje bien (si se redondea la cabeza, cambia de destornillador). Los de la bisagra de arriba son los más importantes: sostienen casi todo el peso."),
  P("Si un tornillo gira en vacío, rellena el agujero", "Saca el tornillo. Moja 2 o 3 palillos en cola blanca, mételos en el agujero, corta lo que sobresalga y espera 20 minutos. Después atornilla de nuevo: agarrará como nuevo."),
  P("Pon un tornillo largo en la bisagra de arriba", "Cambia el tornillo central de la bisagra de arriba por uno de 60-70 mm: atraviesa el marco y se agarra a la estructura de la pared, tirando de la puerta hacia arriba. Muchas veces con esto se arregla el roce sin lijar nada."),
  P("Prueba y decide el siguiente paso", "Abre y cierra. Si roza en el lado de las bisagras, pon un cartón fino bajo la bisagra para separarla. Si aún roza arriba o en el lado del picaporte, hay que rebajar la madera: sigue con el paso siguiente."),
  P("Quita la puerta", "Pon una cuña bajo la puerta. Con el clavo y el martillo, golpea cada pasador desde abajo hacia arriba hasta sacarlo. Empieza por la bisagra de arriba y deja la de abajo para el final, mientras alguien sujeta la puerta. Apóyala sobre dos sillas con mantas, con el lado que roza hacia arriba."),
  P("Marca y rebaja solo 2-3 mm", "Marca con lápiz la zona que roza. Lija con el taco y lija de grano 80 siempre en el sentido de la veta, con pasadas largas. En los cantos de arriba y abajo, lija desde las esquinas hacia el centro para no astillar. Mide cada pocas pasadas: no quites más de 3 mm."),
  P("Alisa y sella todo lo lijado", "Pasa lija de 120 y quita el polvo con un trapo. Da barniz o pintura en las zonas lijadas y también en los cantos de arriba y abajo: si están sin pintar, absorben humedad y vuelven a hincharse."),
  P("Vuelve a colocar la puerta y comprueba", "Encaja primero la bisagra de abajo y luego la de arriba, golpeando los pasadores desde arriba. Cierra la puerta: el hueco debe ser parejo, de 2-3 mm. Espera 24 horas antes de usarla para que seque la pintura.")
 ],
 problemas: [
  Q("Roza arriba aunque he apretado todo", "La puerta se ha deformado o hinchado: toca rebajar 1-2 mm arriba y sellar con barniz."),
  Q("Roza abajo por el lado del picaporte", "La puerta cuelga: bisagra de arriba floja o hundida. Pon tornillo largo arriba y, si sigue, un cartón fino bajo la bisagra de abajo."),
  Q("Me he pasado y queda un hueco grande", "Pon burlete adhesivo en el marco; si es de más de 5 mm, pega con cola un listón fino de madera en el canto."),
  Q("El marco se mueve al empujarlo", "Está suelto: hay que fijarlo con tornillos largos de 80-100 mm atravesando el cerco hasta la obra. Pide ayuda a un carpintero si dudas.")
 ]
},
{
 id: "grifo-gotea", titulo: "Arreglar un grifo monomando que gotea", categoria: "Fontanería",
 resumen: "Cambiar el cartucho de un grifo de un solo mando: diagnóstico, compra de la pieza y montaje.",
 tiempo: "30-60 min", dificultad: "Fácil-Media",
 antes: [
  "Mira DÓNDE gotea: por el pico (la salida del agua) = cartucho gastado o cal. Por la base del grifo o por el mando = junta tórica. Por los tubos de debajo = conexión floja.",
  "Esta guía es para el monomando: un solo mando que sube, baja y gira. Si tienes dos mandos separados (agua fría y caliente), lleva una goma (zapata) o cierre cerámico que se cambia de forma parecida.",
  "Ten a mano las llaves de paso: bajo el lavabo hay dos llaves pequeñas, una para el agua fría y otra para la caliente."],
 herramientas: ["Llave inglesa", "Llave allen de 3 o 4 mm", "Destornillador", "Cúter", "Trapo", "Alicates", "Cepillo de dientes viejo"],
 compra: [
  "Cartucho de 35 mm (el más habitual en lavabo y cocina) o de 40 mm. Lo más seguro: saca el tuyo y llévalo a la tienda.",
  "Grasa de silicona (tubito pequeño) para las gomas.",
  "Vinagre blanco para quitar la cal."],
 seguridad: "Cierra la llave de paso antes de abrir el grifo. Si bajo el lavabo no hay llaves, cierra la llave general de la casa.",
 pasos: [
  P("Cierra el agua y vacía el grifo", "Cierra las dos llaves bajo el lavabo girándolas un cuarto de vuelta hasta que la ranura quede cruzada al tubo. Abre el grifo en fría y caliente: deja de salir agua en unos segundos. Si no hay llaves, cierra la general.", DIB.llave),
  P("Protege el lavabo", "Pon un tapón o trapo en el desagüe para que no caiga ningún tornillo y una toalla en el fondo para no rayar el esmalte."),
  P("Quita el mando", "Busca el tapón pequeño del mando (rojo/azul o con la letra C/H). Levántalo con la punta de un cúter. Debajo hay un tornillo: aflójalo con la llave allen o un destornillador unas 3 vueltas y tira del mando hacia arriba. Si no hay tapón, mira si el tornillo está en un lateral o detrás."),
  P("Quita el capuchón y la tuerca", "Debajo hay una pieza cromada que se desenrosca a mano girando a la izquierda. Debajo verás una tuerca grande de latón. Aflójala con la llave inglesa envuelta en trapo para no rayarla. Si está pegada por la cal, echa vinagre y espera 15 minutos."),
  P("Saca el cartucho y anota cómo es", "Tira recto hacia arriba con los dedos o unos alicates. Fíjate en las muescas o pivotes de la base: son la guía para colocarlo. Haz una foto, mide el diámetro (35 o 40 mm) y llévalo a la tienda.", DIB.grifo),
  P("Limpia el asiento donde va el cartucho", "Con un trapo y vinagre, quita la cal de las paredes y del fondo. Pasa el cepillo suavemente. Mira si hay una junta tórica (goma redonda) gastada o partida: si es así, cámbiala también."),
  P("Engrasa y coloca el cartucho nuevo", "Unta las gomas con una gota de grasa de silicona. Alinea las muescas y deja que entre solo: no hace falta empujar con fuerza. Si no entra recto, sácalo y mira cómo debe encajar."),
  P("Monta en orden inverso", "Tuerca primero: a mano y luego solo un cuarto de vuelta con la llave inglesa (apretar de más puede rajar el cuerpo del grifo). Capuchón, mando, tornillo y tapón."),
  P("Abre el agua y comprueba", "Abre las llaves de escuadra poco a poco. Con el grifo abierto deja salir aire unos 10 segundos y ciérralo. Seca el pico y la base con papel de cocina y observa 10 minutos: no debe aparecer ninguna gota.")
 ],
 problemas: [
  Q("Sigue goteando por el pico", "El cartucho no ha encajado del todo o queda cal en el asiento. Sácalo, limpia bien y vuelve a ponerlo alineando las muescas. Si sigue, el cartucho puede ser de mala calidad."),
  Q("Gotea por la base al mover el mando", "Cambia la junta tórica del cuerpo del grifo (la goma redonda grande). Llévala a la tienda para comprar la misma medida."),
  Q("Sale agua por el mando al abrir", "La tuerca no está apretada o falta la junta del cartucho. Desmonta y revisa."),
  Q("La tuerca no se afloja", "Echa vinagre caliente y espera 20 minutos. Da unos golpecitos suaves con el mango del destornillador y vuelve a probar con la llave.")
 ]
},
{
 id: "cisterna-pierde", titulo: "Arreglar la cisterna que pierde agua", categoria: "Fontanería",
 resumen: "Diagnostica de dónde se escapa el agua y arregla el flotador o la válvula de descarga.",
 tiempo: "45-90 min", dificultad: "Fácil-Media",
 antes: [
  "Hay dos fugas distintas. (a) Oyes agua correr o la cisterna se rellena sola cada poco: fuga silenciosa por la válvula de descarga. (b) El agua sale por el tubo central: nivel demasiado alto por el flotador.",
  "Haz el test del colorante: echa unas 10 gotas de colorante alimentario en la cisterna, no tires de la cadena durante 20 minutos y mira la taza. Si aparece color, la fuga es la válvula de descarga. Si no, es el flotador.",
  "Cierra la tapa del váter y pon un trapo para no hacer ruido de loza al mover cosas."],
 herramientas: ["Destornillador", "Esponja y cubo", "Toalla", "Guantes", "Vinagre blanco", "Estropajo suave"],
 compra: [
  "Mecanismo de descarga universal (kit completo): mide la altura desde el fondo de la cisterna hasta el borde de arriba.",
  "O solo la junta/campana del fondo si tu modelo se encuentra (llévate la vieja a la tienda).",
  "Mecanismo de llenado con flotador (universal, unos 6-12 €), si el problema es el nivel."],
 seguridad: "Cierra la llave de paso del váter antes de abrir la cisterna. La tapa es de loza y se rompe fácilmente: déjala sobre una toalla.",
 pasos: [
  P("Cierra el agua y vacía la cisterna", "Busca la llave de paso del váter, en la pared o suelo junto a la taza, y gírala hacia la derecha hasta que pare. Tira de la cadena. Seca el fondo con una esponja.", DIB.llave),
  P("Quita la tapa con cuidado", "Si hay un pulsador, gira el anillo un cuarto de vuelta o tira de él hacia arriba según el modelo. Apoya la tapa sobre una toalla, nunca en el suelo duro."),
  P("Mira el nivel de agua", "Con la cisterna llena, el agua debe quedar unos 2-3 cm por debajo del borde del tubo del rebosadero (el tubo central). Si llega al borde, rebosa por ahí."),
  P("Ajusta el flotador", "Si es de brazo con bola, dobla suavemente la varilla hacia abajo. Si lleva tornillo, gíralo para bajar el nivel. Si es de cilindro, sube o baja el clip. Abre la llave y comprueba que el agua para antes del borde."),
  P("Revisa la junta de la válvula de descarga", "Pasa el dedo por la goma del fondo: si está dura, con cal, seca o con ranuras, ahí pierde. Límpiala con estropajo suave y vinagre. Si no se arregla, hay que cambiarla."),
  P("Cambia la válvula de descarga si hace falta", "Con un cubo debajo, desenrosca a mano la tuerca de plástico de debajo y saca la válvula. Monta la nueva ajustando la altura según el kit, de forma que el tubo de rebosadero quede 2-3 cm por debajo del borde de la cisterna."),
  P("Abre el agua y prueba", "Abre la llave poco a poco. Haz 3 descargas y deja la cisterna llenarse. Repite el test del colorante 20 minutos: la taza debe quedar sin color.")
 ],
 problemas: [
  Q("Sigue sonando el agua al terminar", "El flotador no cierra la entrada. Cambia la goma del mecanismo de llenado o el mecanismo completo."),
  Q("La descarga queda corta o se atasca", "La altura de la válvula está mal o la cadena tiene demasiada tensión. Debe haber 1-2 cm de holgura."),
  Q("Gotea por debajo, entre cisterna y taza", "Falla la junta entre ambas y hay que desmontar la cisterna. Si no te ves, llama a un fontanero.")
 ]
},
{
 id: "desbrozar-jardin", titulo: "Desbrozar el jardín", categoria: "Jardinería",
 resumen: "Cómo usar una desbrozadora con seguridad y buenos resultados.",
 tiempo: "1-3 horas", dificultad: "Media",
 antes: [
  "Elige el accesorio: hilo de nailon para hierba y maleza fina; cuchilla metálica para zarzas y matorral. Si dudas, empieza con hilo.",
  "Hazlo con la hierba seca, nunca mojada: mojada se pega y atasca. Lo mejor es por la mañana, cuando se ha evaporado el rocío.",
  "Si hay vallas, piedras o árboles jóvenes, usa protección y deja 30 cm de margen."],
 herramientas: ["Desbrozadora (eléctrica o de gasolina) con arnés", "Gafas o pantalla facial", "Botas con puntera", "Pantalón largo grueso", "Guantes", "Orejeras", "Rastrillo y sacos"],
 compra: [
  "Hilo de nailon del grosor que marque el manual (normalmente 2,4-3 mm).",
  "Gasolina con mezcla 2T si es de gasolina, en la proporción del manual (25:1 o 50:1).",
  "Cinta para marcar árboles jóvenes y plantas a proteger."],
 seguridad: "Usa siempre gafas, botas, pantalón largo, guantes y orejeras. Mantén a niños y animales a más de 15 metros. Apaga y espera a que pare del todo antes de limpiar el cabezal.",
 pasos: [
  P("Prepara la zona", "Camina por todo el terreno y retira piedras, ramas, alambres, mangueras y juguetes. Todo lo que no veas puede salir disparado a gran velocidad. Marca con cinta los árboles jóvenes."),
  P("Equípate bien", "Gafas o pantalla, orejeras, botas, pantalón largo grueso y guantes. No uses sandalias ni pantalón corto."),
  P("Ajusta arnés y altura", "Cuelga la máquina del arnés y regula para que el cabezal quede paralelo al suelo, a unos 5-10 cm sin que tengas que forzar la espalda."),
  P("Comprueba el hilo", "El hilo debe sobresalir unos 12-15 cm de cada lado. Si es más corto, corta peor. Mira que no esté enredado ni deshilachado."),
  P("Arranca la máquina", "En suelo llano y con el cabezal separado del suelo. Sigue el manual: en las de gasolina normalmente se pulsa el cebador 5-6 veces; en las eléctricas, solo el gatillo. Sujétala con las dos manos."),
  P("Corta con barridos suaves", "Inclina ligeramente el cabezal y mueve en arco, de lado a lado, sin hundir el hilo en el suelo. Observa hacia dónde salen los restos y trabaja para que no te salpiquen ni vayan hacia gente o ventanas.", S.desbroz),
  P("Si la hierba es muy alta, hazlo en dos pasadas", "Primero corta a media altura, luego baja al nivel que quieras. Así no se atasca el cabezal."),
  P("Cuida bordes y árboles", "Cerca de vallas usa solo la punta del hilo. No cortes pegado a troncos de árboles jóvenes: la corteza se daña y el árbol puede morir. Usa un protector o corta a mano alrededor."),
  P("Limpia y guarda", "Apaga y espera a que pare. Quita hierba del cabezal y de la protección, vacía el depósito si la vas a guardar mucho tiempo y guárdala seca.")
 ],
 problemas: [
  Q("El hilo no sale o se acaba rápido", "Sube el cabezal unos centímetros y no cortes pegado al suelo o a piedras. Si no sale, golpea suavemente el cabezal contra el suelo o saca más hilo a mano con la máquina apagada."),
  Q("Se atasca con hierba enredada", "Apaga, espera a que pare del todo y quita la hierba con guantes. Evita cortar hierba mojada."),
  Q("No arranca (gasolina)", "Mira que tenga combustible fresco, la mezcla correcta y que la bujía esté limpia. Si no sale, repite el cebado."),
  Q("Vibra mucho", "Hilo desigual: corta los dos extremos a la misma longitud, o el cabezal está dañado.")
 ]
}
];
PROFUNDOS.forEach(n => { const i = TUTORIALES.findIndex(t => t.id === n.id); if (i >= 0) TUTORIALES[i] = n; else TUTORIALES.push(n); });
