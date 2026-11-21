/* Lote en profundidad: horno, aire acondicionado, trasplante, tomates, rosales, alcachofa */
const LOTE_9 = [
{
 id: "limpiar-horno", titulo: "Limpiar el horno", categoria: "Limpieza y mantenimiento",
 resumen: "Limpieza a fondo con bicarbonato y vinagre, sin productos agresivos y sin dañar las resistencias.",
 tiempo: "1 hora + una noche", dificultad: "Fácil",
 antes: [
  "Mira qué tipo de horno tienes: si lleva programa de pirólisis (limpieza automática), úsalo según el manual y no apliques productos químicos dentro. Si no, sigue esta guía.",
  "Hazlo con el horno frío del todo: es el error más habitual y causa quemaduras.",
  "Evita los sprays fuertes: dejan olor y restos que pasan a la comida."],
 herramientas: ["Guantes de goma", "Esponja no abrasiva y estropajo suave", "Espátula de plástico", "Recipiente pequeño", "Pulverizador", "Trapos de microfibra", "Papel de cocina"],
 compra: [
  "Bicarbonato de sodio: unas 4 cucharadas soperas.",
  "Vinagre blanco en un pulverizador.",
  "Lavavajillas para bandejas y rejillas."],
 seguridad: "Desenchufa el horno o baja el automático y espera a que esté frío. No mojes las resistencias ni el ventilador.",
 pasos: [
  P("Desconecta y deja enfriar", "Apaga el horno y desenchúfalo o baja su automático. Espera a que esté totalmente frío al tacto."),
  P("Saca bandejas y rejillas", "Retíralas y déjalas en remojo en agua caliente con lavavajillas mientras haces el interior."),
  P("Prepara la pasta de bicarbonato", "Mezcla 4 cucharadas de bicarbonato con 2-3 de agua hasta que quede una pasta espesa, como mantequilla blanda."),
  P("Extiende la pasta por el interior", "Con la mano enguantada o una espátula, cubre las paredes, el fondo y la puerta por dentro. Evita las resistencias y el ventilador."),
  P("Déjala actuar toda la noche", "Mínimo 8 horas. La pasta se oscurecerá al absorber la grasa."),
  P("Retira la pasta", "Quita con la espátula de plástico lo grueso y luego pasa una esponja húmeda. Aclara varias veces."),
  P("Rocía con vinagre y seca", "Pulveriza vinagre sobre los restos blancos: harán espuma. Pasa un trapo húmedo y seca con otro trapo."),
  P("Limpia bandejas y cristal de la puerta", "Frota las bandejas con estropajo. Limpia el cristal por dentro con trapo y vinagre."),
  P("Deja ventilar antes de usar", "Deja la puerta abierta un rato y enchufa. Calienta el horno 10 minutos vacío para eliminar el olor a vinagre.")
 ],
 problemas: [
  Q("Quedan manchas negras pegadas", "Aplica otra capa de pasta y déjala más tiempo antes de frotar."),
  Q("Huele a vinagre al cocinar", "Calienta el horno vacío 10 minutos a 180 grados y ventila."),
  Q("Se ha mojado la resistencia", "Déjala secar del todo con la puerta abierta antes de enchufar."),
  Q("Tiene programa de pirólisis", "Quita las bandejas y usa ese programa: no apliques bicarbonato dentro.")
 ]
},
{
 id: "filtro-aire", titulo: "Limpiar el filtro del aire acondicionado", categoria: "Climatización",
 resumen: "Limpiar los filtros del split cada pocas semanas para gastar menos y respirar mejor aire.",
 tiempo: "20-30 min", dificultad: "Muy fácil",
 antes: [
  "Hazlo cada 2-4 semanas si usas el aire a diario y siempre antes de la temporada de uso.",
  "Es para aparatos tipo split de pared. Los de conductos o de ventana tienen el filtro en otro sitio: mira el manual.",
  "Si el aire sale con mal olor o poca fuerza, suele ser el filtro."],
 herramientas: ["Aspiradora con cepillo suave", "Cubo con agua tibia y jabón neutro", "Paño suave", "Escalera pequeña si hace falta"],
 compra: [
  "No necesitas comprar nada. Si el filtro está roto, pide el repuesto con el modelo del aparato."],
 seguridad: "Apaga el aparato con el mando y, para mayor tranquilidad, bájalo del automático. No toques las láminas metálicas del interior: cortan.",
 pasos: [
  P("Apaga el aparato", "Apágalo con el mando y espera a que dejen de moverse las lamas. Si quieres, baja su automático."),
  P("Abre el panel frontal", "Agarra la tapa por los lados y levántala hasta que quede fija con los topes."),
  P("Saca los filtros", "Tira suavemente hacia abajo y hacia ti. Anota cómo estaban colocados."),
  P("Quita el polvo con la aspiradora", "Pasa el cepillo suave por las dos caras para sacar el polvo seco."),
  P("Lávalos con agua tibia", "Usa agua a menos de 40 grados y jabón neutro. Frota con un paño suave, sin cepillos duros."),
  P("Seca a la sombra", "Déjalos secar del todo, nunca al sol ni con secador, porque se deforman."),
  P("Limpia la parte frontal", "Pasa un paño húmedo por la tapa y las rejillas, sin tocar las láminas metálicas interiores."),
  P("Vuelve a colocar y prueba", "Encaja los filtros en su sitio y cierra el panel. Enciende y comprueba que sale aire con fuerza.")
 ],
 problemas: [
  Q("Huele mal al encender", "Lava los filtros con agua y vinagre diluido. Si persiste, necesita limpieza profesional del interior."),
  Q("Sale poco aire", "Filtro sucio o mal colocado. Limpia y revisa su posición."),
  Q("Gotea por dentro", "El desagüe de condensados puede estar atascado: llama a un técnico."),
  Q("El filtro se ha deformado", "Se secó al sol o con calor. Cámbialo por uno nuevo.")
 ]
},
{
 id: "trasplantar", titulo: "Trasplantar una planta en maceta", categoria: "Jardinería",
 resumen: "Cuándo y cómo cambiar una planta a una maceta mayor sin dañar las raíces.",
 tiempo: "30 min", dificultad: "Fácil",
 antes: [
  "Señales de que necesita maceta nueva: raíces que salen por los agujeros, la tierra se seca en pocas horas, la planta no crece o está torcida.",
  "El mejor momento es primavera, cuando la planta empieza a crecer. Evita el pleno verano y el invierno.",
  "La maceta nueva debe ser solo 2-4 cm más ancha: si es demasiado grande, la tierra retiene agua y se pudren las raíces."],
 herramientas: ["Maceta nueva con agujeros", "Pala pequeña", "Guantes", "Tijeras limpias", "Periódico o lona", "Regadera"],
 compra: [
  "Sustrato adecuado a tu planta: universal, para cactus o para plantas de interior.",
  "Platos para recoger el agua.",
  "Arlita o grava para el fondo si el sustrato drena mal."],
 seguridad: "Usa guantes con cactus o plantas con espinas.",
 pasos: [
  P("Riega un día antes", "Con la tierra húmeda, el cepellón (el bloque de raíces y tierra) sale entero y no se rompen las raíces."),
  P("Prepara la maceta nueva", "Pon una capa de 2-3 cm de arlita o sustrato en el fondo. Comprueba que los agujeros están libres."),
  P("Saca la planta", "Gira la maceta, sujeta la base de la planta con los dedos y tira suavemente. Si no sale, golpea los lados con la mano.", DIB.planta),
  P("Revisa las raíces", "Quita las raíces secas o podridas con tijeras limpias. Si están muy enrolladas, suéltalas con los dedos."),
  P("Coloca la planta a la altura correcta", "Pon la planta centrada, con el cuello (donde empieza el tallo) unos 2 cm por debajo del borde."),
  P("Rellena con sustrato", "Echa sustrato alrededor y presiona suavemente para que no queden huecos. No lo compactes con fuerza."),
  P("Riega abundante", "Riega hasta que salga agua por los agujeros. Vacía el plato pasados 10 minutos."),
  P("Cuida la primera semana", "Pon la planta en semisombra y no abones durante un mes.")
 ],
 problemas: [
  Q("Se marchitan las hojas", "Es normal durante unos días. Evita el sol directo y riega con moderación."),
  Q("El cepellón se deshace", "Estaba seco. Riega antes y hazlo con más cuidado."),
  Q("El sustrato baja y deja la raíz al aire", "Añade más sustrato y riega."),
  Q("Huele a podrido", "Hay exceso de riego. Saca la planta, quita raíces podridas y cambia el sustrato.")
 ]
},
{
 id: "plantar-tomates", titulo: "Plantar tomates", categoria: "Huerto",
 resumen: "Plantar tomateras en huerto o maceta y cuidarlas hasta que den fruto.",
 tiempo: "1 hora", dificultad: "Fácil",
 antes: [
  "Planta cuando ya no haya riesgo de helada y las noches estén por encima de 10-12 grados. En gran parte de España, de abril a mayo.",
  "Necesitan sol directo al menos 6 horas al día y un sitio resguardado del viento.",
  "En maceta, usa una de al menos 20-30 litros por planta."],
 herramientas: ["Pala o plantador", "Tutor (caña o malla)", "Cuerda blanda", "Regadera", "Guantes"],
 compra: [
  "Plantones sanos, con tallo grueso y sin manchas en las hojas.",
  "Abono para tomate, con más potasio.",
  "Paja o acolchado para el suelo."],
 seguridad: "Lávate las manos tras tocar las hojas: pueden irritar la piel.",
 pasos: [
  P("Elige el sitio", "Un lugar soleado y con tierra suelta y rica. Si es maceta, que tenga buen drenaje."),
  P("Prepara la tierra", "Afloja 30 cm de profundidad y mezcla compost o abono orgánico."),
  P("Haz el hoyo", "Excava un hoyo profundo, con 50-60 cm de separación entre plantas."),
  P("Entierra el tallo hasta las primeras hojas", "Quita las hojas inferiores y entierra el tallo: echará raíces en la parte enterrada y la planta será más fuerte."),
  P("Clava el tutor y ata", "Coloca el tutor al lado y ata la planta con una cuerda blanda, sin apretar."),
  P("Riega al pie", "Riega abundante en la base, sin mojar las hojas, para evitar hongos."),
  P("Acolchado", "Cubre la tierra con paja para conservar la humedad."),
  P("Cuida durante el cultivo", "Riega 2-3 veces por semana, abona cada 15 días y quita los brotes que salen entre el tallo y las ramas (chupones) en variedades de crecimiento alto.")
 ],
 problemas: [
  Q("Hojas amarillas", "Exceso o falta de riego, o falta de abono. Ajusta el riego y abona."),
  Q("Los frutos se pudren por abajo", "Falta de calcio y riego irregular. Riega con regularidad y añade calcio."),
  Q("Hay manchas marrones en las hojas", "Puede ser hongo. Retira las hojas afectadas y no mojes las hojas al regar."),
  Q("No cuajan los frutos", "Hace demasiado calor o frío, o falta polinización. Sacude suavemente las flores.")
 ]
},
{
 id: "podar-rosales", titulo: "Podar rosales", categoria: "Jardinería",
 resumen: "Cuándo podar, dónde cortar y cómo dejar el rosal para que florezca mucho.",
 tiempo: "30-60 min", dificultad: "Fácil",
 antes: [
  "La poda principal se hace a finales de invierno, cuando las yemas empiezan a hincharse (en España, entre febrero y marzo según la zona).",
  "Distingue el tipo: los rosales de arbusto se podan fuerte; los trepadores solo se aclaran y se recortan los laterales.",
  "Ten las tijeras limpias y afiladas: un corte limpio cicatriza rápido."],
 herramientas: ["Tijeras de podar de dos hojas (bypass)", "Guantes gruesos", "Alcohol para desinfectar", "Gafas", "Cubo para restos"],
 compra: [
  "Tijeras de podar de calidad con corte tipo bypass.",
  "Abono para rosales para después de la poda.",
  "Guantes largos de cuero."],
 seguridad: "Usa guantes gruesos y gafas: las espinas hacen heridas profundas.",
 pasos: [
  P("Desinfecta las tijeras", "Pasa un trapo con alcohol por las hojas para no pasar enfermedades de una planta a otra."),
  P("Quita lo seco, enfermo y débil", "Corta las ramas secas, con manchas o finas como un lápiz, a ras de la base o hasta ver madera sana (el centro blanco)."),
  P("Elimina las ramas que se cruzan", "Quita las que crecen hacia dentro o se rozan entre sí, para que entre aire y luz."),
  P("Deja entre 3 y 5 ramas principales", "Elige las más fuertes y bien repartidas."),
  P("Corta a la altura correcta", "En rosales de arbusto, deja unos 20-30 cm. En trepadores, acorta los laterales a 2-3 yemas."),
  P("Haz el corte en diagonal", "Corta en ángulo de 45 grados, medio centímetro por encima de una yema que mire hacia fuera."),
  P("Retira los restos", "Recoge todo lo cortado y tíralo, no lo dejes en el suelo porque puede traer hongos."),
  P("Abona y riega", "Echa abono para rosales y riega. Notarás brotes nuevos en unas semanas.")
 ],
 problemas: [
  Q("No florece", "Falta sol o abono, o podaste demasiado tarde. Abona y asegúrate de que le llega luz."),
  Q("Salen manchas negras en las hojas", "Es un hongo. Retira las hojas afectadas y usa un fungicida para rosas."),
  Q("Se secan las puntas tras podar", "Corte demasiado cerca de la yema o con tijeras sin filo. Corta de nuevo por debajo."),
  Q("Brotan ramas muy largas y flojas", "Falta de luz. Pasa a una zona más soleada.")
 ]
},
{
 id: "cambiar-alcachofa", titulo: "Cambiar la alcachofa de la ducha", categoria: "Fontanería",
 resumen: "Cambiar la alcachofa o el flexo de la ducha en pocos minutos y sin fugas.",
 tiempo: "10-20 min", dificultad: "Muy fácil",
 antes: [
  "La rosca estándar es de 1/2 pulgada, así que casi todas las alcachofas del mercado valen. Comprueba que el flexo también lo es.",
  "Si el agua sale por varios sitios o con poca presión, quizá solo necesites descalcificarla (mira la guía de descalcificar).",
  "Si goteaba por la unión con el flexo, mira que la junta de goma esté en buen estado."],
 herramientas: ["Trapo", "Llave inglesa pequeña (si la rosca está pegada)", "Cinta de teflón (solo si no lleva junta)", "Cubo"],
 compra: [
  "Alcachofa con rosca de 1/2 pulgada y junta de goma incluida.",
  "Flexo de ducha de 1,5 m, si el viejo está dañado.",
  "Cinta de teflón."],
 seguridad: "Cuidado con el suelo mojado de la ducha: coloca una alfombrilla antideslizante.",
 pasos: [
  P("Cierra el agua", "Gira el mando a cerrado. Si el flexo gotea, cierra las llaves de escuadra o la general."),
  P("Protege la rosca con un trapo", "Envuelve la unión con un trapo para no rayarla."),
  P("Desenrosca la alcachofa vieja", "Gira hacia la izquierda, a mano o con la llave inglesa si está pegada."),
  P("Limpia la rosca", "Quita restos de cal y teflón con un trapo o un cepillo de dientes viejo."),
  P("Comprueba la junta", "Mira la junta de goma dentro de la alcachofa nueva. Si no la lleva, añade cinta de teflón alrededor de la rosca del flexo, 3 vueltas en el sentido de las agujas del reloj."),
  P("Enrosca la nueva a mano", "Gira hacia la derecha hasta que haga tope, sin forzar. Un cuarto de vuelta más con la llave solo si gotea."),
  P("Abre el agua y comprueba", "Abre el agua despacio. Seca la unión con papel de cocina y mira si aparece humedad durante un minuto.")
 ],
 problemas: [
  Q("Gotea por la unión", "Falta junta o teflón, o no está bien enroscada. Desmonta y revisa."),
  Q("No se desenrosca la vieja", "Usa agua caliente, vinagre y una llave inglesa con trapo."),
  Q("Sale poca agua", "Hay cal en el flexo o en el filtro de la alcachofa. Descalcifica."),
  Q("El flexo gotea por la otra unión", "Cambia el flexo entero.")
 ]
}
];
LOTE_9.forEach(n => { const i = TUTORIALES.findIndex(t => t.id === n.id); if (i >= 0) TUTORIALES[i] = n; else TUTORIALES.push(n); });
