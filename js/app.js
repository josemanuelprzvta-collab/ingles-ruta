/* Aplicación: pantallas, navegación y reglas de desbloqueo. */
(function () {
  'use strict';

  var Motor = window.Motor, Progreso = window.Progreso, Voz = window.Voz, H = Motor.h;
  var VERSION = '1.1.0';
  var ORDEN = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
  var app = document.getElementById('app');

  Voz.velocidad = Progreso.estado.velocidad || 0.9;

  /* ---------- utilidades ---------- */

  function nivel(id) { return (window.CURSO || {})[id]; }
  function idxNivel(id) { return ORDEN.indexOf(id); }
  function tieneContenido(s) { return !!(s && s.vocab && s.frases); }
  function enlace(href, texto, clase) { return H('a', { href: href, class: clase || '', text: texto }); }
  function montar(nodos) {
    app.innerHTML = '';
    nodos.forEach(function (n) { if (n) app.appendChild(n); });
  }
  function boton(texto, clase, fn) { return H('button', { class: 'btn ' + (clase || ''), type: 'button', text: texto, onclick: fn }); }

  function actualizarBarra() {
    var r = Progreso.rachaActual();
    document.getElementById('racha').textContent = r > 0 ? '🔥 ' + r : '';
    var n = Progreso.numFallos();
    document.getElementById('n-repaso').textContent = n > 0 ? String(n) : '';
  }

  /* ---------- reglas de desbloqueo ---------- */

  function nivelDesbloqueado(i) {
    if (i === 0) return true;
    var ini = Progreso.estado.nivelInicial;
    if (ini !== null && i <= ini) return true;
    return Progreso.examenAprobado(ORDEN[i - 1]);
  }
  // Los niveles anteriores al nivel de ubicación quedan abiertos para repasar.
  function abiertoRepaso(i) {
    var ini = Progreso.estado.nivelInicial;
    return ini !== null && i < ini;
  }
  function sesionDesbloqueada(i, j) {
    if (!nivelDesbloqueado(i)) return false;
    if (abiertoRepaso(i)) return true;
    if (j === 0) return true;
    return Progreso.sesionAprobada(nivel(ORDEN[i]).sesiones[j - 1].id);
  }
  function examenDesbloqueado(i) {
    var niv = nivel(ORDEN[i]);
    if (!niv || niv.enConstruccion || !nivelDesbloqueado(i)) return false;
    if (abiertoRepaso(i)) return true;
    return niv.sesiones.every(function (s) { return Progreso.sesionAprobada(s.id); });
  }
  function contarHechas(niv) {
    return niv.sesiones.filter(function (s) { return Progreso.sesionAprobada(s.id); }).length;
  }

  // Vocabulario del nivel y del anterior: se usa para armar opciones incorrectas.
  function poolDe(i) {
    var pares = [];
    [i - 1, i].forEach(function (k) {
      if (k < 0) return;
      var niv = nivel(ORDEN[k]);
      if (!niv) return;
      niv.sesiones.forEach(function (s) {
        if (s.vocab) s.vocab.forEach(function (p) { pares.push(p); });
      });
    });
    return pares;
  }

  function seguimiento(q, ok) {
    if (!q.clave) return;
    if (ok) Progreso.acertar(q.clave); else Progreso.fallar(q.clave, q.datos);
    actualizarBarra();
  }

  /* ---------- piezas comunes ---------- */

  function barra(pct) {
    return H('div', { class: 'barra' }, [H('div', { class: 'barra-fill', style: 'width:' + Math.round(pct) + '%' })]);
  }

  function mostrarResultado(cont, res, titulo, acciones, extra) {
    cont.innerHTML = '';
    var pct = Math.round(res.pct * 100);
    var repasar = [];
    (res.errores || []).forEach(function (q) {
      var t = q.datos ? q.datos.en + ' = ' + q.datos.es : (q.tipo !== 'opcion' && q.en ? q.en : null);
      if (t && repasar.indexOf(t) < 0) repasar.push(t);
    });
    cont.appendChild(H('div', { class: 'resultado ' + (res.aprobado ? 'aprobado' : 'reprobado') }, [
      H('div', { class: 'res-pct', text: pct + '%' }),
      H('h2', { text: res.aprobado ? '¡Aprobado!' : titulo }),
      H('p', { class: 'sub', text: res.aciertos + ' de ' + res.total + ' respuestas correctas' }),
      extra || null,
      repasar.length ? H('div', { class: 'repasar' }, [
        H('h3', { text: 'Para repasar' }),
        H('ul', {}, repasar.slice(0, 8).map(function (t) { return H('li', { text: t }); }))
      ]) : null,
      H('div', { class: 'acciones centro' }, acciones.map(function (a) {
        var clase = 'btn ' + (a.primario ? 'primario' : 'suave');
        return a.href ? enlace(a.href, a.texto, clase) : boton(a.texto, a.primario ? 'primario' : 'suave', a.onclick);
      }))
    ]));
  }

  function pantalla404() {
    montar([H('div', { class: 'tarjeta' }, [
      H('h2', { text: 'No encontramos esa página' }),
      enlace('#/', 'Volver al inicio', 'btn primario')
    ])]);
  }

  /* ---------- inicio ---------- */

  function tarjetaNivel(id, i) {
    var niv = nivel(id);
    if (!niv) return null;
    var desbloq = nivelDesbloqueado(i);
    var hechas = contarHechas(niv);
    var completo = Progreso.examenAprobado(id);
    var etiqueta = completo ? 'Completado'
      : !desbloq ? 'Bloqueado'
      : niv.enConstruccion ? 'En construcción'
      : abiertoRepaso(i) ? 'Abierto para repaso'
      : 'Disponible';
    var clases = 'nivel-card n-' + id + (desbloq ? '' : ' bloqueado') + (completo ? ' completo' : '') + (niv.enConstruccion ? ' construccion' : '');
    var hijos = [
      H('div', { class: 'n-nombre', text: niv.nombre }),
      H('div', { class: 'n-titulo', text: niv.titulo }),
      barra(niv.sesiones.length ? hechas / niv.sesiones.length * 100 : 0),
      H('div', { class: 'n-pie' }, [
        H('span', { text: hechas + '/' + niv.sesiones.length + ' sesiones' }),
        H('span', { class: 'n-estado', text: etiqueta })
      ])
    ];
    return desbloq ? H('a', { href: '#/nivel/' + id, class: clases }, hijos) : H('div', { class: clases }, hijos);
  }

  function pantallaInicio() {
    var est = Progreso.estado;
    var nodos = [
      H('h1', { class: 'titulo', text: 'Ruta de inglés' }),
      H('p', { class: 'sub', text: 'De A1 a C2, paso a paso. Las explicaciones están en español y la práctica en inglés.' })
    ];

    if (est.nivelInicial === null) {
      nodos.push(H('div', { class: 'tarjeta destacada' }, [
        H('h2', { text: 'Empieza con el examen de ubicación' }),
        H('p', { text: '30 preguntas, unos 15 minutos. Te recomendamos en qué nivel conviene empezar. Si prefieres, puedes comenzar desde A1.' }),
        H('div', { class: 'acciones' }, [
          enlace('#/ubicacion', 'Hacer el examen', 'btn primario'),
          boton('Empezar desde A1', 'suave', function () { Progreso.omitirUbicacion(); ruta(); })
        ])
      ]));
    } else {
      var total = 0, hechas = 0;
      ORDEN.forEach(function (id) { var n = nivel(id); if (n && !n.enConstruccion) { total += n.sesiones.length; hechas += contarHechas(n); } });
      nodos.push(H('div', { class: 'stats' }, [
        stat(hechas + '/' + total, 'sesiones aprobadas'),
        stat(String(Progreso.rachaActual()), 'días de racha'),
        stat(String(Progreso.numFallos()), 'palabras por repasar')
      ]));
    }

    nodos.push(H('h2', { class: 'seccion', text: 'Niveles' }));
    nodos.push(H('div', { class: 'grid-niveles' }, ORDEN.map(function (id, i) { return tarjetaNivel(id, i); })));
    montar(nodos);
  }

  function stat(valor, texto) {
    return H('div', { class: 'stat' }, [H('div', { class: 'stat-v', text: valor }), H('div', { class: 'stat-t', text: texto })]);
  }

  /* ---------- nivel ---------- */

  function pantallaNivel(id) {
    var i = idxNivel(id), niv = nivel(id);
    if (!niv) return pantalla404();
    if (!nivelDesbloqueado(i)) {
      return montar([H('div', { class: 'tarjeta' }, [
        H('h2', { text: 'Nivel bloqueado' }),
        H('p', { text: 'Aprueba el examen del nivel anterior para abrir ' + niv.nombre + '.' }),
        enlace('#/', 'Volver al inicio', 'btn primario')
      ])]);
    }

    var nodos = [
      H('div', { class: 'migas' }, [enlace('#/', '← Inicio')]),
      H('h1', { class: 'titulo', text: niv.nombre + ' · ' + niv.titulo }),
      H('p', { class: 'sub', text: niv.descripcion })
    ];
    if (niv.enConstruccion) {
      nodos.push(H('div', { class: 'aviso' }, [H('strong', { text: 'En construcción. ' }),
        H('span', { text: 'Aquí está el temario planeado; el contenido llegará en próximas versiones.' })]));
    }
    if (abiertoRepaso(i)) {
      nodos.push(H('div', { class: 'aviso' }, [H('span', { text: 'Este nivel está abierto para repasar, según tu examen de ubicación.' })]));
    }

    var lista = H('div', { class: 'lista-sesiones' });
    niv.sesiones.forEach(function (s, j) {
      var desb = sesionDesbloqueada(i, j);
      var reg = Progreso.sesion(s.id);
      var aprobada = Progreso.sesionAprobada(s.id);
      var detalle = aprobada ? 'Mejor resultado: ' + reg.mejor + '%'
        : !tieneContenido(s) ? 'Próximamente'
        : reg ? 'Mejor resultado: ' + reg.mejor + '%'
        : 'Sin intentar';
      var hijos = [
        H('span', { class: 'ses-ico', text: aprobada ? '✔' : (desb ? '▶' : '🔒') }),
        H('span', { class: 'ses-num', text: String(j + 1) }),
        H('span', { class: 'ses-info' }, [
          H('span', { class: 'ses-titulo', text: s.titulo }),
          H('span', { class: 'ses-det', text: detalle })
        ]),
        s.tipo === 'tecnico' ? H('span', { class: 'badge tec', text: 'Técnico' }) : null
      ];
      var clases = 'ses-item' + (desb ? '' : ' bloqueada') + (aprobada ? ' hecha' : '');
      lista.appendChild(desb ? H('a', { href: '#/sesion/' + s.id, class: clases }, hijos) : H('div', { class: clases }, hijos));
    });
    nodos.push(lista);

    if (!niv.enConstruccion) {
      var ex = Progreso.examen(id);
      var desbEx = examenDesbloqueado(i);
      var hijosEx = [
        H('span', { class: 'ses-ico', text: Progreso.examenAprobado(id) ? '✔' : (desbEx ? '★' : '🔒') }),
        H('span', { class: 'ses-info' }, [
          H('span', { class: 'ses-titulo', text: 'Examen del nivel ' + niv.nombre }),
          H('span', { class: 'ses-det', text: desbEx ? (ex ? 'Mejor resultado: ' + ex.mejor + '%' : '20 preguntas · necesitas 80%') : 'Aprueba todas las sesiones para abrirlo' })
        ])
      ];
      var clasesEx = 'ses-item examen' + (desbEx ? '' : ' bloqueada') + (Progreso.examenAprobado(id) ? ' hecha' : '');
      nodos.push(desbEx ? H('a', { href: '#/examen/' + id, class: clasesEx }, hijosEx) : H('div', { class: clasesEx }, hijosEx));
    }
    montar(nodos);
  }

  /* ---------- sesión ---------- */

  function pantallaBloqueada(niv) {
    montar([H('div', { class: 'tarjeta' }, [
      H('h2', { text: 'Sesión bloqueada' }),
      H('p', { text: 'Aprueba la sesión anterior (80% o más) para abrir esta.' }),
      enlace('#/nivel/' + niv.id, 'Volver a ' + niv.nombre, 'btn primario')
    ])]);
  }

  function pantallaConstruccion(niv, ses) {
    montar([H('div', { class: 'tarjeta' }, [
      H('h2', { text: ses.titulo }),
      H('p', { text: 'Esta sesión todavía está en construcción. Llegará en una próxima versión.' }),
      enlace('#/nivel/' + niv.id, 'Volver a ' + niv.nombre, 'btn primario')
    ])]);
  }

  function pantallaSesion(sesId) {
    var nivId = String(sesId || '').split('-')[0];
    var i = idxNivel(nivId), niv = nivel(nivId);
    if (!niv) return pantalla404();
    var j = -1;
    niv.sesiones.forEach(function (s, k) { if (s.id === sesId) j = k; });
    if (j < 0) return pantalla404();
    var ses = niv.sesiones[j];
    if (!sesionDesbloqueada(i, j)) return pantallaBloqueada(niv);
    if (!tieneContenido(ses)) return pantallaConstruccion(niv, ses);

    var pasos = ['Vocabulario', 'Frases', 'Gramática', 'Práctica'];
    var paso = 0;
    var cont = H('div', { class: 'sesion' });
    montar([cont]);
    dibujar();

    function dibujar() {
      cont.innerHTML = '';
      cont.appendChild(H('div', { class: 'migas' }, [
        enlace('#/nivel/' + nivId, '← ' + niv.nombre),
        H('span', { text: ' · Sesión ' + (j + 1) + ' de ' + niv.sesiones.length })
      ]));
      cont.appendChild(H('h1', { class: 'titulo', text: ses.titulo }));
      if (ses.tipo === 'tecnico') cont.appendChild(H('span', { class: 'badge tec', text: 'Inglés técnico' }));
      cont.appendChild(H('ol', { class: 'pasos' }, pasos.map(function (p, k) {
        return H('li', {
          class: k === paso ? 'activo' : (k < paso ? 'hecho' : ''), text: (k + 1) + '. ' + p,
          onclick: function () { paso = k; dibujar(); }
        });
      })));

      var cuerpo = H('div', { class: 'cuerpo' });
      cont.appendChild(cuerpo);
      if (paso === 0) pintarVocab(cuerpo);
      else if (paso === 1) pintarFrases(cuerpo);
      else if (paso === 2) pintarGramatica(cuerpo);
      else pintarPractica(cuerpo);

      var nav = H('div', { class: 'acciones nav-pasos' }, [
        paso > 0 ? boton('← Anterior', 'suave', function () { paso--; dibujar(); window.scrollTo(0, 0); }) : null,
        paso < pasos.length - 1 ? boton('Siguiente →', 'primario', function () { paso++; dibujar(); window.scrollTo(0, 0); }) : null
      ]);
      cont.appendChild(nav);
    }

    function pintarVocab(d) {
      d.appendChild(H('p', { class: 'objetivo', text: 'Al terminar podrás ' + ses.objetivo }));
      if (Voz.disponible) {
        d.appendChild(boton('🔊 Escuchar todo', 'suave', function () {
          Voz.decirLista(ses.vocab.map(function (p) { return p[0]; }));
        }));
      }
      d.appendChild(H('div', { class: 'vocab-grid' }, ses.vocab.map(function (p) {
        return H('div', { class: 'vcard' }, [
          H('div', { class: 'v-en', text: p[0] }),
          H('div', { class: 'v-es', text: p[1] }),
          Motor.botonAudio(p[0])
        ]);
      })));
    }

    function pintarFrases(d) {
      d.appendChild(H('p', { class: 'objetivo', text: 'Escucha cada frase y repítela en voz alta.' }));
      d.appendChild(H('div', { class: 'frases' }, ses.frases.map(function (p) {
        return H('div', { class: 'frase' }, [
          H('div', { class: 'f-txt' }, [H('div', { class: 'f-en', text: p[0] }), H('div', { class: 'f-es', text: p[1] })]),
          Motor.botonesAudio(p[0])
        ]);
      })));
    }

    function pintarGramatica(d) {
      var g = ses.gramatica || {};
      d.appendChild(H('div', { class: 'gram tarjeta' }, [
        H('h2', { text: g.titulo || 'Gramática' }),
        H('div', { class: 'gram-cuerpo', html: g.html || '' })
      ]));
    }

    function pintarPractica(d) {
      var reg = Progreso.sesion(ses.id);
      d.appendChild(H('div', { class: 'tarjeta' }, [
        H('h2', { text: 'Quiz de la sesión' }),
        H('p', { text: 'Unas 12 preguntas con vocabulario, frases y gramática. Necesitas 80% o más para abrir la siguiente sesión.' }),
        reg ? H('p', { class: 'sub', text: 'Tu mejor resultado: ' + reg.mejor + '%' + (reg.aprobada ? ' (aprobada)' : '') }) : null,
        boton('Empezar quiz', 'primario', iniciarQuiz)
      ]));
    }

    function iniciarQuiz() {
      var fallos = Progreso.listaFallos();
      var preguntas = Motor.armarQuizSesion(ses, poolDe(i), fallos);
      Motor.quiz(cont, preguntas, {
        alResponder: seguimiento,
        alTerminar: fin,
        alSalir: dibujar
      });
    }

    function fin(res) {
      Progreso.registrarSesion(ses.id, res.pct, res.aprobado);
      Progreso.tocarRacha();
      actualizarBarra();
      var sig = niv.sesiones[j + 1];
      var acciones = [];
      if (res.aprobado) {
        acciones.push(sig
          ? { texto: 'Siguiente sesión', href: '#/sesion/' + sig.id, primario: true }
          : { texto: 'Ir al examen del nivel', href: '#/examen/' + nivId, primario: true });
        acciones.push({ texto: 'Volver al nivel', href: '#/nivel/' + nivId });
      } else {
        acciones.push({ texto: 'Intentar de nuevo', onclick: iniciarQuiz, primario: true });
        acciones.push({ texto: 'Repasar la sesión', onclick: function () { paso = 0; dibujar(); } });
      }
      mostrarResultado(cont, res, 'Aún no alcanzas el 80%', acciones);
    }
  }

  /* ---------- examen de nivel ---------- */

  function pantallaExamen(id) {
    var i = idxNivel(id), niv = nivel(id);
    if (!niv || niv.enConstruccion) return pantalla404();
    if (!examenDesbloqueado(i)) {
      return montar([H('div', { class: 'tarjeta' }, [
        H('h2', { text: 'Examen bloqueado' }),
        H('p', { text: 'Aprueba todas las sesiones de ' + niv.nombre + ' para abrir el examen.' }),
        enlace('#/nivel/' + id, 'Volver a ' + niv.nombre, 'btn primario')
      ])]);
    }
    var ex = Progreso.examen(id);
    var cont = H('div', { class: 'sesion' });
    montar([cont]);
    intro();

    function intro() {
      cont.innerHTML = '';
      cont.appendChild(H('div', { class: 'migas' }, [enlace('#/nivel/' + id, '← ' + niv.nombre)]));
      cont.appendChild(H('div', { class: 'tarjeta destacada' }, [
        H('h1', { class: 'titulo', text: 'Examen del nivel ' + niv.nombre }),
        H('p', { text: '20 preguntas con todo lo que viste en el nivel. Necesitas 80% (16 correctas) para abrir el siguiente nivel.' }),
        ex ? H('p', { class: 'sub', text: 'Tu mejor resultado: ' + ex.mejor + '%' }) : null,
        boton('Empezar examen', 'primario', empezar)
      ]));
    }

    function empezar() {
      var preguntas = Motor.armarExamen(niv, poolDe(i));
      Motor.quiz(cont, preguntas, { etiqueta: 'Examen', alResponder: seguimiento, alTerminar: fin, alSalir: intro });
    }

    function fin(res) {
      Progreso.registrarExamen(id, res.pct, res.aprobado);
      Progreso.tocarRacha();
      actualizarBarra();
      var sigId = ORDEN[i + 1];
      var acciones = [];
      var extra = null;
      if (res.aprobado) {
        extra = H('p', { text: sigId
          ? '¡Completaste ' + niv.nombre + '! Se abrió el siguiente nivel.'
          : '¡Completaste toda la ruta! Felicidades.' });
        acciones.push(sigId
          ? { texto: 'Ir a ' + nivel(sigId).nombre, href: '#/nivel/' + sigId, primario: true }
          : { texto: 'Volver al inicio', href: '#/', primario: true });
        acciones.push({ texto: 'Ver niveles', href: '#/' });
      } else {
        acciones.push({ texto: 'Intentar de nuevo', onclick: empezar, primario: true });
        acciones.push({ texto: 'Volver al nivel', href: '#/nivel/' + id });
      }
      mostrarResultado(cont, res, 'Aún no alcanzas el 80%', acciones, extra);
    }
  }

  /* ---------- examen de ubicación ---------- */

  function pantallaUbicacion() {
    var items = window.CURSO && window.CURSO.ubicacion;
    if (!items || !items.length) return pantalla404();
    var cont = H('div', { class: 'sesion' });
    montar([cont]);
    intro();

    function intro() {
      cont.innerHTML = '';
      cont.appendChild(H('div', { class: 'migas' }, [enlace('#/', '← Inicio')]));
      cont.appendChild(H('div', { class: 'tarjeta destacada' }, [
        H('h1', { class: 'titulo', text: 'Examen de ubicación' }),
        H('p', { text: items.length + ' preguntas, de fácil a difícil. No verás si acertaste para que el resultado sea más honesto. Si no sabes una respuesta, elige «No lo sé»: es mejor que adivinar.' }),
        boton('Empezar', 'primario', empezar)
      ]));
    }

    function empezar() {
      var preguntas = Motor.armarUbicacion(items);
      var porNivel = {};
      Motor.quiz(cont, preguntas, {
        etiqueta: 'Pregunta', sinFeedback: true, conNoSe: true,
        alResponder: function (q, ok) { if (ok) porNivel[q.nivel] = (porNivel[q.nivel] || 0) + 1; },
        alTerminar: function (res) { resultado(res, porNivel); },
        alSalir: intro
      });
    }

    function resultado(res, porNivel) {
      // Se empieza en el primer nivel donde no se alcanza el 80% (4 de 5).
      var rec = ORDEN.length - 1;
      for (var k = 0; k < ORDEN.length; k++) {
        if ((porNivel[ORDEN[k]] || 0) < 4) { rec = k; break; }
      }
      Progreso.setUbicacion(rec, porNivel);
      Progreso.tocarRacha();
      actualizarBarra();
      var recNivel = nivel(ORDEN[rec]);
      cont.innerHTML = '';
      cont.appendChild(H('div', { class: 'resultado aprobado' }, [
        H('h2', { text: 'Tu nivel recomendado: ' + recNivel.nombre }),
        H('p', { class: 'sub', text: recNivel.titulo + ' · ' + res.aciertos + ' de ' + res.total + ' correctas' }),
        H('div', { class: 'filas-nivel' }, ORDEN.map(function (id) {
          var n = porNivel[id] || 0;
          return H('div', { class: 'fila-nivel' }, [
            H('span', { class: 'f-nom', text: nivel(id).nombre }),
            barra(n / 5 * 100),
            H('span', { class: 'f-val', text: n + '/5' })
          ]);
        })),
        H('p', { text: 'Los niveles anteriores a ' + recNivel.nombre + ' quedan abiertos para que los repases cuando quieras.' }),
        recNivel.enConstruccion ? H('p', { class: 'aviso-inline', text: 'El contenido de ' + recNivel.nombre + ' aún está en construcción. Mientras tanto, repasa los niveles abiertos.' }) : null,
        H('div', { class: 'acciones centro' }, [
          enlace('#/nivel/' + ORDEN[rec], 'Ir a ' + recNivel.nombre, 'btn primario'),
          enlace('#/', 'Ver todos los niveles', 'btn suave')
        ])
      ]));
    }
  }

  /* ---------- repaso ---------- */

  function pantallaRepaso() {
    var fallos = Progreso.listaFallos();
    var cont = H('div', { class: 'sesion' });
    montar([cont]);
    if (!fallos.length) {
      cont.appendChild(H('div', { class: 'tarjeta' }, [
        H('h1', { class: 'titulo', text: 'Repaso' }),
        H('p', { text: 'No tienes palabras pendientes. Cuando falles alguna en un quiz, aparecerá aquí para repasarla.' }),
        enlace('#/', 'Volver al inicio', 'btn primario')
      ]));
      return;
    }
    intro();

    function intro() {
      cont.innerHTML = '';
      cont.appendChild(H('h1', { class: 'titulo', text: 'Repaso' }));
      cont.appendChild(H('p', { class: 'sub', text: 'Palabras que has fallado. Acierta cada una dos veces y sale de la lista.' }));
      cont.appendChild(H('div', { class: 'chips-lista' }, fallos.slice(0, 30).map(function (f) {
        return H('span', { class: 'chip-ro', text: f.en });
      })));
      cont.appendChild(boton('Practicar ahora', 'primario', empezar));
    }

    function empezar() {
      var pool = [];
      ORDEN.forEach(function (id) {
        var n = nivel(id);
        if (n) n.sesiones.forEach(function (s) { if (s.vocab) s.vocab.forEach(function (p) { pool.push(p); }); });
      });
      var preguntas = Motor.armarRepaso(Progreso.listaFallos(), pool);
      Motor.quiz(cont, preguntas, {
        etiqueta: 'Repaso', alResponder: seguimiento, alSalir: ruta,
        alTerminar: function (res) {
          Progreso.tocarRacha();
          actualizarBarra();
          mostrarResultado(cont, res, 'Sigue practicando', [
            { texto: 'Volver al inicio', href: '#/', primario: true },
            { texto: 'Repasar otra vez', onclick: ruta }
          ]);
        }
      });
    }
  }

  /* ---------- ajustes ---------- */

  function pantallaAjustes() {
    var nodos = [H('h1', { class: 'titulo', text: 'Ajustes' })];

    // Voz
    var etiquetaVel = H('span', { class: 'sub', text: Voz.velocidad.toFixed(2) + '×' });
    var rango = H('input', {
      type: 'range', min: '0.5', max: '1.1', step: '0.05', value: String(Voz.velocidad), 'aria-label': 'Velocidad de la voz',
      oninput: function () {
        Voz.velocidad = parseFloat(rango.value);
        etiquetaVel.textContent = Voz.velocidad.toFixed(2) + '×';
        Progreso.setVelocidad(Voz.velocidad);
      }
    });
    nodos.push(H('div', { class: 'tarjeta' }, [
      H('h2', { text: 'Voz en inglés' }),
      Voz.disponible
        ? H('div', {}, [
            H('p', { text: 'Velocidad de lectura' }),
            H('div', { class: 'fila-rango' }, [rango, etiquetaVel]),
            boton('🔊 Probar voz', 'suave', function () { Voz.decir('Hello! This is how I sound.'); })
          ])
        : H('p', { text: 'Tu navegador no ofrece voz en inglés. Puedes estudiar igual, pero los ejercicios de escuchar se cambian por otros.' })
    ]));

    // Ubicación
    nodos.push(H('div', { class: 'tarjeta' }, [
      H('h2', { text: 'Examen de ubicación' }),
      H('p', { text: Progreso.estado.ubicacion && !Progreso.estado.ubicacion.omitida ? 'Puedes repetirlo cuando quieras para ajustar tu nivel de inicio.' : 'Descubre en qué nivel te conviene empezar.' }),
      enlace('#/ubicacion', 'Hacer el examen', 'btn suave')
    ]));

    // Exportar / importar
    var codigo = H('textarea', { class: 'codigo', readonly: true, rows: '3', 'aria-label': 'Código de progreso' });
    codigo.value = Progreso.exportar();
    var entrada = H('textarea', { class: 'codigo', rows: '3', placeholder: 'Pega aquí el código que copiaste en otro dispositivo', 'aria-label': 'Código a importar' });
    nodos.push(H('div', { class: 'tarjeta' }, [
      H('h2', { text: 'Pasar tu progreso a otro dispositivo' }),
      H('p', { text: 'El progreso se guarda solo en este navegador. Para llevarlo a otro dispositivo, copia este código y pégalo allá.' }),
      codigo,
      boton('Copiar código', 'suave', function () {
        codigo.select();
        try {
          if (navigator.clipboard) navigator.clipboard.writeText(codigo.value); else document.execCommand('copy');
        } catch (e) { /* el usuario puede copiar a mano */ }
      }),
      H('h3', { text: 'Importar' }),
      entrada,
      boton('Importar progreso', 'primario', function () {
        if (!entrada.value.trim()) return;
        if (!window.confirm('Esto reemplazará el progreso de este dispositivo. ¿Continuar?')) return;
        if (Progreso.importar(entrada.value)) {
          Voz.velocidad = Progreso.estado.velocidad || 0.9;
          window.alert('Progreso importado.');
          location.hash = '#/';
          ruta();
        } else {
          window.alert('El código no es válido. Cópialo completo, desde «IR1:».');
        }
      })
    ]));

    // Reiniciar
    nodos.push(H('div', { class: 'tarjeta' }, [
      H('h2', { text: 'Empezar de cero' }),
      H('p', { text: 'Borra todo el progreso de este dispositivo.' }),
      boton('Reiniciar progreso', 'peligro', function () {
        if (!window.confirm('Se borrará todo tu progreso en este dispositivo. ¿Seguro?')) return;
        Progreso.reiniciar();
        location.hash = '#/';
        ruta();
      })
    ]));

    nodos.push(H('p', { class: 'version', text: 'Versión ' + VERSION }));
    montar(nodos);
  }

  /* ---------- rutas ---------- */

  function ruta() {
    var hash = (location.hash || '#/').replace(/^#\/?/, '');
    var partes = hash.split('/').filter(Boolean);
    Voz.parar();
    actualizarBarra();
    window.scrollTo(0, 0);
    var r = partes[0] || '';
    if (r === '') return pantallaInicio();
    if (r === 'nivel') return pantallaNivel(partes[1]);
    if (r === 'sesion') return pantallaSesion(partes[1]);
    if (r === 'examen') return pantallaExamen(partes[1]);
    if (r === 'ubicacion') return pantallaUbicacion();
    if (r === 'repaso') return pantallaRepaso();
    if (r === 'ajustes') return pantallaAjustes();
    pantalla404();
  }

  window.addEventListener('hashchange', ruta);
  ruta();
})();
