/* Nivel A1 · Principiante
   Cada sesión tiene: vocab, frases, gramatica, ejercicios.
   IMPORTANTE: no cambies los "id" de las sesiones; el progreso se guarda con ellos. */
window.CURSO = window.CURSO || {};
window.CURSO.a1 = {
  id: "a1",
  nombre: "A1",
  titulo: "Principiante",
  descripcion: "Tus primeras frases en inglés: presentarte, hablar de tu día y moverte en el trabajo.",
  sesiones: [
    {
      id: "a1-01", tipo: "base", titulo: "Saludos y presentación",
      objetivo: "presentarte, saludar y despedirte en inglés.",
      vocab: [
        ["hello", "hola"], ["good morning", "buenos días"], ["good afternoon", "buenas tardes"],
        ["good evening", "buenas noches (al llegar)"], ["good night", "buenas noches (al despedirse)"],
        ["goodbye", "adiós"], ["see you later", "hasta luego"], ["please", "por favor"],
        ["thank you", "gracias"], ["sorry", "perdón"], ["yes", "sí"], ["no", "no (respuesta negativa)"]
      ],
      frases: [
        ["Hello, my name is Carlos.", "Hola, me llamo Carlos."],
        ["Nice to meet you.", "Mucho gusto."],
        ["How are you?", "¿Cómo estás?"],
        ["I'm fine, thank you.", "Estoy bien, gracias."],
        ["Where are you from?", "¿De dónde eres?"],
        ["I'm from Mexico.", "Soy de México."]
      ],
      gramatica: {
        titulo: "Presentarte y saludar",
        html: "<h3>Para presentarte</h3><ul><li><b>My name is…</b> = Me llamo…</li><li><b>I'm…</b> (I am) = Soy… / Estoy…</li><li><b>I'm from…</b> = Soy de…</li></ul><h3>Saludos según la hora</h3><ul><li><b>Good morning</b>: de la mañana hasta el mediodía.</li><li><b>Good afternoon</b>: de mediodía hasta la tarde.</li><li><b>Good evening</b>: al llegar por la noche.</li><li><b>Good night</b>: solo para despedirte o antes de dormir.</li></ul><p>Una respuesta muy común a «How are you?» es <b>«I'm fine, thanks. And you?»</b></p>"
      },
      ejercicios: [
        { t: "completar", q: "___ morning! How are you?", o: ["Good", "Goodbye", "Please"], a: 0 },
        { t: "completar", q: "My name ___ Carlos.", o: ["is", "are", "am"], a: 0, e: "Con «name» se usa «is»: My name is…" },
        { t: "completar", q: "Nice to ___ you.", o: ["meet", "see", "call"], a: 0 },
        { t: "ordenar", es: "Mucho gusto.", en: "Nice to meet you." },
        { t: "dictado", en: "How are you?", es: "¿Cómo estás?" }
      ]
    },
    {
      id: "a1-02", tipo: "base", titulo: "El verbo to be",
      objetivo: "usar el verbo to be para decir quién eres, cómo estás y dónde estás.",
      vocab: [
        ["I", "yo"], ["you", "tú / usted"], ["he", "él"], ["she", "ella"], ["we", "nosotros"],
        ["they", "ellos / ellas"], ["student", "estudiante"], ["happy", "feliz"], ["tired", "cansado"],
        ["hungry", "con hambre"], ["ready", "listo"], ["here", "aquí"]
      ],
      frases: [
        ["I am a student.", "Soy estudiante."],
        ["She is tired.", "Ella está cansada."],
        ["We are ready.", "Estamos listos."],
        ["They are not here.", "Ellos no están aquí."],
        ["Are you happy?", "¿Estás feliz?"],
        ["He is my friend.", "Él es mi amigo."]
      ],
      gramatica: {
        titulo: "To be = ser y estar",
        html: "<p>En inglés, <b>to be</b> sirve para <b>ser</b> y para <b>estar</b>.</p><table><tr><th>Sujeto</th><th>Forma</th><th>Corta</th></tr><tr><td>I</td><td>am</td><td>I'm</td></tr><tr><td>you</td><td>are</td><td>you're</td></tr><tr><td>he / she / it</td><td>is</td><td>he's / she's / it's</td></tr><tr><td>we</td><td>are</td><td>we're</td></tr><tr><td>they</td><td>are</td><td>they're</td></tr></table><h3>Negativo y pregunta</h3><ul><li><b>Negativo:</b> agrega <b>not</b>: <i>She is not tired</i> (she isn't).</li><li><b>Pregunta:</b> invierte el orden: <i>Are you ready?</i></li></ul><div class='ej'>I am a student. → Am I a student? → I am not a student.</div>"
      },
      ejercicios: [
        { t: "completar", q: "I ___ tired.", o: ["am", "is", "are"], a: 0 },
        { t: "completar", q: "She ___ a teacher.", o: ["is", "are", "am"], a: 0 },
        { t: "completar", q: "They ___ at home.", o: ["are", "is", "am"], a: 0 },
        { t: "completar", q: "___ you ready?", o: ["Are", "Is", "Am"], a: 0 },
        { t: "ordenar", es: "Ella es mi amiga.", en: "She is my friend." },
        { t: "dictado", en: "We are ready.", es: "Estamos listos." }
      ]
    },
    {
      id: "a1-03", tipo: "base", titulo: "Números, fechas y hora",
      objetivo: "decir números, días, la hora y tu edad.",
      vocab: [
        ["one", "uno"], ["two", "dos"], ["three", "tres"], ["five", "cinco"], ["ten", "diez"],
        ["twenty", "veinte"], ["one hundred", "cien"], ["Monday", "lunes"], ["Friday", "viernes"],
        ["Sunday", "domingo"], ["today", "hoy"], ["tomorrow", "mañana (el día siguiente)"], ["o'clock", "en punto"]
      ],
      frases: [
        ["What time is it?", "¿Qué hora es?"],
        ["It's three o'clock.", "Son las tres en punto."],
        ["Today is Monday.", "Hoy es lunes."],
        ["I am twenty years old.", "Tengo veinte años."],
        ["The meeting is tomorrow.", "La reunión es mañana."],
        ["My birthday is in May.", "Mi cumpleaños es en mayo."]
      ],
      gramatica: {
        titulo: "Edad, hora y fechas",
        html: "<h3>La edad se dice con to be</h3><div class='ej'>I <b>am</b> twenty years old. (No se usa «have».)</div><h3>La hora</h3><ul><li><b>It's</b> + hora: <i>It's three o'clock.</i></li><li>Pregunta: <i>What time is it?</i></li></ul><h3>at / on / in</h3><ul><li><b>at</b> + hora: <i>at five o'clock</i></li><li><b>on</b> + día: <i>on Monday</i></li><li><b>in</b> + mes: <i>in May</i></li></ul><p>Los días y los meses se escriben con <b>mayúscula</b>: Monday, May.</p>"
      },
      ejercicios: [
        { t: "completar", q: "I ___ twenty years old.", o: ["am", "have", "is"], a: 0, e: "En inglés la edad se dice con «to be», no con «have»." },
        { t: "completar", q: "The meeting is ___ Monday.", o: ["on", "in", "at"], a: 0 },
        { t: "completar", q: "It's three ___.", o: ["o'clock", "hour", "time"], a: 0 },
        { t: "completar", q: "See you ___ five o'clock.", o: ["at", "on", "in"], a: 0 },
        { t: "ordenar", es: "Hoy es viernes.", en: "Today is Friday." },
        { t: "dictado", en: "What time is it?", es: "¿Qué hora es?" }
      ]
    },
    {
      id: "a1-04", tipo: "base", titulo: "La familia",
      objetivo: "hablar de tu familia y usar posesivos.",
      vocab: [
        ["mother", "madre"], ["father", "padre"], ["brother", "hermano"], ["sister", "hermana"],
        ["son", "hijo"], ["daughter", "hija"], ["wife", "esposa"], ["husband", "esposo"],
        ["grandmother", "abuela"], ["grandfather", "abuelo"], ["parents", "padres (papá y mamá)"],
        ["family", "familia"], ["friend", "amigo / amiga"]
      ],
      frases: [
        ["This is my family.", "Esta es mi familia."],
        ["I have two brothers.", "Tengo dos hermanos."],
        ["My mother is a nurse.", "Mi madre es enfermera."],
        ["She has a daughter.", "Ella tiene una hija."],
        ["Do you have children?", "¿Tienes hijos?"],
        ["Her father is a driver.", "Su padre es conductor."]
      ],
      gramatica: {
        titulo: "Have/has y posesivos",
        html: "<h3>Tener = have / has</h3><ul><li><b>I, you, we, they have</b>: <i>I have a brother.</i></li><li><b>he, she, it has</b>: <i>She has a daughter.</i></li></ul><h3>Posesivos</h3><table><tr><th>Sujeto</th><th>Posesivo</th></tr><tr><td>I</td><td>my</td></tr><tr><td>you</td><td>your</td></tr><tr><td>he</td><td>his</td></tr><tr><td>she</td><td>her</td></tr><tr><td>we</td><td>our</td></tr><tr><td>they</td><td>their</td></tr></table><p>Para decir «de alguien» agrega <b>'s</b>: <i>Maria's mother</i> (la madre de María).</p>"
      },
      ejercicios: [
        { t: "completar", q: "I ___ two sisters.", o: ["have", "has", "am"], a: 0 },
        { t: "completar", q: "She ___ a brother.", o: ["has", "have", "is"], a: 0 },
        { t: "completar", q: "Anna loves ___ mother.", o: ["her", "his", "their"], a: 0, e: "Anna es mujer, entonces «her»." },
        { t: "completar", q: "We love ___ family.", o: ["our", "my", "your"], a: 0 },
        { t: "ordenar", es: "Tengo un hermano.", en: "I have a brother." },
        { t: "dictado", en: "This is my family.", es: "Esta es mi familia." }
      ]
    },
    {
      id: "a1-05", tipo: "base", titulo: "Objetos y lugares",
      objetivo: "señalar objetos y describir lugares con this/that y there is/are.",
      vocab: [
        ["house", "casa"], ["room", "habitación"], ["kitchen", "cocina"], ["bathroom", "baño"],
        ["table", "mesa"], ["chair", "silla"], ["door", "puerta"], ["window", "ventana"],
        ["phone", "teléfono"], ["computer", "computadora"], ["office", "oficina"],
        ["street", "calle"], ["city", "ciudad"]
      ],
      frases: [
        ["This is my phone.", "Este es mi teléfono."],
        ["That is my office.", "Esa es mi oficina."],
        ["There is a table in the room.", "Hay una mesa en la habitación."],
        ["There are two chairs.", "Hay dos sillas."],
        ["Where is the bathroom?", "¿Dónde está el baño?"],
        ["These are my keys.", "Estas son mis llaves."]
      ],
      gramatica: {
        titulo: "This, that, there is / there are",
        html: "<h3>This / that / these / those</h3><table><tr><th></th><th>Cerca</th><th>Lejos</th></tr><tr><td>Uno</td><td>this</td><td>that</td></tr><tr><td>Varios</td><td>these</td><td>those</td></tr></table><h3>Hay = there is / there are</h3><ul><li><b>There is</b> + uno: <i>There is a table.</i></li><li><b>There are</b> + varios: <i>There are two chairs.</i></li></ul><h3>Artículos</h3><ul><li><b>a</b> antes de consonante: <i>a table</i></li><li><b>an</b> antes de vocal: <i>an apple</i></li><li><b>the</b> cuando ya se sabe cuál: <i>the door</i></li></ul>"
      },
      ejercicios: [
        { t: "completar", q: "___ is my office, over there.", o: ["That", "This", "These"], a: 0 },
        { t: "completar", q: "There ___ a table in the room.", o: ["is", "are", "am"], a: 0 },
        { t: "completar", q: "There ___ two windows.", o: ["are", "is", "am"], a: 0 },
        { t: "completar", q: "I have ___ apple.", o: ["an", "a", "the"], a: 0, e: "«apple» empieza con vocal, entonces «an»." },
        { t: "ordenar", es: "Hay una silla.", en: "There is a chair." },
        { t: "dictado", en: "Where is the bathroom?", es: "¿Dónde está el baño?" }
      ]
    },
    {
      id: "a1-06", tipo: "base", titulo: "La comida",
      objetivo: "pedir comida y bebida y decir qué te gusta.",
      vocab: [
        ["water", "agua"], ["coffee", "café"], ["tea", "té"], ["milk", "leche"], ["bread", "pan"],
        ["chicken", "pollo"], ["rice", "arroz"], ["apple", "manzana"], ["fruit", "fruta"],
        ["breakfast", "desayuno"], ["lunch", "comida (del mediodía)"], ["dinner", "cena"], ["thirsty", "con sed"]
      ],
      frases: [
        ["I would like a coffee, please.", "Quisiera un café, por favor."],
        ["I like rice and chicken.", "Me gustan el arroz y el pollo."],
        ["I don't like milk.", "No me gusta la leche."],
        ["Do you want some water?", "¿Quieres agua?"],
        ["I eat breakfast at seven.", "Desayuno a las siete."],
        ["Dinner is ready.", "La cena está lista."]
      ],
      gramatica: {
        titulo: "Pedir y decir lo que te gusta",
        html: "<h3>Gustos</h3><ul><li><b>I like</b> coffee. = Me gusta el café.</li><li><b>I don't like</b> milk. = No me gusta la leche.</li></ul><h3>Pedir con cortesía</h3><ul><li><b>I would like…</b> (I'd like…) = Quisiera…</li><li>Suena más amable que <i>I want</i> (quiero).</li></ul><h3>Some</h3><p>Con cosas que no se cuentan (agua, leche) o al ofrecer, se usa <b>some</b>: <i>Do you want some water?</i></p><div class='ej'>I'd like <b>a</b> coffee. / I'd like <b>some</b> water.</div>"
      },
      ejercicios: [
        { t: "completar", q: "I ___ like milk.", o: ["don't", "doesn't", "not"], a: 0 },
        { t: "completar", q: "I'd like ___ water, please.", o: ["some", "a", "an"], a: 0 },
        { t: "completar", q: "Dinner ___ ready.", o: ["is", "are", "am"], a: 0 },
        { t: "completar", q: "I eat ___ at seven in the morning.", o: ["breakfast", "dinner", "lunch"], a: 0 },
        { t: "ordenar", es: "Me gusta el café.", en: "I like coffee." },
        { t: "dictado", en: "I would like a coffee, please.", es: "Quisiera un café, por favor." }
      ]
    },
    {
      id: "a1-07", tipo: "base", titulo: "Rutina diaria",
      objetivo: "describir tu rutina diaria con el presente simple.",
      vocab: [
        ["wake up", "despertarse"], ["get up", "levantarse"], ["take a shower", "bañarse"],
        ["go to work", "ir al trabajo"], ["start", "empezar"], ["finish", "terminar"],
        ["go home", "ir a casa"], ["sleep", "dormir"], ["work", "trabajar"], ["study", "estudiar"],
        ["every day", "todos los días"], ["always", "siempre"], ["never", "nunca"]
      ],
      frases: [
        ["I wake up at six.", "Me despierto a las seis."],
        ["She goes to work by bus.", "Ella va al trabajo en autobús."],
        ["He works in a factory.", "Él trabaja en una fábrica."],
        ["We eat dinner at eight.", "Cenamos a las ocho."],
        ["Do you work on Saturdays?", "¿Trabajas los sábados?"],
        ["I don't work on Sundays.", "No trabajo los domingos."]
      ],
      gramatica: {
        titulo: "Presente simple",
        html: "<p>Se usa para <b>rutinas y hábitos</b>.</p><h3>Afirmativo</h3><ul><li><b>I, you, we, they</b> + verbo base: <i>I work.</i></li><li><b>he, she, it</b> + verbo con <b>-s / -es</b>: <i>She works. He goes. It watches.</i></li></ul><h3>Negativo y pregunta</h3><ul><li><b>don't</b> (I, you, we, they) / <b>doesn't</b> (he, she, it) + verbo base: <i>He doesn't work.</i></li><li><b>Do</b> / <b>Does</b> al inicio: <i>Do you work? Does she work?</i></li></ul><p>Con <b>does / doesn't</b> el verbo ya no lleva -s.</p><h3>Frecuencia</h3><p><b>always</b> (siempre), <b>never</b> (nunca): van antes del verbo. <i>I always wake up at six.</i></p>"
      },
      ejercicios: [
        { t: "completar", q: "She ___ at seven.", o: ["wakes up", "wake up", "waking up"], a: 0 },
        { t: "completar", q: "I ___ coffee every morning.", o: ["drink", "drinks", "drinking"], a: 0 },
        { t: "completar", q: "He ___ in a factory.", o: ["works", "work", "working"], a: 0 },
        { t: "completar", q: "___ you work on Saturdays?", o: ["Do", "Does", "Are"], a: 0 },
        { t: "completar", q: "She doesn't ___ on Sundays.", o: ["work", "works", "working"], a: 0, e: "Después de «doesn't» el verbo va sin -s." },
        { t: "ordenar", es: "Yo trabajo todos los días.", en: "I work every day." },
        { t: "dictado", en: "I wake up at six.", es: "Me despierto a las seis." }
      ]
    },
    {
      id: "a1-08", tipo: "base", titulo: "Trabajos y profesiones",
      objetivo: "decir a qué te dedicas y dónde trabajas.",
      vocab: [
        ["teacher", "maestro / maestra"], ["doctor", "médico"], ["nurse", "enfermero / enfermera"],
        ["engineer", "ingeniero / ingeniera"], ["technician", "técnico / técnica"],
        ["driver", "conductor / conductora"], ["manager", "gerente"], ["worker", "trabajador / trabajadora"],
        ["electrician", "electricista"], ["boss", "jefe / jefa"], ["company", "empresa"], ["job", "empleo"]
      ],
      frases: [
        ["What do you do?", "¿A qué te dedicas?"],
        ["I am a technician.", "Soy técnico."],
        ["She is an engineer.", "Ella es ingeniera."],
        ["I work for a big company.", "Trabajo para una empresa grande."],
        ["Where do you work?", "¿Dónde trabajas?"],
        ["He is my boss.", "Él es mi jefe."]
      ],
      gramatica: {
        titulo: "Hablar de tu trabajo",
        html: "<h3>La pregunta</h3><div class='ej'><b>What do you do?</b> = ¿A qué te dedicas? &nbsp;·&nbsp; <b>Where do you work?</b> = ¿Dónde trabajas?</div><h3>a / an con profesiones</h3><p>En inglés se pone <b>a</b> o <b>an</b> antes de la profesión: <i>I am <b>a</b> technician.</i> Usa <b>an</b> si empieza con sonido de vocal: <i>She is <b>an</b> engineer.</i></p><h3>Dónde trabajas</h3><ul><li><b>work for</b> una empresa: <i>I work for a big company.</i></li><li><b>work in</b> un lugar o área: <i>I work in an office / in maintenance.</i></li></ul>"
      },
      ejercicios: [
        { t: "completar", q: "She is ___ engineer.", o: ["an", "a", "the"], a: 0 },
        { t: "completar", q: "He is ___ teacher.", o: ["a", "an", "—"], a: 0 },
        { t: "completar", q: "What ___ you do?", o: ["do", "does", "are"], a: 0 },
        { t: "completar", q: "I work ___ an office.", o: ["in", "on", "for"], a: 0 },
        { t: "ordenar", es: "Soy ingeniero.", en: "I am an engineer." },
        { t: "dictado", en: "What do you do?", es: "¿A qué te dedicas?" }
      ]
    },
    {
      id: "a1-09", tipo: "base", titulo: "Direcciones",
      objetivo: "preguntar y dar direcciones sencillas.",
      vocab: [
        ["left", "izquierda"], ["right", "derecha"], ["straight", "derecho (todo recto)"],
        ["corner", "esquina"], ["near", "cerca"], ["far", "lejos"], ["next to", "al lado de"],
        ["behind", "detrás de"], ["in front of", "enfrente de"], ["between", "entre"],
        ["bank", "banco"], ["hospital", "hospital"], ["supermarket", "supermercado"],
        ["bus stop", "parada de autobús"]
      ],
      frases: [
        ["Where is the bank?", "¿Dónde está el banco?"],
        ["Turn left.", "Gira a la izquierda."],
        ["Go straight.", "Sigue derecho."],
        ["It is next to the supermarket.", "Está al lado del supermercado."],
        ["Is it far from here?", "¿Está lejos de aquí?"],
        ["The hospital is on the corner.", "El hospital está en la esquina."]
      ],
      gramatica: {
        titulo: "Órdenes y lugares",
        html: "<h3>Dar indicaciones (imperativo)</h3><p>Se usa el verbo base, sin sujeto: <b>Turn</b> left. <b>Go</b> straight. <b>Stop</b> here.</p><h3>Dónde está</h3><ul><li><b>next to</b> (al lado de), <b>behind</b> (detrás de), <b>in front of</b> (enfrente de), <b>between</b> (entre).</li><li><i>The bank is next to the supermarket.</i></li></ul><h3>Frases útiles</h3><ul><li><b>on the corner</b> = en la esquina</li><li><b>on the left / on the right</b> = a la izquierda / a la derecha</li><li><b>Is it far?</b> = ¿Está lejos?</li></ul>"
      },
      ejercicios: [
        { t: "completar", q: "___ left at the corner.", o: ["Turn", "Turns", "Turning"], a: 0 },
        { t: "completar", q: "The bank is ___ to the supermarket.", o: ["next", "near", "behind"], a: 0 },
        { t: "completar", q: "The bus stop is ___ the hospital.", o: ["in front of", "in front", "front of"], a: 0 },
        { t: "completar", q: "Is it ___ from here?", o: ["far", "far of", "farly"], a: 0 },
        { t: "ordenar", es: "Gira a la derecha.", en: "Turn right." },
        { t: "dictado", en: "Go straight.", es: "Sigue derecho." }
      ]
    },
    {
      id: "a1-10", tipo: "base", titulo: "Can y gustos",
      objetivo: "decir lo que puedes hacer y lo que te gusta.",
      vocab: [
        ["can", "poder / saber hacer algo"], ["swim", "nadar"], ["cook", "cocinar"], ["drive", "manejar"],
        ["speak", "hablar"], ["play", "jugar / tocar"], ["love", "amar / encantar"], ["hate", "odiar"],
        ["music", "música"], ["sports", "deportes"], ["help", "ayudar"], ["a little", "un poco"]
      ],
      frases: [
        ["I can speak a little English.", "Puedo hablar un poco de inglés."],
        ["Can you help me?", "¿Puedes ayudarme?"],
        ["She can't drive.", "Ella no sabe manejar."],
        ["I love music.", "Me encanta la música."],
        ["What do you like to do?", "¿Qué te gusta hacer?"],
        ["I like playing soccer.", "Me gusta jugar fútbol."]
      ],
      gramatica: {
        titulo: "Can / can't y gustos",
        html: "<h3>Can = poder o saber</h3><ul><li><b>Afirmativo:</b> <i>I can swim.</i></li><li><b>Negativo:</b> <i>She can't drive.</i> (can't = cannot)</li><li><b>Pregunta:</b> <i>Can you help me?</i></li></ul><p><b>Can</b> nunca lleva -s y el verbo que sigue va en base: <i>He can swim</i> (no «cans»).</p><h3>Gustos con -ing</h3><p>Después de <b>like, love, hate</b> se usa el verbo con <b>-ing</b>: <i>I like playing soccer. I love cooking.</i></p>"
      },
      ejercicios: [
        { t: "completar", q: "She ___ swim.", o: ["can", "cans", "is"], a: 0 },
        { t: "completar", q: "___ you help me?", o: ["Can", "Does", "Is"], a: 0 },
        { t: "completar", q: "He can't ___ a car.", o: ["drive", "drives", "driving"], a: 0 },
        { t: "completar", q: "I like ___ soccer.", o: ["playing", "play", "plays"], a: 0 },
        { t: "ordenar", es: "Puedo hablar inglés.", en: "I can speak English." },
        { t: "dictado", en: "Can you help me?", es: "¿Puedes ayudarme?" }
      ]
    },
    {
      id: "a1-11", tipo: "tecnico", titulo: "Herramientas y equipos",
      objetivo: "nombrar herramientas y equipos y pedirlos.",
      vocab: [
        ["tool", "herramienta"], ["screwdriver", "desarmador"], ["wrench", "llave (de tuercas)"],
        ["hammer", "martillo"], ["cable", "cable"], ["switch", "interruptor"], ["plug", "clavija / enchufe"],
        ["battery", "batería"], ["light", "luz / lámpara"], ["fan", "ventilador"], ["machine", "máquina"],
        ["motor", "motor"], ["on", "encendido"], ["off", "apagado"]
      ],
      frases: [
        ["This is a screwdriver.", "Este es un desarmador."],
        ["I need a wrench.", "Necesito una llave."],
        ["Where is the cable?", "¿Dónde está el cable?"],
        ["The machine is off.", "La máquina está apagada."],
        ["Please turn on the light.", "Por favor, enciende la luz."],
        ["The fan is on.", "El ventilador está encendido."]
      ],
      gramatica: {
        titulo: "Pedir y nombrar equipos",
        html: "<h3>I need…</h3><p><b>I need</b> + objeto = Necesito… <i>I need a hammer.</i> Para varios: <i>I need two cables.</i></p><h3>On / off</h3><ul><li><b>The machine is on / off.</b> = La máquina está encendida / apagada.</li><li><b>turn on / turn off</b> = encender / apagar: <i>Please turn on the light.</i></li></ul><h3>Where is / Where are</h3><ul><li><i>Where <b>is</b> the cable?</i> (uno)</li><li><i>Where <b>are</b> the tools?</i> (varios)</li></ul>"
      },
      ejercicios: [
        { t: "completar", q: "I ___ a screwdriver.", o: ["need", "needs", "needing"], a: 0 },
        { t: "completar", q: "The machine is ___.", o: ["off", "of", "out"], a: 0 },
        { t: "completar", q: "Please turn ___ the light.", o: ["on", "in", "at"], a: 0 },
        { t: "completar", q: "Where ___ the tools?", o: ["are", "is", "am"], a: 0 },
        { t: "ordenar", es: "Necesito un martillo.", en: "I need a hammer." },
        { t: "dictado", en: "The machine is off.", es: "La máquina está apagada." }
      ]
    },
    {
      id: "a1-12", tipo: "tecnico", titulo: "Unidades y números técnicos",
      objetivo: "leer y decir medidas, unidades y números técnicos.",
      vocab: [
        ["volt", "voltio"], ["amp", "amperio"], ["watt", "watt (vatio)"], ["meter", "metro"],
        ["kilogram", "kilogramo"], ["liter", "litro"], ["degree", "grado"], ["pressure", "presión"],
        ["temperature", "temperatura"], ["percent", "por ciento"], ["zero", "cero"], ["point", "punto (decimal)"]
      ],
      frases: [
        ["The voltage is two hundred twenty volts.", "El voltaje es de doscientos veinte voltios."],
        ["The temperature is twenty-five degrees.", "La temperatura es de veinticinco grados."],
        ["The pressure is six bar.", "La presión es de seis bar."],
        ["It is zero point five.", "Es cero punto cinco."],
        ["The tank has one hundred liters.", "El tanque tiene cien litros."],
        ["The motor uses ten amps.", "El motor usa diez amperios."]
      ],
      gramatica: {
        titulo: "Números y unidades",
        html: "<h3>Números grandes</h3><ul><li>100 = <b>one hundred</b></li><li>220 = <b>two hundred twenty</b></li><li>25 = <b>twenty-five</b></li></ul><h3>Decimales</h3><p>El punto decimal se lee <b>point</b>: <i>0.5 = zero point five</i>, <i>2.5 = two point five</i>.</p><h3>Unidades</h3><ul><li>Con más de uno, la unidad va en plural: <i>one volt, two volts, ten amps</i>.</li><li><b>bar</b> y <b>percent</b> suelen quedarse igual: <i>six bar, ten percent</i>.</li></ul><div class='ej'>The temperature <b>is</b> twenty-five degrees. (Se usa <b>is</b>: el sujeto es «temperature».)</div>"
      },
      ejercicios: [
        { t: "opcion", q: "How do you say 220?", o: ["two hundred twenty", "two twenty hundred", "twenty two hundred"], a: 0 },
        { t: "opcion", q: "How do you read 0.5?", o: ["zero point five", "zero comma five", "cero five"], a: 0 },
        { t: "completar", q: "The temperature ___ twenty-five degrees.", o: ["is", "are", "have"], a: 0 },
        { t: "completar", q: "The tank has ten ___.", o: ["liters", "liter", "litering"], a: 0 },
        { t: "ordenar", es: "La presión es de seis bar.", en: "The pressure is six bar." },
        { t: "dictado", en: "It is zero point five.", es: "Es cero punto cinco." }
      ]
    },
    {
      id: "a1-13", tipo: "tecnico", titulo: "Señales de seguridad",
      objetivo: "entender señales y órdenes de seguridad.",
      vocab: [
        ["danger", "peligro"], ["warning", "advertencia"], ["caution", "precaución"], ["exit", "salida"],
        ["fire", "fuego / incendio"], ["emergency", "emergencia"], ["helmet", "casco"], ["gloves", "guantes"],
        ["safety glasses", "lentes de seguridad"], ["safety", "seguridad"], ["enter", "entrar"],
        ["high voltage", "alto voltaje"]
      ],
      frases: [
        ["Wear your helmet.", "Usa tu casco."],
        ["Danger! High voltage.", "¡Peligro! Alto voltaje."],
        ["Do not enter.", "No entres."],
        ["Stay away from the machine.", "Aléjate de la máquina."],
        ["Where is the emergency exit?", "¿Dónde está la salida de emergencia?"],
        ["Be careful.", "Ten cuidado."]
      ],
      gramatica: {
        titulo: "Órdenes de seguridad",
        html: "<h3>Imperativo afirmativo</h3><p>Verbo base, sin sujeto: <b>Wear</b> your helmet. <b>Stay</b> away. <b>Be</b> careful.</p><h3>Imperativo negativo</h3><p><b>Do not</b> (o <b>Don't</b>) + verbo: <i>Do not enter. Don't touch.</i></p><h3>Tres niveles de aviso</h3><ul><li><b>DANGER</b>: riesgo grave, puede causar la muerte.</li><li><b>WARNING</b>: riesgo que puede causar lesiones.</li><li><b>CAUTION</b>: riesgo menor, hay que tener cuidado.</li></ul>"
      },
      ejercicios: [
        { t: "completar", q: "___ your gloves.", o: ["Wear", "Wears", "Wearing"], a: 0 },
        { t: "completar", q: "___ not enter.", o: ["Do", "Does", "Are"], a: 0 },
        { t: "completar", q: "Stay ___ from the machine.", o: ["away", "off", "out"], a: 0 },
        { t: "completar", q: "Where is the ___ exit?", o: ["emergency", "emergent", "emergence"], a: 0 },
        { t: "ordenar", es: "Usa tus guantes.", en: "Wear your gloves." },
        { t: "dictado", en: "Do not enter.", es: "No entres." }
      ]
    },
    {
      id: "a1-14", tipo: "tecnico", titulo: "Presentarte en el trabajo",
      objetivo: "presentarte con tu equipo de trabajo.",
      vocab: [
        ["team", "equipo"], ["shift", "turno"], ["department", "departamento"], ["colleague", "colega"],
        ["building", "edificio"], ["plant", "planta (fábrica)"], ["supervisor", "supervisor"],
        ["maintenance", "mantenimiento"], ["schedule", "horario"], ["meeting", "reunión"],
        ["new", "nuevo"], ["welcome", "bienvenido"]
      ],
      frases: [
        ["Hello, I'm Carlos. I work in maintenance.", "Hola, soy Carlos. Trabajo en mantenimiento."],
        ["I am new to this department.", "Soy nuevo en este departamento."],
        ["I work the morning shift.", "Trabajo el turno de la mañana."],
        ["Who is your supervisor?", "¿Quién es tu supervisor?"],
        ["Welcome to the team.", "Bienvenido al equipo."],
        ["Nice to meet you. I'm happy to be here.", "Mucho gusto. Estoy feliz de estar aquí."]
      ],
      gramatica: {
        titulo: "Tu presentación en el trabajo",
        html: "<h3>Una plantilla que puedes usar</h3><div class='ej'>Hello, I'm <b>[tu nombre]</b>. I work in <b>[tu área]</b>. I work the <b>[turno]</b> shift. Nice to meet you.</div><h3>Frases útiles</h3><ul><li><b>I am new to…</b> = Soy nuevo en…</li><li><b>Welcome to…</b> = Bienvenido a…</li><li><b>Who is…?</b> = ¿Quién es…?</li><li><b>What time is the meeting?</b> = ¿A qué hora es la reunión?</li></ul><h3>Turnos</h3><p><i>the morning shift, the afternoon shift, the night shift</i> (turno de mañana, tarde, noche).</p>"
      },
      ejercicios: [
        { t: "completar", q: "I work ___ maintenance.", o: ["in", "on", "to"], a: 0 },
        { t: "completar", q: "Welcome ___ the team.", o: ["to", "in", "at"], a: 0 },
        { t: "completar", q: "Who ___ your supervisor?", o: ["is", "are", "does"], a: 0 },
        { t: "completar", q: "I work the morning ___.", o: ["shift", "shifts", "schedule"], a: 0 },
        { t: "ordenar", es: "Soy nuevo en el equipo.", en: "I am new to the team." },
        { t: "dictado", en: "Welcome to the team.", es: "Bienvenido al equipo." }
      ]
    }
  ]
};
