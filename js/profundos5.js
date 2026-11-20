/* Lote en profundidad: riego, césped, bisagras y ventana */
const LOTE_5 = [
{
 id: "riego-goteo", titulo: "Montar un riego por goteo", categoria: "Jardinería",
 resumen: "Diseño, montaje de la cabecera, tubos y goteros, y programación del riego.",
 tiempo: "2-3 horas", dificultad: "Media",
 antes: [
  "Dibuja un plano sencillo del jardín con las plantas y la distancia al grifo. Mide en metros: así sabrás cuánta tubería necesitas.",
  "Necesitas presión estable en el grifo. Si sale muy poca agua, el goteo no funcionará bien.",
  "Cuenta los goteros: 1 por planta pequeña, 2 por arbusto y 3-4 por árbol joven."],
 herramientas: ["Tijeras de podar o cúter", "Punzón perforador de goteros", "Cinta métrica", "Estacas o grapas de fijación", "Alicates"],
 compra: [
  "Tubería de polietileno de 16 mm: la longitud total de tu plano más un 10 %.",
  "Goteros autocompensantes de 2 o 4 litros por hora, uno por cada punto de riego.",
  "Programador de grifo, filtro de malla y reductor de presión (si tu presión es alta), adaptador de grifo y tapón final."],
 seguridad: "Cierra el grifo antes de montar nada y no pises los tubos cuando estén llenos y calientes por el sol.",
 pasos: [
  P("Dibuja el plano y calcula el material", "Marca el grifo, el recorrido del tubo y cada planta. Suma los metros de tubo y cuenta los goteros. Añade un 10 % de tubo por si te equivocas al cortar."),
  P("Monta la cabecera en el grifo", "Conecta en este orden: grifo, programador, filtro, reductor de presión y, por último, el tubo de 16 mm. Aprieta a mano y, si hay fugas, añade cinta de teflón."),
  P("Extiende el tubo y deja que se ablande al sol", "Despliega el tubo siguiendo tu plano. Déjalo 10 minutos al sol: se ablanda y se manipula mejor. Evita dobleces y cruces con caminos."),
  P("Corta el tubo recto", "Usa unas tijeras limpias para que el corte sea perpendicular. Los cortes torcidos o con rebabas producen fugas en las uniones."),
  P("Perfora e instala los goteros", "Con el punzón, haz un agujero junto a cada planta y empuja el gotero hasta el fondo. Debe quedar firme, sin holguras.", DIB.goteo),
  P("Fija el tubo y cierra el final", "Clava una estaca o grapa cada metro para que el tubo no se mueva. Pon el tapón final al terminar."),
  P("Enjuaga antes de cerrar", "Abre el grifo con el final del tubo abierto unos 30 segundos para sacar tierra y restos. Luego cierra el final con el tapón."),
  P("Prueba y programa", "Abre el grifo y observa 10 minutos: cada gotero debe gotear de forma pareja. Programa el riego a primera hora de la mañana o al anochecer, unos 20-30 minutos al día en verano, y ajusta según las plantas.")
 ],
 problemas: [
  Q("Algunos goteros no gotean", "Están atascados o mal colocados. Sácalos, límpialos con agua o cámbialos."),
  Q("Hay fugas en las uniones", "El corte no era recto o falta apretar. Vuelve a cortar limpio y empuja hasta el fondo."),
  Q("Sale poca agua en el final del tubo", "Hay demasiados goteros para la presión. Divide el riego en dos zonas."),
  Q("El tubo se sale del conector", "Usa conectores con anillo de bloqueo o calienta el extremo del tubo antes de empujar.")
 ]
},
{
 id: "sembrar-cesped", titulo: "Sembrar césped", categoria: "Jardinería",
 resumen: "Preparar el suelo, sembrar a la dosis correcta, y cuidar el césped hasta el primer corte.",
 tiempo: "1 día + 3 semanas de cuidado", dificultad: "Media",
 antes: [
  "La mejor época es otoño o primavera, con temperaturas entre 10 y 25 °C. Evita el pleno verano y el invierno.",
  "Elige la mezcla según el uso (juego, ornamental) y la luz: hay mezclas para sol y para sombra.",
  "Tendrás que regar a diario durante unas tres semanas. Si no puedes, espera."],
 herramientas: ["Azadón o motoazada", "Rastrillo", "Rodillo o tablón para compactar", "Manguera con aspersor", "Carretilla", "Guantes"],
 compra: [
  "Semilla de césped: unos 30 g por metro cuadrado (mira el envase).",
  "Abono de fondo o de arranque para césped.",
  "Mantillo o tierra vegetal fina para cubrir."],
 seguridad: "Usa guantes y calzado cerrado al trabajar la tierra.",
 pasos: [
  P("Quita hierbas, piedras y raíces", "Arranca las malas hierbas con raíz y retira piedras y escombros. Cuanto más limpio quede el terreno, mejor nacerá el césped."),
  P("Remueve la tierra", "Con el azadón o la motoazada, remueve 10-15 cm de profundidad. Rompe los terrones grandes."),
  P("Nivela con el rastrillo", "Rastrilla en dos direcciones para que quede liso. Rellena los huecos y quita los montículos: el agua no debe acumularse."),
  P("Echa abono de fondo", "Reparte el abono por todo el terreno y mézclalo ligeramente con el rastrillo."),
  P("Compacta suavemente", "Pasa el rodillo o camina con pasos cortos. Vuelve a rastrillar la superficie sin dejarla muy suelta."),
  P("Siembra a la dosis correcta", "Pesa la semilla para repartir unos 30 g por m². Siembra en dos pasadas cruzadas: una de norte a sur y otra de este a oeste."),
  P("Cubre la semilla", "Pasa el rastrillo muy suave o echa una capa de 0,5 cm de mantillo. Pasa el rodillo para que la semilla toque la tierra."),
  P("Riega fino y a diario", "Con aspersor o lluvia fina, dos veces al día 10 minutos, manteniendo la tierra húmeda sin encharcar. Nacerá en 7-14 días. Haz el primer corte cuando mida 8-10 cm, dejándolo en 5-6 cm.")
 ],
 problemas: [
  Q("Nace a manchas", "Faltó semilla o riego en esas zonas. Siembra de nuevo en los huecos y riega."),
  Q("Se la comen los pájaros", "Cubre con mantillo o una malla fina durante las dos primeras semanas."),
  Q("La semilla se desplaza con la lluvia", "El terreno tiene pendiente o no se compactó. Usa malla de protección."),
  Q("Se ponen amarillas las hojas", "Exceso de riego o falta de abono. Reduce el riego y abona.")
 ]
},
{
 id: "bisagras-chirrian", titulo: "Arreglar una puerta que chirría", categoria: "Puertas y carpintería",
 resumen: "Lubricar bien las bisagras, sin quitar la puerta, y evitar que vuelvan a chirriar.",
 tiempo: "15-30 min", dificultad: "Muy fácil",
 antes: [
  "Abre y cierra la puerta despacio para saber qué bisagra suena: suele ser una sola.",
  "Si la puerta además roza, mira primero la guía de la puerta que roza: puede que las bisagras estén flojas.",
  "El aceite de cocina no sirve: se vuelve pegajoso con el tiempo."],
 herramientas: ["Lubricante en spray de silicona o grasa blanca", "Trapo", "Destornillador fino o clavo grande", "Martillo pequeño", "Cuña de madera para la puerta", "Lana de acero fina (por si hay óxido)"],
 compra: [
  "Spray de silicona o grasa blanca de litio. El aceite multiusos (tipo 3 en 1) vale de forma temporal, pero atrae polvo.",
  "Cuña de madera o un trozo de cartón grueso."],
 seguridad: "Protege el suelo con un trapo para no mancharlo.",
 pasos: [
  P("Localiza la bisagra que chirría", "Abre y cierra la puerta lentamente cerca de cada bisagra. Escucha con atención hasta localizar la que suena."),
  P("Cala la puerta", "Pon una cuña bajo el borde de la puerta para que no se mueva mientras trabajas, y un trapo bajo la bisagra."),
  P("Levanta el pasador unos centímetros", "Coloca la punta del clavo bajo la cabeza del pasador y golpea suavemente hacia arriba, solo lo suficiente para que quede libre. No lo saques del todo.", DIB.bisagra),
  P("Limpia el pasador", "Si hay óxido, frótalo con lana de acero fina y limpia con un trapo."),
  P("Aplica el lubricante", "Pon unas gotas o un breve disparo del spray en el pasador y entre las dos hojas de la bisagra."),
  P("Vuelve a bajar el pasador", "Golpea suavemente hacia abajo para que quede en su sitio. Abre y cierra la puerta 10 veces para repartir el lubricante."),
  P("Limpia el sobrante", "Seca con un trapo lo que haya goteado y comprueba que la puerta ya no suena.")
 ],
 problemas: [
  Q("Sigue chirriando", "Puede que la bisagra siga seca o el pasador esté desgastado. Repite con más lubricante o cambia el pasador."),
  Q("La puerta se queda caída", "Hay tornillos flojos. Apriétalos y sigue la guía de la puerta que roza."),
  Q("Mancha la pared o el suelo", "Usó demasiado producto. Limpia con trapo y jabón neutro."),
  Q("El pasador no sale", "Está oxidado. Echa lubricante y espera 15 minutos antes de golpear.")
 ]
},
{
 id: "sellar-ventana", titulo: "Sellar una ventana para el frío y el ruido", categoria: "Ventanas y exteriores",
 resumen: "Localizar las fugas, elegir el burlete correcto y sellar marco y pared.",
 tiempo: "1-2 horas", dificultad: "Fácil",
 antes: [
  "Encuentra las fugas: con la ventana cerrada, acerca una vela o un incienso al marco en un día de viento. Si la llama se mueve, ahí hay una fuga.",
  "Mide el hueco que queda entre la hoja y el marco: unos 2-3 mm admiten burletes finos; 4-6 mm necesitan uno más grueso.",
  "Si la ventana es muy vieja y no cierra, puede que sea mejor cambiarla."],
 herramientas: ["Tijeras", "Metro", "Alcohol y trapo", "Pistola de silicona", "Espátula", "Cinta de carrocero"],
 compra: [
  "Burlete adhesivo de goma tipo E o D para huecos de 2-4 mm; tipo P para huecos de 4-6 mm.",
  "Silicona neutra o acrílica exterior para sellar entre el marco y la pared.",
  "Alcohol para limpiar."],
 seguridad: "Si trabajas en altura, usa una escalera estable y ten cuidado con los cristales.",
 pasos: [
  P("Localiza las fugas", "Con la ventana cerrada, pasa una vela o incienso por el contorno del marco. Marca con cinta los puntos donde la llama se mueve.", DIB.ventana),
  P("Mide el hueco y compra el burlete", "Usa un trozo de cartón doblado o una regla para medir el hueco. Compra el burlete adecuado."),
  P("Limpia el marco", "Quita polvo y grasa con un trapo y alcohol. Deja secar bien: el adhesivo no pega en húmedo."),
  P("Mide y corta el burlete", "Mide cada lado del marco y corta el burlete con tijeras, 1 cm más largo para compensar al pegar."),
  P("Pega sin estirar", "Despega el papel protector poco a poco y presiona. No estires el burlete, porque se encoge y deja huecos en las esquinas."),
  P("Sella el exterior con silicona", "Pega cinta a ambos lados de la junta entre marco y pared, aplica un cordón de silicona y alisa con un dedo con agua jabonosa. Quita la cinta enseguida."),
  P("Cierra y comprueba", "Cierra la ventana: debe cerrar firme pero sin forzar. Repite la prueba de la vela.")
 ],
 problemas: [
  Q("La ventana ya no cierra", "El burlete es demasiado grueso. Usa uno más fino."),
  Q("El burlete se despega", "El marco estaba sucio o húmedo. Limpia con alcohol y vuelve a pegar."),
  Q("Sigue entrando aire", "La fuga está en otra zona. Repite la prueba y revisa esquinas y persiana."),
  Q("Hay humedad en el cristal", "Falta ventilación. Abre 10 minutos al día y revisa la junta del vidrio.")
 ]
}
];
LOTE_5.forEach(n => { const i = TUTORIALES.findIndex(t => t.id === n.id); if (i >= 0) TUTORIALES[i] = n; else TUTORIALES.push(n); });
