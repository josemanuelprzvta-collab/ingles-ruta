#!/usr/bin/env node
/* Revisa que los archivos de data/ estén bien escritos antes de subirlos.
   Uso (necesita Node.js):   node herramientas/validar-datos.js
   No es necesario para usar la página; solo ayuda a detectar errores al agregar contenido. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dir = path.join(__dirname, '..', 'data');
const archivos = ['ubicacion', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
const ORDEN = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

const ctx = { window: {} };
vm.createContext(ctx);
archivos.forEach(function (f) {
  const ruta = path.join(dir, f + '.js');
  try {
    vm.runInContext(fs.readFileSync(ruta, 'utf8'), ctx, { filename: f + '.js' });
  } catch (e) {
    console.error('✘ No se pudo leer data/' + f + '.js: ' + e.message);
    process.exit(1);
  }
});
const C = ctx.window.CURSO || {};

const errores = [];
const avisos = [];
const err = function (m) { errores.push(m); };
const esTexto = function (x) { return typeof x === 'string' && x.trim().length > 0; };
const esPar = function (p) { return Array.isArray(p) && p.length === 2 && esTexto(p[0]) && esTexto(p[1]); };

const idsVistos = {};
const enVisto = {};
const esVisto = {};
let totalSesiones = 0, sesionesConContenido = 0, totalVocab = 0, totalFrases = 0, totalEj = 0;

ORDEN.forEach(function (id) {
  const niv = C[id];
  if (!niv) { err('Falta el nivel ' + id); return; }
  if (niv.id !== id) err(id + ': el campo "id" del nivel no coincide');
  if (!esTexto(niv.nombre) || !esTexto(niv.titulo) || !esTexto(niv.descripcion)) err(id + ': faltan nombre, titulo o descripcion');
  if (!Array.isArray(niv.sesiones) || !niv.sesiones.length) { err(id + ': no tiene sesiones'); return; }

  niv.sesiones.forEach(function (s, k) {
    totalSesiones++;
    const quien = (s && s.id) || (id + '#' + (k + 1));
    if (!esTexto(s.id)) { err(quien + ': falta id'); return; }
    if (idsVistos[s.id]) err(quien + ': id repetido');
    idsVistos[s.id] = true;
    if (s.id.indexOf(id + '-') !== 0) err(quien + ': el id debe empezar con "' + id + '-"');
    if (!esTexto(s.titulo)) err(quien + ': falta titulo');
    if (s.tipo !== 'base' && s.tipo !== 'tecnico') err(quien + ': tipo debe ser "base" o "tecnico"');

    const tieneContenido = !!(s.vocab || s.frases || s.gramatica || s.ejercicios);
    if (!tieneContenido) {
      if (!niv.enConstruccion) err(quien + ': sin contenido, pero el nivel no está marcado como enConstruccion');
      return;
    }
    sesionesConContenido++;
    if (!esTexto(s.objetivo)) err(quien + ': falta objetivo');

    if (!Array.isArray(s.vocab) || s.vocab.length < 8) err(quien + ': vocab debe tener al menos 8 pares');
    (s.vocab || []).forEach(function (p) {
      if (!esPar(p)) { err(quien + ': par de vocabulario inválido ' + JSON.stringify(p)); return; }
      totalVocab++;
      const en = p[0].toLowerCase().trim(), es = p[1].toLowerCase().trim();
      if (enVisto[en]) err(quien + ': «' + p[0] + '» ya existe en ' + enVisto[en]);
      if (esVisto[es]) err(quien + ': la traducción «' + p[1] + '» ya existe en ' + esVisto[es] + ' (genera preguntas ambiguas)');
      enVisto[en] = enVisto[en] || s.id;
      esVisto[es] = esVisto[es] || s.id;
    });

    if (!Array.isArray(s.frases) || s.frases.length < 4) err(quien + ': frases debe tener al menos 4 pares');
    (s.frases || []).forEach(function (p) {
      if (!esPar(p)) err(quien + ': frase inválida ' + JSON.stringify(p)); else totalFrases++;
    });

    if (!s.gramatica || !esTexto(s.gramatica.titulo) || !esTexto(s.gramatica.html)) err(quien + ': falta gramatica.titulo o gramatica.html');

    if (!Array.isArray(s.ejercicios) || s.ejercicios.length < 4) err(quien + ': ejercicios debe tener al menos 4');
    (s.ejercicios || []).forEach(function (e, n) {
      totalEj++;
      const donde = quien + ' ejercicio ' + (n + 1);
      if (e.t === 'completar' || e.t === 'opcion') {
        if (!esTexto(e.q)) err(donde + ': falta q');
        if (e.t === 'completar' && String(e.q).indexOf('___') < 0) err(donde + ': "completar" necesita ___ en q');
        if (!Array.isArray(e.o) || e.o.length < 2) { err(donde + ': o necesita al menos 2 opciones'); return; }
        if (!Number.isInteger(e.a) || e.a < 0 || e.a >= e.o.length) err(donde + ': a apunta fuera de las opciones');
        if (new Set(e.o).size !== e.o.length) err(donde + ': opciones repetidas');
      } else if (e.t === 'ordenar') {
        if (!esTexto(e.es) || !esTexto(e.en)) err(donde + ': ordenar necesita es y en');
        else if (e.en.trim().split(/\s+/).length < 2) err(donde + ': la frase en inglés debe tener 2 palabras o más');
      } else if (e.t === 'dictado') {
        if (!esTexto(e.en)) err(donde + ': dictado necesita en');
        if (!esTexto(e.es)) avisos.push(donde + ': conviene agregar es (pista y modo sin audio)');
      } else {
        err(donde + ': tipo desconocido "' + e.t + '"');
      }
    });
  });

  if (!niv.enConstruccion) {
    const sinContenido = niv.sesiones.filter(function (s) { return !s.vocab; });
    if (sinContenido.length) err(id + ': el nivel no está en construcción pero hay sesiones vacías');
  }
});

// Examen de ubicación
const ub = C.ubicacion;
if (!Array.isArray(ub) || !ub.length) {
  err('ubicacion: no hay preguntas');
} else {
  const porNivel = {};
  ub.forEach(function (q, n) {
    const donde = 'ubicacion #' + (n + 1);
    if (ORDEN.indexOf(q.n) < 0) err(donde + ': n debe ser a1..c2');
    porNivel[q.n] = (porNivel[q.n] || 0) + 1;
    if (!esTexto(q.q)) err(donde + ': falta q');
    if (!Array.isArray(q.o) || q.o.length < 2) { err(donde + ': necesita opciones'); return; }
    if (!Number.isInteger(q.a) || q.a < 0 || q.a >= q.o.length) err(donde + ': a fuera de rango');
    if (new Set(q.o).size !== q.o.length) err(donde + ': opciones repetidas');
  });
  ORDEN.forEach(function (id) {
    if (porNivel[id] !== 5) avisos.push('ubicacion: ' + id + ' tiene ' + (porNivel[id] || 0) + ' preguntas (el cálculo espera 5 por nivel)');
  });
}

console.log('Niveles: ' + ORDEN.length + ' · Sesiones: ' + totalSesiones + ' (con contenido: ' + sesionesConContenido + ')');
console.log('Vocabulario: ' + totalVocab + ' · Frases: ' + totalFrases + ' · Ejercicios escritos a mano: ' + totalEj);
console.log('Preguntas de ubicación: ' + (ub ? ub.length : 0));
avisos.forEach(function (a) { console.log('⚠ ' + a); });
if (errores.length) {
  console.error('\n' + errores.length + ' error(es):');
  errores.forEach(function (e) { console.error('✘ ' + e); });
  process.exit(1);
}
console.log('\n✔ Todo en orden.');
