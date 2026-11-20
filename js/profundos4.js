/* Lote en profundidad: sifón, silicona, radiadores y seto */
const LOTE_4 = [
{
 id: "cambiar-sifon", titulo: "Cambiar el sifón del lavabo", categoria: "Fontanería",
 resumen: "Cómo desmontar, medir y montar un sifón nuevo sin fugas.",
 tiempo: "30-45 min", dificultad: "Fácil",
 antes: [
  "Mira dónde gotea o huele: por las tuercas, por el vaso inferior o por el tubo de pared. Si solo está sucio, a veces basta limpiarlo en vez de cambiarlo.",
  "El sifón es la pieza con forma de U o botella bajo el desagüe: guarda un poco de agua que bloquea los olores del alcantarillado.",
  "Mide los diámetros: la válvula del lavabo suele ser de 32 mm y el tubo de pared de 32 o 40 mm."],
 herramientas: ["Cubo y trapos", "Guantes", "Linterna", "Alicates de bomba de agua (por si una tuerca se resiste)", "Metro", "Móvil para fotos"],
 compra: [
  "Sifón de botella extensible para lavabo, de 32 mm, con tubo de salida y juntas incluidas.",
  "Si el tubo de pared es de 40 mm, pide una reducción o un sifón para esa medida.",
  "Lleva el sifón viejo a la tienda para comparar."],
 seguridad: "No necesitas cerrar el agua, pero ten cuidado: el sifón guarda agua sucia. Usa guantes.",
 pasos: [
  P("Vacía lo que haya bajo el lavabo y coloca el cubo", "Quita productos y cualquier cosa de debajo. Coloca el cubo justo bajo el sifón y unos trapos alrededor.", DIB.sifon),
  P("Haz una foto del montaje", "Fotografía el sifón desde varios ángulos: te servirá para montar el nuevo igual de bien. Fíjate sobre todo en cómo están colocadas las juntas de goma."),
  P("Desenrosca la tuerca de abajo", "Es la que une el sifón con el tubo de pared, hacia la izquierda y a mano. Ayúdate de unos alicates solo si no sale. Cae agua: déjala caer al cubo."),
  P("Desenrosca la tuerca de arriba", "Es la que une el sifón a la válvula del lavabo. Sujeta el sifón con la otra mano para que no caiga."),
  P("Saca el sifón y revisa las uniones", "Mira la válvula del lavabo y el tubo de pared por si están rotos o muy sucios. Limpia las superficies con un trapo."),
  P("Prepara el nuevo", "Monta el sifón sin apretar, siguiendo las instrucciones. Coloca las juntas en el mismo sentido en que estaban en el viejo."),
  P("Conecta arriba y abajo", "Primero la unión al lavabo y luego el tubo de pared. Aprieta a mano hasta que quede firme: no hace falta herramienta."),
  P("Prueba con agua", "Pon un papel de cocina bajo cada unión. Llena el lavabo y vacíalo de golpe. Observa 5 minutos: no debe haber ni una gota.")
 ],
 problemas: [
  Q("Gotea por una tuerca", "Falta junta o está mal colocada. Desmonta, coloca la junta en el mismo sentido que antes y aprieta a mano."),
  Q("No llega al tubo de pared", "Usa un sifón extensible o un tubo de prolongación."),
  Q("Huele mal aunque es nuevo", "Falta agua en el sifón o el tubo de pared está sucio. Vierte agua y limpia el tubo."),
  Q("La tuerca está atascada", "Moja con agua caliente, espera y usa unos alicates con un trapo para no dañar el plástico.")
 ]
},
{
 id: "silicona-banera", titulo: "Cambiar la silicona de la bañera", categoria: "Limpieza y mantenimiento",
 resumen: "Quitar la silicona vieja, limpiar y sellar la junta sin burbujas ni manchas.",
 tiempo: "2 horas + 24 h de secado", dificultad: "Fácil",
 antes: [
  "Si la silicona está negra de moho, despegada o con grietas, hay que quitarla entera. Aplicar encima no sirve.",
  "Elige un día sin prisa: la silicona nueva necesita unas 24 horas sin agua.",
  "Si hay humedad detrás de la junta, ventila antes y espera a que seque."],
 herramientas: ["Cúter o rasqueta de silicona", "Gel quitasiliconas (opcional)", "Alcohol o desengrasante", "Trapos", "Cinta de carrocero", "Pistola de silicona", "Espátula o un dedo con agua jabonosa", "Guantes"],
 compra: [
  "Silicona sanitaria con fungicida (para baños), color blanco o transparente.",
  "Cinta de carrocero estrecha.",
  "Pistola para cartucho si no tienes."],
 seguridad: "Ventila el baño y usa guantes: la silicona huele y puede irritar la piel.",
 pasos: [
  P("Corta y retira la silicona vieja", "Pasa el cúter por los dos lados de la junta y tira de la silicona con los dedos. Raspa los restos con la rasqueta. Si cuesta, aplica gel quitasiliconas y espera según el envase."),
  P("Limpia a fondo", "Frota la junta con alcohol o desengrasante hasta que no quede grasa ni jabón. Si hay moho, trátalo con antimoho."),
  P("Seca completamente", "Deja secar al menos una hora. Mejor, usa un secador. La silicona no agarra si hay humedad."),
  P("Llena la bañera de agua", "Llénala hasta arriba para que baje con su peso y la junta quede en su posición. Si no, al vaciarla la silicona se agrieta."),
  P("Pon la cinta a ambos lados", "Pega cinta paralela a la junta, dejando 3-4 mm de hueco. Así el cordón queda recto.", DIB.silicona),
  P("Prepara la pistola", "Corta la boquilla en diagonal para que el hueco sea de unos 3-4 mm. Introduce el cartucho y presiona el gatillo hasta que salga silicona."),
  P("Aplica el cordón de una vez", "Avanza sin parar y con presión constante, de un extremo al otro. Si paras, se nota la unión."),
  P("Alisa y quita la cinta", "Pasa un dedo con agua jabonosa o una espátula suave. Quita la cinta enseguida, tirando en diagonal y despacio.")
 ],
 problemas: [
  Q("Quedan burbujas", "Faltó presión al aplicar. Aprieta con el dedo mojado en jabón; si son muchas, quítala y repite."),
  Q("No se pega", "La junta estaba húmeda o con jabón. Quita la silicona, limpia y seca bien."),
  Q("El cordón queda irregular", "Alisa mejor o usa cinta. Si ya ha secado, quítala y repite."),
  Q("Se agrieta al vaciar la bañera", "No llenaste la bañera durante el secado. Hay que repetir.")
 ]
},
{
 id: "purgar-radiadores", titulo: "Purgar los radiadores", categoria: "Limpieza y mantenimiento",
 resumen: "Cómo sacar el aire de los radiadores y comprobar la presión de la caldera.",
 tiempo: "30-60 min", dificultad: "Fácil",
 antes: [
  "Tu radiador necesita purgarse si está frío por arriba y caliente por abajo, o si oyes burbujeo o gorgoteo.",
  "Hazlo con la calefacción apagada y los radiadores fríos o templados, para evitar quemaduras.",
  "Empieza por el radiador más bajo y cercano a la caldera, y sube."],
 herramientas: ["Llave de purgador (cuadrada, pequeña) o destornillador plano", "Trapo o recipiente pequeño", "Guantes", "Linterna"],
 compra: [
  "Llave de purgar: cuesta pocos euros. Si no hay purgador manual, usa un destornillador plano.",
  "Agua de llenado: es la misma de la red, no necesitas comprar nada."],
 seguridad: "Si la calefacción estaba encendida, espera a que se enfríe. El agua que sale puede estar caliente.",
 pasos: [
  P("Apaga la calefacción y espera", "Apaga la caldera y la bomba y espera 30 minutos. Así se asienta el aire en la parte alta de los radiadores."),
  P("Localiza el purgador", "Está en la parte superior de un lateral del radiador: un tornillo pequeño con un orificio cuadrado o ranura.", DIB.radiador),
  P("Coloca el trapo", "Pon un trapo o un recipiente bajo el purgador para recoger el agua que salga."),
  P("Abre el purgador", "Gira solo un cuarto o media vuelta a la izquierda con la llave. No lo abras más: puede soltarse el tornillo y salir agua a presión."),
  P("Deja salir el aire", "Oirás un silbido. Cuando el sonido cese y empiece a salir agua, ciérralo girando a la derecha. Aprieta sin forzar."),
  P("Repite en los demás radiadores", "Hazlo uno a uno, subiendo de planta si hay más de una."),
  P("Comprueba la presión de la caldera", "Mira el manómetro de la caldera: en frío debe marcar entre 1 y 1,5 bar. Si ha bajado, rellena con la llave de llenado según el manual de tu caldera."),
  P("Enciende la calefacción y comprueba", "Pon la calefacción y espera. Toca la parte alta y la baja de cada radiador: deben estar igual de calientes.")
 ],
 problemas: [
  Q("No sale aire ni agua", "El purgador está atascado. Ciérralo y prueba con otro; si persiste, llama a un técnico."),
  Q("Sigue frío por arriba", "Queda aire. Purga otra vez y espera."),
  Q("La presión de la caldera ha bajado", "Es normal tras purgar. Rellena con la llave de llenado hasta 1-1,5 bar."),
  Q("Gotea el purgador al cerrar", "Aprieta un poco más; si sigue, cambia el purgador.")
 ]
},
{
 id: "podar-seto", titulo: "Podar un seto", categoria: "Jardinería",
 resumen: "Cuándo podar, cómo dar la forma correcta y qué cuidar para que no se estropee.",
 tiempo: "1-3 horas", dificultad: "Fácil-Media",
 antes: [
  "Revisa el seto por si hay nidos: no se poda en plena época de cría (primavera) si hay pájaros anidando.",
  "Averigua qué planta es: laurel, ligustro y la mayoría de setos de hoja ancha rebrotan bien. Las coníferas (tuya, ciprés, enebro) no rebrotan desde madera sin hojas: no cortes más allá de la parte verde.",
  "Elige un día seco y sin sol fuerte."],
 herramientas: ["Cortasetos eléctrico o tijeras de dos manos", "Guantes", "Gafas", "Orejeras (si es eléctrico)", "Cuerda y estacas para guía", "Lona para recoger restos", "Rastrillo", "Escalera de tijera si el seto es alto"],
 compra: [
  "Tijeras de podar de seto de hoja bimaterial o un cortasetos de 50-60 cm de hoja.",
  "Cuerda de albañil y dos estacas.",
  "Lona o sacos para los restos."],
 seguridad: "Usa gafas, guantes y orejeras. Con cortasetos eléctrico, mantén el cable detrás de ti y nunca cortes con una mano sola.",
 pasos: [
  P("Revisa el seto y busca nidos", "Recorre el seto buscando nidos. Si los hay, espera a que los pájaros se vayan."),
  P("Coloca una cuerda guía", "Clava dos estacas en los extremos y tensa una cuerda a la altura que quieres. Te servirá de referencia.", DIB.seto),
  P("Extiende la lona", "Coloca la lona bajo el seto para recoger lo que cortes y limpiar rápido."),
  P("Poda los laterales", "Empieza por abajo y sube con movimientos suaves y paralelos. Deja el seto algo más ancho por abajo que por arriba (forma de trapecio), para que la luz llegue a la parte baja."),
  P("Poda la parte de arriba", "Sigue la cuerda guía. Corta en horizontal sin hundir las hojas."),
  P("Rebaja el volumen si es necesario", "No cortes más de un tercio de la altura de una vez. En coníferas, deja siempre hojas verdes."),
  P("Recoge y limpia", "Junta los restos con el rastrillo y la lona. Se pueden triturar y echar al compost."),
  P("Riega y abona", "Da un riego abundante y, si es primavera, un abono de liberación lenta para que rebrote fuerte.")
 ],
 problemas: [
  Q("Quedan huecos o zonas marrones", "Cortaste demasiado en madera sin hojas. En coníferas no vuelve a brotar: espera o replanta."),
  Q("Queda desigual", "Revisa con la cuerda guía y recorta con tijeras."),
  Q("Se ponen amarillas las hojas", "Falta riego o abono. Riega y abona con liberación lenta."),
  Q("Hay nidos y no sé qué hacer", "No poda ni cortes cerca. Espera a que acabe la cría.")
 ]
}
];
LOTE_4.forEach(n => { const i = TUTORIALES.findIndex(t => t.id === n.id); if (i >= 0) TUTORIALES[i] = n; else TUTORIALES.push(n); });
