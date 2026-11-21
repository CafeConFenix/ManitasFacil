/* Lote en profundidad: grifo nuevo, puerta, azulejo y malas hierbas */
const LOTE_8 = [
{
 id: "instalar-grifo", titulo: "Instalar un grifo nuevo", categoria: "Fontanería",
 resumen: "Cambiar el grifo del lavabo o la cocina: desmontar, colocar, conectar los flexos y comprobar fugas.",
 tiempo: "1-2 horas", dificultad: "Media",
 antes: [
  "Mira bajo el lavabo: debe haber dos llaves de escuadra (una para el agua fría y otra para la caliente). Si no las hay, tendrás que cerrar la llave general de la casa.",
  "Comprueba el agujero de la encimera o lavabo: lo normal es 35 mm. Mide el del grifo nuevo para que coincida.",
  "Hay poco espacio bajo el lavabo: usa linterna frontal y trabaja con calma."],
 herramientas: ["Llave inglesa", "Llave de vaso larga o llave para grifos (para la tuerca de debajo)", "Destornillador", "Cubo y trapos", "Linterna frontal", "Cúter", "Papel de cocina", "Guantes"],
 compra: [
  "Grifo del mismo tipo (monomando de lavabo o de cocina) con flexos incluidos y juntas de goma.",
  "Si los flexos no llegan: flexos de acero inoxidable de 40-50 cm con rosca de 3/8 o 1/2 pulgada.",
  "Silicona sanitaria si quieres sellar la base."],
 seguridad: "Cierra las llaves de escuadra (o la general) antes de aflojar nada, y abre el grifo viejo para que baje la presión.",
 pasos: [
  P("Cierra el agua", "Gira cada llave de escuadra un cuarto de vuelta hasta que la ranura quede cruzada al tubo. Abre el grifo viejo en fría y caliente para vaciarlo. Si no hay llaves, cierra la general.", DIB.llave),
  P("Prepara la zona", "Vacía el espacio bajo el lavabo, pon un cubo y trapos, y ponte la linterna."),
  P("Desconecta los flexos del grifo viejo", "Con la llave inglesa, afloja las tuercas que unen los flexos con las llaves de escuadra (sentido de las agujas del reloj es apretar, al revés es aflojar). Cae agua: recógela con el cubo."),
  P("Suelta la tuerca de fijación", "Debajo del grifo hay una tuerca o una barra roscada con tuerca que lo sujeta. Aflójala con la llave de vaso larga. Si está pegada, echa agua caliente con vinagre y espera 15 minutos."),
  P("Saca el grifo viejo y limpia", "Tira hacia arriba del grifo. Raspa con el cúter los restos de silicona y limpia la superficie con un trapo."),
  P("Pasa los flexos del grifo nuevo por el agujero", "Coloca la junta de goma en la base del grifo nuevo. Introduce los flexos por el agujero y baja el grifo hasta que apoye."),
  P("Fija el grifo desde abajo", "Coloca la arandela y la tuerca de fijación y apriétala con la llave de vaso. Antes de apretar del todo, centra el grifo y comprueba que queda recto."),
  P("Conecta los flexos", "El flexo caliente (marca roja) va a la llave de la izquierda y el frío (azul) a la de la derecha. Comprueba que lleven junta de goma en la conexión. Aprieta a mano y da un cuarto de vuelta más con la llave: si aprietas de más, la junta se aplasta y gotea."),
  P("Abre las llaves poco a poco y purga el aire", "Abre las llaves de escuadra despacio. Abre el grifo y deja salir el agua 30 segundos para sacar aire y suciedad. Quita el aireador (la rejilla del pico) y límpialo."),
  P("Revisa si hay fugas", "Pon papel de cocina bajo cada conexión y observa 10 minutos. Si hay humedad, cierra el agua y aprieta un poco más o revisa la junta.")
 ],
 problemas: [
  Q("Gotea por la conexión del flexo", "Falta junta o está mal colocada. Cierra el agua, desmonta y revisa la junta antes de apretar."),
  Q("El grifo se mueve al usarlo", "La tuerca de fijación está floja. Aprieta desde abajo."),
  Q("Sale poca agua", "El aireador está sucio o un flexo está doblado. Límpialo y revisa el recorrido."),
  Q("No se puede aflojar la tuerca vieja", "Usa agua caliente con vinagre, espera y prueba con una llave de vaso larga.")
 ]
},
{
 id: "pintar-puerta", titulo: "Pintar una puerta de madera", categoria: "Puertas y carpintería",
 resumen: "Preparar, imprimar y pintar una puerta de interior sin marcas y con buen acabado.",
 tiempo: "1 día repartido en 2 días", dificultad: "Fácil-Media",
 antes: [
  "Decide si pintas la puerta quitada y tumbada sobre caballetes (el mejor acabado) o en su sitio.",
  "Mira la pintura vieja: si está en buen estado, basta lijar suave; si está pelada o agrietada, hay que lijar más.",
  "Elige el tipo: esmalte al agua (sin olor, seca rápido) o sintético (más duro, más olor)."],
 herramientas: ["Destornillador", "Lija de grano 120 y 220", "Brocha de 5 cm y rodillo de espuma pequeño", "Cinta de carrocero", "Caballetes o sillas", "Trapo", "Mascarilla", "Lona para el suelo"],
 compra: [
  "Imprimación para madera si la puerta está sin pintar o muy lijada.",
  "Esmalte para madera: unos 0,5 litros bastan para una puerta por las dos caras.",
  "Rodillo de espuma de 10 cm y brocha."],
 seguridad: "Ventila la habitación y usa mascarilla al lijar y al pintar.",
 pasos: [
  P("Quita herrajes y protege", "Desmonta picaporte, cerradura y embellecedores. Si no puedes quitar las bisagras, protégelas con cinta de carrocero."),
  P("Pon la puerta en horizontal si puedes", "Quita la puerta y colócala sobre caballetes con una lona debajo. Pintada tumbada, no se forman chorretones."),
  P("Lija toda la superficie", "Lija en el sentido de la veta con grano 120 hasta quitar el brillo y la pintura suelta. Termina con grano 220. Limpia el polvo con un trapo húmedo."),
  P("Aplica la imprimación", "Da una capa fina de imprimación, en el sentido de la veta. Deja secar el tiempo del envase."),
  P("Lija suave", "Pasa lija de grano 220 por encima para quitar pelusas. Limpia el polvo."),
  P("Pinta molduras y bordes primero", "Con la brocha, pinta primero los rebajes y molduras y luego los bordes."),
  P("Pinta las zonas lisas", "Pinta los paneles y el centro con el rodillo, en el sentido de la veta y con poca pintura. Repasa con la brocha sin apretar."),
  P("Deja secar y da la segunda mano", "Espera el tiempo que indica el envase (de 6 a 24 horas). Lija suave con grano 220 y da la segunda capa."),
  P("Deja endurecer antes de montar", "Espera 24-48 horas antes de volver a montar herrajes y colgar la puerta. La pintura aún está blanda al tacto.")
 ],
 problemas: [
  Q("Salen chorretones", "Demasiada pintura. Alisa en cuanto los veas con la brocha y usa capas finas."),
  Q("Se ven marcas de brocha", "Pintaste en sentido contrario a la veta o repasaste con la pintura medio seca. Lija y repinta."),
  Q("La pintura no cubre", "Falta imprimación o una segunda capa."),
  Q("La puerta se pega al marco", "No esperaste a que endureciera. Lija el canto y da cera o parafina.")
 ]
},
{
 id: "azulejo-suelto", titulo: "Pegar un azulejo suelto", categoria: "Paredes y pintura",
 resumen: "Retirar, limpiar y pegar de nuevo un azulejo que se mueve o se ha caído.",
 tiempo: "1 hora + 24 horas de secado", dificultad: "Fácil",
 antes: [
  "Antes de pegar, mira por qué se soltó. Si el soporte está húmedo o el azulejo cede por humedad, hay una fuga: no pegues hasta arreglarla.",
  "Si hay varios azulejos sueltos o suena hueco en toda la zona, puede haber un problema de más extensión.",
  "Usa cemento cola flexible, no cola de contacto."],
 herramientas: ["Espátula o cincel pequeño", "Martillo", "Llana dentada de 6 mm", "Crucetas de 2 mm", "Esponja y cubo", "Cinta de carrocero", "Gafas y guantes"],
 compra: [
  "Cemento cola flexible tipo C2 en una bolsa pequeña, o ya preparado en cubo.",
  "Lechada de rejuntado del color de las juntas.",
  "Silicona sanitaria para las esquinas, si hace falta."],
 seguridad: "Usa gafas y guantes al retirar el azulejo: los bordes cortan.",
 pasos: [
  P("Retira el azulejo si no está suelto del todo", "Si aún está pegado, ponte gafas y guantes y haz palanca suave con la espátula por un borde. Hazlo despacio para no romper los vecinos."),
  P("Limpia el hueco", "Raspa con la espátula los restos de cemento viejo del soporte y del reverso del azulejo. Quita el polvo con una brocha."),
  P("Comprueba el soporte", "Pasa la mano: debe estar firme, seco y plano. Si está húmedo, espera a que seque o busca la causa."),
  P("Prepara el cemento cola", "Mezcla según el envase hasta que quede una pasta cremosa, sin grumos. Déjala reposar 5 minutos."),
  P("Aplica el cemento en la pared", "Extiende cemento con la llana dentada en la zona del hueco, con el lado dentado, formando surcos en una sola dirección."),
  P("Aplica una capa fina también en el azulejo", "Con la parte lisa de la llana, extiende una capa fina en el reverso del azulejo para que agarre mejor."),
  P("Coloca y presiona", "Pon el azulejo en su sitio, presiona firme y mueve un poco hasta que quede a ras con los vecinos. Usa crucetas para dejar la junta uniforme."),
  P("Quita el exceso y espera", "Limpia con la esponja el cemento que sobre en las juntas. Pega cinta de carrocero encima para que no se mueva. Espera 24 horas."),
  P("Rejunta y limpia", "Quita crucetas y cinta, aplica la lechada en las juntas con una espátula de goma y limpia con una esponja húmeda en diagonal.")
 ],
 problemas: [
  Q("El azulejo queda hundido o sobresale", "Hay poco o demasiado cemento. Retíralo y vuelve a pegarlo ajustando la cantidad."),
  Q("Se vuelve a soltar", "El soporte está húmedo o sucio. Revisa si hay fuga."),
  Q("Las juntas quedan de distinto ancho", "Usa crucetas del mismo tamaño en todas las juntas."),
  Q("La lechada se agrieta", "Se aplicó demasiado pronto o con exceso de agua. Quítala y vuelve a rejuntar.")
 ]
},
{
 id: "quitar-malas-hierbas", titulo: "Quitar malas hierbas", categoria: "Jardinería",
 resumen: "Cómo eliminar malas hierbas con la raíz y evitar que vuelvan, sin productos agresivos.",
 tiempo: "1-3 horas", dificultad: "Muy fácil",
 antes: [
  "Distingue dos tipos: las anuales (nacen de semilla cada año, se arrancan fácil) y las perennes (diente de león, grama, convólvulo, cardo), que rebrotan si dejas un trozo de raíz.",
  "Trabaja con la tierra algo húmeda, después de la lluvia o tras regar: las raíces salen enteras.",
  "No uses sal ni lejía en el suelo: contaminan y matan también lo que quieres conservar."],
 herramientas: ["Guantes", "Escardillo o extractor de raíces", "Azadilla", "Cubo", "Rastrillo", "Rodillera"],
 compra: [
  "Escardillo o extractor de raíces.",
  "Acolchado: corteza de pino, paja o grava.",
  "Malla antihierbas o cartón grueso."],
 seguridad: "Usa guantes. Cuidado con espinas y plantas irritantes, como la ortiga.",
 pasos: [
  P("Riega o espera a un día después de lluvia", "Con la tierra húmeda, la raíz sale entera. Con tierra seca, se rompe y rebrota."),
  P("Identifica qué hierbas tienes", "Fíjate en si tienen raíz pivotante (como el diente de león) o rizomas que se extienden bajo tierra (como la grama)."),
  P("Afloja la tierra alrededor", "Con el escardillo o la azadilla, afloja la tierra a unos 5 cm de la planta, en círculo."),
  P("Saca la planta con toda la raíz", "Agarra por la base y tira despacio. En perennes, sigue la raíz y saca todos los trozos que puedas.", DIB.planta),
  P("Retira lo arrancado", "Pon las hierbas en un cubo, no las dejes en el suelo. Si tienen semillas, no las eches al compost."),
  P("Rastrilla la zona", "Alisa la tierra y quita las raíces sueltas que queden a la vista."),
  P("Cubre el suelo", "Extiende una capa de 5-8 cm de acolchado o coloca malla antihierbas cubierta de corteza. Así no les llega la luz."),
  P("Revisa cada semana", "Arranca lo que nazca mientras es pequeño. Corta las flores antes de que formen semillas.")
 ],
 problemas: [
  Q("Vuelven a salir", "Quedó raíz bajo tierra. Saca los trozos y aumenta el acolchado."),
  Q("La raíz se rompe al tirar", "La tierra está seca o tiras en sentido incorrecto. Riega y tira despacio."),
  Q("Crecen entre las losas o grietas", "Echa agua muy caliente o raspa con una rasqueta; mantén las juntas rellenas de arena."),
  Q("Hay hierbas en el césped", "Siega más alto y más a menudo, y arranca a mano las que sobresalgan.")
 ]
}
];
LOTE_8.forEach(n => { const i = TUTORIALES.findIndex(t => t.id === n.id); if (i >= 0) TUTORIALES[i] = n; else TUTORIALES.push(n); });
