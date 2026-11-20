/**
 * ============================================================================
 * BUSCADOR INTERNO MULTILINGÜE DEL SITIO WEB PERSONAL (ES / EN)
 * Descripción: Motor de búsqueda en cliente basado en un índice estructurado
 * por idioma. Soporta normalización Unicode (insensible a mayúsculas y
 * tildes), búsqueda multipalabra, ordenación por relevancia ponderada,
 * internacionalización (ES/EN) y resaltado seguro mediante <mark>.
 * ============================================================================
 */

/**
 * Índice de contenidos del sitio web separado por idioma ('es' y 'en').
 * Cada objeto representa una sección o página indexada con:
 * - titulo: Título visible en el resultado (mayor peso en relevancia).
 * - url: Ruta relativa de destino.
 * - seccion: Categoría o página a la que pertenece.
 * - palabrasClave: Términos adicionales y sinónimos para mejorar el recall.
 * - contenido: Texto descriptivo donde se buscan coincidencias y se genera el extracto.
 */
const INDICE_SITIO = {
  es: [
    {
      titulo: "Inicio — Óscar Cervero Luiña",
      url: "index.html",
      seccion: "Inicio",
      palabrasClave: "portafolio personal actualidad universidad oviedo master ingenieria web email correo",
      contenido: "Estudiante del Máster en Ingeniería Web por la Universidad de Oviedo. Sitio web personal con formación académica, proyectos realizados, aficiones de música y cine y canales de contacto (uo295432@uniovi.es)."
    },
    {
      titulo: "Formación Académica y Trayectoria",
      url: "sobre-mi.html",
      seccion: "Sobre mí",
      palabrasClave: "estudios grado software bachillerato ies galileo galilei ciberseguridad desarrollo web",
      contenido: "Estudiante de la Universidad de Oviedo interesado en el desarrollo Web y la ciberseguridad. Máster en Ingeniería Web (2026 - Presente), Grado en Ingeniería Informática del Software (2022 - Presente) y Bachillerato Tecnológico en el IES Galileo Galilei (2020 - 2022)."
    },
    {
      titulo: "Experiencia Profesional y Habilidades Técnicas",
      url: "sobre-mi.html",
      seccion: "Sobre mí",
      palabrasClave: "trabajo practicas babel alsa liferay java angular html css js php c c++ c# python git fork ingles b1 carne conducir matricula honor",
      contenido: "Becario en Babel en el proyecto de Mantenimiento Web de Alsa. Experiencia profesional en Liferay, Java y Angular, además de HTML, CSS, JS, PHP, C, C++, C#, Python, GIT y Fork. B1 de inglés, carné tipo B y Matrícula de Honor en Prácticas de Empresa."
    },
    {
      titulo: "Proyecto: Péndulo de Ondas",
      url: "proyectos.html",
      seccion: "Proyectos",
      palabrasClave: "video feria ciencia navia ies galileo galilei fisica ondas",
      contenido: "Proyecto realizado con 15 años para la feria de la ciencia del IES Galileo Galilei de Navia. Incluye demostración en vídeo HTML5, siendo el vídeo con más visitas de la feria de la ciencia de Navia."
    },
    {
      titulo: "Proyectos en GitHub: Readme.md y wichat_es5a",
      url: "proyectos.html",
      seccion: "Proyectos",
      palabrasClave: "repositorio codigo github arquitectura software juego trivia retos oscarcervero",
      contenido: "Diseño de Readme.md para la página personal de GitHub y proyecto wichat_es5a desarrollado en la asignatura de Arquitectura del Software: un juego de trivia con distintos retos y características."
    },
    {
      titulo: "Podcast favorito: The Wild Project con Arturo Pérez Reverte",
      url: "aficiones.html",
      seccion: "Aficiones",
      palabrasClave: "audio podcast politica sociedad escritor excorresponsal guerra",
      contenido: "Reproductor de audio HTML5 con el episodio de The Wild Project junto a Arturo Pérez Reverte, tratando temas políticos y sociales de actualidad."
    },
    {
      titulo: "Álbumes de Música Favoritos",
      url: "aficiones.html",
      seccion: "Aficiones",
      palabrasClave: "musica discos rock punk flamenco carrusel finale eskorbuto chuck berry navajita platea king crimson ramones",
      contenido: "Selección en carrusel interactivo de álbumes favoritos: Visión de futuro (Finale), Demasiados enemigos (Eskorbuto), St. Louis to Liverpool (Chuck Berry), Desde mi Azotea (Navajita Plateá), In the Court of the Crimson King (King Crimson) y Rocket to Russia (Ramones)."
    },
    {
      titulo: "Películas Favoritas",
      url: "aficiones.html",
      seccion: "Aficiones",
      palabrasClave: "cine peliculas carrusel 12 angry men sidney lumet la haine kassovitz reservoir dogs pulp fiction tarantino porco rosso miyazaki green book farrelly",
      contenido: "Selección en carrusel interactivo de cine: 12 Angry Men (Sidney Lumet), La haine (Mathieu Kassovitz), Reservoir Dogs y Pulp Fiction (Quentin Tarantino), Porco Rosso (Hayao Miyazaki) y Green Book (Peter Farrelly)."
    },
    {
      titulo: "Formulario de Contacto, Teléfono y Redes Sociales",
      url: "contacto.html",
      seccion: "Contacto",
      palabrasClave: "mensaje correo email telefono llamar linkedin instagram redes sociales colaborar",
      contenido: "Formulario accesible para enviar mensajes a uo295432@uniovi.es, contacto telefónico directo (+34 684 239 805) y enlaces a perfiles oficiales de LinkedIn e Instagram."
    },
    {
      titulo: "Referencias y Avales",
      url: "contacto.html",
      seccion: "Contacto",
      palabrasClave: "avales recomendaciones david covian gomez alberto antonio nunez oliveira profesor tutor uniovi",
      contenido: "Personas que avalan la trayectoria académica y profesional: David Covían Gómez (compañero en el Máster en Ingeniería Web) y Alberto Antonio Nuñez Oliveira (profesor ayudante en la Escuela de Ingeniería Informática de la Universidad de Oviedo)."
    },
    {
      titulo: "Mapa del sitio",
      url: "mapa-sitio.html",
      seccion: "Mapa del sitio",
      palabrasClave: "indice estructura navegacion secciones paginas esquema",
      contenido: "Índice jerárquico completo con acceso directo a todas las páginas y secciones que componen el sitio web personal."
    },
    {
      titulo: "Ayuda y Preguntas Frecuentes",
      url: "ayuda.html",
      seccion: "Ayuda",
      palabrasClave: "faq dudas guia navegacion teclado accesibilidad soporte",
      contenido: "Guía rápida de navegación, funcionamiento de los carruseles de música y cine, uso del formulario de contacto y soporte de accesibilidad mediante teclado."
    }
  ],

  en: [
    {
      titulo: "Home — Óscar Cervero Luiña",
      url: "index.html",
      seccion: "Home",
      palabrasClave: "portfolio personal status university oviedo master web engineering email",
      contenido: "Master’s Student in Web Engineering at the University of Oviedo. Personal website featuring academic background, software projects, music and cinema hobbies, and contact channels (uo295432@uniovi.es)."
    },
    {
      titulo: "Academic Education & Background",
      url: "sobre-mi.html",
      seccion: "About me",
      palabrasClave: "studies degree software baccalaureate ies galileo galilei cybersecurity web development",
      contenido: "Student at the University of Oviedo focused on Web Development and cybersecurity. Master’s in Web Engineering (2026 - Present), Bachelor’s in Software Engineering (2022 - Present), and Technological Baccalaureate at IES Galileo Galilei (2020 - 2022)."
    },
    {
      titulo: "Professional Experience & Technical Skills",
      url: "sobre-mi.html",
      seccion: "About me",
      palabrasClave: "work internship babel alsa liferay java angular html css js php c c++ c# python git fork english b1 driving license honors",
      contenido: "Intern at Babel on the Alsa Web Maintenance project. Professional experience with Liferay, Java, and Angular, plus HTML, CSS, JS, PHP, C, C++, C#, Python, GIT, and Fork. B1 English certificate, Category B driving license, and Honors distinction in Internship."
    },
    {
      titulo: "Project: Wave Pendulum",
      url: "proyectos.html",
      seccion: "Projects",
      palabrasClave: "video science fair navia ies galileo galilei physics waves pendulum",
      contenido: "Project built around age 15 for the science fair at IES Galileo Galilei in Navia. Includes an HTML5 video demonstration, remaining the most-viewed video from the Navia science fair."
    },
    {
      titulo: "GitHub Projects: Readme.md & wichat_es5a",
      url: "proyectos.html",
      seccion: "Projects",
      palabrasClave: "repository code github software architecture trivia game challenges oscarcervero",
      contenido: "Clean Readme.md design for personal GitHub profile and wichat_es5a project built for the Software Architecture course: an interactive trivia game with multiple challenges."
    },
    {
      titulo: "Favorite Podcast: The Wild Project with Arturo Pérez Reverte",
      url: "aficiones.html",
      seccion: "Hobbies",
      palabrasClave: "audio podcast politics society writer war correspondent",
      contenido: "HTML5 audio player featuring The Wild Project episode with Arturo Pérez Reverte, covering current political and social issues."
    },
    {
      titulo: "Favorite Music Albums",
      url: "aficiones.html",
      seccion: "Hobbies",
      palabrasClave: "music records rock punk flamenco carousel finale eskorbuto chuck berry navajita platea king crimson ramones",
      contenido: "Interactive carousel of favorite albums: Visión de futuro (Finale), Demasiados enemigos (Eskorbuto), St. Louis to Liverpool (Chuck Berry), Desde mi Azotea (Navajita Plateá), In the Court of the Crimson King (King Crimson), and Rocket to Russia (Ramones)."
    },
    {
      titulo: "Favorite Movies",
      url: "aficiones.html",
      seccion: "Hobbies",
      palabrasClave: "cinema films movies carousel 12 angry men sidney lumet la haine kassovitz reservoir dogs pulp fiction tarantino porco rosso miyazaki green book farrelly",
      contenido: "Interactive movie carousel: 12 Angry Men (Sidney Lumet), La haine (Mathieu Kassovitz), Reservoir Dogs and Pulp Fiction (Quentin Tarantino), Porco Rosso (Hayao Miyazaki), and Green Book (Peter Farrelly)."
    },
    {
      titulo: "Contact Form, Phone & Social Media",
      url: "contacto.html",
      seccion: "Contact",
      palabrasClave: "message email phone call linkedin instagram social media collaborate",
      contenido: "Accessible form to send messages to uo295432@uniovi.es, direct phone contact (+34 684 239 805), and links to official LinkedIn and Instagram profiles."
    },
    {
      titulo: "References & Endorsements",
      url: "contacto.html",
      seccion: "Contact",
      palabrasClave: "endorsements recommendations david covian gomez alberto antonio nunez oliveira professor advisor uniovi",
      contenido: "Academic and professional references: David Covían Gómez (Master’s in Web Engineering classmate) and Alberto Antonio Nuñez Oliveira (Assistant Professor at the School of Computer Engineering, University of Oviedo)."
    },
    {
      titulo: "Site Map",
      url: "mapa-sitio.html",
      seccion: "Site map",
      palabrasClave: "index structure navigation sections pages outline",
      contenido: "Complete hierarchical index with direct access to all pages and sections of the personal website."
    },
    {
      titulo: "Help & Frequently Asked Questions",
      url: "ayuda.html",
      seccion: "Help",
      palabrasClave: "faq questions guide navigation keyboard accessibility support",
      contenido: "Quick navigation guide, how the music and movie carousels work, contact form instructions, and keyboard accessibility support."
    }
  ]
};

/**
 * Mensajes de interfaz del buscador por idioma.
 */
const TEXTOS_BUSCADOR = {
  es: {
    resultadosH2: "Resultados",
    vacioEstado: "Introduce al menos una palabra clave para buscar.",
    vacioTexto: "No se ha introducido ningún término de búsqueda.",
    sinResultadosEstado: (q) => `No se encontraron resultados para «${q}».`,
    sinResultadosTexto: "Prueba con otras palabras clave (por ejemplo: Angular, Java, Péndulo, Tarantino, Babel o teléfono) o consulta el Mapa del sitio.",
    encontradosEstado: (n, q) => `Se ha encontrado ${n} ${n === 1 ? "resultado" : "resultados"} para «${q}».`,
    seccionPrefix: "Sección: "
  },
  en: {
    resultadosH2: "Results",
    vacioEstado: "Enter at least one keyword to search.",
    vacioTexto: "No search term was entered.",
    sinResultadosEstado: (q) => `No results found for “${q}”.`,
    sinResultadosTexto: "Try other keywords (for example: Angular, Java, Pendulum, Tarantino, Babel, or phone) or browse the Site Map.",
    encontradosEstado: (n, q) => `Found ${n} ${n === 1 ? "result" : "results"} for “${q}”.`,
    seccionPrefix: "Section: "
  }
};

/**
 * Obtiene el idioma activo usando la función global de i18n.js o 'es' por defecto.
 *
 * @returns {string} Código de idioma ('es' o 'en').
 */
function obtenerIdiomaBuscador() {
  return typeof obtenerIdiomaActual === "function" ? obtenerIdiomaActual() : "es";
}

/**
 * Normaliza una cadena de texto para realizar comparaciones tolerantes:
 * 1. Convierte a minúsculas.
 * 2. Descompone caracteres acentuados y elimina los signos diacríticos.
 * 3. Recorta espacios sobrantes al principio y al final.
 *
 * @param {string} texto - Cadena original.
 * @returns {string} Cadena normalizada sin tildes y en minúsculas.
 */
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/**
 * Escapa caracteres especiales de expresiones regulares para evitar errores
 * al construir patrones dinámicos con la entrada del usuario.
 *
 * @param {string} cadena - Texto introducido por el usuario.
 * @returns {string} Texto seguro para usar dentro de new RegExp().
 */
function escaparRegExp(cadena) {
  return cadena.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Ejecuta la búsqueda sobre el índice del idioma activo aplicando un sistema
 * de puntuación por relevancia ponderada:
 * - Coincidencia en título: +5 puntos por término.
 * - Coincidencia en palabras clave: +3 puntos por término.
 * - Coincidencia en contenido: +2 puntos por término.
 * - Coincidencia exacta de la frase completa: +6 puntos extra.
 *
 * @param {string} consulta - Texto introducido por el usuario.
 * @param {string} idioma - Idioma activo ('es' o 'en').
 * @returns {Array<Object>} Lista de resultados ordenados de mayor a menor relevancia.
 */
function buscarEnSitio(consulta, idioma) {
  const consultaNormalizada = normalizarTexto(consulta);
  if (!consultaNormalizada) return [];

  const terminos = consultaNormalizada.split(/\s+/).filter(Boolean);
  const indiceActivo = INDICE_SITIO[idioma] || INDICE_SITIO.es;
  const resultados = [];

  indiceActivo.forEach((entrada) => {
    const tituloNorm = normalizarTexto(entrada.titulo);
    const clavesNorm = normalizarTexto(entrada.palabrasClave);
    const contenidoNorm = normalizarTexto(entrada.contenido);

    let puntuacion = 0;

    terminos.forEach((termino) => {
      if (tituloNorm.includes(termino)) puntuacion += 5;
      if (clavesNorm.includes(termino)) puntuacion += 3;
      if (contenidoNorm.includes(termino)) puntuacion += 2;
    });

    if (
      terminos.length > 1 &&
      (tituloNorm.includes(consultaNormalizada) || contenidoNorm.includes(consultaNormalizada))
    ) {
      puntuacion += 6;
    }

    if (puntuacion > 0) {
      resultados.push({ ...entrada, puntuacion });
    }
  });

  return resultados.sort((a, b) => b.puntuacion - a.puntuacion);
}

/**
 * Crea un fragmento DOM con las palabras buscadas resaltadas mediante <mark>
 * de forma segura (sin inyección de HTML arbitrario).
 *
 * @param {string} textoOriginal - Texto donde resaltar coincidencias.
 * @param {Array<string>} terminosOriginales - Palabras introducidas por el usuario.
 * @returns {DocumentFragment} Fragmento DOM con nodos de texto y elementos <mark>.
 */
function crearTextoResaltado(textoOriginal, terminosOriginales) {
  const fragmento = document.createDocumentFragment();
  const terminosValidos = terminosOriginales.filter((t) => t.length >= 2);

  if (terminosValidos.length === 0) {
    fragmento.appendChild(document.createTextNode(textoOriginal));
    return fragmento;
  }

  const patron = new RegExp(`(${terminosValidos.map(escaparRegExp).join("|")})`, "gi");
  const partes = textoOriginal.split(patron);

  partes.forEach((parte, indice) => {
    if (indice % 2 === 1) {
      const marca = document.createElement("mark");
      marca.textContent = parte;
      fragmento.appendChild(marca);
    } else if (parte) {
      fragmento.appendChild(document.createTextNode(parte));
    }
  });

  return fragmento;
}

/**
 * Renderiza los resultados en la segunda <section> de buscar.html y actualiza
 * el elemento <output> en el idioma activo.
 *
 * @param {string} consulta - Término buscado por el usuario.
 */
function mostrarResultados(consulta) {
  const seccionResultados = document.querySelector("main > section:nth-of-type(2)");
  const estado = document.querySelector("main > section:nth-of-type(1) output");
  if (!seccionResultados || !estado) return;

  const idioma = obtenerIdiomaBuscador();
  const txt = TEXTOS_BUSCADOR[idioma] || TEXTOS_BUSCADOR.es;

  seccionResultados.innerHTML = `<h2>${txt.resultadosH2}</h2>`;

  const consultaLimpia = consulta.trim();
  if (!consultaLimpia) {
    estado.textContent = txt.vacioEstado;
    const aviso = document.createElement("p");
    aviso.textContent = txt.vacioTexto;
    seccionResultados.appendChild(aviso);
    return;
  }

  const resultados = buscarEnSitio(consultaLimpia, idioma);
  const terminosOriginales = consultaLimpia.split(/\s+/).filter(Boolean);

  if (resultados.length === 0) {
    estado.textContent = txt.sinResultadosEstado(consultaLimpia);
    const sinResultados = document.createElement("p");
    sinResultados.textContent = txt.sinResultadosTexto;
    seccionResultados.appendChild(sinResultados);
    return;
  }

  estado.textContent = txt.encontradosEstado(resultados.length, consultaLimpia);

  resultados.forEach((item) => {
    const articulo = document.createElement("article");

    const titulo = document.createElement("h3");
    const enlace = document.createElement("a");
    // Conservar ?lang=en en los enlaces de resultados cuando estamos en inglés
    enlace.href = idioma === "en" ? `${item.url}?lang=en` : item.url;
    enlace.appendChild(crearTextoResaltado(item.titulo, terminosOriginales));
    titulo.appendChild(enlace);

    const meta = document.createElement("p");
    meta.textContent = `${txt.seccionPrefix}${item.seccion}`;

    const extracto = document.createElement("p");
    extracto.appendChild(crearTextoResaltado(item.contenido, terminosOriginales));

    articulo.appendChild(titulo);
    articulo.appendChild(meta);
    articulo.appendChild(extracto);
    seccionResultados.appendChild(articulo);
  });
}

/**
 * Inicialización al cargar el DOM de buscar.html:
 * - Lee el parámetro ?q= de la URL y ejecuta la búsqueda inicial.
 * - Conserva el parámetro ?lang= al realizar nuevas búsquedas.
 * - Re-ejecuta la búsqueda automáticamente si el usuario cambia el idioma.
 */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("main search form");
  const input = document.querySelector('main search input[type="search"]');
  if (!form || !input) return;

  const parametros = new URLSearchParams(window.location.search);
  const consultaInicial = parametros.get("q");

  if (consultaInicial) {
    input.value = consultaInicial;
    mostrarResultados(consultaInicial);
  }

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const consulta = input.value.trim();
    const idioma = obtenerIdiomaBuscador();

    const nuevosParams = new URLSearchParams();
    if (idioma === "en") nuevosParams.set("lang", "en");
    if (consulta) nuevosParams.set("q", consulta);

    const nuevaUrl = `${window.location.pathname}?${nuevosParams.toString()}`;
    window.history.replaceState(null, "", nuevaUrl);

    mostrarResultados(consulta);
  });

  // Si el usuario cambia el idioma en la cabecera mientras está en buscar.html, actualizar resultados
  document.addEventListener("change", (evento) => {
    if (evento.target && evento.target.matches("header select") && input.value.trim()) {
      mostrarResultados(input.value.trim());
    }
  });
});