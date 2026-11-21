/* Fotos de Pexels (https://www.pexels.com/es-es/). Para cada hueco pon el número de la foto (aparece al final de su
   dirección: .../foto/nombre-1234567/ → "1234567") o una URL completa de images.pexels.com. Con "" se usa el fondo ilustrado. */
const PEXELS = {
  hero: "",         // portada: herramientas, taller o una casa en reforma
  fontaneria: "",   // grifo, tuberías
  electricidad: "", // bombilla, enchufe
  pintura: "",      // rodillo, pared pintada
  carpinteria: "",  // madera, puerta
  jardin: "",       // jardín, plantas
  limpieza: "",     // limpieza del hogar
  app: "",          // banda de la app: manos con móvil y herramientas
  porque1: "", porque2: "", porque3: "", porque4: ""
};
const foto = (v, w = 1200) => !v ? "" : typeof v === "object" ? v.src : /^\d+$/.test(String(v)) ? `https://images.pexels.com/photos/${v}/pexels-photo-${v}.jpeg?auto=compress&cs=tinysrgb&w=${w}` : String(v);
