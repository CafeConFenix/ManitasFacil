/* Lote en profundidad: mueble, cal, nevera, silla, asiento váter, mosquitera */
const LOTE_10 = [
{
 id: "montar-mueble", titulo: "Montar un mueble de caja plana", categoria: "Muebles y montaje",
 resumen: "Montar muebles de caja plana sin errores: inventario, orden, escuadra y anclaje a la pared.",
 tiempo: "1-3 horas", dificultad: "Fácil",
 antes: [
  "Lee las instrucciones completas antes de abrir ninguna bolsa de tornillos. Los fallos más comunes vienen de montar una pieza al revés.",
  "Necesitas un espacio libre, el suelo protegido con una manta o cartón y, para muebles grandes, una segunda persona.",
  "Los muebles altos (estanterías, armarios, cómodas) deben anclarse a la pared: si se vuelcan pueden herir, sobre todo a los niños."],
 herramientas: ["Destornillador de estrella", "Martillo de goma", "Llave allen (suele venir en la caja)", "Nivel", "Metro", "Lápiz", "Cola blanca para madera", "Cúter para abrir la caja", "Vasos o cuencos para los tornillos"],
 compra: [
  "No suele hacer falta comprar nada. Si falta algún tornillo, la marca suele enviarlo gratis: guarda la referencia del manual.",
  "Para el anclaje a la pared: escuadras antivuelco y tacos adecuados a tu pared (mira la guía de colgar una estantería)."],
 seguridad: "Pide ayuda para levantar piezas grandes y ancla los muebles altos a la pared. No uses el mueble hasta haber apretado todo.",
 pasos: [
  P("Abre la caja y haz inventario", "Corta el precinto con cuidado. Extiende las piezas sobre una manta y compáralas con la lista del manual: cuenta cada pieza y cada tornillo. Es mejor descubrir ahora que falta algo."),
  P("Separa la tornillería", "Pon cada tipo de tornillo, espiga o tuerca en un vaso distinto y etiquétalo con la letra del manual."),
  P("Identifica cada pieza", "Fíjate en las marcas de cada pieza (A, B, C...) y en cuál es la cara vista: suele ser la que no tiene agujeros visibles."),
  P("Monta la estructura sin apretar", "Sigue el orden del manual. Pon cola en las espigas de madera, pero no aprietes los tornillos a fondo: así puedes corregir si algo no encaja."),
  P("Comprueba que la estructura está a escuadra", "Mide las dos diagonales de la caja desde las esquinas opuestas. Si las dos medidas son iguales, la estructura está a escuadra. Si no, empuja suave hasta igualarlas."),
  P("Aprieta los tornillos", "Cuando todo esté recto, aprieta los tornillos, sin pasarte para no hundirlos o romper el aglomerado."),
  P("Pon el panel trasero", "Clava o atornilla el fondo. Este panel mantiene el mueble cuadrado, así que no lo omitas ni uses menos clavos de los indicados."),
  P("Coloca puertas, cajones y baldas", "Monta primero las correderas y bisagras. Ajusta con los tornillos de regulación hasta que cierren parejos."),
  P("Nivela y ancla a la pared", "Coloca el mueble en su sitio, nivélalo con las patas regulables y fíjalo a la pared con las escuadras antivuelco.")
 ],
 problemas: [
  Q("Una pieza no encaja", "Casi siempre está al revés o es otra pieza. Revisa las marcas y el manual."),
  Q("Un tornillo gira en vacío", "El aglomerado está dañado. Pon cola o un palillo en el agujero y espera a que seque."),
  Q("Las puertas no cierran parejas", "Ajusta con los tornillos de la bisagra, en altura y en profundidad."),
  Q("El mueble se tambalea", "El suelo no es plano. Regula las patas o pon un calzo.")
 ]
},
{
 id: "descalcificar", titulo: "Descalcificar grifos y alcachofas", categoria: "Limpieza y mantenimiento",
 resumen: "Quitar la cal con vinagre o ácido cítrico sin dañar el acabado de tus grifos.",
 tiempo: "1-2 horas", dificultad: "Muy fácil",
 antes: [
  "Mira el material: el cromo aguanta bien el vinagre. Los acabados dorados, negros mate, lacados, el mármol y la piedra natural pueden dañarse: en esos casos, 15 minutos como máximo o usa jabón neutro.",
  "Si el agua sale con poca fuerza o en chorros desiguales, la cal está tapando los agujeros de la alcachofa o el aireador.",
  "No mezcles el vinagre con lejía ni con otros productos."],
 herramientas: ["Bolsa de plástico y goma elástica", "Recipiente", "Cepillo de dientes viejo", "Trapo de microfibra", "Aguja o palillo", "Guantes"],
 compra: [
  "Vinagre blanco: un litro basta.",
  "Opcional: ácido cítrico en polvo (1-2 cucharadas por litro de agua caliente).",
  "Trapo de microfibra."],
 seguridad: "Ventila y usa guantes. El vinagre caliente puede irritar la piel y los ojos.",
 pasos: [
  P("Comprueba el material", "Mira si el grifo es cromado. Si es dorado, negro mate o de latón envejecido, limita el tiempo del vinagre a 15 minutos."),
  P("Prepara la mezcla", "Usa vinagre blanco puro o ácido cítrico disuelto en agua caliente."),
  P("Envuelve el grifo", "Llena una bolsa con vinagre, cubre el grifo y átala con la goma para que quede sumergido. Si es la alcachofa, desenrósca y sumérgela en un recipiente.", DIB.vinagre),
  P("Espera", "Entre 30 y 60 minutos para cal normal. Si es mucha, hasta 2 horas."),
  P("Retira la bolsa y frota", "Frota con el cepillo de dientes los restos blandos. Pincha con una aguja los agujeros de la alcachofa que sigan tapados."),
  P("Aclara bien", "Aclara con agua abundante para que no quede vinagre. Deja correr agua unos segundos."),
  P("Seca y saca brillo", "Seca con un trapo de microfibra para que no vuelvan a quedar marcas de agua."),
  P("Prevención", "Seca el grifo después de usarlo y repite cada 1-2 meses. Si tu agua es muy dura, plantéate un descalcificador.")
 ],
 problemas: [
  Q("La cal sigue", "Repite con vinagre caliente o aumenta el tiempo."),
  Q("El grifo ha perdido brillo", "El acabado es delicado. Aclara bien y pasa un paño con aceite de cocina para devolver el brillo."),
  Q("La alcachofa sigue sin salir con fuerza", "Desmonta y limpia los agujeros con una aguja uno a uno."),
  Q("Huele a vinagre", "Aclara más y ventila un rato.")
 ]
},
{
 id: "junta-nevera", titulo: "Cambiar la goma de la nevera", categoria: "Electrodomésticos",
 resumen: "Cambiar la junta de la puerta para que cierre bien y la nevera gaste menos.",
 tiempo: "45 min", dificultad: "Fácil",
 antes: [
  "Comprueba si la junta falla: cierra la puerta sobre un folio. Si lo sacas sin resistencia en algún punto, ahí no sella.",
  "A veces basta con limpiarla con agua tibia y un poco de lavavajillas, o con calentarla con secador para que recupere su forma.",
  "Necesitas el modelo de la nevera (etiqueta en el interior o en el lateral)."],
 herramientas: ["Destornillador plano", "Secador de pelo", "Trapo", "Bayeta", "Bandeja o cubo para el agua caliente", "Guantes"],
 compra: [
  "Junta del modelo exacto de tu nevera: búscala con la referencia de la etiqueta.",
  "Si el modelo no se encuentra, existen juntas universales que se cortan a medida."],
 seguridad: "Desenchufa la nevera antes de empezar.",
 pasos: [
  P("Haz la prueba del folio", "Cierra la puerta sobre un folio en varios puntos del borde. Marca con cinta dónde se sale con facilidad."),
  P("Desenchufa y vacía la puerta", "Saca los botes y bandejas de la puerta para trabajar con más espacio."),
  P("Retira la junta vieja", "Tira desde una esquina. Si está atornillada, levanta el pliegue y quita los tornillos."),
  P("Limpia la ranura", "Pasa un trapo con agua tibia y vinagre para quitar suciedad y restos de goma."),
  P("Calienta la junta nueva", "Sumérgela unos minutos en agua caliente (sin hervir) o pasa el secador para que se afloje y pierda las arrugas del envase."),
  P("Encaja la junta empezando por las esquinas", "Coloca primero las dos esquinas superiores y presiona. Recorre los lados sin estirar la goma."),
  P("Comprueba con el folio y cierra", "Cierra la puerta. Repite la prueba del folio. Si una zona falla, calienta con el secador y presiona de nuevo."),
  P("Enchufa y espera", "Enchufa, y espera unas horas. La puerta debe cerrarse sola con un pequeño empuje.")
 ],
 problemas: [
  Q("Queda un hueco", "Calienta esa zona con el secador y presiona la goma contra la ranura."),
  Q("No encaja", "La junta no es del modelo exacto. Comprueba la referencia."),
  Q("La puerta no cierra sola", "Puede que la nevera no esté nivelada. Regula las patas delanteras."),
  Q("Sigue formando hielo", "El problema no es la junta. Revisa el termostato o llama a un técnico.")
 ]
},
{
 id: "silla-cojea", titulo: "Arreglar una silla que cojea", categoria: "Muebles y montaje",
 resumen: "Descubrir por qué cojea una silla y corregirlo: tornillos, uniones encoladas o patas desiguales.",
 tiempo: "30 min + secado", dificultad: "Fácil",
 antes: [
  "Hay tres causas: tornillos flojos, uniones encoladas que se han soltado o patas de distinta longitud (a veces es el suelo, no la silla).",
  "Prueba la silla sobre una superficie realmente plana, como una mesa, para descartar el suelo.",
  "Si la silla es antigua o de valor, consulta con un restaurador antes de aplicar cola."],
 herramientas: ["Destornillador o llave allen", "Cola blanca para madera", "Cuerda o cinta de embalar", "Lija", "Fieltro adhesivo o tacos de goma", "Trapo húmedo"],
 compra: [
  "Cola blanca para madera tipo D3.",
  "Fieltro adhesivo o topes de goma de distintos grosores.",
  "Lija de grano 120."],
 seguridad: "No te sientes en la silla hasta que la cola esté completamente seca.",
 pasos: [
  P("Pon la silla en una superficie plana", "Si cojea sobre una mesa, la causa es la silla; si no, es el suelo."),
  P("Aprieta los tornillos", "Revisa los tornillos de patas, travesaños y respaldo. Aprieta los que giren."),
  P("Mueve cada pata", "Haz presión con la mano en cada unión. Si una se mueve, la cola se ha soltado."),
  P("Desmonta la unión suelta", "Con un golpe suave y firme, saca la espiga de su agujero. Raspa la cola vieja con lija o una cuchilla."),
  P("Pon cola y vuelve a montar", "Aplica una capa fina de cola en la espiga y en el agujero. Encaja y limpia lo que rebose con un trapo húmedo."),
  P("Aprieta con cuerda mientras seca", "Rodea las patas con una cuerda tensa o cinta de embalar y deja secar 12-24 horas."),
  P("Si las patas son desiguales, mide la diferencia", "Calza la pata corta con cartón hasta que la silla quede estable; esa altura es la que te falta."),
  P("Iguala la altura", "Pega fieltro o un tope de goma del grosor adecuado en la pata corta. Si es muy poco, lija la pata larga con cuidado, un poco cada vez.")
 ],
 problemas: [
  Q("Sigue cojeando", "Comprueba si el suelo está desnivelado. Si es así, usa topes regulables."),
  Q("La unión vuelve a soltarse", "Se aplicó poca cola o no se apretó mientras secaba. Repite con más tiempo de secado."),
  Q("Un tornillo gira en vacío", "Rellena el agujero con palillos y cola y vuelve a atornillar."),
  Q("La cola ha manchado la madera", "Limpia enseguida con un trapo húmedo. Si seca, lija suavemente.")
 ]
},
{
 id: "asiento-vater", titulo: "Cambiar el asiento del váter", categoria: "Fontanería",
 resumen: "Cambiar el asiento y la tapa sin romper la porcelana, y elegir el que encaja con tu taza.",
 tiempo: "15-20 min", dificultad: "Muy fácil",
 antes: [
  "Mide antes de comprar: la distancia entre los dos agujeros de fijación (suele ser de 140 a 155 mm), el largo y el ancho de la taza y su forma (redonda, ovalada o alargada).",
  "Mira cómo se sujeta el actual: con tornillos y tuercas por debajo, o con un sistema de fijación rápida (un botón o palanca por abajo).",
  "No fuerces nunca: la porcelana se rompe con facilidad."],
 herramientas: ["Destornillador", "Llave inglesa o alicates", "Guantes", "Trapo", "Metro"],
 compra: [
  "Asiento del tamaño y la forma de tu taza, con los tornillos de fijación incluidos.",
  "Mejor con cierre amortiguado y fijación rápida si quieres poder desmontarlo para limpiar."],
 seguridad: "Usa guantes y lávate las manos después.",
 pasos: [
  P("Mide la taza", "Mide la distancia entre los agujeros, el largo y el ancho. Anota la forma."),
  P("Levanta los tapones de los tornillos", "Verás dos tapas de plástico en la parte trasera del asiento. Levántalas con la uña o un destornillador."),
  P("Sujeta la tuerca por debajo", "Mira bajo la taza: la tuerca puede girar. Sujétala con la mano o con unos alicates."),
  P("Afloja el tornillo", "Gira a la izquierda con el destornillador desde arriba, mientras sujetas la tuerca."),
  P("Retira el asiento viejo y limpia", "Quita el asiento y limpia la zona con un trapo y desinfectante."),
  P("Monta las bisagras del nuevo", "Coloca las bisagras, tornillos y arandelas en los agujeros de la taza, siguiendo las instrucciones."),
  P("Centra y aprieta", "Antes de apretar, centra el asiento sobre la taza. Aprieta de forma alterna ambos lados sin forzar."),
  P("Comprueba y cierra los tapones", "Mueve el asiento: no debe girar ni moverse. Cierra las tapas de los tornillos.")
 ],
 problemas: [
  Q("El asiento se mueve de lado", "Los tornillos están flojos o la fijación no está centrada. Afloja, centra y vuelve a apretar."),
  Q("No coinciden los agujeros", "Compraste una medida o forma incorrecta. Devuelve y mide de nuevo."),
  Q("El tornillo está oxidado", "Echa unas gotas de aceite, espera 15 minutos y vuelve a intentarlo."),
  Q("Se ha agrietado la porcelana", "No uses la taza: la grieta puede ir a más. Llama a un fontanero.")
 ]
},
{
 id: "mosquitera", titulo: "Arreglar una mosquitera rota", categoria: "Ventanas y exteriores",
 resumen: "Cambiar la malla de una mosquitera con marco de aluminio, tensarla bien y recortar el sobrante.",
 tiempo: "1 hora", dificultad: "Fácil",
 antes: [
  "Esta guía es para mosquiteras de marco de aluminio con una ranura donde un cordón de goma sujeta la malla.",
  "Mide el marco por fuera y por dentro de la ranura para comprar la cantidad de malla y el grosor de cordón correctos.",
  "Elige malla de fibra de vidrio (barata y flexible) o de aluminio (más resistente)."],
 herramientas: ["Rodillo para mosquiteras", "Destornillador fino", "Cúter", "Metro", "Pinzas de ropa o pinzas de sujeción", "Superficie plana grande"],
 compra: [
  "Malla de mosquitera, 10 cm más ancha y larga que el marco.",
  "Cordón de goma del mismo grosor que el actual (se vende por metros).",
  "Rodillo para mosquiteras (barato)."],
 seguridad: "Ten cuidado con el cúter: corta siempre con la hoja apoyada sobre el marco y hacia fuera de ti.",
 pasos: [
  P("Saca el marco de la ventana", "Mira dónde tiene los pasadores o muelles y retíralo con cuidado."),
  P("Pon el marco en una superficie plana", "Extiéndelo sobre una mesa o el suelo para trabajar cómodo."),
  P("Saca el cordón viejo", "Con el destornillador fino, levanta el cordón por una esquina y tira de él. Retira también la malla rota."),
  P("Corta la malla nueva", "Extiéndela sobre el marco y corta dejando 5 cm de sobra por cada lado."),
  P("Coloca la malla y sujétala", "Fija con pinzas en los lados largos. Comprueba que los hilos queden rectos, paralelos a los bordes."),
  P("Mete el cordón con el rodillo", "Empieza en una esquina. Pasa el rodillo por el cordón para meterlo en la ranura, y avanza por el lado, estirando la malla ligeramente."),
  P("Repite en los otros lados", "Haz el lado opuesto, tensando suavemente, y luego los otros dos. No tires demasiado: se arruga."),
  P("Recorta el sobrante", "Con el cúter, corta la malla que sobra pegado al cordón, hacia fuera de ti."),
  P("Vuelve a colocar el marco", "Monta el marco en la ventana y comprueba que cierra sin dejar huecos.")
 ],
 problemas: [
  Q("La malla queda arrugada", "Faltó tensión o el cordón se metió con malla floja. Saca el cordón de un lado y vuelve a tensar."),
  Q("El cordón se sale", "Es demasiado fino para la ranura. Compra uno más grueso."),
  Q("Hay huecos en las esquinas", "Presiona el cordón con el rodillo en las esquinas hasta que quede a ras."),
  Q("Se corta la malla con el rodillo", "Rodillo con bordes muy afilados o demasiada presión. Usa el borde con ranura y menos fuerza.")
 ]
}
];
LOTE_10.forEach(n => { const i = TUTORIALES.findIndex(t => t.id === n.id); if (i >= 0) TUTORIALES[i] = n; else TUTORIALES.push(n); });
