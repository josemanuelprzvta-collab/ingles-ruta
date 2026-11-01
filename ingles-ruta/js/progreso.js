/* Progreso: se guarda en este dispositivo (localStorage). No se sincroniza entre aparatos,
   pero se puede exportar e importar con un código desde Ajustes. */
(function () {
  'use strict';

  var CLAVE = 'ingles-ruta:v1';

  function vacio() {
    return {
      version: 1,
      nivelInicial: null,   // índice del nivel donde se empieza (0 = A1)
      ubicacion: null,      // resultado del examen de ubicación
      sesiones: {},         // id de sesión -> { mejor, aprobada, intentos, fecha }
      examenes: {},         // id de nivel  -> { mejor, aprobado, intentos, fecha }
      fallos: {},           // palabra en inglés -> { en, es, n }
      racha: { ultimo: null, dias: 0 },
      velocidad: 0.9
    };
  }

  function cargar() {
    try {
      var t = window.localStorage.getItem(CLAVE);
      if (t) {
        var o = JSON.parse(t);
        if (o && typeof o === 'object') {
          var base = vacio();
          Object.keys(o).forEach(function (k) { base[k] = o[k]; });
          return base;
        }
      }
    } catch (e) { /* sin almacenamiento: se trabaja en memoria */ }
    return vacio();
  }

  var estado = cargar();

  function guardar() {
    try { window.localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch (e) { /* nada */ }
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fecha(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function hoy() { return fecha(new Date()); }
  function ayer() { var d = new Date(); d.setDate(d.getDate() - 1); return fecha(d); }

  var P = {
    get estado() { return estado; },

    /* Sesiones */
    sesion: function (id) { return estado.sesiones[id] || null; },
    sesionAprobada: function (id) { return !!(estado.sesiones[id] && estado.sesiones[id].aprobada); },
    registrarSesion: function (id, pct, aprobado) {
      var s = estado.sesiones[id] || { mejor: 0, aprobada: false, intentos: 0 };
      s.intentos += 1;
      s.mejor = Math.max(s.mejor, Math.round(pct * 100));
      if (aprobado) s.aprobada = true;
      s.fecha = hoy();
      estado.sesiones[id] = s;
      guardar();
    },

    /* Exámenes de nivel */
    examen: function (nivel) { return estado.examenes[nivel] || null; },
    examenAprobado: function (nivel) { return !!(estado.examenes[nivel] && estado.examenes[nivel].aprobado); },
    registrarExamen: function (nivel, pct, aprobado) {
      var e = estado.examenes[nivel] || { mejor: 0, aprobado: false, intentos: 0 };
      e.intentos += 1;
      e.mejor = Math.max(e.mejor, Math.round(pct * 100));
      if (aprobado) e.aprobado = true;
      e.fecha = hoy();
      estado.examenes[nivel] = e;
      guardar();
    },

    /* Examen de ubicación */
    setUbicacion: function (indiceNivel, puntajes) {
      estado.nivelInicial = indiceNivel;
      estado.ubicacion = { puntajes: puntajes, fecha: hoy() };
      guardar();
    },
    omitirUbicacion: function () {
      estado.nivelInicial = 0;
      estado.ubicacion = { omitida: true, fecha: hoy() };
      guardar();
    },

    /* Repaso espaciado: lo que fallas vuelve a aparecer; hay que acertarlo 2 veces para quitarlo */
    fallar: function (clave, datos) {
      if (!clave || !datos) return;
      estado.fallos[clave] = { en: datos.en, es: datos.es, n: 2 };
      guardar();
    },
    acertar: function (clave) {
      var f = estado.fallos[clave];
      if (!f) return;
      f.n -= 1;
      if (f.n <= 0) delete estado.fallos[clave];
      guardar();
    },
    listaFallos: function () {
      return Object.keys(estado.fallos).map(function (k) { return estado.fallos[k]; });
    },
    numFallos: function () { return Object.keys(estado.fallos).length; },

    /* Racha de días */
    tocarRacha: function () {
      var r = estado.racha;
      var h = hoy();
      if (r.ultimo === h) return;
      r.dias = (r.ultimo === ayer()) ? r.dias + 1 : 1;
      r.ultimo = h;
      guardar();
    },
    rachaActual: function () {
      var r = estado.racha;
      if (r.ultimo === hoy() || r.ultimo === ayer()) return r.dias;
      return 0;
    },

    /* Ajustes */
    setVelocidad: function (v) { estado.velocidad = v; guardar(); },

    exportar: function () {
      var json = JSON.stringify(estado);
      return 'IR1:' + window.btoa(unescape(encodeURIComponent(json)));
    },
    importar: function (texto) {
      try {
        var t = String(texto || '').trim();
        if (t.indexOf('IR1:') !== 0) return false;
        var json = decodeURIComponent(escape(window.atob(t.slice(4))));
        var o = JSON.parse(json);
        if (!o || typeof o !== 'object' || typeof o.sesiones !== 'object') return false;
        var base = vacio();
        Object.keys(o).forEach(function (k) { base[k] = o[k]; });
        estado = base;
        guardar();
        return true;
      } catch (e) { return false; }
    },
    reiniciar: function () {
      estado = vacio();
      guardar();
    }
  };

  window.Progreso = P;
})();
