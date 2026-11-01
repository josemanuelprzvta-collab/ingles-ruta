/* Nivel B2 · Intermedio alto  (EN CONSTRUCCIÓN)
   Para llenar una sesión, agrega a su objeto: objetivo, vocab, frases, gramatica y ejercicios
   (mira data/a1.js como modelo). Cuando todas estén listas, cambia enConstruccion a false. */
(function () {
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  var base = [
    "Condicionales 2 y 3", "Voz pasiva completa", "Estilo indirecto", "Oraciones de relativo",
    "Tiempos perfectos continuos", "Argumentar y debatir", "Conectores", "Phrasal verbs avanzados",
    "Escritura formal", "Lectura de noticias"
  ];
  var tecnico = [
    "Presentar un proyecto", "Informe técnico", "Negociar con proveedores", "Leer manuales"
  ];
  var sesiones = [];
  base.forEach(function (t, i) { sesiones.push({ id: "b2-" + pad(i + 1), tipo: "base", titulo: t }); });
  tecnico.forEach(function (t, i) { sesiones.push({ id: "b2-" + pad(base.length + i + 1), tipo: "tecnico", titulo: t }); });
  window.CURSO = window.CURSO || {};
  window.CURSO.b2 = {
    id: "b2", nombre: "B2", titulo: "Intermedio alto", enConstruccion: true,
    descripcion: "Argumenta, escribe con formalidad y entiende textos y manuales extensos.",
    sesiones: sesiones
  };
})();
