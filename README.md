# Ruta de inglés · A1 a C2

Aplicación web para aprender inglés paso a paso, con los niveles del Marco Común Europeo (A1, A2, B1, B2, C1, C2). Las explicaciones están en **español** y la práctica en **inglés**. Funciona en el navegador, sin instalar nada y sin servidor.

## Qué incluye

- **Examen de ubicación** de 30 preguntas que recomienda en qué nivel empezar.
- **6 niveles**, cada uno con 14 sesiones (10 base + 4 de inglés técnico para el trabajo) y un examen final.
- **Desbloqueo en orden:** cada sesión se abre al aprobar la anterior con 80% o más; el siguiente nivel se abre al aprobar el examen del nivel.
- Cada sesión tiene vocabulario con audio, frases, una explicación de gramática en español y un quiz.
- **Tipos de ejercicio:** opción múltiple, completar la frase, ordenar palabras, escuchar y elegir, escuchar y escribir.
- **Repaso espaciado:** lo que fallas vuelve a aparecer en los quizzes; acertarlo dos veces lo quita de la lista.
- Racha de días, ajuste de velocidad de la voz y código para pasar tu progreso a otro dispositivo.
- Modo claro y oscuro automático y diseño adaptable a celular y computadora.

### Estado del contenido

| Nivel | Estado |
|---|---|
| A1 | Completo (14 sesiones) |
| A2 | Completo (14 sesiones) |
| B1 | Completo (14 sesiones) |
| B2, C1, C2 | Temario listo, contenido **en construcción** |

## Probarla en tu computadora

1. Descomprime el zip.
2. Abre `index.html` con doble clic (Chrome, Edge o Safari).

El audio usa la voz en inglés que trae tu navegador. Si no hay voz disponible, los ejercicios de escuchar se cambian automáticamente por otros.

## Publicarla en GitHub (sin instalar Git)

1. En github.com, crea un repositorio nuevo: nombre `ingles-ruta`, **Public**, sin README ni licencia.
2. En la página del repositorio vacío, elige **uploading an existing file**.
3. Arrastra el **contenido** de la carpeta (`index.html`, `css`, `js`, `data`, `herramientas`, `README.md`, `LICENSE`, `.gitignore`) y pulsa **Commit changes**.
4. Ve a **Settings → Pages**. En *Build and deployment* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guarda.
5. Espera uno o dos minutos. Tu página quedará en `https://TU-USUARIO.github.io/ingles-ruta/`.

## Cómo actualizar algo después

No hay ninguna complicación: son archivos estáticos y cada uno es independiente. Solo cambias el archivo que quieres y GitHub vuelve a publicar la página.

**Editar un archivo en GitHub:** ábrelo en el repositorio, pulsa el lápiz ✏️, haz el cambio y **Commit changes**.

**Reemplazar un archivo completo:** entra a la carpeta donde vive (por ejemplo `data`), elige **Add file → Upload files**, arrastra la versión nueva con el **mismo nombre** y confirma. Reemplaza al anterior.

Después de actualizar:

- GitHub Pages tarda uno o dos minutos en reflejar el cambio.
- Si sigues viendo la versión vieja, recarga sin caché (`Ctrl + F5`; en el celular, cierra y abre la pestaña).
- Para forzar que todos descarguen los archivos nuevos, cambia el número de versión (por ejemplo `?v=1.1.0` por `?v=1.1.1`) en `index.html`; aparece en cada `<script>` y en el `<link>`.

### Qué pasa con el progreso de las personas

El progreso se guarda en el navegador de cada persona (no en GitHub) y está ligado al **id** de cada sesión (`a1-01`, `a2-07`…). Por eso:

- ✅ Puedes corregir textos, vocabulario, frases y ejercicios sin perder progreso.
- ✅ Puedes llenar B2, C1 y C2 cuando quieras; no afecta a los niveles ya publicados.
- ⚠️ **No cambies los `id`** de las sesiones existentes: esa sesión aparecería como no aprobada.
- ⚠️ Agrega sesiones nuevas **al final** de un nivel. Si insertas una en medio, quien ya avanzó tendría que aprobarla para volver a entrar a las siguientes.
- Si algo sale mal, GitHub guarda el historial: abre el archivo, pulsa **History** y vuelve a una versión anterior.

## Agregar o editar contenido

Todo el contenido está en la carpeta `data/`, un archivo por nivel, y se edita sin tocar el código. Cada sesión tiene esta forma:

```js
{
  id: "a1-01", tipo: "base",            // "base" o "tecnico"
  titulo: "Saludos y presentación",
  objetivo: "presentarte y saludar en inglés.",   // continúa «Al terminar podrás…»
  vocab:  [["hello", "hola"], ["goodbye", "adiós"]],   // [inglés, español]
  frases: [["Nice to meet you.", "Mucho gusto."]],
  gramatica: { titulo: "…", html: "<p>Explicación en español…</p>" },
  ejercicios: [
    { t: "completar", q: "My name ___ Carlos.", o: ["is", "are", "am"], a: 0 },   // a = índice de la correcta
    { t: "ordenar",   es: "Mucho gusto.", en: "Nice to meet you." },
    { t: "dictado",   en: "How are you?", es: "¿Cómo estás?" }
  ]
}
```

Además de tus ejercicios, la app genera preguntas automáticas a partir del vocabulario y las frases. Reglas útiles:

- No repitas una palabra en inglés ni una traducción en español dentro de los niveles (genera preguntas ambiguas).
- Para llenar un nivel «en construcción», completa sus sesiones (mira `data/a1.js` como modelo) y cambia `enConstruccion: true` por `false`.
- Si tienes Node.js, `node herramientas/validar-datos.js` revisa errores antes de subir. No es obligatorio.

## Estructura

```
ingles-ruta/
├── index.html
├── css/estilos.css
├── js/
│   ├── app.js        pantallas, navegación y reglas de desbloqueo
│   ├── motor.js      generación y calificación de ejercicios
│   ├── progreso.js   progreso, racha, repaso, exportar/importar
│   └── audio.js      voz en inglés del navegador
├── data/             contenido: ubicacion.js, a1.js … c2.js
├── herramientas/validar-datos.js
├── README.md
├── LICENSE
└── .gitignore
```

## Licencia

MIT. Consulta el archivo `LICENSE`.
