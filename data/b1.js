/* Nivel B1 · Intermedio  (EN CONSTRUCCIÓN)
   Para llenar una sesión, agrega a su objeto: objetivo, vocab, frases, gramatica y ejercicios
   (mira data/a1.js como modelo). Cuando todas estén listas, cambia enConstruccion a false. */
(function () {
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  var base = [
    "Presente perfecto", "Condicionales 0 y 1", "Modales: should, must, have to", "Gerundios e infinitivos",
    "Contar experiencias", "Dar opiniones", "Phrasal verbs básicos", "Voz pasiva",
    "Entrevista de trabajo", "Quejas y soluciones"
  ];
  var tecnico = [
    "Diagnóstico de fallas (diálogos)", "Reuniones de trabajo", "Reporte de mantenimiento", "Procedimientos de seguridad"
  ];
  var sesiones = [];
  base.forEach(function (t, i) { sesiones.push({ id: "b1-" + pad(i + 1), tipo: "base", titulo: t }); });
  tecnico.forEach(function (t, i) { sesiones.push({ id: "b1-" + pad(base.length + i + 1), tipo: "tecnico", titulo: t }); });
  window.CURSO = window.CURSO || {};
  window.CURSO.b1 = {
    id: "b1", nombre: "B1", titulo: "Intermedio", enConstruccion: true,
    descripcion: "Cuenta experiencias, da opiniones y resuelve situaciones del trabajo con más soltura.",
    sesiones: sesiones
  };
})();
