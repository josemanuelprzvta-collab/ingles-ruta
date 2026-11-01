/* Nivel B1 · Intermedio
   IMPORTANTE: no cambies los "id" de las sesiones; el progreso se guarda con ellos. */
window.CURSO = window.CURSO || {};
window.CURSO.b1 = {
  id: "b1",
  nombre: "B1",
  titulo: "Intermedio",
  descripcion: "Cuenta experiencias, da opiniones y resuelve situaciones del trabajo con más soltura.",
  sesiones: [
    {
      id: "b1-01", tipo: "base", titulo: "Presente perfecto",
      objetivo: "hablar de experiencias y de cosas que empezaron antes y siguen vigentes.",
      vocab: [
        ["already", "ya"], ["yet", "todavía (en preguntas y negativos)"], ["just", "acabar de"],
        ["ever", "alguna vez"], ["recently", "recientemente"], ["so far", "hasta ahora"],
        ["for", "durante (un periodo de tiempo)"], ["been", "sido / estado"], ["done", "hecho"],
        ["seen", "visto"], ["eaten", "comido"], ["known", "sabido / conocido"]
      ],
      frases: [
        ["I have lived here for five years.", "He vivido aquí durante cinco años."],
        ["She has already finished the report.", "Ella ya terminó el reporte."],
        ["Have you ever been to Canada?", "¿Has estado alguna vez en Canadá?"],
        ["I haven't seen him yet.", "Todavía no lo he visto."],
        ["We have just arrived.", "Acabamos de llegar."],
        ["They have worked here since 2020.", "Han trabajado aquí desde 2020."]
      ],
      gramatica: {
        titulo: "Present perfect: have / has + participio",
        html: "<p>Conecta el pasado con el presente. No dice <b>cuándo</b> pasó, sino que <b>ya pasó y importa ahora</b>.</p><h3>Forma</h3><div class='ej'><b>have / has</b> + participio pasado<br><i>I have finished. She has arrived.</i></div><ul><li>Regulares: participio = pasado (<i>worked, finished</i>).</li><li>Irregulares: be → <b>been</b>, do → <b>done</b>, see → <b>seen</b>, eat → <b>eaten</b>, know → <b>known</b>, write → <b>written</b>.</li><li>Negativo: <i>haven't / hasn't</i>. Pregunta: <i>Have you…? Has she…?</i></li></ul><h3>Cuándo usarlo</h3><ul><li><b>Experiencias:</b> <i>Have you ever been to Canada?</i></li><li><b>Resultado actual:</b> <i>She has already finished the report.</i></li><li><b>Algo que sigue:</b> <i>I have lived here <b>for</b> five years</i> (durante) · <i>since 2020</i> (desde).</li></ul><h3>Already / yet / just</h3><ul><li><b>already</b> (ya) en afirmativo · <b>yet</b> (todavía) en negativo y preguntas · <b>just</b> (acabar de).</li></ul><h3>Presente perfecto o pasado simple</h3><p>Si dices <b>cuándo</b> (yesterday, in 2019, last week) se usa pasado simple: <i>I went to Paris in 2019.</i></p>"
      },
      ejercicios: [
        { t: "completar", q: "I ___ lived here for five years.", o: ["have", "am", "did"], a: 0 },
        { t: "completar", q: "She ___ already finished the report.", o: ["has", "have", "is"], a: 0 },
        { t: "completar", q: "Have you ever ___ to Canada?", o: ["been", "was", "be"], a: 0 },
        { t: "completar", q: "I haven't seen him ___.", o: ["yet", "already", "ago"], a: 0 },
        { t: "completar", q: "I have worked here ___ three years.", o: ["for", "since", "ago"], a: 0, e: "«for» + duración; «since» + punto de inicio." },
        { t: "completar", q: "I ___ to Paris in 2019.", o: ["went", "have been", "have gone"], a: 0, e: "Con una fecha concreta se usa pasado simple." },
        { t: "ordenar", es: "Ya terminé mi trabajo.", en: "I have already finished my work." },
        { t: "dictado", en: "Have you ever been to Canada?", es: "¿Has estado alguna vez en Canadá?" }
      ]
    },
    {
      id: "b1-02", tipo: "base", titulo: "Condicionales 0 y 1",
      objetivo: "hablar de hechos generales y de posibilidades reales con if.",
      vocab: [
        ["if", "si (condición)"], ["when", "cuando"], ["unless", "a menos que"], ["as soon as", "en cuanto"],
        ["result", "resultado"], ["heat", "calentar"], ["melt", "derretirse"], ["freeze", "congelarse"],
        ["miss", "perder (un autobús, un vuelo)"], ["pass", "aprobar (un examen)"], ["exam", "examen"],
        ["hurry", "apurarse"], ["umbrella", "paraguas"]
      ],
      frases: [
        ["If you heat ice, it melts.", "Si calientas hielo, se derrite."],
        ["If it rains, we will stay at home.", "Si llueve, nos quedaremos en casa."],
        ["I will call you if I have news.", "Te llamaré si tengo noticias."],
        ["Unless you hurry, you will miss the bus.", "A menos que te apures, perderás el autobús."],
        ["As soon as I finish, I will call you.", "En cuanto termine, te llamaré."],
        ["If you study, you will pass the exam.", "Si estudias, aprobarás el examen."]
      ],
      gramatica: {
        titulo: "Condicionales cero y primero",
        html: "<h3>Condicional 0: hechos que siempre pasan</h3><div class='ej'><b>If</b> + presente, <b>presente</b><br><i>If you heat ice, it melts.</i></div><h3>Condicional 1: posibilidades reales en el futuro</h3><div class='ej'><b>If</b> + presente simple, <b>will</b> + verbo base<br><i>If it rains, we will stay at home.</i></div><ul><li>Después de <b>if</b> no se usa <b>will</b>: <i>If I <b>have</b> time…</i> (no «If I will have»).</li><li>La parte con <b>if</b> puede ir al final y entonces no lleva coma: <i>I will call you if I have news.</i></li><li><b>Unless</b> = if not: <i>Unless you hurry</i> = <i>If you don't hurry</i>.</li><li>Con <b>when</b> y <b>as soon as</b> también se usa presente: <i>As soon as I finish, I will call you.</i></li></ul>"
      },
      ejercicios: [
        { t: "completar", q: "If it rains, we ___ at home.", o: ["will stay", "stay", "stayed"], a: 0 },
        { t: "completar", q: "If you heat ice, it ___.", o: ["melts", "will melt", "melted"], a: 0, e: "Es un hecho general: presente + presente." },
        { t: "completar", q: "If I ___ time, I will help you.", o: ["have", "will have", "had"], a: 0 },
        { t: "completar", q: "___ you hurry, you will miss the bus.", o: ["Unless", "If", "When"], a: 0 },
        { t: "completar", q: "As soon as I ___, I will call you.", o: ["finish", "will finish", "finished"], a: 0 },
        { t: "ordenar", es: "Si estudias, aprobarás.", en: "If you study, you will pass." },
        { t: "dictado", en: "If it rains, we will stay at home.", es: "Si llueve, nos quedaremos en casa." }
      ]
    },
    {
      id: "b1-03", tipo: "base", titulo: "Modales: should, must, have to",
      objetivo: "dar consejos, expresar obligaciones y prohibiciones.",
      vocab: [
        ["rule", "regla"], ["obligation", "obligación"], ["allowed", "permitido"], ["forbidden", "prohibido"],
        ["advice", "consejo"], ["necessary", "necesario"], ["mandatory", "obligatorio"],
        ["optional", "opcional"], ["permission", "permiso"], ["recommend", "recomendar"], ["might", "podría (posibilidad)"]
      ],
      frases: [
        ["You must wear a helmet.", "Debes usar casco."],
        ["You mustn't smoke here.", "No debes fumar aquí."],
        ["I have to finish this today.", "Tengo que terminar esto hoy."],
        ["You don't have to come early.", "No tienes que venir temprano."],
        ["You should see a doctor.", "Deberías ver a un médico."],
        ["It might rain this afternoon.", "Podría llover esta tarde."]
      ],
      gramatica: {
        titulo: "Should, must, have to y might",
        html: "<table><tr><th>Modal</th><th>Significado</th><th>Ejemplo</th></tr><tr><td><b>should</b></td><td>consejo</td><td>You should rest.</td></tr><tr><td><b>must</b></td><td>obligación fuerte o regla</td><td>You must wear a helmet.</td></tr><tr><td><b>have to</b></td><td>obligación externa</td><td>I have to finish this today.</td></tr><tr><td><b>might</b></td><td>posibilidad</td><td>It might rain.</td></tr></table><h3>La trampa: mustn't ≠ don't have to</h3><ul><li><b>mustn't</b> = prohibido: <i>You mustn't smoke here.</i></li><li><b>don't have to</b> = no es necesario: <i>You don't have to come early.</i></li></ul><p>Después de un modal el verbo va en forma base y sin <b>to</b> (<i>must wear</i>), salvo <b>have to</b>.</p><p><b>Have to</b> sí cambia: <i>He has to work today.</i></p>"
      },
      ejercicios: [
        { t: "completar", q: "You ___ wear a helmet. It's the rule.", o: ["must", "can", "might"], a: 0 },
        { t: "completar", q: "You ___ smoke here. It's forbidden.", o: ["mustn't", "don't have to", "should"], a: 0 },
        { t: "completar", q: "You ___ come early. It's optional.", o: ["don't have to", "mustn't", "must"], a: 0 },
        { t: "completar", q: "I ___ finish this report today.", o: ["have to", "has to", "must to"], a: 0 },
        { t: "completar", q: "It ___ rain this afternoon.", o: ["might", "must", "should"], a: 0 },
        { t: "ordenar", es: "Tengo que trabajar hoy.", en: "I have to work today." },
        { t: "dictado", en: "You mustn't smoke here.", es: "No debes fumar aquí." }
      ]
    },
    {
      id: "b1-04", tipo: "base", titulo: "Gerundios e infinitivos",
      objetivo: "elegir entre verbo + -ing y verbo + to + infinitivo.",
      vocab: [
        ["enjoy", "disfrutar"], ["avoid", "evitar"], ["keep", "seguir / mantener"],
        ["mind", "importarle (molestar)"], ["suggest", "sugerir"], ["decide", "decidir"],
        ["hope", "esperar (con ilusión)"], ["promise", "prometer"], ["refuse", "negarse"],
        ["manage", "lograr"], ["offer", "ofrecer"], ["learn", "aprender"]
      ],
      frases: [
        ["I enjoy listening to music.", "Disfruto escuchar música."],
        ["She avoids driving at night.", "Ella evita manejar de noche."],
        ["I decided to learn English.", "Decidí aprender inglés."],
        ["He promised to call me.", "Él prometió llamarme."],
        ["Do you mind opening the window?", "¿Te importa abrir la ventana?"],
        ["We hope to finish soon.", "Esperamos terminar pronto."]
      ],
      gramatica: {
        titulo: "-ing o to + infinitivo",
        html: "<p>Cuando dos verbos van juntos, el segundo toma una forma que depende del primero.</p><h3>Verbo + -ing</h3><p><b>enjoy, avoid, keep, mind, suggest, finish</b>: <i>I enjoy listening to music. Do you mind opening the window?</i></p><h3>Verbo + to + infinitivo</h3><p><b>decide, hope, promise, refuse, manage, offer, learn, want, need</b>: <i>I decided to learn English. He promised to call.</i></p><h3>Después de una preposición, siempre -ing</h3><p><i>I'm interested <b>in learning</b> English. She is good <b>at cooking</b>. Thanks <b>for helping</b>.</i></p><h3>Los dos funcionan</h3><p><b>like, love, hate, start</b>: <i>I like swimming / I like to swim.</i></p>"
      },
      ejercicios: [
        { t: "completar", q: "I enjoy ___ to music.", o: ["listening", "to listen", "listen"], a: 0 },
        { t: "completar", q: "She decided ___ a new job.", o: ["to find", "finding", "find"], a: 0 },
        { t: "completar", q: "He avoids ___ at night.", o: ["driving", "to drive", "drive"], a: 0 },
        { t: "completar", q: "Do you mind ___ the window?", o: ["opening", "to open", "open"], a: 0 },
        { t: "completar", q: "We hope ___ soon.", o: ["to finish", "finishing", "finish"], a: 0 },
        { t: "completar", q: "I'm interested ___ learning English.", o: ["in", "on", "at"], a: 0 },
        { t: "ordenar", es: "Decidí aprender inglés.", en: "I decided to learn English." },
        { t: "dictado", en: "I enjoy listening to music.", es: "Disfruto escuchar música." }
      ]
    },
    {
      id: "b1-05", tipo: "base", titulo: "Contar experiencias",
      objetivo: "contar una historia en pasado con orden y detalle.",
      vocab: [
        ["while", "mientras"], ["during", "durante (un evento)"], ["suddenly", "de repente"],
        ["at first", "al principio"], ["later", "más tarde"], ["in the end", "al final"],
        ["experience", "experiencia"], ["adventure", "aventura"], ["lucky", "afortunado (con suerte)"],
        ["fortunately", "afortunadamente"], ["remember", "recordar"], ["story", "historia / relato"]
      ],
      frases: [
        ["I was walking home when it started to rain.", "Iba caminando a casa cuando empezó a llover."],
        ["While I was working, the power went out.", "Mientras trabajaba, se fue la luz."],
        ["At first, I was nervous.", "Al principio estaba nervioso."],
        ["Suddenly, the lights went off.", "De repente, se apagaron las luces."],
        ["In the end, everything was fine.", "Al final, todo salió bien."],
        ["It was an amazing experience.", "Fue una experiencia increíble."]
      ],
      gramatica: {
        titulo: "Pasado continuo y pasado simple",
        html: "<h3>Pasado continuo: was / were + -ing</h3><p>Una acción <b>en progreso</b> en el pasado: <i>I was walking home.</i></p><h3>Pasado simple: la acción que interrumpe</h3><div class='ej'>I <b>was walking</b> home when it <b>started</b> to rain.<br>(Caminaba = fondo de la historia · empezó a llover = evento corto)</div><ul><li><b>while</b> + pasado continuo: <i>While I was working…</i></li><li><b>when</b> + pasado simple: <i>…when the phone rang.</i></li></ul><h3>Conectores para ordenar la historia</h3><p><b>At first</b>, <b>Then</b>, <b>Later</b>, <b>Suddenly</b>, <b>In the end</b>.</p><h3>Costumbres del pasado: used to</h3><p><i>I used to play soccer when I was a child.</i> = Antes jugaba fútbol (ya no).</p>"
      },
      ejercicios: [
        { t: "completar", q: "I ___ walking home when it started to rain.", o: ["was", "were", "am"], a: 0 },
        { t: "completar", q: "While I ___ working, the power went out.", o: ["was", "were", "did"], a: 0 },
        { t: "completar", q: "She was cooking when the phone ___.", o: ["rang", "was ringing", "rings"], a: 0 },
        { t: "completar", q: "___, I was nervous.", o: ["At first", "In the end", "Suddenly"], a: 0 },
        { t: "completar", q: "I ___ to play soccer when I was a child.", o: ["used", "use", "was used"], a: 0 },
        { t: "ordenar", es: "Fue una gran experiencia.", en: "It was a great experience." },
        { t: "dictado", en: "Suddenly, the lights went off.", es: "De repente, se apagaron las luces." }
      ]
    },
    {
      id: "b1-06", tipo: "base", titulo: "Dar opiniones",
      objetivo: "dar tu opinión, estar de acuerdo o no, y justificar con razones.",
      vocab: [
        ["opinion", "opinión"], ["agree", "estar de acuerdo"], ["disagree", "no estar de acuerdo"],
        ["believe", "creer"], ["however", "sin embargo"], ["although", "aunque"],
        ["in my opinion", "en mi opinión"], ["on the other hand", "por otro lado"],
        ["advantage", "ventaja"], ["disadvantage", "desventaja"], ["important", "importante"], ["reason", "razón / motivo"]
      ],
      frases: [
        ["In my opinion, this is a good idea.", "En mi opinión, esta es una buena idea."],
        ["I agree with you.", "Estoy de acuerdo contigo."],
        ["I don't think it's a good plan.", "No creo que sea un buen plan."],
        ["That's true, but it is expensive.", "Es cierto, pero es caro."],
        ["On the other hand, it saves time.", "Por otro lado, ahorra tiempo."],
        ["Although it is difficult, I like it.", "Aunque es difícil, me gusta."]
      ],
      gramatica: {
        titulo: "Opinar y argumentar",
        html: "<h3>Dar tu opinión</h3><ul><li><b>I think / I believe</b> (that)…</li><li><b>In my opinion</b>, …</li><li><b>I don't think</b> + frase afirmativa: <i>I don't think it's a good plan.</i> (no «I think it isn't»)</li></ul><h3>Estar o no de acuerdo</h3><ul><li><b>I agree with you.</b> · <b>I disagree.</b> · <b>I'm not sure.</b></li><li>Con suavidad: <i>That's true, but…</i></li></ul><h3>Contrastar</h3><ul><li><b>but</b> (común) · <b>however</b> (más formal, con coma) · <b>although</b> + frase completa.</li><li><b>On the other hand</b> = por otro lado.</li></ul><h3>Preguntar</h3><p><i>What do you think? Do you agree?</i></p>"
      },
      ejercicios: [
        { t: "completar", q: "I ___ with you. You're right.", o: ["agree", "accept", "same"], a: 0 },
        { t: "completar", q: "In my ___, it is a good idea.", o: ["opinion", "think", "mind"], a: 0 },
        { t: "completar", q: "___ it is difficult, I like it.", o: ["Although", "But", "However"], a: 0 },
        { t: "completar", q: "I don't ___ it's a good plan.", o: ["think", "thinks", "thinking"], a: 0 },
        { t: "completar", q: "It's cheap. ___, it is not very good.", o: ["However", "Although", "Because"], a: 0 },
        { t: "ordenar", es: "Estoy de acuerdo contigo.", en: "I agree with you." },
        { t: "dictado", en: "What do you think?", es: "¿Qué piensas?" }
      ]
    },
    {
      id: "b1-07", tipo: "base", titulo: "Phrasal verbs básicos",
      objetivo: "entender y usar los phrasal verbs más comunes.",
      vocab: [
        ["look for", "buscar"], ["look after", "cuidar"], ["give up", "rendirse"],
        ["find out", "averiguar"], ["set up", "configurar / instalar"], ["pick up", "recoger"],
        ["put on", "ponerse (ropa, equipo)"], ["take off", "quitarse / despegar"],
        ["come back", "regresar"], ["go on", "continuar"], ["run out of", "quedarse sin"]
      ],
      frases: [
        ["I'm looking for my keys.", "Estoy buscando mis llaves."],
        ["She looks after her grandmother.", "Ella cuida a su abuela."],
        ["Don't give up.", "No te rindas."],
        ["I need to find out the price.", "Necesito averiguar el precio."],
        ["We ran out of paper.", "Nos quedamos sin papel."],
        ["Please put on your safety glasses.", "Por favor, ponte tus lentes de seguridad."]
      ],
      gramatica: {
        titulo: "Phrasal verbs",
        html: "<p>Un <b>phrasal verb</b> es un verbo + una partícula (<i>up, out, on, off…</i>). El significado cambia y no siempre se adivina: <i>look</i> (mirar) → <i>look for</i> (buscar) → <i>look after</i> (cuidar).</p><h3>Separables e inseparables</h3><ul><li><b>Separables:</b> el objeto puede ir en medio: <i>pick up the box</i> / <i>pick the box up</i>. Con pronombre va <b>siempre en medio</b>: <i>pick it up</i> (no «pick up it»).</li><li><b>Inseparables:</b> no se separan: <i>look after her</i>, <i>look for them</i>.</li></ul><h3>Consejo</h3><p>Aprende cada phrasal verb <b>dentro de una frase</b>, no como palabra suelta.</p>"
      },
      ejercicios: [
        { t: "completar", q: "I'm ___ for my keys.", o: ["looking", "looking at", "looks"], a: 0 },
        { t: "completar", q: "Don't give ___.", o: ["up", "in", "out"], a: 0 },
        { t: "completar", q: "We ran ___ of paper.", o: ["out", "off", "on"], a: 0 },
        { t: "completar", q: "Please put ___ your safety glasses.", o: ["on", "in", "at"], a: 0 },
        { t: "completar", q: "She looks ___ her grandmother.", o: ["after", "for", "at"], a: 0, e: "«look after» = cuidar." },
        { t: "ordenar", es: "No te rindas.", en: "Don't give up." },
        { t: "dictado", en: "I need to find out the price.", es: "Necesito averiguar el precio." }
      ]
    },
    {
      id: "b1-08", tipo: "base", titulo: "Voz pasiva",
      objetivo: "decir qué se hizo sin importar quién lo hizo.",
      vocab: [
        ["invented", "inventado"], ["produced", "producido / fabricado"], ["repaired", "reparado"],
        ["installed", "instalado"], ["delivered", "entregado"], ["damaged", "dañado"],
        ["built", "construido"], ["sold", "vendido"], ["replaced", "reemplazado"],
        ["checked", "revisado"], ["tested", "probado"], ["approved", "aprobado"]
      ],
      frases: [
        ["The machine was repaired yesterday.", "La máquina fue reparada ayer."],
        ["These parts are made in Mexico.", "Estas piezas se fabrican en México."],
        ["The report was written by the manager.", "El reporte fue escrito por el gerente."],
        ["The new sensors will be installed next week.", "Los nuevos sensores serán instalados la próxima semana."],
        ["Was the package delivered?", "¿Se entregó el paquete?"],
        ["The building was built in 1990.", "El edificio fue construido en 1990."]
      ],
      gramatica: {
        titulo: "Voz pasiva: be + participio",
        html: "<p>Se usa cuando importa <b>lo que pasó</b>, no quién lo hizo (o no se sabe).</p><table><tr><th>Tiempo</th><th>Forma</th><th>Ejemplo</th></tr><tr><td>Presente</td><td>am / is / are + participio</td><td>Parts <b>are made</b> here.</td></tr><tr><td>Pasado</td><td>was / were + participio</td><td>It <b>was repaired</b>.</td></tr><tr><td>Futuro</td><td>will be + participio</td><td>It <b>will be installed</b>.</td></tr></table><ul><li>El que hace la acción (opcional) va con <b>by</b>: <i>written <b>by</b> the manager</i>.</li><li>Pregunta: <i>Was the package delivered?</i></li></ul><div class='ej'>Activa: The technician repaired the machine.<br>Pasiva: The machine was repaired (by the technician).</div>"
      },
      ejercicios: [
        { t: "completar", q: "The machine ___ repaired yesterday.", o: ["was", "is", "were"], a: 0 },
        { t: "completar", q: "These parts ___ made in Mexico.", o: ["are", "is", "was"], a: 0 },
        { t: "completar", q: "The sensors will ___ installed next week.", o: ["be", "been", "being"], a: 0 },
        { t: "completar", q: "The report was written ___ the manager.", o: ["by", "from", "with"], a: 0 },
        { t: "completar", q: "Was the package ___?", o: ["delivered", "deliver", "delivering"], a: 0 },
        { t: "ordenar", es: "El edificio fue construido en 1990.", en: "The building was built in 1990." },
        { t: "dictado", en: "The machine was repaired yesterday.", es: "La máquina fue reparada ayer." }
      ]
    },
    {
      id: "b1-09", tipo: "base", titulo: "Entrevista de trabajo",
      objetivo: "responder las preguntas más comunes de una entrevista en inglés.",
      vocab: [
        ["interview", "entrevista"], ["resume", "currículum"], ["skills", "habilidades"],
        ["strength", "fortaleza"], ["weakness", "debilidad"], ["salary", "sueldo"],
        ["hire", "contratar"], ["apply", "postularse"], ["position", "puesto"],
        ["candidate", "candidato"], ["employer", "empleador"], ["reference", "referencia"]
      ],
      frases: [
        ["Tell me about yourself.", "Cuéntame sobre ti."],
        ["I have five years of experience in maintenance.", "Tengo cinco años de experiencia en mantenimiento."],
        ["My main strength is solving problems.", "Mi principal fortaleza es resolver problemas."],
        ["Why do you want this position?", "¿Por qué quieres este puesto?"],
        ["I am looking for new challenges.", "Busco nuevos retos."],
        ["When can you start?", "¿Cuándo puedes empezar?"]
      ],
      gramatica: {
        titulo: "Responder en una entrevista",
        html: "<h3>Preguntas frecuentes</h3><ul><li><b>Tell me about yourself.</b></li><li><b>Why do you want this position?</b></li><li><b>What are your strengths and weaknesses?</b></li><li><b>Where do you see yourself in five years?</b></li></ul><h3>Estructura para «Tell me about yourself»</h3><div class='ej'><b>Presente:</b> I work as a technician at a manufacturing plant.<br><b>Pasado:</b> I have five years of experience in maintenance.<br><b>Futuro:</b> I am looking for new challenges.</div><h3>Hablar de tus fortalezas</h3><ul><li><b>I'm good at</b> + -ing: <i>I'm good at solving problems.</i></li><li><b>I'm able to</b> + verbo: <i>I'm able to work under pressure.</i></li></ul><h3>Hablar de una debilidad con honestidad</h3><p><i>I used to be shy, but now I speak up in meetings.</i></p>"
      },
      ejercicios: [
        { t: "completar", q: "Tell me ___ yourself.", o: ["about", "for", "of"], a: 0 },
        { t: "completar", q: "I have five years of ___ in maintenance.", o: ["experience", "experiences", "expert"], a: 0 },
        { t: "completar", q: "I'm good ___ solving problems.", o: ["at", "in", "on"], a: 0 },
        { t: "completar", q: "Why do you want ___ position?", o: ["this", "these", "those"], a: 0 },
        { t: "completar", q: "I'm looking ___ new challenges.", o: ["for", "at", "to"], a: 0 },
        { t: "ordenar", es: "¿Cuándo puedes empezar?", en: "When can you start?" },
        { t: "dictado", en: "Tell me about yourself.", es: "Cuéntame sobre ti." }
      ]
    },
    {
      id: "b1-10", tipo: "base", titulo: "Quejas y soluciones",
      objetivo: "presentar una queja con cortesía y proponer una solución.",
      vocab: [
        ["complaint", "queja"], ["refund", "reembolso"], ["exchange", "cambio de producto"],
        ["warranty", "garantía"], ["defective", "defectuoso"], ["apologize", "disculparse"],
        ["solution", "solución"], ["inconvenience", "inconveniente / molestia"], ["resolve", "resolver"],
        ["unacceptable", "inaceptable"], ["urgent", "urgente"], ["immediately", "de inmediato"]
      ],
      frases: [
        ["I would like to make a complaint.", "Quisiera presentar una queja."],
        ["The product is defective.", "El producto está defectuoso."],
        ["I want a refund, please.", "Quiero un reembolso, por favor."],
        ["I apologize for the inconvenience.", "Me disculpo por el inconveniente."],
        ["Could you fix this problem immediately?", "¿Podría resolver este problema de inmediato?"],
        ["The warranty covers this repair.", "La garantía cubre esta reparación."]
      ],
      gramatica: {
        titulo: "Quejarte con cortesía",
        html: "<h3>Presentar el problema sin enojo</h3><ul><li><b>I'm afraid there is a problem with…</b></li><li><b>I would like to make a complaint about…</b></li><li><b>The product is defective / not working.</b></li></ul><h3>Pedir una solución</h3><ul><li><b>Could you…?</b> <i>Could you fix this today?</i></li><li><b>Would it be possible to…?</b> <i>Would it be possible to get a refund?</i></li><li><b>I would like a refund / an exchange.</b></li></ul><h3>Si tú recibes la queja</h3><ul><li><b>I apologize for the inconvenience.</b></li><li><b>Let me check that for you.</b></li><li><b>We will resolve this by Friday.</b></li></ul><p>Firmeza no es agresividad: <b>Could</b> y <b>would</b> suenan más corteses que <i>I want</i>.</p>"
      },
      ejercicios: [
        { t: "completar", q: "I would like to make a ___.", o: ["complaint", "complain", "complained"], a: 0 },
        { t: "completar", q: "I'm afraid there is a problem ___ my order.", o: ["with", "for", "to"], a: 0 },
        { t: "completar", q: "Would it be ___ to get a refund?", o: ["possible", "can", "may"], a: 0 },
        { t: "completar", q: "I ___ for the inconvenience.", o: ["apologize", "apologies", "apology"], a: 0 },
        { t: "completar", q: "Could you fix this problem ___?", o: ["immediately", "immediate", "immediacy"], a: 0 },
        { t: "ordenar", es: "El producto está defectuoso.", en: "The product is defective." },
        { t: "dictado", en: "I want a refund, please.", es: "Quiero un reembolso, por favor." }
      ]
    },
    {
      id: "b1-11", tipo: "tecnico", titulo: "Diagnóstico de fallas (diálogos)",
      objetivo: "hacer y responder preguntas para diagnosticar una falla.",
      vocab: [
        ["diagnose", "diagnosticar"], ["symptom", "síntoma"], ["cause", "causa"],
        ["breaker", "interruptor termomagnético"], ["tripped", "se disparó (una protección)"],
        ["overload", "sobrecarga"], ["short circuit", "cortocircuito"], ["voltage drop", "caída de tensión"],
        ["bearing", "rodamiento"], ["belt", "banda"], ["fuse", "fusible"], ["isolate", "aislar"]
      ],
      frases: [
        ["When did the problem start?", "¿Cuándo empezó el problema?"],
        ["The breaker tripped when I started the motor.", "El interruptor se disparó cuando arranqué el motor."],
        ["It has been making this noise since morning.", "Ha estado haciendo este ruido desde la mañana."],
        ["I think the cause is an overload.", "Creo que la causa es una sobrecarga."],
        ["Have you checked the bearings?", "¿Has revisado los rodamientos?"],
        ["Let's isolate the problem first.", "Aislemos el problema primero."]
      ],
      gramatica: {
        titulo: "Preguntas y respuestas de diagnóstico",
        html: "<h3>Preguntas típicas</h3><ul><li><b>When did it start?</b> (pasado simple)</li><li><b>What were you doing when it happened?</b> (pasado continuo)</li><li><b>Has it happened before?</b> (presente perfecto)</li><li><b>Have you checked…?</b></li></ul><h3>Hablar de causas posibles</h3><ul><li><b>It might be</b> an overload. (tal vez)</li><li><b>It could be</b> the bearing. (podría ser)</li><li><b>I think the cause is</b>… (creo que)</li></ul><h3>Un diálogo de ejemplo</h3><div class='ej'><b>A:</b> What's the problem?<br><b>B:</b> The motor stops after ten minutes.<br><b>A:</b> Has it happened before?<br><b>B:</b> Yes, twice this week.<br><b>A:</b> Have you checked the bearings?<br><b>B:</b> Not yet. Let's isolate the problem first.</div>"
      },
      ejercicios: [
        { t: "completar", q: "When ___ the problem start?", o: ["did", "does", "has"], a: 0 },
        { t: "completar", q: "The breaker ___ when I started the motor.", o: ["tripped", "trips", "tripping"], a: 0 },
        { t: "completar", q: "It might ___ an overload.", o: ["be", "is", "been"], a: 0 },
        { t: "completar", q: "___ you checked the bearings?", o: ["Have", "Did", "Are"], a: 0 },
        { t: "completar", q: "Let's ___ the problem first.", o: ["isolate", "isolates", "isolating"], a: 0 },
        { t: "ordenar", es: "¿Ha pasado antes?", en: "Has it happened before?" },
        { t: "dictado", en: "I think the cause is an overload.", es: "Creo que la causa es una sobrecarga." }
      ]
    },
    {
      id: "b1-12", tipo: "tecnico", titulo: "Reuniones de trabajo",
      objetivo: "participar en una reunión: abrir, opinar, proponer y cerrar.",
      vocab: [
        ["agenda", "agenda de la reunión"], ["minutes", "minuta"], ["attendee", "asistente"],
        ["action item", "tarea acordada"], ["propose", "proponer"], ["follow up", "dar seguimiento"],
        ["on track", "según lo planeado"], ["behind schedule", "atrasado"], ["budget", "presupuesto"],
        ["priority", "prioridad"], ["raise", "plantear (un tema)"], ["wrap up", "concluir"]
      ],
      frases: [
        ["Let's start with the first item on the agenda.", "Empecemos con el primer punto de la agenda."],
        ["Could you give us a quick update?", "¿Podrías darnos una actualización rápida?"],
        ["The project is on track.", "El proyecto va según lo planeado."],
        ["We are two weeks behind schedule.", "Vamos dos semanas atrasados."],
        ["I'd like to raise a point.", "Quisiera plantear un punto."],
        ["Who will follow up on this?", "¿Quién dará seguimiento a esto?"]
      ],
      gramatica: {
        titulo: "Frases para reuniones",
        html: "<table><tr><th>Para…</th><th>Di…</th></tr><tr><td>Abrir</td><td><b>Let's get started.</b> / Let's start with…</td></tr><tr><td>Dar la palabra</td><td><b>Could you give us an update?</b></td></tr><tr><td>Opinar</td><td><b>I'd like to add that…</b> / I think we should…</td></tr><tr><td>Interrumpir con cortesía</td><td><b>Sorry to interrupt, but…</b></td></tr><tr><td>Proponer</td><td><b>I suggest that we…</b> / How about…?</td></tr><tr><td>Pedir claridad</td><td><b>Could you repeat that, please?</b></td></tr><tr><td>Cerrar</td><td><b>To wrap up…</b> / Let's summarize.</td></tr></table><h3>Acuerdos claros: quién, qué y cuándo</h3><div class='ej'>Who will do what, and by when?<br><i>Carlos will send the report by Friday.</i></div>"
      },
      ejercicios: [
        { t: "completar", q: "Let's start ___ the first item.", o: ["with", "in", "on"], a: 0 },
        { t: "completar", q: "Could you give us a quick ___?", o: ["update", "updating", "updated"], a: 0 },
        { t: "completar", q: "The project is on ___.", o: ["track", "time", "way"], a: 0 },
        { t: "completar", q: "We are two weeks ___ schedule.", o: ["behind", "after", "under"], a: 0 },
        { t: "completar", q: "I'd like to ___ a point.", o: ["raise", "rise", "arise"], a: 0 },
        { t: "ordenar", es: "¿Quién dará seguimiento?", en: "Who will follow up?" },
        { t: "dictado", en: "Let's get started.", es: "Empecemos." }
      ]
    },
    {
      id: "b1-13", tipo: "tecnico", titulo: "Reporte de mantenimiento",
      objetivo: "escribir y decir un reporte de mantenimiento claro.",
      vocab: [
        ["work order", "orden de trabajo"], ["preventive maintenance", "mantenimiento preventivo"],
        ["corrective maintenance", "mantenimiento correctivo"], ["inspection", "inspección"],
        ["lubricate", "lubricar"], ["calibrate", "calibrar"], ["spare part", "refacción"],
        ["downtime", "tiempo de paro"], ["root cause", "causa raíz"], ["completed", "completado"],
        ["pending", "pendiente"], ["recommendation", "recomendación"]
      ],
      frases: [
        ["The work order was completed on Friday.", "La orden de trabajo se completó el viernes."],
        ["We replaced the worn bearings.", "Reemplazamos los rodamientos desgastados."],
        ["The downtime was two hours.", "El tiempo de paro fue de dos horas."],
        ["The root cause was a loose connection.", "La causa raíz fue una conexión floja."],
        ["Preventive maintenance is scheduled for next month.", "El mantenimiento preventivo está programado para el próximo mes."],
        ["We recommend replacing the belt every six months.", "Recomendamos reemplazar la banda cada seis meses."]
      ],
      gramatica: {
        titulo: "Estructura de un reporte de mantenimiento",
        html: "<ol><li><b>Problem:</b> qué falló. <i>The motor stopped after ten minutes.</i></li><li><b>Actions taken:</b> qué se hizo, en pasado o pasiva. <i>We replaced the bearings. The belt was tightened.</i></li><li><b>Result:</b> cómo quedó. <i>The machine is running normally.</i></li><li><b>Pending:</b> qué falta. <i>The calibration is still pending.</i></li><li><b>Recommendation:</b> <i>We recommend replacing the belt every six months.</i></li></ol><h3>Tiempos útiles</h3><ul><li><b>Pasado simple:</b> acciones terminadas (<i>replaced, cleaned, checked</i>).</li><li><b>Presente perfecto:</b> estado actual (<i>The motor has been tested.</i>).</li><li><b>Futuro o is scheduled:</b> lo que viene (<i>will be calibrated</i>).</li><li><b>recommend + -ing:</b> <i>We recommend checking the filter monthly.</i></li></ul>"
      },
      ejercicios: [
        { t: "completar", q: "The work order ___ completed on Friday.", o: ["was", "is", "were"], a: 0 },
        { t: "completar", q: "We ___ the worn bearings.", o: ["replaced", "replace", "replacing"], a: 0 },
        { t: "completar", q: "The downtime ___ two hours last night.", o: ["was", "is", "were"], a: 0 },
        { t: "completar", q: "We recommend ___ the belt every six months.", o: ["replacing", "replace", "to replaces"], a: 0 },
        { t: "completar", q: "Preventive maintenance is ___ for next month.", o: ["scheduled", "schedule", "scheduling"], a: 0 },
        { t: "ordenar", es: "La orden de trabajo está pendiente.", en: "The work order is pending." },
        { t: "dictado", en: "We replaced the worn bearings.", es: "Reemplazamos los rodamientos desgastados." }
      ]
    },
    {
      id: "b1-14", tipo: "tecnico", titulo: "Procedimientos de seguridad",
      objetivo: "entender y explicar procedimientos y reglas de seguridad.",
      vocab: [
        ["lockout", "bloqueo de energía"], ["tagout", "etiquetado de equipo"], ["hazard", "riesgo (fuente de peligro)"],
        ["risk assessment", "evaluación de riesgos"], ["PPE", "equipo de protección personal"],
        ["incident", "incidente"], ["near miss", "casi accidente"], ["comply", "cumplir"],
        ["work permit", "permiso de trabajo"], ["confined space", "espacio confinado"],
        ["evacuate", "evacuar"], ["procedure", "procedimiento"]
      ],
      frases: [
        ["Always lock out and tag out the equipment before maintenance.", "Siempre bloquea y etiqueta el equipo antes del mantenimiento."],
        ["You must wear PPE in this area.", "Debes usar equipo de protección personal en esta área."],
        ["All incidents must be reported immediately.", "Todos los incidentes deben reportarse de inmediato."],
        ["A near miss is an event that could have caused an injury.", "Un casi accidente es un evento que pudo haber causado una lesión."],
        ["You need a work permit to enter a confined space.", "Necesitas un permiso de trabajo para entrar a un espacio confinado."],
        ["In case of fire, evacuate the building.", "En caso de incendio, evacúa el edificio."]
      ],
      gramatica: {
        titulo: "Reglas y procedimientos",
        html: "<h3>Obligaciones</h3><ul><li><b>You must…</b> / <b>You have to…</b> / <b>You need to…</b></li><li><b>You must not…</b> (prohibido)</li></ul><h3>Reglas en pasiva</h3><p><i>All incidents <b>must be reported</b> immediately.</i> · <i>The equipment <b>must be locked out</b>.</i></p><h3>Before / after + -ing</h3><p><i><b>Before starting</b>, check the permit. <b>After finishing</b>, remove the tags.</i></p><h3>Otras estructuras útiles</h3><ul><li><b>Make sure that</b> the power is off.</li><li><b>In case of</b> fire, evacuate the building.</li><li><b>You need a work permit to</b> enter a confined space.</li></ul><h3>Casi accidente</h3><p>Un <b>near miss</b> no causó daño, pero pudo hacerlo. Reportarlo ayuda a evitar un accidente.</p>"
      },
      ejercicios: [
        { t: "completar", q: "You ___ wear PPE in this area.", o: ["must", "can", "might"], a: 0 },
        { t: "completar", q: "All incidents must be ___ immediately.", o: ["reported", "report", "reporting"], a: 0 },
        { t: "completar", q: "You need a work permit ___ enter a confined space.", o: ["to", "for", "at"], a: 0 },
        { t: "completar", q: "In case ___ fire, evacuate the building.", o: ["of", "for", "at"], a: 0 },
        { t: "completar", q: "___ starting, check the permit.", o: ["Before", "Between", "During"], a: 0 },
        { t: "ordenar", es: "Evacúa el edificio.", en: "Evacuate the building." },
        { t: "dictado", en: "You must wear PPE.", es: "Debes usar equipo de protección personal." }
      ]
    }
  ]
};
