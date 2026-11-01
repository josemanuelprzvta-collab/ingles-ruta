/* Nivel C2 · Maestría  (EN CONSTRUCCIÓN)
   Para llenar una sesión, agrega a su objeto: objetivo, vocab, frases, gramatica y ejercicios
   (mira data/a1.js como modelo). Cuando todas estén listas, cambia enConstruccion a false. */
(function () {
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  var base = [
    "Precisión y estilo", "Ironía y humor", "Textos literarios", "Variantes regionales",
    "Matices al traducir", "Debate avanzado", "Síntesis de textos largos", "Negociación",
    "Escritura creativa", "Repaso general"
  ];
  var tecnico = [
    "Redactar normas y especificaciones", "Conferencias técnicas", "Negociación de contratos", "Mentoría y capacitación"
  ];
  var sesiones = [];
  base.forEach(function (t, i) { sesiones.push({ id: "c2-" + pad(i + 1), tipo: "base", titulo: t }); });
  tecnico.forEach(function (t, i) { sesiones.push({ id: "c2-" + pad(base.length + i + 1), tipo: "tecnico", titulo: t }); });
  window.CURSO = window.CURSO || {};
  window.CURSO.c2 = {
    id: "c2", nombre: "C2", titulo: "Maestría", enConstruccion: true,
    descripcion: "Dominio casi nativo: precisión, estilo, humor y negociación avanzada.",
    sesiones: sesiones
  };
})();
