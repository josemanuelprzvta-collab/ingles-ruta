/* Motor de ejercicios: genera las preguntas y las presenta una por una. */
(function () {
  'use strict';

  var Voz = window.Voz;

  /* ---------- utilidades ---------- */

  function h(tag, attrs, hijos) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'class') el.className = v;
        else if (k === 'text') el.textContent = v;
        else if (k === 'html') el.innerHTML = v;
        else if (k.indexOf('on') === 0 && typeof v === 'function') el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v === true ? '' : v);
      });
    }
    (hijos || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return el;
  }

  function mezclar(a) {
    var b = a.slice();
    for (var i = b.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = b[i]; b[i] = b[j]; b[j] = t;
    }
    return b;
  }

  function elegir(a) { return a[Math.floor(Math.random() * a.length)]; }

  function norm(t) {
    return String(t).toLowerCase()
      .replace(/[’‘]/g, "'")
      .replace(/[^a-z0-9' ]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function mezclarDistinto(tokens) {
    if (tokens.length < 2) return tokens.slice();
    var m, intentos = 0;
    do { m = mezclar(tokens); intentos++; }
    while (m.join(' ') === tokens.join(' ') && intentos < 12);
    return m;
  }

  function distractores(correcto, pool, n) {
    var vistos = {}; vistos[correcto] = true;
    var res = [];
    mezclar(pool).forEach(function (x) {
      if (res.length >= n || vistos[x]) return;
      vistos[x] = true; res.push(x);
    });
    return res;
  }

  function hayAudio() { return !!(Voz && Voz.disponible); }

  /* ---------- botones de audio ---------- */

  function botonAudio(texto, lento) {
    if (!hayAudio()) return null;
    return h('button', {
      class: 'btn-audio' + (lento ? ' lento' : ''),
      type: 'button',
      title: lento ? 'Escuchar despacio' : 'Escuchar',
      'aria-label': lento ? 'Escuchar despacio' : 'Escuchar',
      text: lento ? '🐢' : '🔊',
      onclick: function (e) { e.stopPropagation(); Voz.decir(texto, lento ? 0.55 : undefined); }
    });
  }

  function botonesAudio(texto) {
    if (!hayAudio()) return null;
    return h('div', { class: 'audio-fila' }, [botonAudio(texto, false), botonAudio(texto, true)]);
  }

  /* ---------- generación de preguntas ---------- */

  function armarOpcion(enunciado, correcto, pool, extra) {
    var opts = mezclar([correcto].concat(distractores(correcto, pool, 3)));
    var q = { tipo: 'opcion', enunciado: enunciado, opciones: opts, correcta: opts.indexOf(correcto) };
    Object.keys(extra || {}).forEach(function (k) { q[k] = extra[k]; });
    return q;
  }

  function preguntaVocab(par, poolEn, poolEs, forma) {
    var en = par[0], es = par[1];
    forma = forma || elegir(['en-es', 'es-en', 'oir']);
    if (forma === 'oir' && !hayAudio()) forma = 'en-es';
    var base = {
      clave: en, datos: { en: en, es: es },
      explicacion: '«' + en + '» significa «' + es + '».',
      audioFinal: en
    };
    if (forma === 'en-es') {
      base.audio = en;
      return armarOpcion('¿Qué significa «' + en + '»?', es, poolEs, base);
    }
    if (forma === 'es-en') {
      return armarOpcion('¿Cómo se dice «' + es + '» en inglés?', en, poolEn, base);
    }
    base.audio = en;
    base.autoplay = true;
    base.consigna = 'Escucha y elige la palabra correcta';
    return armarOpcion('¿Qué palabra escuchaste?', en, poolEn, base);
  }

  function preguntasVocab(pares, pool) {
    var poolEn = pool.map(function (p) { return p[0]; });
    var poolEs = pool.map(function (p) { return p[1]; });
    return pares.map(function (p) { return preguntaVocab(p, poolEn, poolEs); });
  }

  function preguntaFrase(par, forma) {
    var en = par[0], es = par[1];
    var tokens = en.split(' ');
    if (forma === 'dictado' && hayAudio()) {
      return { tipo: 'dictado', en: en, es: es, audioFinal: en };
    }
    return { tipo: 'ordenar', es: es, en: en, palabras: mezclarDistinto(tokens), audioFinal: en };
  }

  /* Convierte un ejercicio escrito a mano en el archivo de datos en una pregunta lista */
  function convertir(ej) {
    if (ej.t === 'completar' || ej.t === 'opcion') {
      var correcto = ej.o[ej.a];
      var opts = mezclar(ej.o);
      var completar = String(ej.q).indexOf('___') >= 0;
      var q = {
        tipo: 'opcion', enunciado: ej.q, completar: completar,
        opciones: opts, correcta: opts.indexOf(correcto),
        explicacion: ej.e || ''
      };
      if (completar) q.audioFinal = ej.q.replace('___', correcto);
      return q;
    }
    if (ej.t === 'ordenar') {
      return {
        tipo: 'ordenar', es: ej.es, en: ej.en,
        palabras: mezclarDistinto(ej.en.split(' ')),
        explicacion: ej.e || '', audioFinal: ej.en
      };
    }
    if (ej.t === 'dictado') {
      if (hayAudio()) return { tipo: 'dictado', en: ej.en, es: ej.es || '', explicacion: ej.e || '', audioFinal: ej.en };
      return {
        tipo: 'ordenar', es: ej.es || ej.en, en: ej.en,
        palabras: mezclarDistinto(ej.en.split(' ')),
        explicacion: ej.e || ''
      };
    }
    return null;
  }

  function quitarNulos(a) { return a.filter(function (x) { return !!x; }); }

  /* Quiz de una sesión: ~12 preguntas, más hasta 2 de repaso */
  function armarQuizSesion(ses, pool, fallos) {
    var total = 12;
    var manual = quitarNulos((ses.ejercicios || []).map(convertir));
    var candV = preguntasVocab(mezclar(ses.vocab || []), pool);
    var candF = mezclar(ses.frases || []).map(function (p, k) {
      return preguntaFrase(p, k % 2 === 0 ? 'ordenar' : 'dictado');
    });
    var relleno = mezclar(candV.concat(candF)).slice(0, Math.max(0, total - manual.length));
    var qs = manual.concat(relleno);

    var propios = {};
    (ses.vocab || []).forEach(function (p) { propios[p[0]] = true; });
    var repaso = (fallos || []).filter(function (f) { return !propios[f.en]; });
    mezclar(repaso).slice(0, 2).forEach(function (f) {
      var q = preguntasVocab([[f.en, f.es]], pool)[0];
      q.repaso = true;
      q.consigna = 'Repaso: ' + (q.consigna || 'elige la respuesta');
      qs.push(q);
    });
    return mezclar(qs);
  }

  /* Examen de nivel: 20 preguntas de todo el nivel */
  function armarExamen(niv, pool) {
    var manual = [], pares = [], frases = [];
    niv.sesiones.forEach(function (s) {
      (s.ejercicios || []).forEach(function (e) { manual.push(e); });
      (s.vocab || []).forEach(function (p) { pares.push(p); });
      (s.frases || []).forEach(function (p) { frases.push(p); });
    });
    var qs = [];
    qs = qs.concat(quitarNulos(mezclar(manual).slice(0, 8).map(convertir)));
    qs = qs.concat(preguntasVocab(mezclar(pares).slice(0, 8), pool));
    qs = qs.concat(mezclar(frases).slice(0, 4).map(function (p, k) {
      return preguntaFrase(p, k % 2 === 0 ? 'ordenar' : 'dictado');
    }));
    return mezclar(qs).slice(0, 20);
  }

  /* Repaso: hasta 10 palabras que has fallado */
  function armarRepaso(fallos, pool) {
    var pares = mezclar(fallos).slice(0, 10).map(function (f) { return [f.en, f.es]; });
    var extra = pool.length >= 4 ? pool : pares.concat(pool);
    return preguntasVocab(pares, extra);
  }

  /* Examen de ubicación: respeta el orden de dificultad */
  function armarUbicacion(items) {
    return items.map(function (it) {
      var q = convertir({ t: 'opcion', q: it.q, o: it.o, a: it.a, e: it.e });
      q.nivel = it.n;
      delete q.audioFinal;
      return q;
    });
  }

  /* ---------- presentación del quiz ---------- */

  function quiz(cont, preguntas, cfg) {
    cfg = cfg || {};
    var i = 0, aciertos = 0, errores = [], respondida = false;

    function terminar() {
      var total = preguntas.length;
      var pct = total ? aciertos / total : 0;
      if (cfg.alTerminar) {
        cfg.alTerminar({
          aciertos: aciertos, total: total, pct: pct,
          aprobado: pct >= (cfg.aprobar || 0.8), errores: errores
        });
      }
    }

    function siguiente() {
      respondida = false;
      i++;
      if (i >= preguntas.length) terminar(); else mostrar();
    }

    function resolver(q, tarjeta, ok, correctaTxt) {
      if (respondida) return;
      respondida = true;
      if (ok) aciertos++; else errores.push(q);
      if (cfg.alResponder) cfg.alResponder(q, ok);
      if (cfg.sinFeedback) { setTimeout(siguiente, 250); return; }

      var ultimo = i === preguntas.length - 1;
      var fb = h('div', { class: 'fb ' + (ok ? 'ok' : 'mal') }, [
        h('strong', { text: ok ? '¡Correcto!' : 'Respuesta correcta' }),
        ok ? null : h('p', { class: 'fb-resp', text: correctaTxt }),
        q.explicacion ? h('p', { class: 'expl', text: q.explicacion }) : null,
        q.audioFinal ? botonesAudio(q.audioFinal) : null
      ]);
      var btn = h('button', {
        class: 'btn primario', type: 'button',
        text: ultimo ? 'Ver resultado' : 'Continuar', onclick: siguiente
      });
      tarjeta.appendChild(fb);
      tarjeta.appendChild(btn);
      btn.focus();
    }

    function pintarOpcion(q, tarjeta) {
      tarjeta.appendChild(h('p', {
        class: 'q-tipo',
        text: q.completar ? 'Completa la frase' : (q.consigna || 'Elige la respuesta')
      }));
      var titulo = h('h2', { class: 'q-texto' });
      if (q.completar) {
        var partes = q.enunciado.split('___');
        titulo.appendChild(document.createTextNode(partes[0]));
        titulo.appendChild(h('span', { class: 'hueco', text: '_____' }));
        titulo.appendChild(document.createTextNode(partes.slice(1).join('_____')));
      } else {
        titulo.textContent = q.enunciado;
      }
      tarjeta.appendChild(titulo);
      if (q.audio) { var ba = botonesAudio(q.audio); if (ba) tarjeta.appendChild(ba); }

      var lista = h('div', { class: 'opciones' });
      var botones = q.opciones.map(function (op, k) {
        return h('button', { class: 'opcion', type: 'button', text: op, onclick: function () { elegirOp(k); } });
      });
      botones.forEach(function (b) { lista.appendChild(b); });

      var correctaTxt = q.completar
        ? q.enunciado.replace('___', q.opciones[q.correcta])
        : q.opciones[q.correcta];

      function elegirOp(k) {
        if (respondida) return;
        botones.forEach(function (b) { b.disabled = true; });
        var ok = k === q.correcta;
        if (cfg.sinFeedback) {
          botones[k].classList.add('sel');
        } else {
          botones[k].classList.add(ok ? 'ok' : 'mal');
          botones[q.correcta].classList.add('ok');
        }
        resolver(q, tarjeta, ok, correctaTxt);
      }

      tarjeta.appendChild(lista);

      if (cfg.conNoSe) {
        tarjeta.appendChild(h('button', {
          class: 'btn suave nose', type: 'button', text: 'No lo sé',
          onclick: function () {
            if (respondida) return;
            botones.forEach(function (b) { b.disabled = true; });
            resolver(q, tarjeta, false, correctaTxt);
          }
        }));
      }
      if (q.autoplay && q.audio && hayAudio()) setTimeout(function () { Voz.decir(q.audio); }, 300);
    }

    function pintarOrdenar(q, tarjeta) {
      tarjeta.appendChild(h('p', { class: 'q-tipo', text: 'Ordena la frase en inglés' }));
      tarjeta.appendChild(h('h2', { class: 'q-texto', text: '«' + q.es + '»' }));

      var colocadas = [];
      var zona = h('div', { class: 'zona-resp' });
      var banco = h('div', { class: 'banco' });
      var bloqueado = false;
      var comprobar = h('button', {
        class: 'btn primario', type: 'button', text: 'Comprobar', disabled: true,
        onclick: function () {
          if (bloqueado || !colocadas.length) return;
          bloqueado = true;
          var intento = colocadas.map(function (k) { return q.palabras[k]; }).join(' ');
          var ok = norm(intento) === norm(q.en);
          zona.classList.add(ok ? 'ok' : 'mal');
          pintar();
          comprobar.remove();
          borrar.remove();
          resolver(q, tarjeta, ok, q.en);
        }
      });
      var borrar = h('button', {
        class: 'btn suave', type: 'button', text: 'Borrar',
        onclick: function () { if (bloqueado) return; colocadas = []; pintar(); }
      });

      function chip(k, enResp) {
        return h('button', {
          class: 'chip', type: 'button', text: q.palabras[k], disabled: bloqueado,
          onclick: function () {
            if (bloqueado) return;
            if (enResp) colocadas.splice(colocadas.indexOf(k), 1); else colocadas.push(k);
            pintar();
          }
        });
      }
      function pintar() {
        zona.innerHTML = ''; banco.innerHTML = '';
        colocadas.forEach(function (k) { zona.appendChild(chip(k, true)); });
        q.palabras.forEach(function (p, k) {
          if (colocadas.indexOf(k) === -1) banco.appendChild(chip(k, false));
        });
        comprobar.disabled = bloqueado || colocadas.length === 0;
      }

      tarjeta.appendChild(zona);
      tarjeta.appendChild(banco);
      tarjeta.appendChild(h('div', { class: 'acciones' }, [comprobar, borrar]));
      pintar();
    }

    function pintarDictado(q, tarjeta) {
      tarjeta.appendChild(h('p', { class: 'q-tipo', text: 'Escucha y escribe lo que oyes' }));
      tarjeta.appendChild(h('h2', { class: 'q-texto', text: 'Escribe la frase en inglés' }));
      var ba = botonesAudio(q.en);
      if (ba) tarjeta.appendChild(ba);

      var pista = h('p', { class: 'pista oculto', text: 'Pista: «' + q.es + '»' });
      var verPista = q.es ? h('button', {
        class: 'btn suave mini', type: 'button', text: 'Ver pista en español',
        onclick: function () { pista.classList.remove('oculto'); verPista.remove(); }
      }) : null;

      var campo = h('input', {
        type: 'text', class: 'campo', autocomplete: 'off', autocapitalize: 'off',
        spellcheck: 'false', placeholder: 'Escribe aquí…', 'aria-label': 'Tu respuesta'
      });
      var enviar = h('button', {
        class: 'btn primario', type: 'button', text: 'Comprobar',
        onclick: function () {
          if (respondida) return;
          var ok = norm(campo.value) === norm(q.en);
          campo.disabled = true; enviar.remove();
          if (verPista) verPista.remove();
          campo.classList.add(ok ? 'ok' : 'mal');
          resolver(q, tarjeta, ok, q.en);
        }
      });
      campo.addEventListener('keydown', function (e) { if (e.key === 'Enter') enviar.click(); });

      if (verPista) tarjeta.appendChild(verPista);
      tarjeta.appendChild(pista);
      tarjeta.appendChild(campo);
      tarjeta.appendChild(h('div', { class: 'acciones' }, [enviar]));
      setTimeout(function () { campo.focus(); if (hayAudio()) Voz.decir(q.en); }, 300);
    }

    function mostrar() {
      respondida = false;
      cont.innerHTML = '';
      var q = preguntas[i];
      var tarjeta = h('div', { class: 'q-card' });
      cont.appendChild(h('div', { class: 'q-cab' }, [
        h('span', { class: 'q-num', text: (cfg.etiqueta || 'Pregunta') + ' ' + (i + 1) + ' de ' + preguntas.length }),
        cfg.alSalir ? h('button', { class: 'btn suave mini', type: 'button', text: 'Salir', onclick: cfg.alSalir }) : null
      ]));
      cont.appendChild(h('div', { class: 'q-barra' }, [
        h('div', { class: 'q-barra-fill', style: 'width:' + Math.round(i / preguntas.length * 100) + '%' })
      ]));
      cont.appendChild(tarjeta);
      if (q.tipo === 'opcion') pintarOpcion(q, tarjeta);
      else if (q.tipo === 'ordenar') pintarOrdenar(q, tarjeta);
      else pintarDictado(q, tarjeta);
    }

    if (!preguntas.length) { terminar(); return; }
    mostrar();
  }

  window.Motor = {
    h: h,
    mezclar: mezclar,
    botonAudio: botonAudio,
    botonesAudio: botonesAudio,
    armarQuizSesion: armarQuizSesion,
    armarExamen: armarExamen,
    armarRepaso: armarRepaso,
    armarUbicacion: armarUbicacion,
    quiz: quiz
  };
})();
