/* Lote en profundidad: bombilla, estantería, pintura y agujeros */
const LOTE_3 = [
{
 id: "cambiar-bombilla", titulo: "Cambiar una bombilla", categoria: "Enchufes y luz",
 resumen: "Elegir la bombilla exacta, cambiarla con seguridad y qué hacer si se rompe.",
 tiempo: "10 min", dificultad: "Muy fácil",
 antes: [
  "Mira el casquillo (la parte metálica que encaja) de la bombilla vieja: E27 es rosca gruesa, E14 es rosca fina, GU10 son dos pines gruesos con tope (foco empotrado), G9 y GU5.3 son dos pines finos.",
  "Mira lo que pone en el cristal o en la caja: voltaje (230 V o 12 V) y vatios máximos que admite la lámpara.",
  "Si la bombilla estaba encendida, espera 5-10 minutos: las halógenas pueden quemar."],
 herramientas: ["Escalera estable de tijera", "Trapo seco o guante fino", "Gafas de protección si es una bombilla antigua"],
 compra: [
  "Una bombilla con el mismo casquillo. Mejor LED: gasta la décima parte.",
  "Temperatura de color: 2700 K = luz cálida (salones, dormitorios); 4000 K = luz neutra (cocina, baños); 6500 K = luz fría (garajes, trabajo).",
  "Brillo: se mide en lúmenes. Una de 60 W antigua equivale a unos 800 lúmenes."],
 seguridad: "Apaga el interruptor y, si puedes, baja el automático. Sube a la escalera con tres puntos de apoyo (dos pies y una mano) y nunca al último peldaño.",
 pasos: [
  P("Apaga la luz y espera a que se enfríe", "Apaga el interruptor. Si la lámpara es de techo o tiene partes metálicas, baja además el automático del alumbrado en el cuadro. Espera 5-10 minutos si estaba encendida."),
  P("Coloca la escalera y sube con cuidado", "Abre la escalera por completo y comprueba que los seguros están puestos. Sitúala sobre suelo plano. Sube con una mano libre para agarrarte y mantén el cuerpo centrado.", DIB.escalera),
  P("Quita la bombilla vieja", "Rosca E27 o E14: sujétala con un trapo y gírala hacia la izquierda sin presionar demasiado. Foco GU10: empuja un poco hacia arriba y gira un cuarto de vuelta a la izquierda hasta que se suelte. Pines G9 o GU5.3: tira recto hacia abajo.", DIB.bombilla),
  P("Mira el portalámparas", "Comprueba que no está ennegrecido ni roto. Si el casquillo está sucio, límpialo con un trapo seco y no metas nunca los dedos ni metal."),
  P("Pon la nueva", "Rosca: gira a la derecha hasta que haga tope y no más (si fuerzas, se rompe). Foco GU10: encaja los pines, empuja hacia arriba y gira un cuarto de vuelta a la derecha hasta que haga clic. Pines finos: empuja recto hasta el fondo."),
  P("Sube la corriente y prueba", "Baja de la escalera, sube el automático si lo bajaste y enciende. Si es LED regulable, comprueba que el regulador funciona; si parpadea, la bombilla no es regulable o el regulador es antiguo.")
 ],
 problemas: [
  Q("La bombilla nueva no enciende", "Comprueba que no esté floja, que no sea de otro voltaje y que el automático esté subido. Prueba otra bombilla para descartar un defecto."),
  Q("Se ha roto dentro del casquillo", "Baja el automático. Con unos alicates de punta, agarra el borde del metal desde dentro y gira a la izquierda. Usa gafas y guantes."),
  Q("La LED parpadea o zumba", "Es incompatible con el regulador. Compra una LED marcada como regulable o quita el regulador."),
  Q("Se funden las bombillas muy rápido", "Puede haber exceso de tensión o calor en la lámpara. Usa bombillas de menos vatios o cambia la lámpara.")
 ]
},
{
 id: "colgar-estanteria", titulo: "Colgar una estantería o un cuadro", categoria: "Paredes y pintura",
 resumen: "Descubre qué pared tienes, elige taladro, broca y taco, y evita cables y tuberías.",
 tiempo: "45 min", dificultad: "Media",
 antes: [
  "Averigua qué pared tienes: golpea con los nudillos. Sonido sordo y duro = ladrillo macizo u hormigón; sonido hueco = ladrillo hueco o pladur (yeso laminado).",
  "Los cables y tuberías suelen ir en vertical y en horizontal desde enchufes, interruptores y cajas. No taladres a menos de 15 cm de ellos ni en línea recta encima o debajo.",
  "Calcula el peso de lo que vas a colgar y suma un 50 % de margen."],
 herramientas: ["Taladro con percusión (o sin ella para ladrillo hueco y pladur)", "Brocas del tamaño del taco", "Detector de cables y tuberías", "Nivel", "Lápiz", "Metro", "Destornillador", "Cinta de carrocero", "Aspiradora pequeña o un tubo para aspirar el polvo", "Martillo"],
 compra: [
  "Tacos de nailon de 6 mm de diámetro y 30-40 mm de largo para ladrillo o hormigón. Tornillos de 4-4,5 mm que quepan en el taco.",
  "Si es pladur: tacos metálicos de expansión o de paraguas (pregunta por 'tacos para pladur'), según el peso.",
  "Broca de widia para ladrillo, de hormigón para hormigón (con percusión), y de metal o madera para pladur."],
 seguridad: "Usa gafas y mascarilla. Comprueba con el detector que no hay cables ni tuberías antes de taladrar.",
 pasos: [
  P("Elige el sitio y marca la altura", "Marca con lápiz y comprueba con el nivel. Si cuelgas un estante, marca los puntos de los dos soportes o los agujeros de la pieza a la distancia exacta."),
  P("Busca cables y tuberías", "Pasa el detector por la zona en horizontal y en vertical. Marca con lápiz lo que detecte y cambia de sitio si hay algo."),
  P("Elige broca y modo de taladro", "La broca tiene que ser del mismo diámetro que el taco (un taco de 6 mm pide una broca de 6 mm). Hormigón o ladrillo macizo: usa percusión. Ladrillo hueco y pladur: sin percusión, para no romper el tabique."),
  P("Marca la profundidad en la broca", "Pega un trozo de cinta de carrocero en la broca a una distancia igual a la longitud del taco más 1 cm. Así sabrás cuándo parar."),
  P("Taladra", "Empieza despacio y apoya la broca recta, sin inclinar. Sube la velocidad cuando haya entrado. Cuando llegue a la cinta, para y saca la broca sin dejar de girar. Aspira el polvo del agujero."),
  P("Pon el taco", "Introduce el taco con la mano; si no entra, golpéalo con un martillo hasta que quede a ras de la pared. No debe sobresalir ni girar.", X.taco),
  P("Atornilla el soporte", "Coloca el soporte o el tornillo y atornilla. Si cuelgas un cuadro con tornillo, deja 3 mm fuera para colgar la anilla. Aprieta firme, sin pasarte."),
  P("Prueba antes de cargar", "Tira del soporte con la mano. Si se mueve, saca el tornillo y pon un taco más grande o más largo. Cuando aguante, coloca la estantería y ve cargando peso poco a poco.")
 ],
 problemas: [
  Q("El taco gira en el agujero", "El agujero es demasiado grande. Usa un taco más grueso o rellena con masilla de reparación, deja secar y repite."),
  Q("La pared se desmorona al taladrar", "Es ladrillo hueco o yeso blando: quita la percusión y usa tacos largos o de expansión."),
  Q("Es pladur y el tornillo no agarra", "Usa tacos metálicos para pladur o busca un perfil de madera detrás."),
  Q("He tocado un cable o una tubería", "Para, baja la corriente o cierra el agua y llama a un profesional. No sigas.")
 ]
},
{
 id: "pintar-pared", titulo: "Pintar una pared o una habitación", categoria: "Paredes y pintura",
 resumen: "Preparar bien, calcular la pintura, y pintar sin marcas ni rodillazos.",
 tiempo: "1 día", dificultad: "Fácil",
 antes: [
  "Calcula los metros cuadrados: perímetro de la habitación × altura, y resta puertas y ventanas. Un litro de pintura rinde unos 10-12 m² por mano y necesitas 2 manos.",
  "Mira el estado de la pared: si hay manchas de humedad, grasa o moho, no pintes encima sin tratar. Si hay agujeros, tápalos antes.",
  "Elige el tipo: pintura plástica mate para salones y dormitorios; satinada o lavable para cocinas y baños."],
 herramientas: ["Rodillo de 18-22 cm de pelo medio y mango", "Brocha de 5-7 cm", "Bandeja con rejilla", "Cinta de carrocero", "Plástico o sábanas para el suelo", "Espátula", "Lija fina", "Escalera", "Palo para mezclar"],
 compra: [
  "Pintura plástica para interior: 1 litro por cada 10 m² y por mano.",
  "Imprimación selladora si hay manchas o la pared es nueva.",
  "Rodillo de pelo medio (para paredes lisas) y brocha plana."],
 seguridad: "Ventila la habitación mientras pintas y mientras seca. Usa guantes y no pintes con la escalera en mal estado.",
 pasos: [
  P("Prepara la habitación", "Aparta los muebles o cúbrelos con plástico. Cubre el suelo. Quita enchufes y tapas de interruptores o protégelos con cinta."),
  P("Limpia y repara la pared", "Quita polvo y telarañas. Lava las zonas con grasa con agua y jabón neutro. Rasca la pintura suelta, tapa agujeros con masilla y lija cuando seque."),
  P("Protege marcos, rodapiés y esquinas", "Pega cinta de carrocero en el borde de marcos, rodapiés y techo. Presiona el borde con la uña para que no pase pintura."),
  P("Mezcla y prepara la pintura", "Remueve la pintura con el palo hasta que quede uniforme. Si el envase lo dice, diluye la primera mano con un 10 % de agua. Echa un poco en la bandeja."),
  P("Recorta bordes y esquinas con la brocha", "Pinta con la brocha una franja de 5-8 cm en esquinas y junto a la cinta. Hazlo antes de usar el rodillo, para que se unan las dos zonas aún húmedas."),
  P("Pinta con el rodillo", "Moja el rodillo, escúrrelo en la rejilla. Pinta una zona de 1 metro con movimientos en forma de W y luego repásala con pasadas rectas de arriba abajo. No presiones: deja que la pintura se reparta sola. Mantén siempre el borde húmedo.", DIB.pintura),
  P("Deja secar y da una segunda mano", "Espera el tiempo que indica el envase, normalmente 4-6 horas. Da la segunda mano igual que la primera."),
  P("Quita la cinta y limpia", "Retira la cinta antes de que la pintura se seque del todo, tirando despacio en ángulo. Limpia las herramientas con agua si la pintura es plástica.")
 ],
 problemas: [
  Q("Se ven marcas de rodillo o rayas", "Estás repasando con el borde seco o presionas demasiado. Pinta zonas pequeñas y mantén el borde húmedo."),
  Q("Se ven chorretones", "Hay demasiada pintura. Escurre el rodillo y alisa los chorretones mientras estén húmedos."),
  Q("Se nota el color de debajo", "Faltó una mano o la pared absorbía. Da una segunda mano o aplica imprimación."),
  Q("Salen burbujas o se despega", "La pared estaba sucia, húmeda o con polvo. Rasca, lija, deja secar y repinta.")
 ]
},
{
 id: "tapar-agujeros", titulo: "Tapar agujeros y grietas en la pared", categoria: "Paredes y pintura",
 resumen: "Cómo rellenar agujeros pequeños y medianos y grietas finas para que no se note.",
 tiempo: "1 hora + secado", dificultad: "Muy fácil",
 antes: [
  "Mira el tamaño: agujeros de clavos y tornillos (hasta 6 mm) y grietas finas se arreglan con masilla lista para usar. Agujeros de más de 2 cm necesitan yeso o un parche (mira la guía de pladur).",
  "Si la grieta es larga, ancha o reaparece, puede haber humedad o movimiento en la pared: consulta con un profesional.",
  "Si hay un taco dentro del agujero, sácalo con unos alicates o hunde el taco para que quede por debajo del nivel de la pared."],
 herramientas: ["Espátula flexible de 5-8 cm", "Cúter", "Lija de grano 120 y 180", "Esponja húmeda", "Trapo", "Mascarilla"],
 compra: [
  "Masilla de relleno lista para usar (interior). Para grietas, masilla flexible acrílica.",
  "Cinta de malla para grietas largas.",
  "Imprimación para la zona reparada."],
 seguridad: "Usa mascarilla al lijar y ventila.",
 pasos: [
  P("Limpia el agujero o la grieta", "Retira polvo y trozos sueltos con un cepillo o una brocha. Si es una grieta, ábrela un poco con la punta del cúter en forma de V para que entre masilla."),
  P("Humedece ligeramente", "Pasa una esponja casi seca por el borde. Esto ayuda a que la masilla agarre bien."),
  P("Carga la espátula", "Coge una cantidad de masilla en el borde de la espátula, la que cabe en el agujero. Mejor poca que mucha."),
  P("Rellena presionando", "Aprieta con la espátula inclinada contra el agujero para que entre hasta el fondo. Deja que sobresalga un poco: al secar se reduce.", DIB.masilla),
  P("Alisa", "Pasa la espátula casi plana en un solo movimiento para quitar el exceso. Quita lo que sobre alrededor con un trapo húmedo."),
  P("Deja secar", "Respeta el tiempo del envase, entre 1 y 4 horas. Si la masilla se hunde al secar, aplica una segunda capa fina."),
  P("Lija", "Cuando esté seca, lija con grano 120 en movimientos circulares suaves y termina con grano 180. Pasa la mano: no debe notarse el borde. Limpia el polvo."),
  P("Imprima antes de pintar", "Da una mano de imprimación sobre la zona reparada. Si no, la masilla absorbe más pintura y se nota el parche. Después pinta la pared.")
 ],
 problemas: [
  Q("Se nota el parche al pintar", "No se dio imprimación o no quedó liso. Lija suave, imprima y vuelve a pintar toda la pared, no solo el parche."),
  Q("La masilla se agrieta al secar", "Echaste una capa demasiado gruesa. Raspa y aplica capas finas."),
  Q("La grieta vuelve a aparecer", "La pared se mueve. Usa masilla flexible y cinta de malla, o consulta a un profesional."),
  Q("El agujero es muy grande", "Más de 2 cm necesita yeso o parche; no basta masilla.")
 ]
}
];
LOTE_3.forEach(n => { const i = TUTORIALES.findIndex(t => t.id === n.id); if (i >= 0) TUTORIALES[i] = n; else TUTORIALES.push(n); });
