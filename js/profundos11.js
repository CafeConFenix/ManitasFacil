/* Lote en profundidad: nevera, arañazos, valla, barniz exterior, compostador y semillero */
const LOTE_11 = [
{
 id: "limpiar-nevera", titulo: "Descongelar y limpiar la nevera", categoria: "Electrodomésticos",
 resumen: "Descongelar, limpiar por dentro y por detrás, y dejar la nevera trabajando a la temperatura correcta.",
 tiempo: "2-3 horas", dificultad: "Muy fácil",
 antes: [
  "Hazlo cuando haya poca comida y más de medio centímetro de hielo en el congelador.",
  "Necesitas una nevera portátil o bolsas térmicas con hielo para guardar lo congelado durante el proceso, como máximo un par de horas.",
  "Nunca raspes el hielo con cuchillos ni objetos punzantes: puedes perforar el circuito de gas."],
 herramientas: ["Bayetas y esponja suave", "Cubo", "Toallas viejas", "Nevera portátil", "Aspiradora con cepillo", "Guantes"],
 compra: [
  "Bicarbonato de sodio.",
  "Termómetro de nevera (opcional, unos 3-5 €)."],
 seguridad: "Desenchufa la nevera antes de empezar. No uses objetos metálicos ni secadores cerca del agua.",
 pasos: [
  P("Prepara la comida", "Saca lo congelado y guárdalo en una nevera portátil con hielo. Pasa lo refrigerado a otra zona fresca. Tira lo caducado."),
  P("Desenchufa y deja la puerta abierta", "Coloca toallas bajo el congelador y en el fondo. Deja la puerta abierta y espera a que el hielo se funda solo."),
  P("Acelera con un cuenco de agua caliente", "Pon un cuenco de agua caliente en el congelador y cierra la puerta unos 15 minutos. No uses objetos para despegar el hielo."),
  P("Saca baldas y cajones", "Lávalos con agua tibia (nunca caliente: el cristal se rompe por el cambio de temperatura) y jabón suave."),
  P("Limpia el interior", "Prepara una mezcla de una cucharada de bicarbonato por litro de agua tibia. Frota paredes y fondo con una esponja suave. Limpia las gomas de la puerta."),
  P("Seca bien todo", "Pasa un trapo limpio y seco. La humedad provoca moho y hielo."),
  P("Aspira la parte trasera", "Si tu nevera tiene rejilla trasera, aspira el polvo con cuidado: el polvo reduce el rendimiento."),
  P("Enchufa y espera antes de recargar", "Enchufa y espera 2-4 horas hasta que esté fría antes de meter la comida. Revisa que marque 4 grados en la nevera y -18 en el congelador.")
 ],
 problemas: [
  Q("Se forma hielo rápidamente de nuevo", "La puerta no cierra bien o se abre mucho. Revisa la goma y no metas alimentos calientes."),
  Q("Huele mal aunque la he limpiado", "Deja un vaso con bicarbonato dentro y revisa que el desagüe de la parte trasera no esté sucio."),
  Q("Gotea agua al suelo", "El canal de desagüe está obstruido. Límpialo con un bastoncillo largo y agua tibia."),
  Q("No enfría tras limpiarla", "Espera unas horas. Si sigue, comprueba el termostato o llama a un técnico.")
 ]
},
{
 id: "aranazo-madera", titulo: "Reparar un arañazo en madera", categoria: "Muebles y montaje",
 resumen: "Elegir la reparación adecuada según la profundidad del arañazo y disimularlo bien.",
 tiempo: "30 min + secado", dificultad: "Muy fácil",
 antes: [
  "Pasa la uña por el arañazo: si no se engancha, es superficial y solo afecta al barniz. Si se engancha pero no hay hueco, llega a la madera. Si hay un surco o falta madera, es profundo.",
  "Mira si el mueble está barnizado, encerado o aceitado: la reparación varía según el acabado.",
  "Prueba siempre los productos en una zona oculta antes de aplicarlos."],
 herramientas: ["Trapo suave", "Espátula pequeña", "Lija de grano 240 o 320", "Pincel fino", "Papel de cocina"],
 compra: [
  "Rotulador o lápiz retocador del color de la madera para arañazos superficiales.",
  "Cera blanda o masilla de madera del color adecuado para arañazos medios o profundos.",
  "Barniz o cera incolora para sellar."],
 seguridad: "Ventila al usar barniz y limpia siempre en el sentido de la veta.",
 pasos: [
  P("Valora el arañazo", "Usa la uña para saber si es superficial, medio o profundo."),
  P("Limpia la zona", "Pasa un trapo suave con un poco de agua y jabón neutro. Seca bien."),
  P("Elige el color", "Prueba el rotulador, la cera o la masilla en una zona oculta. Escoge el tono que más se parezca."),
  P("Arañazo superficial: aplica el retocador", "Pasa el rotulador siguiendo el arañazo y retira el exceso con un trapo en el sentido de la veta."),
  P("Arañazo medio: rellena con cera", "Frota la barra de cera sobre el arañazo, presiona para que entre, y retira el exceso con una espátula pequeña o un trapo."),
  P("Arañazo profundo: usa masilla", "Rellena con masilla de madera, deja secar el tiempo del envase y lija suavemente con grano 240 hasta que quede a ras."),
  P("Retoca el color", "Si queda más claro, pinta encima con el rotulador o un pincel fino con tinte."),
  P("Sella la zona", "Pasa una capa de cera o barniz incoloro para igualar el brillo con el resto del mueble.")
 ],
 problemas: [
  Q("Se nota el color distinto", "Mezcla dos tonos de masilla o retoca con un rotulador más oscuro."),
  Q("La cera no se queda", "Hay grasa. Limpia mejor con alcohol y repite."),
  Q("Queda un bulto al secar", "Lija suave con grano 320 hasta dejarlo a ras."),
  Q("El arañazo es muy largo", "Puede ser mejor lijar toda la tabla y volver a barnizar.")
 ]
},
{
 id: "valla-madera", titulo: "Arreglar un trozo de valla de madera", categoria: "Exterior y terraza",
 resumen: "Sustituir una tabla rota o podrida de una valla, tratarla y fijarla sin que se raje.",
 tiempo: "1-2 horas", dificultad: "Fácil",
 antes: [
  "Mira dónde está el daño: si solo es una tabla, se cambia. Si el poste (la pieza vertical enterrada) está podrido o se mueve, la valla necesita un arreglo mayor.",
  "Para comprobarlo, clava la punta de un destornillador en el poste: si se hunde con facilidad, está podrido.",
  "Cuidado con los clavos oxidados: ten la vacuna del tétanos al día."],
 herramientas: ["Martillo y pata de cabra", "Sierra de mano", "Taladro con broca de 2,5 mm", "Destornillador o atornillador", "Metro y lápiz", "Brocha", "Guantes y gafas"],
 compra: [
  "Tabla del mismo grosor y tipo de madera, tratada para exterior (pino tratado en autoclave).",
  "Tornillos para exterior de 4x50 mm (galvanizados o inoxidables).",
  "Lasur o protector de madera para exterior."],
 seguridad: "Usa guantes y gafas al retirar clavos y serrar. Comprueba que la escalera esté estable si trabajas en altura.",
 pasos: [
  P("Inspecciona la valla", "Revisa tablas y postes. Marca con lápiz las tablas dañadas y comprueba los postes con un destornillador."),
  P("Retira la tabla rota", "Saca los clavos o tornillos con la pata de cabra. Haz palanca poco a poco para no dañar los travesaños."),
  P("Mide y corta la tabla nueva", "Mide una tabla buena como referencia y marca. Corta con la sierra y lija los cantos."),
  P("Protege la tabla antes de colocarla", "Aplica lasur en todas las caras, incluidos cantos y extremos, que es por donde entra la humedad. Deja secar."),
  P("Pre-taladra los agujeros", "Haz un agujero con la broca de 2,5 mm en cada punto de fijación. Así la madera no se raja."),
  P("Coloca y atornilla", "Pon la tabla en su sitio, con 5-10 mm de separación respecto a las vecinas. Atornilla dos tornillos por travesaño."),
  P("Retoca el protector", "Pinta las cabezas de los tornillos con lasur para que no se oxiden."),
  P("Revisa el resto", "Comprueba que las demás tablas estén bien sujetas y atornilla las que estén flojas.")
 ],
 problemas: [
  Q("La tabla se ha rajado", "Faltó pre-taladrar. Cambia la tabla y haz agujeros previos."),
  Q("El poste se mueve o está podrido", "Hay que cambiarlo o reforzarlo con hormigón. Consulta con un profesional."),
  Q("Se oxidan los tornillos", "No eran para exterior. Cámbialos por galvanizados o inoxidables."),
  Q("La tabla nueva se ve distinta", "Es normal. Aplica protector del mismo tono que el resto.")
 ]
},
{
 id: "barnizar-exterior", titulo: "Proteger madera de exterior", categoria: "Exterior y terraza",
 resumen: "Limpiar, lijar y proteger muebles, vallas o suelos de madera de exterior para que duren años.",
 tiempo: "1 día repartido en 2-3 días", dificultad: "Fácil",
 antes: [
  "Elige el producto según el uso: el lasur protege y deja respirar la madera; el barniz marino forma una película dura pero puede agrietarse; el aceite para teca o madera exótica se renueva cada año.",
  "La madera debe estar seca antes de aplicar nada. Después de lavarla, espera al menos 48 horas.",
  "Trabaja con temperatura entre 10 y 25 grados, sin sol directo ni riesgo de lluvia en 24 horas."],
 herramientas: ["Cepillo y cubo", "Lija de grano 80 y 120", "Brocha plana", "Trapos", "Cinta de carrocero", "Mascarilla y guantes", "Lona"],
 compra: [
  "Lasur, barniz o aceite para exterior (calcula 1 litro por unos 10-12 m² y por capa).",
  "Limpiador de madera o jabón neutro.",
  "Brocha de calidad."],
 seguridad: "Ventila, usa mascarilla al lijar y guantes al aplicar el producto.",
 pasos: [
  P("Limpia la madera", "Frota con cepillo, agua y jabón neutro para quitar polvo, moho y grasa. Aclara bien."),
  P("Deja secar", "Espera al menos 48 horas con la madera seca y a la sombra."),
  P("Lija en el sentido de la veta", "Lija con grano 80 y termina con 120. Retira el barniz viejo suelto y las zonas grises."),
  P("Quita el polvo", "Pasa un trapo ligeramente húmedo y espera a que seque."),
  P("Protege lo que no quieras pintar", "Cubre metales y paredes con cinta de carrocero y el suelo con una lona."),
  P("Aplica la primera capa fina", "Con la brocha, pasa el producto siguiendo la veta, sin cargar demasiado. Evita acumulaciones y goteos."),
  P("Lija suave entre capas", "Cuando seque (4-24 horas según el producto), pasa lija de 220 y quita el polvo."),
  P("Da la segunda y tercera capa", "Repite el proceso. Más capas finas protegen mejor que una gruesa."),
  P("Mantenimiento", "Lava cada año y renueva la capa superior cada 1-2 años o cuando la madera pierda brillo.")
 ],
 problemas: [
  Q("Aparecen burbujas o se pela", "La madera estaba húmeda o la capa era demasiado gruesa. Lija y repite con capas finas."),
  Q("Quedan goteos", "Se cargó demasiado la brocha. Alisa enseguida con la brocha o lija al secar."),
  Q("La madera sigue gris", "Quedó madera vieja sin lijar. Lija hasta ver madera clara antes de proteger."),
  Q("Se pega al tocarla", "Aún no ha secado. Espera 24-48 horas más.")
 ]
},
{
 id: "compostador", titulo: "Montar y manejar un compostador casero", categoria: "Jardinería",
 resumen: "Montar un compostador y mantenerlo para convertir restos de cocina y jardín en abono.",
 tiempo: "1 hora + 3-6 meses", dificultad: "Fácil",
 antes: [
  "Colócalo en semisombra, sobre tierra (no sobre cemento) para que entren lombrices y drene el agua, y a una distancia cómoda de la cocina.",
  "La mezcla ideal es una parte de restos húmedos (verdes: cocina, césped fresco) por 2-3 partes de restos secos (marrones: hojas secas, cartón, ramitas).",
  "No echar nunca: carne, pescado, lácteos, aceites, excrementos de perros y gatos, plantas enfermas."],
 herramientas: ["Compostador o contenedor con agujeros", "Pala o horca", "Guantes", "Regadera", "Tamiz (opcional)"],
 compra: [
  "Compostador de plástico o cubo con tapa, 300-400 litros para una casa.",
  "Hojas secas, cartón o paja como material seco.",
  "Termómetro de compost (opcional)."],
 seguridad: "Usa guantes al manipular el compost y lávate las manos después.",
 pasos: [
  P("Elige el sitio", "Semisombra, sobre tierra y con acceso fácil. Aleja el compostador de ventanas."),
  P("Prepara la base", "Pon una capa de 10 cm de ramitas o paja gruesa para que el aire circule y el agua drene."),
  P("Añade restos verdes y secos en capas", "Alterna capas finas de restos de cocina con capas más gruesas de hojas secas o cartón troceado."),
  P("Remueve cada 1-2 semanas", "Voltea con la horca para airear. Si no, la mezcla se pudre y huele mal."),
  P("Controla la humedad", "Debe estar húmedo como una esponja escurrida. Si está seco, riega; si está muy mojado, añade material seco."),
  P("Tapa", "Cierra el compostador para evitar moscas y roedores."),
  P("Espera 3-6 meses", "Cuando esté oscuro, desmenuzado y huela a tierra de bosque, está listo."),
  P("Cosecha y usa", "Saca el compost de abajo, tamízalo si quieres y mézclalo con la tierra de macetas o del huerto.")
 ],
 problemas: [
  Q("Huele mal", "Exceso de humedad o falta de aire. Añade material seco y remueve."),
  Q("Hay moscas", "Los restos de cocina están al descubierto. Cúbrelos con hojas secas o tierra."),
  Q("No se descompone", "Está seco o falta nitrógeno. Riega y añade restos verdes."),
  Q("Aparecen ratas", "Se echó comida cocinada o carne. Retírala y cierra bien el compostador.")
 ]
},
{
 id: "semillero", titulo: "Hacer un semillero", categoria: "Huerto",
 resumen: "Sembrar en bandeja y cuidar las plántulas hasta trasplantarlas fuera.",
 tiempo: "1 hora + 4-8 semanas", dificultad: "Fácil",
 antes: [
  "Para tomates, pimientos y berenjenas, siembra en interior unas 6-8 semanas antes de la última helada de tu zona.",
  "Necesitas un sitio con mucha luz (una ventana orientada al sur) y temperatura de 20-25 grados para que germinen.",
  "Usa sustrato específico para semilleros: es fino y tiene pocos nutrientes."],
 herramientas: ["Bandeja de semillero con agujeros", "Pulverizador", "Palillo o lápiz", "Etiquetas y rotulador", "Plástico transparente"],
 compra: [
  "Sustrato para semilleros.",
  "Semillas frescas, con fecha de caducidad vigente.",
  "Bandeja con alvéolos y plato debajo."],
 seguridad: "Lávate las manos después de manipular tierra y semillas.",
 pasos: [
  P("Humedece el sustrato", "Mézclalo con agua hasta que esté húmedo como una esponja escurrida, no encharcado."),
  P("Llena los alvéolos", "Rellena la bandeja sin apretar demasiado. Alisa la superficie."),
  P("Haz el hueco para cada semilla", "Con el palillo, haz un hoyo de profundidad igual a 2-3 veces el tamaño de la semilla. Las semillas muy finas van en la superficie."),
  P("Siembra y tapa ligeramente", "Pon 2 semillas por alvéolo. Cubre con un poco de sustrato y presiona con suavidad."),
  P("Etiqueta", "Anota el nombre de la planta y la fecha en una etiqueta."),
  P("Cubre con plástico y pulveriza", "Humedece con pulverizador y cubre con plástico transparente. Ventila 10 minutos al día."),
  P("Coloca en un sitio cálido y luminoso", "Ventana soleada o lámpara de cultivo, a 20-25 grados."),
  P("Quita el plástico y aclara", "Cuando germinen, retira el plástico. Deja la plántula más fuerte por alvéolo y quita la otra."),
  P("Endurece antes de trasplantar", "7-10 días antes, saca las plántulas al exterior unas horas al día, aumentando el tiempo poco a poco.")
 ],
 problemas: [
  Q("No germinan", "Semillas viejas, poco calor o demasiado agua. Comprueba temperatura y fecha."),
  Q("Las plántulas se alargan y caen", "Falta luz. Ponlas más cerca de la ventana o usa una lámpara."),
  Q("Aparece moho blanco", "Demasiada humedad. Ventila más y riega menos."),
  Q("Se caen y se pudren por la base", "Es un hongo (damping off). Ventila y no riegues en exceso.")
 ]
}
];
LOTE_11.forEach(n => { const i = TUTORIALES.findIndex(t => t.id === n.id); if (i >= 0) TUTORIALES[i] = n; else TUTORIALES.push(n); });
