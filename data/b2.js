/* Nivel B2 · Intermedio alto
   IMPORTANTE: no cambies los "id" de las sesiones; el progreso se guarda con ellos. */
window.CURSO = window.CURSO || {};
window.CURSO.b2 = {
  id: "b2",
  nombre: "B2",
  titulo: "Intermedio alto",
  descripcion: "Argumenta, escribe con formalidad y entiende textos y manuales extensos.",
  sesiones: [
    {
      id: "b2-01", tipo: "base", titulo: "Condicionales 2 y 3",
      objetivo: "hablar de situaciones irreales en el presente y de lo que pudo haber pasado.",
      vocab: [
        ["imagine", "imaginar"], ["suppose", "suponer"], ["otherwise", "de lo contrario"],
        ["in that case", "en ese caso"], ["provided that", "con la condición de que"],
        ["as long as", "siempre y cuando"], ["regret", "lamentar / arrepentirse"], ["mistake", "equivocación"],
        ["consequence", "consecuencia"], ["outcome", "desenlace"], ["opportunity", "oportunidad"],
        ["chance", "posibilidad"]
      ],
      frases: [
        ["If I had more time, I would learn Italian.", "Si tuviera más tiempo, aprendería italiano."],
        ["If I were you, I would accept the offer.", "Si yo fuera tú, aceptaría la oferta."],
        ["What would you do if you won the lottery?", "¿Qué harías si ganaras la lotería?"],
        ["If we had left earlier, we wouldn't have missed the flight.", "Si hubiéramos salido antes, no habríamos perdido el vuelo."],
        ["She would have passed if she had studied.", "Ella habría aprobado si hubiera estudiado."],
        ["I'll help you provided that you tell me the truth.", "Te ayudaré con la condición de que me digas la verdad."]
      ],
      gramatica: {
        titulo: "Condicionales segundo y tercero",
        html: "<table><tr><th>Tipo</th><th>Forma</th><th>Uso</th></tr><tr><td><b>0</b></td><td>If + presente, presente</td><td>Hechos generales</td></tr><tr><td><b>1</b></td><td>If + presente, will + base</td><td>Posible en el futuro</td></tr><tr><td><b>2</b></td><td>If + <b>pasado simple</b>, <b>would</b> + base</td><td>Irreal o poco probable ahora</td></tr><tr><td><b>3</b></td><td>If + <b>past perfect</b>, <b>would have</b> + participio</td><td>Imposible: ya pasó</td></tr></table><h3>Segundo condicional</h3><div class='ej'>If I <b>had</b> more time, I <b>would learn</b> Italian.<br>(No tengo tiempo ahora.)</div><p>Con <b>be</b> se usa <b>were</b> para todas las personas: <i>If I <b>were</b> you, I would accept.</i></p><h3>Tercer condicional</h3><div class='ej'>If we <b>had left</b> earlier, we <b>wouldn't have missed</b> the flight.<br>(No salimos antes y lo perdimos.)</div><p>Sirve para <b>arrepentimientos</b> y para analizar causas de un error.</p><h3>Otras condiciones</h3><p><b>provided that / as long as</b> = siempre y cuando · <b>otherwise</b> = de lo contrario.</p>"
      },
      ejercicios: [
        { t: "completar", q: "If I ___ more time, I would learn Italian.", o: ["had", "have", "will have"], a: 0 },
        { t: "completar", q: "If I ___ you, I would accept the offer.", o: ["were", "am", "will be"], a: 0 },
        { t: "completar", q: "What would you do if you ___ the lottery?", o: ["won", "win", "would win"], a: 0 },
        { t: "completar", q: "If we had left earlier, we ___ the flight.", o: ["wouldn't have missed", "wouldn't miss", "won't miss"], a: 0 },
        { t: "completar", q: "She would have passed if she ___ studied.", o: ["had", "has", "would have"], a: 0 },
        { t: "completar", q: "I'll help you ___ you tell me the truth.", o: ["provided that", "unless", "otherwise"], a: 0 },
        { t: "ordenar", es: "Si yo fuera tú, aceptaría.", en: "If I were you, I would accept." },
        { t: "dictado", en: "If I had more time, I would learn Italian.", es: "Si tuviera más tiempo, aprendería italiano." }
      ]
    },
    {
      id: "b2-02", tipo: "base", titulo: "Voz pasiva completa",
      objetivo: "usar la pasiva en todos los tiempos, con modales y para reportar información.",
      vocab: [
        ["reportedly", "según se informa"], ["allegedly", "supuestamente"], ["widely", "ampliamente"],
        ["believed", "se cree"], ["considered", "considerado"], ["expected", "se espera"],
        ["supposed to", "se supone que"], ["launch", "lanzar"], ["implement", "implementar"],
        ["establish", "establecer"], ["require", "requerir / exigir"], ["upgrade", "actualizar (mejorar)"]
      ],
      frases: [
        ["The system has been upgraded.", "El sistema ha sido actualizado."],
        ["The new policy is being implemented.", "La nueva política se está implementando."],
        ["The work must be finished by Friday.", "El trabajo debe terminarse el viernes."],
        ["It is believed that the cause was a power surge.", "Se cree que la causa fue un pico de tensión."],
        ["The plant is expected to open next year.", "Se espera que la planta abra el próximo año."],
        ["I had my laptop repaired yesterday.", "Me repararon la laptop ayer."]
      ],
      gramatica: {
        titulo: "La pasiva en todos los tiempos",
        html: "<table><tr><th>Tiempo</th><th>Forma</th><th>Ejemplo</th></tr><tr><td>Presente simple</td><td>is / are + pp</td><td>It <b>is made</b>.</td></tr><tr><td>Presente continuo</td><td>is / are <b>being</b> + pp</td><td>It <b>is being repaired</b>.</td></tr><tr><td>Pasado simple</td><td>was / were + pp</td><td>It <b>was built</b>.</td></tr><tr><td>Presente perfecto</td><td>has / have <b>been</b> + pp</td><td>It <b>has been upgraded</b>.</td></tr><tr><td>Futuro</td><td>will <b>be</b> + pp</td><td>It <b>will be installed</b>.</td></tr><tr><td>Con modal</td><td>must / can / should <b>be</b> + pp</td><td>It <b>must be finished</b>.</td></tr></table><h3>Pasiva para reportar información</h3><ul><li><b>It is believed that</b> the cause was a power surge.</li><li>The plant <b>is expected to</b> open next year.</li><li>He <b>is said to</b> be the best engineer.</li></ul><h3>Have / get + algo + participio</h3><p>Cuando otra persona hace algo por ti: <i>I had my laptop repaired.</i> (Me la repararon.)</p>"
      },
      ejercicios: [
        { t: "completar", q: "The system has ___ upgraded.", o: ["been", "be", "being"], a: 0 },
        { t: "completar", q: "The new policy is ___ implemented.", o: ["being", "been", "be"], a: 0 },
        { t: "completar", q: "The work must ___ finished by Friday.", o: ["be", "been", "is"], a: 0 },
        { t: "completar", q: "It is ___ that the cause was a power surge.", o: ["believed", "believe", "believing"], a: 0 },
        { t: "completar", q: "The plant is expected ___ open next year.", o: ["to", "for", "that"], a: 0 },
        { t: "completar", q: "I had my laptop ___ yesterday.", o: ["repaired", "repair", "repairing"], a: 0 },
        { t: "ordenar", es: "El trabajo debe terminarse hoy.", en: "The work must be finished today." },
        { t: "dictado", en: "The system has been upgraded.", es: "El sistema ha sido actualizado." }
      ]
    },
    {
      id: "b2-03", tipo: "base", titulo: "Estilo indirecto",
      objetivo: "contar lo que alguien dijo, preguntó o pidió.",
      vocab: [
        ["claim", "afirmar"], ["admit", "admitir"], ["deny", "negar"], ["warn", "advertir"],
        ["explain", "explicar"], ["mention", "mencionar"], ["inform", "informar"],
        ["announce", "anunciar"], ["insist", "insistir"], ["complain", "quejarse"],
        ["point out", "señalar"], ["remind", "recordarle a alguien"]
      ],
      frases: [
        ["She said that she was tired.", "Ella dijo que estaba cansada."],
        ["He told me that he would call later.", "Él me dijo que llamaría más tarde."],
        ["The manager asked if I had finished the report.", "El gerente preguntó si yo había terminado el reporte."],
        ["They announced that the plant would close on Friday.", "Anunciaron que la planta cerraría el viernes."],
        ["She warned us not to touch the wires.", "Ella nos advirtió que no tocáramos los cables."],
        ["He admitted that he had made a mistake.", "Él admitió que había cometido un error."]
      ],
      gramatica: {
        titulo: "Reported speech",
        html: "<h3>El tiempo verbal «retrocede»</h3><table><tr><th>Dijo</th><th>Se reporta</th></tr><tr><td>am / is / are</td><td><b>was / were</b></td></tr><tr><td>presente simple</td><td><b>pasado simple</b></td></tr><tr><td>pasado simple</td><td><b>past perfect</b> (had + pp)</td></tr><tr><td>will</td><td><b>would</b></td></tr><tr><td>can</td><td><b>could</b></td></tr></table><div class='ej'>«I <b>am</b> tired,» she said. → She said that she <b>was</b> tired.<br>«I <b>will</b> call,» he said. → He said he <b>would</b> call.</div><h3>Said o told</h3><p><b>say</b> (sin persona): <i>He said that…</i> · <b>tell</b> (con persona): <i>He told me that…</i></p><h3>Preguntas y órdenes</h3><ul><li>Preguntas de sí/no: <b>asked if / whether</b> + orden normal: <i>She asked if I had finished.</i></li><li>Órdenes: <b>told me to</b> / <b>told me not to</b>: <i>She warned us not to touch the wires.</i></li></ul><h3>Cambian las referencias</h3><p>today → <b>that day</b> · tomorrow → <b>the next day</b> · here → <b>there</b> · now → <b>then</b></p>"
      },
      ejercicios: [
        { t: "completar", q: "She said that she ___ tired.", o: ["was", "is", "be"], a: 0 },
        { t: "completar", q: "He told me that he ___ call later.", o: ["would", "will", "shall"], a: 0 },
        { t: "completar", q: "He ___ me that he was busy.", o: ["told", "said", "spoke"], a: 0 },
        { t: "completar", q: "The manager asked ___ I had finished the report.", o: ["if", "that", "what"], a: 0 },
        { t: "completar", q: "She warned us not ___ touch the wires.", o: ["to", "for", "that"], a: 0 },
        { t: "completar", q: "«I will help you,» he said. → He said he ___ help me.", o: ["would", "will", "can"], a: 0 },
        { t: "ordenar", es: "Dijo que estaba ocupado.", en: "He said that he was busy." },
        { t: "dictado", en: "She said that she was tired.", es: "Ella dijo que estaba cansada." }
      ]
    },
    {
      id: "b2-04", tipo: "base", titulo: "Oraciones de relativo",
      objetivo: "dar más información sobre personas, cosas y lugares con who, which, that, whose y where.",
      vocab: [
        ["supplier", "proveedor"], ["customer", "cliente"], ["employee", "empleado"],
        ["neighbour", "vecino"], ["manufacturer", "fabricante"], ["device", "dispositivo"],
        ["equipment", "equipo (maquinaria)"], ["component", "componente"], ["facility", "instalación"],
        ["contractor", "contratista"], ["warehouse", "almacén"], ["invoice", "factura"]
      ],
      frases: [
        ["The man who lives next door is a pilot.", "El hombre que vive al lado es piloto."],
        ["This is the supplier that delivered the parts.", "Este es el proveedor que entregó las piezas."],
        ["The machine which broke down yesterday is now fixed.", "La máquina que se descompuso ayer ya está arreglada."],
        ["She is the engineer whose team won the award.", "Ella es la ingeniera cuyo equipo ganó el premio."],
        ["That is the warehouse where we keep the spare parts.", "Ese es el almacén donde guardamos las refacciones."],
        ["The report, which was sent yesterday, includes the invoice.", "El reporte, que se envió ayer, incluye la factura."]
      ],
      gramatica: {
        titulo: "Relative clauses",
        html: "<table><tr><th>Pronombre</th><th>Se usa para</th><th>Ejemplo</th></tr><tr><td><b>who</b></td><td>personas</td><td>The man <b>who</b> lives next door…</td></tr><tr><td><b>which</b></td><td>cosas</td><td>The machine <b>which</b> broke down…</td></tr><tr><td><b>that</b></td><td>personas o cosas (defining)</td><td>The supplier <b>that</b> delivered…</td></tr><tr><td><b>whose</b></td><td>posesión</td><td>The engineer <b>whose</b> team won…</td></tr><tr><td><b>where</b></td><td>lugares</td><td>The warehouse <b>where</b> we keep…</td></tr></table><h3>Defining y non-defining</h3><ul><li><b>Defining</b> (necesaria, sin comas): <i>The tool that I need is missing.</i></li><li><b>Non-defining</b> (información extra, con comas, <u>no</u> se usa that): <i>The report, <b>which</b> was sent yesterday, includes the invoice.</i></li></ul><h3>Se puede omitir el pronombre</h3><p>Cuando es el <b>objeto</b> de la cláusula: <i>The man (who) I met</i> · <i>The report (that) I wrote</i>.</p>"
      },
      ejercicios: [
        { t: "completar", q: "The man ___ lives next door is a pilot.", o: ["who", "which", "whose"], a: 0 },
        { t: "completar", q: "The machine ___ broke down is now fixed.", o: ["which", "who", "whose"], a: 0 },
        { t: "completar", q: "She is the engineer ___ team won the award.", o: ["whose", "who", "which"], a: 0 },
        { t: "completar", q: "That is the warehouse ___ we keep the spare parts.", o: ["where", "which", "who"], a: 0 },
        { t: "completar", q: "The report, ___ was sent yesterday, includes the invoice.", o: ["which", "that", "who"], a: 0, e: "En una cláusula non-defining (con comas) no se usa «that»." },
        { t: "completar", q: "The tool ___ I need is missing.", o: ["that", "who", "whose"], a: 0 },
        { t: "ordenar", es: "Ese es el hombre que conocí.", en: "That is the man I met." },
        { t: "dictado", en: "The man who lives next door is a pilot.", es: "El hombre que vive al lado es piloto." }
      ]
    },
    {
      id: "b2-05", tipo: "base", titulo: "Tiempos perfectos continuos",
      objetivo: "hablar de cuánto tiempo llevas haciendo algo y de lo que había pasado antes.",
      vocab: [
        ["lately", "últimamente"], ["how long", "cuánto tiempo"], ["all day", "todo el día"],
        ["for ages", "desde hace mucho"], ["exhausted", "agotado"], ["improve", "mejorar"],
        ["progress", "avance"], ["struggle", "luchar / batallar"], ["effort", "esfuerzo"],
        ["habit", "hábito"], ["routine", "rutina"], ["practice", "practicar"]
      ],
      frases: [
        ["I have been working here for six years.", "He estado trabajando aquí durante seis años."],
        ["She has been waiting since nine o'clock.", "Ella ha estado esperando desde las nueve."],
        ["How long have you been learning English?", "¿Cuánto tiempo llevas aprendiendo inglés?"],
        ["It has been raining all day.", "Ha estado lloviendo todo el día."],
        ["By the time we arrived, the movie had already started.", "Cuando llegamos, la película ya había empezado."],
        ["He was exhausted because he had been working all night.", "Estaba agotado porque había estado trabajando toda la noche."]
      ],
      gramatica: {
        titulo: "Perfect continuous y past perfect",
        html: "<h3>Present perfect continuous</h3><div class='ej'><b>have / has been</b> + verbo-ing<br><i>I have been working here for six years.</i></div><p>Pone el foco en la <b>duración</b> o en una actividad reciente con resultado visible: <i>It has been raining</i> (el piso está mojado).</p><h3>Continuo o simple</h3><ul><li><b>Continuo:</b> duración. <i>I've been writing reports all day.</i></li><li><b>Simple:</b> resultado o cantidad. <i>I've written three reports.</i></li></ul><h3>Past perfect: had + participio</h3><p>Una acción <b>anterior</b> a otra en el pasado: <i>By the time we arrived, the movie <b>had</b> already <b>started</b>.</i></p><h3>Past perfect continuous</h3><p><b>had been</b> + verbo-ing: <i>He was exhausted because he <b>had been working</b> all night.</i></p><p>Los verbos de estado (<i>know, like, have</i>) no suelen ir en forma continua.</p>"
      },
      ejercicios: [
        { t: "completar", q: "I have been ___ here for six years.", o: ["working", "work", "worked"], a: 0 },
        { t: "completar", q: "How long have you been ___ English?", o: ["learning", "learn", "learned"], a: 0 },
        { t: "completar", q: "It has been ___ all day.", o: ["raining", "rain", "rained"], a: 0 },
        { t: "completar", q: "By the time we arrived, the movie ___ already started.", o: ["had", "has", "was"], a: 0 },
        { t: "completar", q: "He was exhausted because he ___ been working all night.", o: ["had", "has", "was"], a: 0 },
        { t: "completar", q: "She ___ been waiting since nine.", o: ["has", "have", "is"], a: 0 },
        { t: "ordenar", es: "Ha estado lloviendo todo el día.", en: "It has been raining all day." },
        { t: "dictado", en: "How long have you been learning English?", es: "¿Cuánto tiempo llevas aprendiendo inglés?" }
      ]
    },
    {
      id: "b2-06", tipo: "base", titulo: "Argumentar y debatir",
      objetivo: "defender una postura con razones, ejemplos y respuesta a objeciones.",
      vocab: [
        ["argue", "argumentar"], ["evidence", "evidencia"], ["support", "apoyar / respaldar"],
        ["oppose", "oponerse"], ["convince", "convencer"], ["persuade", "persuadir"],
        ["debate", "debate"], ["valid", "válido"], ["counterargument", "contraargumento"],
        ["conclusion", "conclusión"], ["fair", "justo"], ["biased", "sesgado"]
      ],
      frases: [
        ["I would like to argue that remote work is more efficient.", "Quisiera argumentar que el trabajo remoto es más eficiente."],
        ["There is strong evidence to support this idea.", "Hay evidencia sólida que respalda esta idea."],
        ["I see your point, but I disagree.", "Entiendo tu punto, pero no estoy de acuerdo."],
        ["That is a valid argument; however, it ignores the cost.", "Ese es un argumento válido; sin embargo, ignora el costo."],
        ["Let me give you an example.", "Déjame darte un ejemplo."],
        ["In conclusion, the benefits outweigh the risks.", "En conclusión, los beneficios superan a los riesgos."]
      ],
      gramatica: {
        titulo: "Cómo construir un argumento",
        html: "<ol><li><b>Postura:</b> <i>I would like to argue that…</i></li><li><b>Razón:</b> <i>The main reason is that…</i></li><li><b>Evidencia:</b> <i>There is strong evidence to support this.</i></li><li><b>Ejemplo:</b> <i>For instance, … / Let me give you an example.</i></li><li><b>Objeción y respuesta:</b> <i>Some people say… However, …</i></li><li><b>Conclusión:</b> <i>In conclusion, … / To sum up, …</i></li></ol><h3>En un debate</h3><table><tr><th>Para…</th><th>Di…</th></tr><tr><td>Reconocer un punto</td><td><b>I see your point, but…</b> · That's a valid argument.</td></tr><tr><td>Discrepar con suavidad</td><td><b>I'm not convinced that…</b> · I'm afraid I disagree.</td></tr><tr><td>Pedir una razón</td><td><b>What makes you say that?</b></td></tr><tr><td>Pedir pruebas</td><td><b>Do you have any evidence for that?</b></td></tr></table><p>Un buen argumento ataca la <b>idea</b>, no a la persona.</p>"
      },
      ejercicios: [
        { t: "completar", q: "I'd like to ___ that remote work is more efficient.", o: ["argue", "tell", "speak"], a: 0 },
        { t: "completar", q: "There is strong ___ to support this idea.", o: ["evidence", "evident", "evidently"], a: 0 },
        { t: "completar", q: "I see your ___, but I disagree.", o: ["point", "part", "side"], a: 0 },
        { t: "completar", q: "That is a valid argument; ___, it ignores the cost.", o: ["however", "because", "so"], a: 0 },
        { t: "completar", q: "___ example, some companies save a lot of money.", o: ["For", "In", "At"], a: 0 },
        { t: "completar", q: "In ___, the benefits outweigh the risks.", o: ["conclusion", "conclude", "concluding"], a: 0 },
        { t: "ordenar", es: "Entiendo tu punto.", en: "I see your point." },
        { t: "dictado", en: "Let me give you an example.", es: "Déjame darte un ejemplo." }
      ]
    },
    {
      id: "b2-07", tipo: "base", titulo: "Conectores",
      objetivo: "unir ideas con precisión: añadir, contrastar, explicar causas y resultados.",
      vocab: [
        ["furthermore", "además"], ["moreover", "más aún"], ["therefore", "por lo tanto"],
        ["consequently", "en consecuencia"], ["nevertheless", "no obstante"], ["whereas", "mientras que"],
        ["meanwhile", "mientras tanto"], ["instead", "en su lugar"], ["despite", "a pesar de"],
        ["in spite of", "pese a"], ["due to", "debido a"], ["in order to", "con el fin de"]
      ],
      frases: [
        ["The project was expensive; nevertheless, it was successful.", "El proyecto fue caro; no obstante, tuvo éxito."],
        ["Despite the rain, we finished the work.", "A pesar de la lluvia, terminamos el trabajo."],
        ["The pump failed; therefore, the line stopped.", "La bomba falló; por lo tanto, la línea se detuvo."],
        ["He prefers tea, whereas she prefers coffee.", "Él prefiere té, mientras que ella prefiere café."],
        ["We upgraded the system in order to reduce downtime.", "Actualizamos el sistema con el fin de reducir el tiempo de paro."],
        ["The delay was due to a supplier problem.", "El retraso se debió a un problema con el proveedor."]
      ],
      gramatica: {
        titulo: "Conectores por función",
        html: "<table><tr><th>Función</th><th>Conectores</th></tr><tr><td><b>Añadir</b></td><td>furthermore, moreover, in addition</td></tr><tr><td><b>Contrastar</b></td><td>however, nevertheless, whereas, although</td></tr><tr><td><b>Causa</b></td><td>because, due to, as</td></tr><tr><td><b>Resultado</b></td><td>therefore, consequently, as a result</td></tr><tr><td><b>Propósito</b></td><td>in order to, so that</td></tr><tr><td><b>Concesión</b></td><td>despite, in spite of, although</td></tr></table><h3>Puntuación</h3><div class='ej'>The pump failed<b>;</b> therefore<b>,</b> the line stopped.<br>The project was expensive<b>.</b> Nevertheless<b>,</b> it was successful.</div><h3>Despite vs although</h3><ul><li><b>Despite / in spite of</b> + sustantivo o -ing: <i>Despite the rain…</i></li><li><b>Although</b> + oración completa: <i>Although it rained…</i></li></ul><h3>Due to vs because</h3><ul><li><b>due to</b> + sustantivo: <i>due to a supplier problem</i></li><li><b>because</b> + oración: <i>because the supplier had a problem</i></li></ul>"
      },
      ejercicios: [
        { t: "completar", q: "The project was expensive; ___, it was successful.", o: ["nevertheless", "therefore", "because"], a: 0 },
        { t: "completar", q: "___ the rain, we finished the work.", o: ["Despite", "Although", "However"], a: 0 },
        { t: "completar", q: "The pump failed; ___, the line stopped.", o: ["therefore", "however", "despite"], a: 0 },
        { t: "completar", q: "He prefers tea, ___ she prefers coffee.", o: ["whereas", "because", "despite"], a: 0 },
        { t: "completar", q: "We upgraded the system ___ to reduce downtime.", o: ["in order", "in case", "in spite"], a: 0 },
        { t: "completar", q: "The delay was ___ to a supplier problem.", o: ["due", "because", "caused"], a: 0 },
        { t: "ordenar", es: "A pesar de la lluvia, trabajamos.", en: "Despite the rain, we worked." },
        { t: "dictado", en: "The delay was due to a supplier problem.", es: "El retraso se debió a un problema con el proveedor." }
      ]
    },
    {
      id: "b2-08", tipo: "base", titulo: "Phrasal verbs avanzados",
      objetivo: "usar phrasal verbs frecuentes en el trabajo y en conversaciones.",
      vocab: [
        ["carry out", "llevar a cabo"], ["come up with", "idear"], ["put off", "aplazar"],
        ["look into", "investigar (un asunto)"], ["bring up", "sacar un tema"], ["turn down", "rechazar"],
        ["back up", "respaldar"], ["break down", "descomponerse"], ["figure out", "descifrar"],
        ["sort out", "solucionar"], ["cut down on", "reducir"], ["get along with", "llevarse bien con"],
        ["deal with", "lidiar con"]
      ],
      frases: [
        ["We need to carry out a full inspection.", "Necesitamos llevar a cabo una inspección completa."],
        ["She came up with a great solution.", "A ella se le ocurrió una gran solución."],
        ["The meeting was put off until Monday.", "La reunión se aplazó hasta el lunes."],
        ["Can you look into this problem?", "¿Puedes investigar este problema?"],
        ["The machine broke down again.", "La máquina se descompuso otra vez."],
        ["I get along with my colleagues.", "Me llevo bien con mis colegas."]
      ],
      gramatica: {
        titulo: "Más phrasal verbs, por tema",
        html: "<table><tr><th>Tema</th><th>Phrasal verbs</th></tr><tr><td><b>Resolver problemas</b></td><td>figure out, sort out, look into, deal with</td></tr><tr><td><b>Planear y decidir</b></td><td>carry out, come up with, put off, turn down</td></tr><tr><td><b>Equipos y fallas</b></td><td>break down, back up, cut down on</td></tr><tr><td><b>Personas</b></td><td>get along with, bring up</td></tr></table><h3>Separables o no</h3><ul><li><b>Separables:</b> <i>carry out the plan</i> / <i>carry it out</i> · <i>put off the meeting</i> / <i>put it off</i>.</li><li><b>Inseparables:</b> <i>look into the problem</i> · <i>deal with it</i> · <i>get along with them</i>.</li><li><b>Con tres partes</b> (verbo + 2 partículas) siempre son inseparables: <i>come up with, cut down on, get along with</i>.</li></ul><p>Truco: aprende cada uno en una frase tuya, de tu trabajo.</p>"
      },
      ejercicios: [
        { t: "completar", q: "We need to ___ out a full inspection.", o: ["carry", "take", "make"], a: 0 },
        { t: "completar", q: "She came ___ with a great solution.", o: ["up", "in", "over"], a: 0 },
        { t: "completar", q: "The meeting was put ___ until Monday.", o: ["off", "out", "away"], a: 0 },
        { t: "completar", q: "Can you look ___ this problem? (investigarlo)", o: ["into", "after", "for"], a: 0 },
        { t: "completar", q: "I get ___ with my colleagues.", o: ["along", "across", "through"], a: 0 },
        { t: "completar", q: "We must cut ___ on expenses.", o: ["down", "off", "in"], a: 0 },
        { t: "ordenar", es: "Necesito descifrar esto.", en: "I need to figure this out." },
        { t: "dictado", en: "The machine broke down again.", es: "La máquina se descompuso otra vez." }
      ]
    },
    {
      id: "b2-09", tipo: "base", titulo: "Escritura formal",
      objetivo: "escribir cartas y correos formales con el tono adecuado.",
      vocab: [
        ["formal", "formal"], ["sincerely", "atentamente"], ["regarding", "con respecto a"],
        ["inquire", "consultar (formalmente)"], ["kindly", "amablemente"], ["assistance", "asistencia"],
        ["attention", "atención"], ["enclosed", "adjunto (en el sobre)"], ["appreciate", "agradecer"],
        ["convenience", "conveniencia"], ["in relation to", "en relación con"], ["tone", "tono"]
      ],
      frases: [
        ["I am writing regarding the invoice dated May 5.", "Le escribo con respecto a la factura del 5 de mayo."],
        ["I would appreciate your assistance with this matter.", "Agradecería su ayuda con este asunto."],
        ["Please find enclosed a copy of the contract.", "Se adjunta una copia del contrato."],
        ["Could you kindly confirm receipt at your earliest convenience?", "¿Podría confirmar la recepción a la brevedad?"],
        ["I look forward to hearing from you.", "Quedo a la espera de su respuesta."],
        ["Yours sincerely,", "Atentamente,"]
      ],
      gramatica: {
        titulo: "Registro formal",
        html: "<h3>De informal a formal</h3><table><tr><th>Informal</th><th>Formal</th></tr><tr><td>Hi Anna,</td><td><b>Dear Ms. Taylor,</b></td></tr><tr><td>I'm writing about…</td><td><b>I am writing regarding…</b></td></tr><tr><td>Can you help me?</td><td><b>I would appreciate your assistance.</b></td></tr><tr><td>ask</td><td><b>inquire</b></td></tr><tr><td>get</td><td><b>receive</b></td></tr><tr><td>Thanks</td><td><b>Thank you for your attention.</b></td></tr><tr><td>Bye / Cheers</td><td><b>Yours sincerely,</b></td></tr></table><h3>Reglas</h3><ul><li>Sin contracciones: <i>I am, do not, cannot</i>.</li><li>Usa <b>would</b> y <b>could</b> para ser cortés.</li><li>Frases completas y párrafos cortos.</li></ul><h3>Cierre correcto</h3><ul><li><i>Dear <b>Mr. Smith</b>,</i> (sabes el nombre) → <b>Yours sincerely,</b></li><li><i>Dear <b>Sir or Madam</b>,</i> (no sabes el nombre) → <b>Yours faithfully,</b></li></ul><p><b>At your earliest convenience</b> = lo antes que le sea posible.</p>"
      },
      ejercicios: [
        { t: "completar", q: "I am writing ___ the invoice dated May 5.", o: ["regarding", "about to", "for"], a: 0 },
        { t: "completar", q: "I would ___ your assistance with this matter.", o: ["appreciate", "appreciates", "appreciating"], a: 0 },
        { t: "completar", q: "I look forward to ___ from you.", o: ["hearing", "hear", "heard"], a: 0 },
        { t: "completar", q: "Could you ___ confirm receipt?", o: ["kindly", "kind", "kindness"], a: 0 },
        { t: "completar", q: "Dear Sir or Madam, … Yours ___.", o: ["faithfully", "sincere", "true"], a: 0 },
        { t: "completar", q: "Please find ___ a copy of the contract.", o: ["enclosed", "enclose", "enclosing"], a: 0 },
        { t: "ordenar", es: "Quedo a la espera de su respuesta.", en: "I look forward to hearing from you." },
        { t: "dictado", en: "I would appreciate your assistance.", es: "Agradecería su ayuda." }
      ]
    },
    {
      id: "b2-10", tipo: "base", titulo: "Lectura de noticias",
      objetivo: "entender titulares, cifras y la forma en que se reporta una noticia.",
      vocab: [
        ["headline", "titular"], ["journalist", "periodista"], ["source", "fuente"],
        ["according to", "según"], ["reveal", "revelar"], ["statement", "comunicado"],
        ["survey", "encuesta"], ["trend", "tendencia"], ["rise", "subir"], ["drop", "bajar / caída"],
        ["figures", "cifras"], ["official", "funcionario"]
      ],
      frases: [
        ["According to the report, sales rose by ten percent.", "Según el informe, las ventas subieron un diez por ciento."],
        ["The company released a statement yesterday.", "La empresa publicó un comunicado ayer."],
        ["A recent survey reveals a new trend.", "Una encuesta reciente revela una nueva tendencia."],
        ["Unemployment fell for the third month in a row.", "El desempleo bajó por tercer mes consecutivo."],
        ["Officials said the plant would reopen next week.", "Funcionarios dijeron que la planta reabriría la próxima semana."],
        ["The headline can be misleading.", "El titular puede ser engañoso."]
      ],
      gramatica: {
        titulo: "Cómo se lee una noticia",
        html: "<h3>Titulares</h3><p>Se escriben cortos: en <b>presente</b> aunque hablen del pasado y sin artículos. <i>Plant closes after fire</i> = La planta cierra tras un incendio.</p><h3>Citar la fuente</h3><ul><li><b>According to</b> the report, …</li><li><b>Officials said</b> that… · <b>The company announced</b> that…</li><li>Con cautela: <b>reportedly</b>, <b>allegedly</b>, <b>appears to</b>.</li></ul><h3>Hablar de cifras</h3><ul><li><b>rise / increase / grow</b> ↑ · <b>fall / drop / decrease</b> ↓ · <b>remain stable</b> →</li><li><b>by</b> = la diferencia: <i>rose <b>by</b> 10%</i></li><li><b>to</b> = el valor final: <i>rose from 100 <b>to</b> 120</i></li></ul><h3>Hecho u opinión</h3><p>Pregúntate: ¿hay datos y una fuente? ¿O es la opinión de alguien? Un titular puede ser <b>misleading</b> (engañoso).</p>"
      },
      ejercicios: [
        { t: "completar", q: "___ to the report, sales rose by ten percent.", o: ["According", "Accord", "Accordingly"], a: 0 },
        { t: "completar", q: "Sales rose ___ ten percent.", o: ["by", "to", "at"], a: 0, e: "«by» indica cuánto cambió." },
        { t: "completar", q: "Prices rose from 100 ___ 120 dollars.", o: ["to", "by", "at"], a: 0, e: "«to» indica el valor final." },
        { t: "completar", q: "The company released a ___ yesterday.", o: ["statement", "state", "stating"], a: 0 },
        { t: "completar", q: "Unemployment ___ for the third month in a row.", o: ["fell", "fall", "falled"], a: 0 },
        { t: "completar", q: "A recent survey ___ a new trend.", o: ["reveals", "reveal", "revealing"], a: 0 },
        { t: "ordenar", es: "El titular puede ser engañoso.", en: "The headline can be misleading." },
        { t: "dictado", en: "According to the report, sales rose.", es: "Según el informe, las ventas subieron." }
      ]
    },
    {
      id: "b2-11", tipo: "tecnico", titulo: "Presentar un proyecto",
      objetivo: "presentar un proyecto técnico con estructura, cifras y transiciones claras.",
      vocab: [
        ["objective", "objetivo"], ["scope", "alcance"], ["milestone", "hito"],
        ["stakeholder", "parte interesada"], ["deliverable", "entregable"], ["timeline", "cronograma"],
        ["benefit", "beneficio"], ["investment", "inversión"], ["return on investment", "retorno de inversión"],
        ["resources", "recursos"], ["outline", "resumir (esbozar)"], ["overview", "visión general"],
        ["slide", "diapositiva"]
      ],
      frases: [
        ["Today I'm going to present our energy-saving project.", "Hoy voy a presentar nuestro proyecto de ahorro de energía."],
        ["The main objective is to reduce energy consumption by fifteen percent.", "El objetivo principal es reducir el consumo de energía en un quince por ciento."],
        ["The project has three main milestones.", "El proyecto tiene tres hitos principales."],
        ["The expected return on investment is two years.", "El retorno de inversión esperado es de dos años."],
        ["As you can see on this slide, the costs are going down.", "Como pueden ver en esta diapositiva, los costos van bajando."],
        ["Let me move on to the next point.", "Paso al siguiente punto."]
      ],
      gramatica: {
        titulo: "Estructura de una presentación",
        html: "<table><tr><th>Parte</th><th>Frases</th></tr><tr><td><b>Apertura</b></td><td>Good morning, everyone. <b>Today I'm going to present…</b></td></tr><tr><td><b>Visión general</b></td><td><b>I'll cover three points:</b> the objective, the plan and the results.</td></tr><tr><td><b>Desarrollo</b></td><td><b>First…</b> · <b>Let me move on to…</b> · <b>Turning to…</b></td></tr><tr><td><b>Apoyo visual</b></td><td><b>As you can see on this slide…</b> · This chart shows…</td></tr><tr><td><b>Cierre</b></td><td><b>To sum up…</b> · Thank you. <b>Any questions?</b></td></tr></table><h3>Cifras y cambios</h3><ul><li><b>reduce / increase costs by 15%</b> (la diferencia).</li><li><b>from 100 to 80</b> (inicio y final).</li></ul><h3>Consejos</h3><p>Una idea por diapositiva · habla despacio · mira a la audiencia · cierra con la acción que esperas.</p>"
      },
      ejercicios: [
        { t: "completar", q: "Today I'm going to ___ our project.", o: ["present", "presents", "presenting"], a: 0 },
        { t: "completar", q: "The main objective is ___ reduce energy consumption.", o: ["to", "for", "of"], a: 0 },
        { t: "completar", q: "As you can see ___ this slide, the costs are going down.", o: ["on", "in", "at"], a: 0 },
        { t: "completar", q: "Let me ___ on to the next point.", o: ["move", "go", "pass"], a: 0 },
        { t: "completar", q: "To sum ___, the project is on schedule.", o: ["up", "in", "out"], a: 0 },
        { t: "completar", q: "We will reduce costs ___ fifteen percent.", o: ["by", "to", "at"], a: 0 },
        { t: "ordenar", es: "Paso al siguiente punto.", en: "Let me move on to the next point." },
        { t: "dictado", en: "The project has three main milestones.", es: "El proyecto tiene tres hitos principales." }
      ]
    },
    {
      id: "b2-12", tipo: "tecnico", titulo: "Informe técnico",
      objetivo: "escribir un informe técnico claro, objetivo y bien estructurado.",
      vocab: [
        ["findings", "hallazgos"], ["methodology", "metodología"], ["analysis", "análisis"],
        ["executive summary", "resumen ejecutivo"], ["appendix", "apéndice"], ["measurement", "medición"],
        ["data", "datos"], ["deviation", "desviación"], ["tolerance", "tolerancia"],
        ["compliance", "cumplimiento"], ["specification", "especificación"], ["baseline", "línea base"]
      ],
      frases: [
        ["The purpose of this report is to analyze the energy consumption.", "El propósito de este informe es analizar el consumo de energía."],
        ["The readings were taken every hour.", "Las lecturas se tomaron cada hora."],
        ["The measurements show a deviation of two percent.", "Las mediciones muestran una desviación del dos por ciento."],
        ["All values are within the tolerance.", "Todos los valores están dentro de la tolerancia."],
        ["The findings indicate that the system is not operating efficiently.", "Los hallazgos indican que el sistema no está operando de forma eficiente."],
        ["Detailed results are included in the appendix.", "Los resultados detallados se incluyen en el apéndice."]
      ],
      gramatica: {
        titulo: "Estructura y estilo de un informe técnico",
        html: "<h3>Secciones</h3><ol><li><b>Title</b> y <b>Executive summary</b> (la conclusión en pocas líneas)</li><li><b>Introduction / Purpose</b></li><li><b>Methodology</b> (cómo se midió)</li><li><b>Findings</b> (resultados, con cifras)</li><li><b>Analysis</b> (qué significan)</li><li><b>Conclusions</b> y <b>Recommendations</b></li><li><b>Appendix</b> (tablas y datos extensos)</li></ol><h3>Estilo</h3><ul><li><b>Impersonal y pasivo:</b> <i>The readings were taken every hour.</i></li><li><b>Preciso:</b> <i>a deviation of 2%</i>, no «una desviación pequeña».</li><li><b>Sin contracciones</b> ni lenguaje coloquial.</li><li><b>Prudente:</b> <i>The findings indicate… The data suggest… appears to…</i></li></ul><h3>Frases útiles</h3><p><i>The purpose of this report is to…</i> · <i>All values are within the tolerance.</i> · <i>Further analysis is recommended.</i></p>"
      },
      ejercicios: [
        { t: "completar", q: "The purpose of this report is ___ analyze the energy consumption.", o: ["to", "for", "of"], a: 0 },
        { t: "completar", q: "The readings were ___ every hour.", o: ["taken", "take", "taking"], a: 0 },
        { t: "completar", q: "All values are ___ the tolerance.", o: ["within", "between", "among"], a: 0 },
        { t: "completar", q: "The findings ___ that the system is not efficient.", o: ["indicate", "indicates", "indicating"], a: 0 },
        { t: "completar", q: "Detailed results are included in the ___.", o: ["appendix", "apex", "append"], a: 0 },
        { t: "completar", q: "A deviation ___ two percent was found.", o: ["of", "by", "at"], a: 0 },
        { t: "ordenar", es: "Los resultados fueron analizados.", en: "The results were analyzed." },
        { t: "dictado", en: "All values are within the tolerance.", es: "Todos los valores están dentro de la tolerancia." }
      ]
    },
    {
      id: "b2-13", tipo: "tecnico", titulo: "Negociar con proveedores",
      objetivo: "negociar precios, plazos y condiciones con cortesía y firmeza.",
      vocab: [
        ["quotation", "cotización"], ["lead time", "tiempo de entrega"], ["bulk order", "pedido por volumen"],
        ["payment terms", "condiciones de pago"], ["counteroffer", "contraoferta"],
        ["compromise", "acuerdo con concesiones"], ["negotiate", "negociar"], ["flexible", "flexible"],
        ["competitive", "competitivo"], ["concession", "concesión"], ["deal", "trato"], ["penalty", "penalización"]
      ],
      frases: [
        ["Could you send us a quotation for fifty units?", "¿Podría enviarnos una cotización para cincuenta unidades?"],
        ["What is your lead time for this order?", "¿Cuál es su tiempo de entrega para este pedido?"],
        ["Your price is higher than we expected.", "Su precio es más alto de lo que esperábamos."],
        ["If we placed a bulk order, would you offer a better price?", "Si hiciéramos un pedido por volumen, ¿ofrecerían un mejor precio?"],
        ["We could accept those terms if the delivery is faster.", "Podríamos aceptar esos términos si la entrega es más rápida."],
        ["I think we can reach a compromise.", "Creo que podemos llegar a un acuerdo."]
      ],
      gramatica: {
        titulo: "Lenguaje de negociación",
        html: "<table><tr><th>Para…</th><th>Di…</th></tr><tr><td>Pedir información</td><td><b>Could you send us a quotation?</b> · What is your lead time?</td></tr><tr><td>Plantear un problema</td><td><b>I'm afraid your price is higher than we expected.</b></td></tr><tr><td>Proponer algo condicionado</td><td><b>If we placed a bulk order, would you offer a better price?</b></td></tr><tr><td>Ofrecer</td><td><b>We could accept those terms if…</b></td></tr><tr><td>Contraofertar</td><td><b>How about if we…?</b> · What if we paid in advance?</td></tr><tr><td>Cerrar</td><td><b>I think we have a deal.</b> · Let's put that in writing.</td></tr></table><h3>Por qué funcionan</h3><ul><li><b>Condicionales 1 y 2</b> suavizan una petición: <i>If we… would you…?</i></li><li><b>Could / would / I'm afraid</b> mantienen la cortesía sin ceder.</li></ul><h3>Cerrar bien</h3><p>Resume lo acordado: <i>So, to confirm: fifty units, delivery in two weeks, payment in thirty days.</i></p>"
      },
      ejercicios: [
        { t: "completar", q: "Could you send us a ___ for fifty units?", o: ["quotation", "quoting", "quoted"], a: 0 },
        { t: "completar", q: "What is your ___ time for this order?", o: ["lead", "leader", "leading"], a: 0 },
        { t: "completar", q: "If we placed a bulk order, ___ you offer a better price?", o: ["would", "will", "do"], a: 0 },
        { t: "completar", q: "We could accept those terms ___ the delivery is faster.", o: ["if", "unless", "despite"], a: 0 },
        { t: "completar", q: "I think we can reach a ___.", o: ["compromise", "compromising", "compromised"], a: 0 },
        { t: "completar", q: "Your price is ___ than we expected.", o: ["higher", "high", "highest"], a: 0 },
        { t: "ordenar", es: "Podemos llegar a un acuerdo.", en: "We can reach a compromise." },
        { t: "dictado", en: "What is your lead time?", es: "¿Cuál es su tiempo de entrega?" }
      ]
    },
    {
      id: "b2-14", tipo: "tecnico", titulo: "Leer manuales",
      objetivo: "entender manuales de equipos: advertencias, instrucciones y especificaciones.",
      vocab: [
        ["troubleshooting", "solución de problemas"], ["installation", "montaje / puesta en servicio"],
        ["operating instructions", "instrucciones de operación"], ["rated", "nominal"],
        ["capacity", "capacidad"], ["range", "rango"], ["ensure", "asegurar"],
        ["refer to", "consultar"], ["prior to", "antes de"], ["in accordance with", "de acuerdo con"],
        ["failure", "fallo (avería)"], ["supplied", "suministrado"]
      ],
      frases: [
        ["Read the instructions carefully before installation.", "Lee las instrucciones con cuidado antes de la instalación."],
        ["Ensure that the power supply is disconnected prior to maintenance.", "Asegúrese de que la alimentación esté desconectada antes del mantenimiento."],
        ["Refer to the troubleshooting section for common problems.", "Consulte la sección de solución de problemas para fallas comunes."],
        ["The rated voltage is 230 volts.", "El voltaje nominal es de 230 voltios."],
        ["Do not operate the equipment beyond its rated capacity.", "No opere el equipo más allá de su capacidad nominal."],
        ["Installation must be carried out in accordance with local regulations.", "La instalación debe realizarse de acuerdo con las normas locales."]
      ],
      gramatica: {
        titulo: "El lenguaje de los manuales",
        html: "<h3>Imperativos y prohibiciones</h3><p><b>Ensure</b> that the power is off. · <b>Refer to</b> section 4. · <b>Do not</b> operate the equipment beyond its rated capacity.</p><h3>Pasiva y obligación</h3><ul><li><i>Installation <b>must be carried out</b> by qualified personnel.</i></li><li><b>shall</b> en especificaciones = obligación: <i>The unit shall be grounded.</i></li></ul><h3>Niveles de aviso</h3><table><tr><th>Aviso</th><th>Significa</th></tr><tr><td><b>DANGER</b></td><td>riesgo grave e inmediato</td></tr><tr><td><b>WARNING</b></td><td>puede causar lesiones</td></tr><tr><td><b>CAUTION</b></td><td>puede dañar el equipo o causar lesiones leves</td></tr><tr><td><b>NOTICE</b></td><td>información importante</td></tr></table><h3>Abreviaturas comunes</h3><p><b>max.</b> (máximo) · <b>min.</b> (mínimo) · <b>approx.</b> (aproximado) · <b>e.g.</b> (por ejemplo) · <b>i.e.</b> (es decir)</p><h3>Cómo leer rápido</h3><p>Primero los avisos, luego los títulos y las tablas; lee el detalle solo de lo que necesitas.</p>"
      },
      ejercicios: [
        { t: "completar", q: "___ that the power supply is disconnected.", o: ["Ensure", "Ensuring", "Ensured"], a: 0 },
        { t: "completar", q: "Refer ___ the troubleshooting section.", o: ["to", "at", "for"], a: 0 },
        { t: "completar", q: "Disconnect the power ___ to maintenance.", o: ["prior", "previous", "preceding"], a: 0 },
        { t: "completar", q: "Do not operate the equipment ___ its rated capacity.", o: ["beyond", "behind", "between"], a: 0 },
        { t: "completar", q: "Installation must be carried out ___ accordance with local regulations.", o: ["in", "on", "at"], a: 0 },
        { t: "completar", q: "The ___ voltage is 230 volts.", o: ["rated", "rating", "rate"], a: 0 },
        { t: "ordenar", es: "Lea las instrucciones con cuidado.", en: "Read the instructions carefully." },
        { t: "dictado", en: "Refer to the troubleshooting section.", es: "Consulte la sección de solución de problemas." }
      ]
    }
  ]
};
