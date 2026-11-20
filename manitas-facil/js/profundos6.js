/* Lote en profundidad: bombín, lavadora, canalones y ducha */
const LOTE_6 = [
{
 id: "cambiar-bombin", titulo: "Cambiar el bombín de una cerradura", categoria: "Puertas y carpintería",
 resumen: "Medir bien, sacar el bombín viejo, colocar el nuevo y comprobar que la leva acciona el pestillo.",
 tiempo: "20-30 min", dificultad: "Fácil",
 antes: [
  "El bombín es el cilindro donde metes la llave. Tu puerta casi seguro lleva uno de perfil europeo, con un tornillo de fijación en el canto de la puerta.",
  "Pruébalo con la puerta abierta: si la cierras con el bombín desmontado puede quedar mal y no abrir. Trabaja siempre con la puerta abierta y con una cuña.",
  "Comprueba que la cerradura (la caja de metal en el canto de la puerta) no está rota: este tutorial solo cambia el bombín."],
 herramientas: ["Destornillador plano o de estrella (según el tornillo)", "Metro o calibre", "Llave del bombín viejo", "Cuña para mantener la puerta abierta", "Lubricante de grafito (opcional)"],
 compra: [
  "Un bombín de perfil europeo con las mismas medidas, por ejemplo 30/30 o 30/35 mm (lado exterior / lado interior).",
  "Mejor un modelo con protección antibumping y antitaladro, y con 5 o más llaves.",
  "Si tu puerta es de seguridad con escudo, compra uno que no sobresalga del escudo."],
 seguridad: "Deja la puerta abierta y calzada mientras trabajas. Prueba siempre la llave por los dos lados antes de cerrar la puerta.",
 pasos: [
  P("Abre la puerta y cálzala", "Pon una cuña para que no se cierre. Guarda a mano la llave del bombín nuevo antes de empezar."),
  P("Localiza el tornillo de fijación", "Mira el canto de la puerta, a la altura de la cerradura. Verás un tornillo situado en el frontal metálico: sujeta el bombín."),
  P("Mide el bombín viejo", "Mide desde el centro del tornillo hasta cada extremo del bombín: un lado y el otro. Esas son las dos medidas (por ejemplo 30 y 35 mm). Anótalas y llévate el viejo a la tienda."),
  P("Afloja el tornillo sin quitarlo del todo", "Gira a la izquierda unas 3-4 vueltas, hasta que el bombín quede libre. No hace falta sacarlo completamente."),
  P("Saca el bombín", "Mete la llave y gírala unos 45 grados hasta que la leva (la pieza que acciona el pestillo) quede alineada con el hueco. Tira recto del bombín hacia fuera. Si no sale, mueve la llave con suavidad hasta la posición donde sí salga."),
  P("Coloca el bombín nuevo", "Con la llave puesta, gira hasta la misma posición que tenía el viejo. Introduce el bombín recto y empújalo hasta que el agujero del tornillo coincida con el del bombín."),
  P("Fija y comprueba la posición", "Atornilla el tornillo hasta que apriete, sin pasarte. El bombín no debe sobresalir más de 3 mm del escudo."),
  P("Prueba antes de cerrar", "Con la puerta abierta, gira la llave por dentro y por fuera: el pestillo debe entrar y salir con suavidad. Cierra la puerta y repite.")
 ],
 problemas: [
  Q("La llave no gira", "La leva no está alineada. Saca el bombín y colócalo con la leva paralela al canto."),
  Q("El bombín sobresale mucho", "Es demasiado largo. Cambia por uno más corto para mejorar la seguridad."),
  Q("El bombín nuevo se mueve", "Falta apretar el tornillo de fijación."),
  Q("El pestillo no sale del todo", "El bombín está mal medido o la leva está torcida. Revisa las medidas.")
 ]
},
{
 id: "limpiar-filtro-lavadora", titulo: "Limpiar el filtro de la lavadora", categoria: "Limpieza y mantenimiento",
 resumen: "Cómo vaciar el agua, sacar el filtro, limpiar la bomba y volver a montar sin fugas.",
 tiempo: "20-30 min", dificultad: "Muy fácil",
 antes: [
  "Hazlo si la lavadora tarda en vaciar, huele mal, hace ruido al centrifugar o muestra un error de desagüe.",
  "Normalmente el filtro está tras una trampilla pequeña abajo a la derecha en el frontal. Si no la ves, mira en el manual.",
  "Prepárate para que salga agua: puede ser más de un litro."],
 herramientas: ["Bandeja plana o recipiente ancho", "Toallas viejas", "Guantes", "Linterna", "Destornillador plano (para abrir la trampilla)"],
 compra: [
  "No necesitas comprar nada. Si el filtro está roto, pide el repuesto por el modelo de tu lavadora."],
 seguridad: "Desenchufa la lavadora. Si la acabas de usar, el agua puede estar caliente: espera 30 minutos.",
 pasos: [
  P("Desenchufa y deja enfriar", "Desconecta de la corriente. Si se acaba de usar, espera a que el agua se enfríe."),
  P("Prepara el suelo", "Coloca toallas y la bandeja frente a la trampilla. Si la lavadora está alta, pon la bandeja plana."),
  P("Abre la trampilla", "Haz palanca con el destornillador en la ranura o tira del borde. Verás el filtro: un tapón redondo con asa."),
  P("Vacía el agua", "Si hay un tubito de emergencia, sácalo, quita el tapón y deja salir el agua en la bandeja. Si no, afloja el filtro un poco para que salga agua poco a poco."),
  P("Saca el filtro", "Gira a la izquierda sin prisa. Cuando se suelte, tira hacia ti con cuidado.", DIB.sifon),
  P("Limpia el filtro", "Quita pelusas, monedas, pelos y suciedad. Lávalo con agua y un cepillo. Revisa que no esté roto."),
  P("Mira la bomba con una linterna", "Mira el hueco donde estaba el filtro. Comprueba que la hélice de la bomba gira con el dedo. Quita lo que veas enredado."),
  P("Vuelve a montar", "Enrosca el filtro a la derecha hasta que haga tope. Cierra el tubito de emergencia y la trampilla. Enchufa y haz un programa corto para comprobar que no gotea.")
 ],
 problemas: [
  Q("Gotea por el filtro", "No está bien enroscado o falta la junta. Desmonta, revisa y aprieta."),
  Q("La hélice no gira", "Hay algo atascado. Quita la obstrucción con unos alicates de punta."),
  Q("Sale mucha agua", "Es normal. Ten una bandeja plana y toallas."),
  Q("Sigue sin vaciar", "Puede estar atascada la manguera de desagüe. Revísala o llama a un técnico.")
 ]
},
{
 id: "limpiar-canalones", titulo: "Limpiar los canalones", categoria: "Ventanas y exteriores",
 resumen: "Cómo limpiarlos con seguridad desde la escalera, comprobar el desagüe y evitar goteras.",
 tiempo: "1-2 horas", dificultad: "Media",
 antes: [
  "Lo ideal es limpiarlos en otoño, cuando han caído las hojas, y de nuevo en primavera.",
  "No subas al tejado. Trabaja desde una escalera bien apoyada y, si el canalón es alto o difícil, llama a un profesional.",
  "Comprueba que no haya cables eléctricos cerca y que el suelo esté firme."],
 herramientas: ["Escalera estable", "Guantes", "Paleta de plástico o cuchara grande", "Cubo con gancho", "Manguera", "Lona", "Cepillo de cerdas duras"],
 compra: [
  "Rejilla protectora para canalones, si quieres evitar que se llenen de hojas.",
  "Muelle desatascador para bajantes."],
 seguridad: "Apoya la escalera con un ángulo de unos 75 grados: la base separada del muro 1 metro por cada 4 metros de altura. Pide a alguien que la sujete. No te estires: mueve la escalera.",
 pasos: [
  P("Prepara la zona", "Extiende una lona bajo el canalón para recoger los restos y colócate sobre suelo firme.", DIB.escalera),
  P("Coloca la escalera", "Abre y apoya la escalera con el ángulo correcto. Que alguien la sujete."),
  P("Retira hojas y suciedad", "Con la paleta y guantes, saca los restos del canalón y échalos al cubo. Cuelga el cubo en un escalón."),
  P("Cepilla el interior", "Frota con el cepillo para quitar el barro pegado."),
  P("Aclara con la manguera", "Empieza por el extremo más alejado del bajante y avanza hacia él para empujar la suciedad."),
  P("Comprueba el bajante", "Si el agua no baja, hay un atasco en el bajante. Introduce la manguera a presión o un muelle desatascador."),
  P("Revisa uniones y pendiente", "Fíjate si hay fugas, óxido o tramos que retengan agua. Sella las uniones con silicona exterior."),
  P("Recoge y limpia", "Junta los restos de la lona y tíralos. Guarda la escalera.")
 ],
 problemas: [
  Q("El agua no baja por el bajante", "Está atascado. Usa un muelle o aplica presión con la manguera desde arriba."),
  Q("Gotea por una unión", "Sella con silicona exterior."),
  Q("El canalón retiene agua", "Está mal inclinado. Ajusta los soportes para que baje hacia el bajante."),
  Q("Se vuelve a llenar de hojas", "Instala una rejilla protectora.")
 ]
},
{
 id: "desague-ducha", titulo: "Desatascar el desagüe de la ducha", categoria: "Fontanería",
 resumen: "Quitar el pelo y el jabón del desagüe, usar ventosa o muelle y prevenir futuros atascos.",
 tiempo: "20-40 min", dificultad: "Fácil",
 antes: [
  "El atasco suele ser pelo mezclado con jabón en la rejilla o en el sifón justo debajo.",
  "Si también se atasca el lavabo o el váter, el problema está en el bajante general: llama a un fontanero.",
  "No mezcles productos químicos entre sí y no uses agua hirviendo en tuberías de plástico."],
 herramientas: ["Destornillador", "Gancho de alambre o tira desatascadora de plástico", "Guantes", "Desatascador de ventosa", "Muelle desatascador", "Cubo", "Linterna"],
 compra: [
  "Tira desatascadora de plástico con dientes, unos 2-3 €.",
  "Rejilla filtro para el desagüe de la ducha.",
  "Bicarbonato y vinagre blanco."],
 seguridad: "Usa guantes. El agua estancada puede tener bacterias.",
 pasos: [
  P("Quita la rejilla", "Mira si lleva tornillo en el centro. Si no, haz palanca suave con un destornillador plano en el borde. Guarda las piezas."),
  P("Saca el pelo que se ve", "Con el gancho de alambre o la tira desatascadora, tira de los pelos. Hazlo con guantes y mete la tira hasta donde puedas.", DIB.sifon),
  P("Limpia el tapón sifónico", "Muchas duchas tienen un tapón con forma de bote bajo la rejilla. Sácalo y limpia por dentro."),
  P("Usa la ventosa", "Pon 3 cm de agua en la ducha, coloca la ventosa y empuja y tira 15-20 veces. Levántala de golpe al final."),
  P("Echa bicarbonato y vinagre", "Echa medio vaso de bicarbonato y luego un vaso de vinagre. Espera 15 minutos y aclara con agua caliente del grifo."),
  P("Si no baja, usa el muelle", "Introduce el muelle por el desagüe, gira la manivela y avanza hasta notar resistencia. Retrocede y avanza varias veces. Saca el muelle con un trapo."),
  P("Aclara y prueba", "Deja correr agua caliente unos minutos. Debe bajar sin gorgoteos."),
  P("Pon una rejilla filtro", "Instala una rejilla para que el pelo no entre. Límpiala cada semana.")
 ],
 problemas: [
  Q("Sigue lenta", "Hay atasco más adentro. Usa el muelle o llama a un fontanero."),
  Q("Huele mal", "El sifón está sucio. Limpia el tapón y echa agua caliente con un poco de lavavajillas."),
  Q("La ventosa no hace presión", "Falta agua o no sella. Pon más agua y asegúrala recta."),
  Q("Se vuelve a atascar rápido", "Hay grasa o pelo acumulado más adentro. Usa muelle y pon una rejilla.")
 ]
}
];
LOTE_6.forEach(n => { const i = TUTORIALES.findIndex(t => t.id === n.id); if (i >= 0) TUTORIALES[i] = n; else TUTORIALES.push(n); });
