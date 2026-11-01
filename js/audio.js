/* Audio: usa la voz en inglés que trae el navegador (no necesita archivos). */
(function () {
  'use strict';

  var synth = window.speechSynthesis;
  var voz = null;

  function elegirVoz() {
    if (!synth) return;
    var voces = synth.getVoices() || [];
    var en = voces.filter(function (v) { return /^en[-_]/i.test(v.lang); });
    var us = en.filter(function (v) { return /^en[-_]US/i.test(v.lang); });
    voz = us[0] || en[0] || null;
  }

  if (synth) {
    elegirVoz();
    if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = elegirVoz;
  }

  function hablar(texto, velocidad) {
    var u = new window.SpeechSynthesisUtterance(texto);
    u.lang = 'en-US';
    if (voz) u.voice = voz;
    u.rate = velocidad || V.velocidad;
    synth.speak(u);
  }

  var V = {
    disponible: !!(synth && window.SpeechSynthesisUtterance),
    velocidad: 0.9,

    decir: function (texto, velocidad) {
      if (!V.disponible) return false;
      try { synth.cancel(); hablar(texto, velocidad); } catch (e) { return false; }
      return true;
    },

    decirLista: function (lista) {
      if (!V.disponible) return false;
      try {
        synth.cancel();
        lista.forEach(function (t) { hablar(t); });
      } catch (e) { return false; }
      return true;
    },

    parar: function () {
      try { if (synth) synth.cancel(); } catch (e) { /* nada */ }
    }
  };

  window.Voz = V;
})();
