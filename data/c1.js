/* Nivel C1 · Avanzado  (EN CONSTRUCCIÓN)
   Para llenar una sesión, agrega a su objeto: objetivo, vocab, frases, gramatica y ejercicios
   (mira data/a1.js como modelo). Cuando todas estén listas, cambia enConstruccion a false. */
(function () {
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  var base = [
    "Inversión y énfasis", "Wish, hope e hipótesis", "Condicionales mixtos", "Colocaciones",
    "Modismos", "Registro formal e informal", "Acentos del inglés", "Presentaciones",
    "Escritura profesional", "Matices de significado"
  ];
  var tecnico = [
    "Liderar reuniones", "Documentación técnica", "Presentaciones ejecutivas", "Auditorías"
  ];
  var sesiones = [];
  base.forEach(function (t, i) { sesiones.push({ id: "c1-" + pad(i + 1), tipo: "base", titulo: t }); });
  tecnico.forEach(function (t, i) { sesiones.push({ id: "c1-" + pad(base.length + i + 1), tipo: "tecnico", titulo: t }); });
  window.CURSO = window.CURSO || {};
  window.CURSO.c1 = {
    id: "c1", nombre: "C1", titulo: "Avanzado", enConstruccion: true,
    descripcion: "Expresa matices, lidera reuniones y presenta con naturalidad.",
    sesiones: sesiones
  };
})();
