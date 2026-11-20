/* Lote en profundidad: pladur, persiana, moho y alarma de humo */
const LOTE_7 = [
{
 id: "arreglar-pladur", titulo: "Arreglar un agujero en pladur", categoria: "Paredes y pintura",
 resumen: "Reparar golpes y agujeros en pladur según su tamaño: parche de malla o pieza nueva con refuerzo.",
 tiempo: "3-4 horas repartidas en 1-2 días", dificultad: "Media",
 antes: [
  "Mide el agujero. Hasta 10 cm de ancho se arregla con parche autoadhesivo de malla. Más grande necesita una pieza nueva de pladur con refuerzo.",
  "Comprueba con golpecitos que lo que hay detrás es hueco: si suena macizo, no es pladur sino ladrillo.",
  "Mira por el agujero con una linterna que no haya cables ni tuberías detrás."],
 herramientas: ["Cúter", "Regla y lápiz", "Espátulas de 10 y 25 cm", "Lija de grano 120 y 180", "Mascarilla", "Sierra de punta para pladur (si el agujero es grande)", "Destornillador y tornillos para pladur"],
 compra: [
  "Parche autoadhesivo de malla de aluminio o fibra, 10-15 cm.",
  "Masilla para juntas de pladur, polvo o lista para usar.",
  "Si es grande: un trozo de pladur del mismo grosor, unos listones de madera y tornillos para pladur de 25 mm."],
 seguridad: "Usa mascarilla al lijar: el polvo de yeso irrita los pulmones.",
 pasos: [
  P("Mide, revisa y limpia", "Mide el agujero y mira por dentro con una linterna. Quita los trozos sueltos con el cúter y limpia el polvo del borde.", DIB.masilla),
  P("Si es pequeño (hasta 10 cm): coloca el parche", "Pega el parche autoadhesivo centrado sobre el agujero, apretando bien los bordes con la espátula."),
  P("Aplica la primera capa de masilla", "Extiende masilla sobre el parche con la espátula pequeña, tapando la malla y 3-4 cm más allá. Alisa en una sola pasada."),
  P("Si es grande (más de 10 cm): refuerza por detrás", "Recorta el agujero a un cuadrado limpio. Introduce un listón de madera por detrás, más largo que el agujero, y atorníllalo a la pared a través del pladur por arriba y por abajo."),
  P("Corta y coloca la pieza", "Corta un trozo de pladur de la medida del cuadrado, colócalo y atorníllalo al listón. Los tornillos deben quedar un poco hundidos pero sin romper el cartón."),
  P("Cubre las juntas con cinta y masilla", "Pega cinta de juntas alrededor de la pieza y cúbrela con masilla, extendiendo la capa unos 5 cm hacia fuera."),
  P("Deja secar y da una segunda capa más ancha", "Espera el tiempo del envase y aplica una segunda capa extendiéndola unos 10 cm más allá de la primera, para que el borde quede sin escalón."),
  P("Lija y repite si hace falta", "Lija con grano 120 y 180 con movimientos suaves hasta que la zona quede lisa al pasar la mano. Limpia el polvo."),
  P("Imprima y pinta", "Da una mano de imprimación en toda la zona reparada y luego pinta toda la pared para que no se note.")
 ],
 problemas: [
  Q("Se nota el escalón", "No ensanchaste lo suficiente las capas. Aplica una capa más ancha y lija con grano fino."),
  Q("Se ve la malla del parche", "Faltó masilla encima. Aplica otra capa."),
  Q("La pieza se mueve", "Faltan tornillos o el listón está flojo. Añade tornillos."),
  Q("Aparecen grietas en las juntas", "Falta cinta de juntas o la masilla se aplicó muy gruesa. Repara con cinta y capas finas.")
 ]
},
{
 id: "persiana-no-sube", titulo: "Arreglar una persiana que no sube (cinta rota)", categoria: "Ventanas y exteriores",
 resumen: "Cambiar la cinta rota de una persiana de recogedor sin desmontar la persiana.",
 tiempo: "1-2 horas", dificultad: "Media",
 antes: [
  "Hay dos averías distintas: la cinta se ha roto o se ha soltado (se arregla con esta guía) o falla el recogedor (la caja con el muelle), que se cambia entero.",
  "Esta guía es para persianas con cinta y recogedor. Las de manivela o motor son distintas.",
  "La persiana pesa: si queda suelta puede caer y dañarte. Bloquéala antes de empezar."],
 herramientas: ["Destornilladores", "Tijeras", "Cinta adhesiva fuerte", "Escalera de tijera si es alta", "Linterna", "Alguien que te ayude"],
 compra: [
  "Cinta de persiana del ancho de la anterior (14, 18 o 22 mm; mídela) y de 5-6 metros de longitud.",
  "Si el recogedor está roto: un recogedor del mismo ancho de cinta y distancia entre tornillos.",
  "Cuñas de madera o cartón grueso para bloquear las lamas."],
 seguridad: "Bloquea la persiana en las guías antes de abrir el cajón. Los muelles del recogedor pueden saltar: ábrelo despacio.",
 pasos: [
  P("Comprueba qué falla", "Tira de la cinta: si sale suelta sin resistencia, está rota o fuera del rodillo. Si hay resistencia pero la persiana no sube, puede estar atascada o con lamas rotas."),
  P("Baja la persiana del todo y bloquéala", "Si no baja, pide ayuda para sujetarla. Coloca cuñas en las guías o pega cinta adhesiva fuerte en las lamas altas para que no se mueva.", DIB.escalera),
  P("Abre el recogedor", "Desenrosca los tornillos de la tapa del recogedor, en la pared, y retírala con cuidado. Fíjate en cómo está colocado todo y haz una foto."),
  P("Saca la cinta vieja", "Suelta los restos de la cinta del rodillo del recogedor y del enganche de la persiana. Anota el ancho y el largo."),
  P("Corta y prepara la cinta nueva", "Corta el extremo en diagonal y quémalo ligeramente con un mechero para que no se deshilache."),
  P("Pasa la cinta hasta el cajón", "Introdúcela por la ranura hasta el enganche del eje de la persiana y fíjala igual que la anterior, según la foto."),
  P("Enrolla la cinta en el recogedor", "Pasa el extremo por el recogedor y engánchalo en el rodillo. Gira el rodillo despacio a mano para enrollar la cinta hasta que quede tensa, sin soltar."),
  P("Cierra y prueba", "Coloca la tapa y atornilla. Quita las cuñas y prueba subiendo y bajando despacio varias veces.")
 ],
 problemas: [
  Q("La cinta se sale", "No está bien enganchada al rodillo. Desmonta la tapa y repite los pasos."),
  Q("La persiana sube torcida", "La cinta está más tensa de un lado. Ajusta o cambia las lamas dobladas."),
  Q("El recogedor no recoge", "El muelle está roto. Cambia el recogedor completo."),
  Q("Se atasca a mitad", "Hay suciedad en las guías. Límpialas y échales lubricante de silicona.")
 ]
},
{
 id: "quitar-moho", titulo: "Quitar moho de la pared", categoria: "Limpieza y mantenimiento",
 resumen: "Limpiar el moho con seguridad y, sobre todo, quitar la causa para que no vuelva.",
 tiempo: "2-3 horas", dificultad: "Fácil",
 antes: [
  "Si la zona de moho supera 1 m² o vuelve una y otra vez, hay un problema de humedad que debe revisar un profesional.",
  "Averigua la causa: ¿es condensación (aparece en esquinas y detrás de muebles en invierno) o una gotera o filtración (la mancha crece en círculo y la pared está húmeda al tacto)?",
  "No frotes en seco: dispersarías las esporas por la casa."],
 herramientas: ["Mascarilla FFP2", "Gafas y guantes", "Pulverizador", "Esponja y cepillo", "Trapos", "Cubo", "Higrómetro (medidor de humedad), opcional"],
 compra: [
  "Producto antimoho para paredes, o vinagre blanco, o lejía diluida 1:10 en agua (solo en paredes pintadas y sin mezclar con nada más).",
  "Pintura antimoho para interior.",
  "Higrómetro de 10-15 €, para controlar la humedad de la casa."],
 seguridad: "Usa mascarilla FFP2, guantes y gafas. Ventila bien. No mezcles lejía con vinagre ni con otros productos: producen gases tóxicos.",
 pasos: [
  P("Ventila y protégete", "Abre ventanas. Ponte mascarilla, guantes y gafas. Cubre el suelo y los muebles cercanos."),
  P("Humedece la zona", "Pulveriza un poco de agua o el producto sobre el moho para que no se desprendan esporas al limpiar."),
  P("Aplica el producto antimoho", "Pulveriza el producto elegido en toda la mancha y 10 cm alrededor. Déjalo actuar el tiempo del envase, normalmente 10-15 minutos."),
  P("Frota con suavidad", "Con la esponja o el cepillo, frota de fuera hacia dentro. Aclara el trapo a menudo."),
  P("Aclara y seca", "Pasa un trapo húmedo con agua limpia y seca después con otro trapo. La pared debe quedar completamente seca."),
  P("Deja secar bien", "Deja la ventana abierta unas horas. Si la pared sigue húmeda, usa un deshumidificador."),
  P("Pinta con pintura antimoho", "Cuando esté seca, aplica pintura antimoho en dos manos. No sirve pintar si la pared aún está húmeda."),
  P("Elimina la causa", "Ventila 10 minutos dos veces al día, no seques ropa dentro, usa el extractor en baño y cocina y mantén la humedad entre 40 y 60 %.")
 ],
 problemas: [
  Q("Vuelve a salir en pocas semanas", "Hay humedad de fondo. Revisa goteras, tuberías y ventilación, y consulta a un profesional."),
  Q("Queda la mancha", "Repite el producto. Si es profunda, tendrás que lijar y repintar."),
  Q("La pared sigue húmeda", "No pintes. Busca la causa de la humedad."),
  Q("Me mareo o huelo fuerte", "Sal a ventilar. Revisa que no mezclaste productos.")
 ]
},
{
 id: "alarma-humo", titulo: "Instalar una alarma de humo", categoria: "Seguridad en casa",
 resumen: "Elegir el detector, colocarlo bien y mantenerlo para que avise cuando haga falta.",
 tiempo: "20-30 min", dificultad: "Muy fácil",
 antes: [
  "Un detector de humo salva vidas: avisa del fuego mientras duermes. Instala uno al menos en el pasillo junto a los dormitorios y, mejor, uno por planta.",
  "No lo pongas en la cocina ni en el baño: el vapor y el humo de cocinar lo disparan.",
  "Comprueba que lleva la marca EN 14604 en la caja."],
 herramientas: ["Destornillador", "Taladro y broca de 6 mm (si lo atornillas)", "Lápiz", "Escalera de tijera", "Cinta adhesiva de doble cara (opcional)"],
 compra: [
  "Detector óptico de humo con pila de litio de 10 años: no necesitas cambiar la pila.",
  "Evita los detectores de tipo iónico para casas, porque reaccionan peor al humo lento.",
  "Si quieres que suenen todos a la vez, elige un modelo interconectado."],
 seguridad: "Si taladras, comprueba antes que no hay cables en el techo. Usa una escalera estable.",
 pasos: [
  P("Elige la ubicación", "En el centro del techo del pasillo junto a los dormitorios, a 30-50 cm de las paredes y a más de 3 metros de la cocina. Lejos de ventiladores y rendijas.", DIB.alarma),
  P("Marca los puntos de fijación", "Presenta la base en el techo y marca los dos agujeros con lápiz."),
  P("Taladra y pon los tacos", "Con la broca de 6 mm taladra los puntos y mete los tacos. Si prefieres, usa cinta de doble cara para techos lisos."),
  P("Atornilla la base", "Fija la base con los tornillos, firme y recta."),
  P("Coloca la pila y activa", "Si no lleva pila de 10 años, mete la pila. Si lleva, tira de la lengüeta de activación."),
  P("Encaja el detector en la base", "Gira hasta oír un clic."),
  P("Prueba", "Pulsa el botón de prueba: debe sonar una alarma fuerte."),
  P("Anota la fecha y planifica el mantenimiento", "Apunta la fecha de instalación. Prueba el botón una vez al mes, limpia el polvo con aspiradora y cambia el detector a los 10 años.")
 ],
 problemas: [
  Q("Pita cada poco", "Pila baja o detector sucio. Limpia con aspiradora o cambia la pila."),
  Q("Se dispara al cocinar o al ducharte", "Está demasiado cerca. Cámbialo de sitio."),
  Q("No suena al probar", "Mira que la pila esté bien puesta y la lengüeta quitada. Si no, cambia el detector."),
  Q("Quiero que suene en toda la casa", "Compra detectores interconectados.")
 ]
}
];
LOTE_7.forEach(n => { const i = TUTORIALES.findIndex(t => t.id === n.id); if (i >= 0) TUTORIALES[i] = n; else TUTORIALES.push(n); });
