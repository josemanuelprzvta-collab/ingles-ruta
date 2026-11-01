/* Nivel A2 · Básico
   IMPORTANTE: no cambies los "id" de las sesiones; el progreso se guarda con ellos. */
window.CURSO = window.CURSO || {};
window.CURSO.a2 = {
  id: "a2",
  nombre: "A2",
  titulo: "Básico",
  descripcion: "Cuenta lo que hiciste, haz planes, viaja, compra y describe fallas simples en el trabajo.",
  sesiones: [
    {
      id: "a2-01", tipo: "base", titulo: "Pasado simple",
      objetivo: "contar lo que hiciste en el pasado.",
      vocab: [
        ["yesterday", "ayer"], ["last night", "anoche"], ["last week", "la semana pasada"],
        ["ago", "hace (tiempo)"], ["worked", "trabajé / trabajó"], ["watched", "miré / miró (TV, película)"],
        ["called", "llamé / llamó"], ["finished", "terminé / terminó"], ["went", "fui / fue"],
        ["saw", "vi / vio"], ["had", "tuve / tuvo"], ["bought", "compré / compró"],
        ["ate", "comí / comió"], ["took", "tomé / tomó"], ["made", "hice / hizo"]
      ],
      frases: [
        ["I worked yesterday.", "Trabajé ayer."],
        ["She called me last night.", "Ella me llamó anoche."],
        ["We went to the market.", "Fuimos al mercado."],
        ["Did you see the game?", "¿Viste el partido?"],
        ["He didn't come to work.", "Él no vino al trabajo."],
        ["I bought a new phone two weeks ago.", "Compré un teléfono nuevo hace dos semanas."]
      ],
      gramatica: {
        titulo: "Pasado simple",
        html: "<h3>Verbos regulares: + -ed</h3><p>work → <b>worked</b>, watch → <b>watched</b>, call → <b>called</b>, finish → <b>finished</b>.</p><h3>Verbos irregulares (hay que memorizarlos)</h3><table><tr><th>Presente</th><th>Pasado</th></tr><tr><td>go</td><td>went</td></tr><tr><td>see</td><td>saw</td></tr><tr><td>have</td><td>had</td></tr><tr><td>buy</td><td>bought</td></tr><tr><td>eat</td><td>ate</td></tr><tr><td>take</td><td>took</td></tr><tr><td>make</td><td>made</td></tr><tr><td>come</td><td>came</td></tr></table><h3>Preguntas y negativos</h3><ul><li><b>Did</b> + sujeto + verbo base: <i>Did you see the game?</i></li><li><b>didn't</b> + verbo base: <i>He didn't come.</i> (no «didn't came»)</li></ul>"
      },
      ejercicios: [
        { t: "completar", q: "I ___ to the market yesterday.", o: ["went", "go", "goed"], a: 0 },
        { t: "completar", q: "She ___ me last night.", o: ["called", "calls", "calling"], a: 0 },
        { t: "completar", q: "Did you ___ the movie?", o: ["see", "saw", "seen"], a: 0, e: "Después de «Did» el verbo va en forma base." },
        { t: "completar", q: "He didn't ___ to work.", o: ["come", "came", "comes"], a: 0 },
        { t: "completar", q: "We ___ pizza for dinner.", o: ["ate", "eat", "eaten"], a: 0 },
        { t: "ordenar", es: "Ayer trabajé.", en: "I worked yesterday." },
        { t: "dictado", en: "We went to the market.", es: "Fuimos al mercado." }
      ]
    },
    {
      id: "a2-02", tipo: "base", titulo: "Futuro: going to y will",
      objetivo: "hablar de planes y hacer predicciones con going to y will.",
      vocab: [
        ["next week", "la próxima semana"], ["next month", "el próximo mes"], ["tonight", "esta noche"],
        ["soon", "pronto"], ["plan", "plan"], ["maybe", "quizá"], ["probably", "probablemente"],
        ["trip", "viaje"], ["vacation", "vacaciones"], ["travel", "viajar"], ["visit", "visitar"],
        ["going to", "ir a (plan)"], ["will", "futuro (promesa o decisión)"]
      ],
      frases: [
        ["I am going to visit my parents next week.", "Voy a visitar a mis padres la próxima semana."],
        ["It will rain tonight.", "Va a llover esta noche."],
        ["We are going to travel in July.", "Vamos a viajar en julio."],
        ["I will call you soon.", "Te llamaré pronto."],
        ["Maybe we will go to the beach.", "Quizá vayamos a la playa."],
        ["Are you going to work this weekend?", "¿Vas a trabajar este fin de semana?"]
      ],
      gramatica: {
        titulo: "Going to y will",
        html: "<h3>Be going to + verbo</h3><p>Para <b>planes ya decididos</b>: <i>I am going to visit my parents.</i></p><h3>Will + verbo base</h3><p>Para <b>decisiones del momento, promesas y predicciones</b>: <i>I will call you. It will rain.</i></p><ul><li>Negativo: <b>won't</b> (will not): <i>I won't be late.</i></li><li>Forma corta: <b>'ll</b>: <i>I'll help you.</i></li><li>Will no cambia con el sujeto: <i>he will, they will</i>.</li></ul><div class='ej'>Ya lo planeé → <b>going to</b>. Lo decido ahora o prometo → <b>will</b>.</div>"
      },
      ejercicios: [
        { t: "completar", q: "I am ___ to visit my parents.", o: ["going", "go", "will"], a: 0 },
        { t: "completar", q: "It ___ rain tonight.", o: ["will", "is", "does"], a: 0 },
        { t: "completar", q: "I ___ call you soon.", o: ["will", "am", "do"], a: 0 },
        { t: "completar", q: "She is going to ___ a doctor tomorrow.", o: ["see", "sees", "saw"], a: 0 },
        { t: "completar", q: "We ___ going to travel in July.", o: ["are", "is", "will"], a: 0 },
        { t: "ordenar", es: "Voy a viajar la próxima semana.", en: "I am going to travel next week." },
        { t: "dictado", en: "I will call you soon.", es: "Te llamaré pronto." }
      ]
    },
    {
      id: "a2-03", tipo: "base", titulo: "Comparativos y superlativos",
      objetivo: "comparar cosas y decir cuál es la mejor.",
      vocab: [
        ["bigger", "más grande"], ["smaller", "más pequeño"], ["faster", "más rápido"],
        ["cheaper", "más barato"], ["more expensive", "más caro"], ["better", "mejor"],
        ["worse", "peor"], ["the best", "el mejor"], ["the worst", "el peor"],
        ["the biggest", "el más grande"], ["cheap", "barato"], ["expensive", "caro"],
        ["easy", "fácil"], ["difficult", "difícil"]
      ],
      frases: [
        ["This phone is cheaper than that one.", "Este teléfono es más barato que ese."],
        ["My car is faster than your car.", "Mi auto es más rápido que tu auto."],
        ["English is easier than I thought.", "El inglés es más fácil de lo que pensaba."],
        ["She is the best engineer in the team.", "Ella es la mejor ingeniera del equipo."],
        ["This is the most expensive hotel.", "Este es el hotel más caro."],
        ["Today is worse than yesterday.", "Hoy está peor que ayer."]
      ],
      gramatica: {
        titulo: "Comparar",
        html: "<table><tr><th>Tipo</th><th>Comparativo</th><th>Superlativo</th></tr><tr><td>Corta</td><td>cheap → <b>cheaper</b></td><td>the <b>cheapest</b></td></tr><tr><td>Corta con una consonante</td><td>big → <b>bigger</b></td><td>the <b>biggest</b></td></tr><tr><td>Larga</td><td><b>more</b> expensive</td><td>the <b>most</b> expensive</td></tr><tr><td>Irregular</td><td>good → <b>better</b></td><td>the <b>best</b></td></tr><tr><td>Irregular</td><td>bad → <b>worse</b></td><td>the <b>worst</b></td></tr></table><p>Para comparar dos cosas se usa <b>than</b> (que): <i>This phone is cheaper <b>than</b> that one.</i></p>"
      },
      ejercicios: [
        { t: "completar", q: "This phone is ___ than that one.", o: ["cheaper", "more cheap", "cheapest"], a: 0 },
        { t: "completar", q: "She is the ___ engineer in the team.", o: ["best", "better", "good"], a: 0 },
        { t: "completar", q: "This hotel is ___ expensive than that one.", o: ["more", "most", "much"], a: 0 },
        { t: "completar", q: "My car is ___ than yours.", o: ["faster", "fastest", "fast"], a: 0 },
        { t: "completar", q: "Today is ___ than yesterday. (peor)", o: ["worse", "worst", "bad"], a: 0 },
        { t: "ordenar", es: "Este es el mejor equipo.", en: "This is the best team." },
        { t: "dictado", en: "It is easier than I thought.", es: "Es más fácil de lo que pensaba." }
      ]
    },
    {
      id: "a2-04", tipo: "base", titulo: "Presente continuo",
      objetivo: "decir lo que está pasando ahora mismo.",
      vocab: [
        ["now", "ahora"], ["at the moment", "en este momento"], ["studying", "estudiando"],
        ["cooking", "cocinando"], ["waiting", "esperando"], ["working", "trabajando"],
        ["talking", "hablando"], ["wearing", "usando (ropa)"], ["raining", "lloviendo"],
        ["listening", "escuchando"], ["reading", "leyendo"], ["writing", "escribiendo"]
      ],
      frases: [
        ["I am studying English now.", "Estoy estudiando inglés ahora."],
        ["She is cooking dinner.", "Ella está cocinando la cena."],
        ["They are waiting for the bus.", "Están esperando el autobús."],
        ["It is raining at the moment.", "Está lloviendo en este momento."],
        ["Are you listening to me?", "¿Me estás escuchando?"],
        ["He isn't working today.", "Él no está trabajando hoy."]
      ],
      gramatica: {
        titulo: "Presente continuo",
        html: "<p>Se forma con <b>am / is / are + verbo con -ing</b> y habla de lo que pasa <b>ahora</b>.</p><div class='ej'>I <b>am</b> study<b>ing</b>. She <b>is</b> cook<b>ing</b>. They <b>are</b> wait<b>ing</b>.</div><h3>Ortografía del -ing</h3><ul><li>Verbo que termina en <b>e</b>: la quitas. write → <b>writing</b>.</li><li>Una vocal + una consonante: duplicas. run → <b>running</b>.</li></ul><h3>Negativo y pregunta</h3><ul><li><i>He isn't working today.</i></li><li><i>Are you listening?</i></li></ul><h3>Presente simple vs continuo</h3><p><i>I work every day</i> (rutina) · <i>I am working now</i> (en este momento).</p>"
      },
      ejercicios: [
        { t: "completar", q: "I ___ studying English now.", o: ["am", "is", "are"], a: 0 },
        { t: "completar", q: "She ___ cooking dinner.", o: ["is", "are", "does"], a: 0 },
        { t: "completar", q: "They are ___ for the bus.", o: ["waiting", "wait", "waits"], a: 0 },
        { t: "completar", q: "___ you listening to me?", o: ["Are", "Do", "Is"], a: 0 },
        { t: "completar", q: "He ___ working today.", o: ["isn't", "doesn't", "don't"], a: 0 },
        { t: "ordenar", es: "Estoy leyendo un libro.", en: "I am reading a book." },
        { t: "dictado", en: "It is raining now.", es: "Está lloviendo ahora." }
      ]
    },
    {
      id: "a2-05", tipo: "base", titulo: "Compras y dinero",
      objetivo: "preguntar precios y comprar en una tienda.",
      vocab: [
        ["price", "precio"], ["cost", "costar"], ["cash", "efectivo"], ["card", "tarjeta"],
        ["discount", "descuento"], ["receipt", "recibo / ticket"], ["size", "talla / tamaño"],
        ["pay", "pagar"], ["buy", "comprar"], ["sell", "vender"], ["change", "cambio (dinero)"],
        ["store", "tienda"], ["bag", "bolsa"]
      ],
      frases: [
        ["How much is this?", "¿Cuánto cuesta esto?"],
        ["Can I pay by card?", "¿Puedo pagar con tarjeta?"],
        ["Do you have a smaller size?", "¿Tiene una talla más pequeña?"],
        ["It costs fifty dollars.", "Cuesta cincuenta dólares."],
        ["Is there a discount?", "¿Hay descuento?"],
        ["I'll take it.", "Me lo llevo."]
      ],
      gramatica: {
        titulo: "Preguntar y comprar",
        html: "<h3>Preguntar el precio</h3><ul><li><b>How much is this?</b> (uno)</li><li><b>How much are these?</b> (varios)</li></ul><h3>Pedir con cortesía</h3><ul><li><b>Can I…?</b> = ¿Puedo…? <i>Can I pay by card?</i></li><li><b>Do you have…?</b> = ¿Tiene…? <i>Do you have a smaller size?</i></li></ul><h3>Decidir</h3><p><b>I'll take it.</b> = Me lo llevo. (I will take it: decisión en el momento.)</p><h3>Cost</h3><p>Es verbo: <i>It <b>costs</b> fifty dollars.</i> (con it / he / she lleva -s)</p>"
      },
      ejercicios: [
        { t: "completar", q: "How ___ is this jacket?", o: ["much", "many", "long"], a: 0 },
        { t: "completar", q: "Can I pay ___ card?", o: ["by", "on", "to"], a: 0 },
        { t: "completar", q: "Do you ___ a smaller size?", o: ["have", "has", "are"], a: 0 },
        { t: "completar", q: "It ___ fifty dollars.", o: ["costs", "cost", "costing"], a: 0 },
        { t: "ordenar", es: "¿Cuánto cuesta esto?", en: "How much is this?" },
        { t: "dictado", en: "I'll take it.", es: "Me lo llevo." }
      ]
    },
    {
      id: "a2-06", tipo: "base", titulo: "Salud",
      objetivo: "describir síntomas y pedir o dar consejos de salud.",
      vocab: [
        ["headache", "dolor de cabeza"], ["fever", "fiebre"], ["cough", "tos"], ["pain", "dolor"],
        ["medicine", "medicina"], ["hurt", "doler"], ["sick", "enfermo"], ["rest", "descansar"],
        ["throat", "garganta"], ["back", "espalda"], ["stomach", "estómago"], ["appointment", "cita"]
      ],
      frases: [
        ["I have a headache.", "Tengo dolor de cabeza."],
        ["My back hurts.", "Me duele la espalda."],
        ["I feel sick.", "Me siento mal (enfermo)."],
        ["You should rest.", "Deberías descansar."],
        ["I need to see a doctor.", "Necesito ver a un médico."],
        ["Take this medicine twice a day.", "Toma esta medicina dos veces al día."]
      ],
      gramatica: {
        titulo: "Síntomas y consejos",
        html: "<h3>Decir qué tienes</h3><ul><li><b>I have a</b> headache / fever / cough.</li><li><b>My</b> back / stomach / throat <b>hurts</b>. (varios: <i>My feet hurt</i>)</li><li><b>I feel</b> sick / tired.</li></ul><h3>Dar consejos con should</h3><p><b>should</b> + verbo base = deberías: <i>You should rest. You should see a doctor.</i></p><h3>Frecuencia</h3><p><b>once a day</b> (una vez), <b>twice a day</b> (dos veces), <b>three times a day</b> (tres veces).</p>"
      },
      ejercicios: [
        { t: "completar", q: "I ___ a headache.", o: ["have", "am", "feel"], a: 0 },
        { t: "completar", q: "My back ___.", o: ["hurts", "hurt", "hurting"], a: 0 },
        { t: "completar", q: "You ___ rest.", o: ["should", "shoulds", "are"], a: 0 },
        { t: "completar", q: "I need to ___ a doctor.", o: ["see", "saw", "seeing"], a: 0 },
        { t: "completar", q: "Take this medicine ___ a day.", o: ["twice", "two", "second"], a: 0 },
        { t: "ordenar", es: "Me duele el estómago.", en: "My stomach hurts." },
        { t: "dictado", en: "I feel sick.", es: "Me siento mal." }
      ]
    },
    {
      id: "a2-07", tipo: "base", titulo: "Viajes",
      objetivo: "manejarte en aeropuertos, trenes y hoteles.",
      vocab: [
        ["ticket", "boleto"], ["flight", "vuelo"], ["airport", "aeropuerto"], ["passport", "pasaporte"],
        ["luggage", "equipaje"], ["hotel", "hotel"], ["reservation", "reservación"], ["train", "tren"],
        ["taxi", "taxi"], ["departure", "salida (de vuelo)"], ["arrival", "llegada"],
        ["gate", "puerta de embarque"], ["delay", "retraso"], ["seat", "asiento"]
      ],
      frases: [
        ["I have a reservation.", "Tengo una reservación."],
        ["What time is the flight?", "¿A qué hora es el vuelo?"],
        ["Where is gate ten?", "¿Dónde está la puerta diez?"],
        ["The train is late.", "El tren va retrasado."],
        ["I would like a window seat.", "Quisiera un asiento junto a la ventana."],
        ["Here is my passport.", "Aquí está mi pasaporte."]
      ],
      gramatica: {
        titulo: "Frases para viajar",
        html: "<h3>Preguntas útiles</h3><ul><li><b>What time is…?</b> = ¿A qué hora es…? <i>What time is the flight?</i></li><li><b>Where is…?</b> = ¿Dónde está…? <i>Where is gate ten?</i></li></ul><h3>Pedir</h3><ul><li><b>I would like…</b> = Quisiera… <i>I would like a window seat.</i></li><li><b>Can I have…?</b> = ¿Me da…?</li></ul><h3>Entregar algo</h3><p><b>Here is</b> (uno) / <b>Here are</b> (varios): <i>Here is my passport. Here are my tickets.</i></p><h3>Lugares</h3><p><b>at</b> the airport, <b>in</b> the hotel, <b>on</b> the train.</p>"
      },
      ejercicios: [
        { t: "completar", q: "I have a ___ at the hotel.", o: ["reservation", "receipt", "luggage"], a: 0 },
        { t: "completar", q: "What ___ is the flight?", o: ["time", "hour", "clock"], a: 0 },
        { t: "completar", q: "The train is ___.", o: ["late", "later", "lately"], a: 0 },
        { t: "completar", q: "I would ___ a window seat.", o: ["like", "likes", "liking"], a: 0 },
        { t: "ordenar", es: "Aquí está mi pasaporte.", en: "Here is my passport." },
        { t: "dictado", en: "Where is gate ten?", es: "¿Dónde está la puerta diez?" }
      ]
    },
    {
      id: "a2-08", tipo: "base", titulo: "Restaurante",
      objetivo: "pedir en un restaurante con cortesía.",
      vocab: [
        ["menu", "menú"], ["waiter", "mesero"], ["order", "pedir / ordenar"], ["bill", "cuenta"],
        ["tip", "propina"], ["starter", "entrada"], ["main course", "plato fuerte"], ["dessert", "postre"],
        ["drink", "bebida"], ["vegetarian", "vegetariano"], ["spicy", "picante"], ["delicious", "delicioso"]
      ],
      frases: [
        ["A table for two, please.", "Una mesa para dos, por favor."],
        ["Can I see the menu?", "¿Puedo ver el menú?"],
        ["I'd like to order.", "Quisiera ordenar."],
        ["Could we have the bill, please?", "¿Nos puede traer la cuenta, por favor?"],
        ["Is it spicy?", "¿Es picante?"],
        ["The food was delicious.", "La comida estuvo deliciosa."]
      ],
      gramatica: {
        titulo: "Pedir con cortesía",
        html: "<h3>Could = más amable que can</h3><p><b>Could we have the bill, please?</b> suena más cortés que <i>Can we have…?</i></p><h3>Frases del restaurante</h3><ul><li><b>A table for two, please.</b> = Una mesa para dos.</li><li><b>I'd like…</b> (I would like) = Quisiera…</li><li><b>What would you like to drink?</b> = ¿Qué le gustaría beber?</li></ul><h3>Pasado de to be</h3><p><b>was</b> (I, he, she, it) y <b>were</b> (you, we, they): <i>The food was delicious. The drinks were cold.</i></p>"
      },
      ejercicios: [
        { t: "completar", q: "A table ___ two, please.", o: ["for", "to", "of"], a: 0 },
        { t: "completar", q: "___ I see the menu?", o: ["Can", "Are", "Do"], a: 0 },
        { t: "completar", q: "I'd like to ___.", o: ["order", "orders", "ordering"], a: 0 },
        { t: "completar", q: "Could we have the ___, please?", o: ["bill", "starter", "waiter"], a: 0 },
        { t: "completar", q: "The food ___ delicious.", o: ["was", "were", "be"], a: 0 },
        { t: "ordenar", es: "¿Es picante?", en: "Is it spicy?" },
        { t: "dictado", en: "Could we have the bill, please?", es: "¿Nos puede traer la cuenta, por favor?" }
      ]
    },
    {
      id: "a2-09", tipo: "base", titulo: "Llamadas e invitaciones",
      objetivo: "hacer llamadas sencillas y dar o recibir invitaciones.",
      vocab: [
        ["call back", "devolver la llamada"], ["message", "mensaje"], ["invite", "invitar"],
        ["available", "disponible"], ["busy", "ocupado"], ["leave a message", "dejar un mensaje"],
        ["hold on", "espera un momento"], ["speak up", "habla más fuerte"], ["party", "fiesta"],
        ["join", "unirse"], ["free", "libre (sin ocupaciones)"], ["meet", "reunirse / conocer"]
      ],
      frases: [
        ["Can I speak to Mr. Lopez?", "¿Puedo hablar con el señor López?"],
        ["I'm sorry, he is busy.", "Lo siento, está ocupado."],
        ["Would you like to join us?", "¿Te gustaría unirte a nosotros?"],
        ["Let's meet at six.", "Veámonos a las seis."],
        ["Can you call me back?", "¿Puedes devolverme la llamada?"],
        ["Can I leave a message?", "¿Puedo dejar un mensaje?"]
      ],
      gramatica: {
        titulo: "Llamadas e invitaciones",
        html: "<h3>Por teléfono</h3><ul><li><b>Can I speak to…?</b> = ¿Puedo hablar con…?</li><li><b>Hold on, please.</b> = Espere un momento.</li><li><b>Can I leave a message?</b> = ¿Puedo dejar un mensaje?</li></ul><h3>Invitar y proponer</h3><ul><li><b>Would you like to…?</b> + verbo: <i>Would you like to join us?</i></li><li><b>Let's…</b> + verbo: <i>Let's meet at six.</i></li><li><b>How about…?</b> = ¿Qué tal si…?</li></ul><h3>Responder</h3><p>Aceptar: <i>Sure! / I'd love to.</i> · Rechazar con amabilidad: <i>I'm sorry, I can't.</i></p>"
      },
      ejercicios: [
        { t: "completar", q: "Would you ___ to join us?", o: ["like", "likes", "liking"], a: 0 },
        { t: "completar", q: "___ meet at six.", o: ["Let's", "Lets", "Let"], a: 0 },
        { t: "completar", q: "Can I ___ a message?", o: ["leave", "leaves", "leaving"], a: 0 },
        { t: "completar", q: "I'm sorry, he is ___.", o: ["busy", "busier", "business"], a: 0 },
        { t: "ordenar", es: "¿Puedes devolverme la llamada?", en: "Can you call me back?" },
        { t: "dictado", en: "Hold on, please.", es: "Espera un momento, por favor." }
      ]
    },
    {
      id: "a2-10", tipo: "base", titulo: "Planes y agenda",
      objetivo: "organizar planes, cambiar citas y confirmar horarios.",
      vocab: [
        ["weekend", "fin de semana"], ["cancel", "cancelar"], ["postpone", "posponer"],
        ["calendar", "calendario"], ["free time", "tiempo libre"], ["next Monday", "el próximo lunes"],
        ["on time", "a tiempo"], ["early", "temprano"], ["arrange", "organizar"], ["relax", "relajarse"]
      ],
      frases: [
        ["What are you doing this weekend?", "¿Qué haces este fin de semana?"],
        ["I'm meeting a friend on Saturday.", "Me veré con un amigo el sábado."],
        ["Can we postpone the meeting?", "¿Podemos posponer la reunión?"],
        ["I have to cancel our plans.", "Tengo que cancelar nuestros planes."],
        ["Please confirm your attendance.", "Por favor, confirma tu asistencia."],
        ["I'll be there on time.", "Estaré ahí a tiempo."]
      ],
      gramatica: {
        titulo: "Hablar de planes",
        html: "<h3>Presente continuo para planes fijos</h3><p>Cuando ya acordaste algo, usa <b>am/is/are + -ing</b>: <i>I'm meeting a friend on Saturday.</i></p><h3>Have to = tener que</h3><p><i>I have to cancel our plans. She has to work.</i></p><h3>Proponer cambios</h3><ul><li><b>Can we postpone…?</b> = ¿Podemos posponer…?</li><li><b>Can we move it to…?</b> = ¿Podemos moverlo a…?</li></ul><h3>Tiempo</h3><p><b>on</b> Saturday · <b>at</b> noon · <b>next</b> Monday (sin preposición) · <b>on time</b> = puntual.</p>"
      },
      ejercicios: [
        { t: "completar", q: "What are you ___ this weekend?", o: ["doing", "do", "does"], a: 0 },
        { t: "completar", q: "I'm ___ a friend on Saturday.", o: ["meeting", "meet", "meets"], a: 0 },
        { t: "completar", q: "Can we ___ the meeting?", o: ["postpone", "postponing", "postpones"], a: 0 },
        { t: "completar", q: "I have ___ cancel our plans.", o: ["to", "for", "at"], a: 0 },
        { t: "ordenar", es: "Estaré ahí a tiempo.", en: "I will be there on time." },
        { t: "dictado", en: "Can we postpone the meeting?", es: "¿Podemos posponer la reunión?" }
      ]
    },
    {
      id: "a2-11", tipo: "tecnico", titulo: "Describir una falla simple",
      objetivo: "describir una falla simple en un equipo.",
      vocab: [
        ["broken", "descompuesto"], ["noise", "ruido"], ["leak", "fuga"], ["vibration", "vibración"],
        ["stuck", "atorado"], ["fault", "falla"], ["smell", "olor"], ["loose", "flojo"],
        ["strange", "extraño"], ["sensor", "sensor"], ["pipe", "tubería"], ["overheating", "sobrecalentamiento"]
      ],
      frases: [
        ["The machine is not working.", "La máquina no funciona."],
        ["There is a leak in the pipe.", "Hay una fuga en la tubería."],
        ["The motor is too hot.", "El motor está demasiado caliente."],
        ["I hear a strange noise.", "Escucho un ruido extraño."],
        ["The sensor is broken.", "El sensor está descompuesto."],
        ["The bolt is loose.", "El tornillo está flojo."]
      ],
      gramatica: {
        titulo: "Describir un problema",
        html: "<h3>Estado del equipo: to be + adjetivo</h3><p><i>The sensor is broken. The bolt is loose. The valve is stuck.</i></p><h3>There is / There are</h3><p>Para señalar un problema: <i>There is a leak. There are two broken sensors.</i></p><h3>Percibir con los sentidos</h3><ul><li><b>I hear</b> a noise. · <b>I smell</b> smoke. · <b>I feel</b> a vibration.</li></ul><h3>Too = demasiado</h3><p><i>The motor is <b>too</b> hot.</i> (más de lo que debería)</p>"
      },
      ejercicios: [
        { t: "completar", q: "There ___ a leak in the pipe.", o: ["is", "are", "has"], a: 0 },
        { t: "completar", q: "The motor is ___ hot.", o: ["too", "much", "more"], a: 0 },
        { t: "completar", q: "I ___ a strange noise.", o: ["hear", "hears", "listen"], a: 0 },
        { t: "completar", q: "The sensor is ___.", o: ["broken", "break", "breaking"], a: 0 },
        { t: "ordenar", es: "Hay un problema.", en: "There is a problem." },
        { t: "dictado", en: "The machine is not working.", es: "La máquina no funciona." }
      ]
    },
    {
      id: "a2-12", tipo: "tecnico", titulo: "Instrucciones paso a paso",
      objetivo: "dar instrucciones paso a paso.",
      vocab: [
        ["turn on", "encender"], ["turn off", "apagar"], ["check", "revisar"], ["replace", "reemplazar"],
        ["open", "abrir"], ["close", "cerrar"], ["press", "presionar"], ["disconnect", "desconectar"],
        ["tighten", "apretar"], ["clean", "limpiar"], ["first", "primero"], ["then", "luego"], ["finally", "finalmente"]
      ],
      frases: [
        ["First, turn off the power.", "Primero, apaga la energía."],
        ["Then check the cable.", "Luego revisa el cable."],
        ["Replace the filter.", "Reemplaza el filtro."],
        ["Do not touch the wires.", "No toques los cables."],
        ["Press the green button.", "Presiona el botón verde."],
        ["Finally, test the machine.", "Finalmente, prueba la máquina."]
      ],
      gramatica: {
        titulo: "Instrucciones",
        html: "<h3>Imperativo</h3><p>Verbo base, sin sujeto: <i>Check the cable. Replace the filter.</i> Negativo con <b>Do not / Don't</b>: <i>Do not touch the wires.</i></p><h3>Ordenar los pasos</h3><div class='ej'><b>First,</b> turn off the power.<br><b>Then</b> disconnect the cable.<br><b>After that,</b> replace the filter.<br><b>Finally,</b> turn on the machine.</div><h3>Verificar</h3><p><b>Make sure</b> the power is off. = Asegúrate de que la energía esté apagada.</p>"
      },
      ejercicios: [
        { t: "completar", q: "___, turn off the power.", o: ["First", "Finally", "Before"], a: 0 },
        { t: "completar", q: "___, test the machine.", o: ["Finally", "First", "Before"], a: 0 },
        { t: "completar", q: "___ not touch the wires.", o: ["Do", "Does", "Are"], a: 0 },
        { t: "completar", q: "Please ___ the filter.", o: ["replace", "replaces", "replacing"], a: 0 },
        { t: "ordenar", es: "Apaga la máquina.", en: "Turn off the machine." },
        { t: "dictado", en: "Check the cable.", es: "Revisa el cable." }
      ]
    },
    {
      id: "a2-13", tipo: "tecnico", titulo: "Reportar una alarma",
      objetivo: "reportar una alarma con claridad.",
      vocab: [
        ["alarm", "alarma"], ["alert", "alerta"], ["reset", "reiniciar / restablecer"],
        ["warning light", "luz de advertencia"], ["error", "error"], ["shutdown", "paro (apagado)"],
        ["status", "estado"], ["report", "reportar"], ["high", "alto"], ["low", "bajo"],
        ["since", "desde"], ["again", "otra vez"]
      ],
      frases: [
        ["There is an alarm in building three.", "Hay una alarma en el edificio tres."],
        ["The pressure is too low.", "La presión está demasiado baja."],
        ["I reset the alarm, but it came back.", "Reinicié la alarma, pero volvió."],
        ["The system stopped at ten o'clock.", "El sistema se detuvo a las diez en punto."],
        ["Please send someone to check it.", "Por favor, envíe a alguien a revisarlo."],
        ["The warning light is on.", "La luz de advertencia está encendida."]
      ],
      gramatica: {
        titulo: "Cómo reportar un problema",
        html: "<h3>Una estructura clara</h3><ol><li><b>Dónde:</b> <i>There is an alarm in building three.</i></li><li><b>Qué pasa ahora</b> (presente): <i>The pressure is too low.</i></li><li><b>Qué pasó y qué hiciste</b> (pasado): <i>The system stopped at ten. I reset the alarm, but it came back.</i></li><li><b>Qué necesitas:</b> <i>Please send someone to check it.</i></li></ol><h3>Conectores</h3><ul><li><b>but</b> = pero · <b>and</b> = y · <b>so</b> = así que · <b>because</b> = porque</li></ul><h3>Pasado irregular útil</h3><p>come → <b>came</b> · go → <b>went</b> · stop → <b>stopped</b> · reset → <b>reset</b> (no cambia).</p>"
      },
      ejercicios: [
        { t: "completar", q: "The system ___ at ten o'clock.", o: ["stopped", "stops", "stopping"], a: 0 },
        { t: "completar", q: "I reset the alarm, ___ it came back.", o: ["but", "or", "because"], a: 0 },
        { t: "completar", q: "The pressure is too ___.", o: ["low", "lowest", "lowly"], a: 0 },
        { t: "completar", q: "Please send ___ to check it.", o: ["someone", "somewhere", "something"], a: 0 },
        { t: "ordenar", es: "La luz está encendida.", en: "The light is on." },
        { t: "dictado", en: "There is an alarm in building three.", es: "Hay una alarma en el edificio tres." }
      ]
    },
    {
      id: "a2-14", tipo: "tecnico", titulo: "Correo corto",
      objetivo: "escribir un correo corto y claro en inglés.",
      vocab: [
        ["subject", "asunto"], ["attached", "adjunto"], ["regards", "saludos"], ["dear", "estimado"],
        ["confirm", "confirmar"], ["reply", "responder"], ["request", "solicitud"],
        ["deadline", "fecha límite"], ["update", "actualización"], ["question", "pregunta"]
      ],
      frases: [
        ["Hi team,", "Hola equipo,"],
        ["I am writing to confirm the meeting.", "Escribo para confirmar la reunión."],
        ["Please find the report attached.", "Adjunto el reporte."],
        ["Let me know if you have questions.", "Avísame si tienes preguntas."],
        ["Thank you for your help.", "Gracias por tu ayuda."],
        ["Best regards,", "Saludos cordiales,"]
      ],
      gramatica: {
        titulo: "Estructura de un correo corto",
        html: "<div class='ej'><b>Subject:</b> Meeting confirmation<br><br><b>Hi team,</b><br><br>I am writing to confirm the meeting on Monday at nine.<br>Please find the agenda attached.<br>Let me know if you have questions.<br><br>Thank you for your help.<br><b>Best regards,</b><br>[Tu nombre]</div><h3>Las partes</h3><ol><li><b>Saludo:</b> <i>Hi team,</i> (informal) · <i>Dear Mr. Smith,</i> (formal)</li><li><b>Motivo:</b> <i>I am writing to…</i></li><li><b>Detalle:</b> una o dos frases.</li><li><b>Cierre:</b> <i>Let me know if you have questions.</i></li><li><b>Despedida:</b> <i>Best regards,</i></li></ol><h3>Fórmula útil</h3><p><b>Please find … attached.</b> = Adjunto…</p>"
      },
      ejercicios: [
        { t: "completar", q: "I am writing ___ confirm the meeting.", o: ["to", "for", "at"], a: 0 },
        { t: "completar", q: "Please find the report ___.", o: ["attached", "attach", "attaching"], a: 0 },
        { t: "completar", q: "Let me ___ if you have questions.", o: ["know", "knows", "knowing"], a: 0 },
        { t: "completar", q: "Thank you ___ your help.", o: ["for", "to", "of"], a: 0 },
        { t: "ordenar", es: "Gracias por tu ayuda.", en: "Thank you for your help." },
        { t: "dictado", en: "Let me know.", es: "Avísame." }
      ]
    }
  ]
};
