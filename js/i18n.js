/**
 * Motor de internacionalización (ES / EN) compatible con servidores HTTP y file:///.
 * Mantiene el idioma entre páginas mediante el parámetro ?lang= en los enlaces
 * y localStorage como respaldo.
 */
const TRADUCCIONES = {
  es: {
    ui: {
      selectorIdioma: 'Seleccionar idioma',
      inicio: 'Inicio',
      sobreMi: 'Sobre mí',
      proyectos: 'Proyectos',
      aficiones: 'Aficiones',
      contacto: 'Contacto',
      ayuda: 'Ayuda',
      buscar: 'Buscar',
      mapaSitio: 'Mapa del sitio',
      navPrincipal: 'Navegación principal',
      navMigas: 'Migas de pan',
      navSecundaria: 'Navegación secundaria',
      buscarLabel: 'Buscar en el sitio',
      buscarPlaceholder: 'Buscar...',
      buscarBtn: 'Buscar',
      footer: '© 2026 Óscar Cervero Luiña. Sitio desarrollado conforme a estándares HTML5 y CSS3. Última actualización el 20/11/2026'
    },
    'index.html': {
      title: 'Inicio | Mi Sitio Web',
      description: 'Sitio web personal y portafolio profesional de Óscar Cervero Luiña.',
      h1: 'Óscar Cervero Luiña',
      altRetrato: 'Fotografía de retrato de Óscar Cervero Luiña',
      sec1H2: 'Actualidad',
      sec1P1: 'Estudiante del Máster en Ingeniería Web por la Universidad de Oviedo',
      sec1P2: 'Bienvenido a mi sitio web personal. Aquí encontrarás detalles sobre mi formación académica, proyectos que he realizado a lo largo del tiempo, así como detalles para conocerme un poco mejor.',
      sec1EmailPrefix: 'Email: ',
      sec2H2: 'Lo que vas a encontrar aquí',
      sec2P1: 'En esta página web podrás conocerme un poco mejor. Encontrarás mis aficiones e intereses, sobre todo de música y cine, así como mi información académica y profesional, como distintos proyectos que he desarrollado. Por último también podrás contactarme y escribirme correos si así lo deseas.'
    },
    'sobre-mi.html': {
      title: 'Sobre mí | Mi Sitio Web',
      description: 'Información biográfica, formación y competencias.',
      h1: 'Trayectoria y Competencias',
      intro: 'Soy un estudiante de la Universidad de Oviedo, interesado sobre todo en el desarrollo Web y en temas relacionados con la ciberseguridad.',
      h2List: ['Formación Académica', 'Experiencia Profesional', 'Habilidades Técnicas', 'Puntos destacables'],
      ul1: [
        'Máster en Ingeniería Web por la Universidad de Oviedo (2026 - Presente)',
        'Grado en Ingeniería Informática del Software por la Universidad de Oviedo (2022 - Presente)',
        'Bachillerato Tecnológico en el IES Galileo Galilei (2020 - 2022)'
      ],
      ul2: [
        'Becario en Babel en el proyecto de Mantenimiento Web de Alsa (Febrero de 2026 - Junio de 2026)'
      ],
      ul3: [
        'Experiencia profesional en Liferay, Java y Angular',
        'Experiencia con HTML, CSS, JS, PHP, C, C++, C# y Python',
        'Uso de herramientas como GIT y Fork'
      ],
      ul4: [
        'B1 de inglés por la Escuela Oficial de Idiomas',
        'Carné de conducir tipo B',
        'Matrícula de Honor en la asignatura de Prácticas de Empresa del Grado de Ingeniería Informática del Software'
      ]
    },
    'proyectos.html': {
      title: 'Proyectos | Mi Sitio Web',
      description: 'Proyectos destacados de desarrollo y demostración en vídeo.',
      h1: 'Proyectos Realizados',
      sec1H2: 'Péndulo de Ondas',
      sec1P: 'Este es un proyecto que realicé cuando tenía más o menos 15 años para la feria de la ciencia del IES Galileo Galilei de Navia. Es un vídeo al cual le tengo mucho cariño ya que a día de hoy sigue siendo el vídeo con más visitas de la feria de la ciencia de Navia.',
      videoFallback: 'Tu navegador no soporta el reproductor de vídeo HTML5.',
      sec2H2: 'Otros Proyectos',
      art1H3: 'Readme.md para página personal de GitHub',
      art1P: 'Diseño simple para dar la bienvenida a mi GitHub personal.',
      art1A: 'Ver repositorio de OscarCervero',
      art2H3: 'wichat_es5a',
      art2P: 'Proyecto realizado en la asignatura de Arquitectura del Software del Grado, en el cual se establece un juego de trivia con distintos retos y características.',
      art2A: 'Ver repositorio de wichat_es5a'
    },
    'aficiones.html': {
      title: 'Aficiones | Mi Sitio Web',
      description: 'Aficiones, música, tecnología y podcast recomendado.',
      h1: 'Aficiones e Intereses',
      sec1H2: 'Mi podcast favorito: The Wild Project con Arturo Pérez Reverte',
      sec1P: 'Este podcast me parece la mar de interesante ya que se tratan temas políticos y sociales que están de actualidad. Todo de la mano del gran Arturo Pérez Reverte, excorresponsal de guerra y escritor.',
      audioFallback: 'Tu navegador no soporta el reproductor de audio HTML5.',
      sec2H2: 'Álbumes Favoritos',
      sec2P: 'Una selección de mis álbumes de música favoritos, donde se aprecia mi gusto por el rock, punk y flamenco:',
      sec2Prev: 'Anteriores álbumes',
      sec2Next: 'Siguientes álbumes',
      sec3H2: 'Películas Favoritas',
      sec3P: 'Películas que me han marcado o que simplemente disfruto de ver de vez en cuando:',
      sec3Prev: 'Películas anteriores',
      sec3Next: 'Películas siguientes'
    },
    'contacto.html': {
      title: 'Contacto | Mi Sitio Web',
      description: 'Formulario de contacto y canales de comunicación.',
      h1: 'Formulario de Contacto',
      p: 'Si deseas colaborar en algún proyecto o ponerte en contacto conmigo, escríbeme un mensaje a mi correo electrónico:',
      label: 'Mensaje:',
      small: 'Escribe al menos 10 caracteres. Al enviar se abrirá tu aplicación de correo predeterminada.',
      btn: 'Enviar Mensaje',
      telPrefix: 'Teléfono: ',
      emailPrefix: 'Correo electrónico: ',
      redesH2: 'Redes Sociales',
      redesP: 'También puedes encontrarme y conectar conmigo a través de mis perfiles sociales:',
      avalesH2: 'Referencias y Avales',
      avalesP: 'Si deseas contrastar mi trayectoria académica o profesional, puedes contactar directamente con las siguientes personas que avalan mi trabajo:',
      aval1Cargo: 'Estudiante del Máster en Ingeniería Web de Oviedo.',
      aval1Cita: 'Compañero y amigo durante varios años en la escuela de Ingeniería Informática de Oviedo.',
      aval2Cargo: 'Profesor ayudante — Escuela de Ingeniería Informática, Universidad de Oviedo',
      aval2Cita: 'Docente y tutor académico durante el Grado en Ingeniería Informática del Software.',
      correoLabel: 'Correo: ',
      perfilLabel: 'Perfil: '
    },
    'ayuda.html': {
      title: 'Ayuda | Mi Sitio Web',
      description: 'Centro de ayuda, preguntas frecuentes y guía de uso del sitio web de Óscar Cervero Luiña.',
      h1: 'Ayuda y Preguntas Frecuentes',
      h2: 'Guía rápida de navegación',
      p: 'Si tienes dudas sobre cómo utilizar alguna sección del sitio web, despliega cualquiera de las siguientes preguntas:',
      faqs: [
        {
          q: '¿Cómo puedo moverme rápidamente por todo el sitio?',
          a: 'Puedes utilizar la barra de navegación superior fija en cualquier página, las migas de pan situadas sobre el título principal para volver al inicio, o consultar el índice completo en el Mapa del sitio.'
        },
        {
          q: '¿Cómo funcionan los carruseles de música y cine en Aficiones?',
          a: 'En la sección Aficiones, cada carrusel dispone de dos botones circulares con flechas (anterior y siguiente) en la esquina superior derecha. Al pulsarlos con el ratón o el teclado, las tarjetas rotan para mostrar el resto de álbumes o películas.'
        },
        {
          q: '¿Cómo funciona el formulario de contacto?',
          a: 'Al escribir tu mensaje en Contacto y pulsar «Enviar Mensaje», el navegador abrirá tu aplicación de correo electrónico predeterminada con el destinatario y el texto preparados. Si lo prefieres, también puedes escribirme directamente por correo, llamarme por teléfono o contactarme por LinkedIn.'
        },
        {
          q: '¿El sitio es accesible mediante teclado?',
          a: 'Sí. Todos los enlaces, botones, controles multimedia y desplegables pueden recorrerse usando la tecla Tab y activarse con Enter o Espacio, mostrando un contorno visible de enfoque en todo momento.'
        }
      ]
    },
    'buscar.html': {
      title: 'Buscar | Mi Sitio Web',
      description: 'Buscador interno del sitio web personal de Óscar Cervero Luiña.',
      h1: 'Buscador del sitio',
      h2: 'Buscar contenidos',
      p: 'Introduce palabras clave sobre mi formación, proyectos, aficiones o datos de contacto:',
      label: 'Término de búsqueda:',
      placeholder: 'Ej.: Angular, Péndulo, Tarantino, Babel...',
      btn: 'Buscar',
      resH2: 'Resultados',
      resInit: 'Introduce un término en el cuadro superior para iniciar la búsqueda.'
    },
    'mapa-sitio.html': {
      title: 'Mapa del sitio | Mi Sitio Web',
      description: 'Mapa del sitio web y estructura completa de navegación del portafolio de Óscar Cervero Luiña.',
      h1: 'Mapa del sitio',
      h2: 'Estructura general de contenidos',
      p: 'Desde este esquema puedes acceder directamente a cualquiera de las secciones que componen este sitio web personal:',
      items: [
        'Presentación principal, situación académica actual y resumen de los contenidos disponibles.',
        'Biografía, formación académica, experiencia profesional, habilidades técnicas y méritos destacables.',
        'Demostración en vídeo del proyecto Péndulo de Ondas y enlaces a repositorios de código en GitHub.',
        'Reproductor de podcast recomendado y carruseles interactivos de álbumes musicales y películas favoritas.',
        'Formulario de contacto por correo electrónico, enlaces a redes sociales y datos de contacto de personas que avalan mi trayectoria.',
        'Guía de uso, accesibilidad y preguntas frecuentes sobre el funcionamiento del sitio web.',
        'Buscador interno para localizar contenidos en todo el sitio web.',
        'Índice jerárquico de todas las páginas del sitio web.'
      ]
    }
  },

  en: {
    ui: {
      selectorIdioma: 'Select language',
      inicio: 'Home',
      sobreMi: 'About me',
      proyectos: 'Projects',
      aficiones: 'Hobbies',
      contacto: 'Contact',
      ayuda: 'Help',
      buscar: 'Search',
      mapaSitio: 'Site map',
      navPrincipal: 'Main navigation',
      navMigas: 'Breadcrumbs',
      navSecundaria: 'Secondary navigation',
      buscarLabel: 'Search website',
      buscarPlaceholder: 'Search...',
      buscarBtn: 'Search',
      footer: '© 2026 Óscar Cervero Luiña. Website built in compliance with HTML5 and CSS3 standards. Last updated on 20/11/2026'
    },
    'index.html': {
      title: 'Home | My Website',
      description: 'Personal website and professional portfolio of Óscar Cervero Luiña.',
      h1: 'Óscar Cervero Luiña',
      altRetrato: 'Portrait photograph of Óscar Cervero Luiña',
      sec1H2: 'Current Status',
      sec1P1: 'Master’s Student in Web Engineering at the University of Oviedo',
      sec1P2: 'Welcome to my personal website. Here you will find details about my academic background, projects I have developed over time, as well as a closer look at my interests.',
      sec1EmailPrefix: 'Email: ',
      sec2H2: 'What you will find here',
      sec2P1: 'On this website you can get to know me a little better. You will find my hobbies and interests—especially music and cinema—as well as my academic and professional background and various software projects I have built. Finally, you can also reach out and send me an email if you wish.'
    },
    'sobre-mi.html': {
      title: 'About Me | My Website',
      description: 'Biographical information, education, and skills.',
      h1: 'Background and Skills',
      intro: 'I am a student at the University of Oviedo, primarily interested in Web Development and cybersecurity topics.',
      h2List: ['Academic Education', 'Professional Experience', 'Technical Skills', 'Highlights'],
      ul1: [
        'Master’s Degree in Web Engineering at the University of Oviedo (2026 - Present)',
        'Bachelor’s Degree in Software Engineering at the University of Oviedo (2022 - Present)',
        'Technological Baccalaureate at IES Galileo Galilei (2020 - 2022)'
      ],
      ul2: [
        'Intern at Babel on the Alsa Web Maintenance project (February 2026 - June 2026)'
      ],
      ul3: [
        'Professional experience with Liferay, Java, and Angular',
        'Experience with HTML, CSS, JS, PHP, C, C++, C#, and Python',
        'Use of tools such as GIT and Fork'
      ],
      ul4: [
        'B1 English certificate from the Official School of Languages',
        'Category B driving license',
        'Honors distinction in the Internship course of the Software Engineering Degree'
      ]
    },
    'proyectos.html': {
      title: 'Projects | My Website',
      description: 'Featured development projects and video demonstration.',
      h1: 'Completed Projects',
      sec1H2: 'Wave Pendulum',
      sec1P: 'This is a project I built when I was around 15 years old for the science fair at IES Galileo Galilei in Navia. I am very fond of this video because to this day it remains the most-viewed video from the Navia science fair.',
      videoFallback: 'Your browser does not support the HTML5 video player.',
      sec2H2: 'Other Projects',
      art1H3: 'Readme.md for personal GitHub profile',
      art1P: 'Clean design created to welcome visitors to my personal GitHub page.',
      art1A: 'View OscarCervero repository',
      art2H3: 'wichat_es5a',
      art2P: 'Project developed for the Software Architecture course, featuring a trivia game with multiple challenges and interactive features.',
      art2A: 'View wichat_es5a repository'
    },
    'aficiones.html': {
      title: 'Hobbies | My Website',
      description: 'Hobbies, music, technology, and recommended podcast.',
      h1: 'Hobbies and Interests',
      sec1H2: 'My favorite podcast: The Wild Project with Arturo Pérez Reverte',
      sec1P: 'I find this podcast deeply engaging as it covers current political and social issues, led by the renowned Arturo Pérez Reverte, former war correspondent and writer.',
      audioFallback: 'Your browser does not support the HTML5 audio player.',
      sec2H2: 'Favorite Albums',
      sec2P: 'A selection of my favorite music albums, reflecting my taste for rock, punk, and flamenco:',
      sec2Prev: 'Previous albums',
      sec2Next: 'Next albums',
      sec3H2: 'Favorite Movies',
      sec3P: 'Films that have left a mark on me or that I simply enjoy rewatching from time to time:',
      sec3Prev: 'Previous movies',
      sec3Next: 'Next movies'
    },
    'contacto.html': {
      title: 'Contact | My Website',
      description: 'Contact form and communication channels.',
      h1: 'Contact Form',
      p: 'If you would like to collaborate on a project or get in touch with me, send me a message to my email address:',
      label: 'Message:',
      small: 'Write at least 10 characters. Submitting will open your default email client.',
      btn: 'Send Message',
      telPrefix: 'Phone: ',
      emailPrefix: 'Email: ',
      redesH2: 'Social Media',
      redesP: 'You can also find me and connect through my social profiles:',
      avalesH2: 'References & Endorsements',
      avalesP: 'If you would like to verify my academic or professional background, you may directly contact the following references:',
      aval1Cargo: 'Master’s Student in Web Engineering at the University of Oviedo.',
      aval1Cita: 'Classmate and friend for several years at the School of Computer Engineering in Oviedo.',
      aval2Cargo: 'Assistant Professor — School of Computer Engineering, University of Oviedo',
      aval2Cita: 'Lecturer and academic advisor during the Software Engineering Degree.',
      correoLabel: 'Email: ',
      perfilLabel: 'Profile: '
    },
    'ayuda.html': {
      title: 'Help | My Website',
      description: 'Help center, frequently asked questions, and user guide for Óscar Cervero Luiña’s website.',
      h1: 'Help & Frequently Asked Questions',
      h2: 'Quick navigation guide',
      p: 'If you have any questions about how to use any section of the website, expand any of the following items:',
      faqs: [
        {
          q: 'How can I quickly navigate around the entire website?',
          a: 'You can use the sticky top navigation bar on any page, the breadcrumbs above the main heading to return home, or browse the complete index in the Site Map.'
        },
        {
          q: 'How do the music and movie carousels work on the Hobbies page?',
          a: 'In the Hobbies section, each carousel has two circular arrow buttons (previous and next) in the top-right corner. Clicking or activating them via keyboard rotates the cards to reveal the remaining albums or movies.'
        },
        {
          q: 'How does the contact form work?',
          a: 'When you write your message on the Contact page and click “Send Message”, your browser opens your default email client with the recipient and text pre-filled. You can also email me directly, call me, or reach out on LinkedIn.'
        },
        {
          q: 'Is the website keyboard accessible?',
          a: 'Yes. All links, buttons, media controls, and expandable panels can be navigated using the Tab key and activated with Enter or Space, with a clear focus outline at all times.'
        }
      ]
    },
    'buscar.html': {
      title: 'Search | My Website',
      description: 'Internal search engine for Óscar Cervero Luiña’s personal website.',
      h1: 'Site Search',
      h2: 'Search content',
      p: 'Enter keywords about my education, projects, hobbies, or contact details:',
      label: 'Search term:',
      placeholder: 'E.g.: Angular, Pendulum, Tarantino, Babel...',
      btn: 'Search',
      resH2: 'Results',
      resInit: 'Enter a keyword above to start searching.'
    },
    'mapa-sitio.html': {
      title: 'Site Map | My Website',
      description: 'Site map and complete navigation structure of Óscar Cervero Luiña’s portfolio.',
      h1: 'Site Map',
      h2: 'General Content Structure',
      p: 'From this outline you can directly access any of the sections that make up this personal website:',
      items: [
        'Main introduction, current academic status, and overview of available content.',
        'Biography, academic education, professional experience, technical skills, and notable achievements.',
        'Video demonstration of the Wave Pendulum project and links to GitHub code repositories.',
        'Recommended podcast player and interactive carousels of favorite music albums and films.',
        'Contact form via email, social media links, and contact details of academic and professional references.',
        'User guide, accessibility details, and frequently asked questions about the website.',
        'Internal search engine to locate content across the entire website.',
        'Hierarchical index of all pages on the website.'
      ]
    }
  }
};

/**
 * Obtiene el idioma activo priorizando ?lang= en la URL (garantiza persistencia en file:///)
 * y usando localStorage como respaldo.
 */
function obtenerIdiomaActual() {
  const params = new URLSearchParams(window.location.search);
  const langUrl = params.get('lang');
  if (langUrl && TRADUCCIONES[langUrl]) {
    try { localStorage.setItem('idiomaSitio', langUrl); } catch (e) {}
    return langUrl;
  }
  try {
    const guardado = localStorage.getItem('idiomaSitio');
    if (guardado && TRADUCCIONES[guardado]) return guardado;
  } catch (e) {}
  return 'es';
}

/**
 * Propaga ?lang= en todos los enlaces internos (.html) para que el idioma
 * nunca se pierda al navegar entre páginas (incluso en file:/// en Firefox).
 */
function propagarIdiomaEnEnlaces(idioma) {
  document.querySelectorAll('a[href]').forEach((enlace) => {
    const href = enlace.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
      return;
    }
    const [ruta, query] = href.split('?');
    if (!ruta.endsWith('.html')) return;

    const params = new URLSearchParams(query || '');
    if (idioma === 'en') {
      params.set('lang', 'en');
    } else {
      params.delete('lang');
    }
    const nuevaQuery = params.toString();
    enlace.setAttribute('href', nuevaQuery ? `${ruta}?${nuevaQuery}` : ruta);
  });
}

/**
 * Aplica las traducciones a la página actual sin modificar la estructura ni romper estilos.
 */
function aplicarTraduccionesPagina(idioma, paginaActual) {
  const datos = TRADUCCIONES[idioma]?.[paginaActual];
  if (!datos) return;

  document.documentElement.lang = idioma;
  document.title = datos.title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', datos.description);

  if (paginaActual === 'index.html') {
    const h1 = document.querySelector('main section:nth-of-type(1) h1');
    const img = document.querySelector('main section:nth-of-type(1) img');
    const sec1H2 = document.querySelector('main section:nth-of-type(1) article h2');
    const sec1Ps = document.querySelectorAll('main section:nth-of-type(1) article p');
    const sec2H2 = document.querySelector('main section:nth-of-type(2) h2');
    const sec2P = document.querySelector('main section:nth-of-type(2) p');

    if (h1) h1.textContent = datos.h1;
    if (img) img.setAttribute('alt', datos.altRetrato);
    if (sec1H2) sec1H2.textContent = datos.sec1H2;
    if (sec1Ps[0]) sec1Ps[0].textContent = datos.sec1P1;
    if (sec1Ps[1]) sec1Ps[1].textContent = datos.sec1P2;
    if (sec1Ps[2] && sec1Ps[2].firstChild) sec1Ps[2].firstChild.textContent = datos.sec1EmailPrefix;
    if (sec2H2) sec2H2.textContent = datos.sec2H2;
    if (sec2P) sec2P.textContent = datos.sec2P1;
  }

  if (paginaActual === 'sobre-mi.html') {
    const h1 = document.querySelector('main article h1');
    const intro = document.querySelector('main article > p');
    const h2s = document.querySelectorAll('main article h2');
    const uls = document.querySelectorAll('main article ul');

    if (h1) h1.textContent = datos.h1;
    if (intro) intro.textContent = datos.intro;
    h2s.forEach((h2, i) => { if (datos.h2List[i]) h2.textContent = datos.h2List[i]; });
    [datos.ul1, datos.ul2, datos.ul3, datos.ul4].forEach((lista, idx) => {
      if (uls[idx]) {
        uls[idx].querySelectorAll('li').forEach((li, j) => {
          if (lista[j]) li.textContent = lista[j];
        });
      }
    });
  }

  if (paginaActual === 'proyectos.html') {
    const h1 = document.querySelector('main > h1');
    const sec1H2 = document.querySelector('main section:nth-of-type(1) h2');
    const sec1P = document.querySelector('main section:nth-of-type(1) > p');
    const videoP = document.querySelector('main section:nth-of-type(1) video p');
    const sec2H2 = document.querySelector('main section:nth-of-type(2) > h2');
    const articulos = document.querySelectorAll('main section:nth-of-type(2) article');

    if (h1) h1.textContent = datos.h1;
    if (sec1H2) sec1H2.textContent = datos.sec1H2;
    if (sec1P) sec1P.textContent = datos.sec1P;
    if (videoP) videoP.textContent = datos.videoFallback;
    if (sec2H2) sec2H2.textContent = datos.sec2H2;

    if (articulos[0]) {
      articulos[0].querySelector('h3').textContent = datos.art1H3;
      articulos[0].querySelector('p').textContent = datos.art1P;
      articulos[0].querySelector('a').textContent = datos.art1A;
    }
    if (articulos[1]) {
      articulos[1].querySelector('h3').textContent = datos.art2H3;
      articulos[1].querySelector('p').textContent = datos.art2P;
      articulos[1].querySelector('a').textContent = datos.art2A;
    }
  }

  if (paginaActual === 'aficiones.html') {
    const h1 = document.querySelector('main > h1');
    const sec1H2 = document.querySelector('main section:nth-of-type(1) h2');
    const sec1P = document.querySelector('main section:nth-of-type(1) > p');
    const audioP = document.querySelector('main section:nth-of-type(1) audio p');

    const sec2H2 = document.querySelector('main section:nth-of-type(2) header h2');
    const sec2P = document.querySelector('main section:nth-of-type(2) > p');
    const sec2Btns = document.querySelectorAll('main section:nth-of-type(2) header nav button');

    const sec3H2 = document.querySelector('main section:nth-of-type(3) header h2');
    const sec3P = document.querySelector('main section:nth-of-type(3) > p');
    const sec3Btns = document.querySelectorAll('main section:nth-of-type(3) header nav button');

    if (h1) h1.textContent = datos.h1;
    if (sec1H2) sec1H2.textContent = datos.sec1H2;
    if (sec1P) sec1P.textContent = datos.sec1P;
    if (audioP) audioP.textContent = datos.audioFallback;

    if (sec2H2) sec2H2.textContent = datos.sec2H2;
    if (sec2P) sec2P.textContent = datos.sec2P;
    if (sec2Btns[0]) sec2Btns[0].setAttribute('aria-label', datos.sec2Prev);
    if (sec2Btns[1]) sec2Btns[1].setAttribute('aria-label', datos.sec2Next);

    if (sec3H2) sec3H2.textContent = datos.sec3H2;
    if (sec3P) sec3P.textContent = datos.sec3P;
    if (sec3Btns[0]) sec3Btns[0].setAttribute('aria-label', datos.sec3Prev);
    if (sec3Btns[1]) sec3Btns[1].setAttribute('aria-label', datos.sec3Next);
  }

  if (paginaActual === 'contacto.html') {
    const sec1 = document.querySelector('main > section:nth-of-type(1)');
    const sec2 = document.querySelector('main > section:nth-of-type(2)');
    const sec3 = document.querySelector('main > section:nth-of-type(3)');

    if (sec1) {
      sec1.querySelector('h1').textContent = datos.h1;
      sec1.querySelector(':scope > p').textContent = datos.p;
      sec1.querySelector('form label span').textContent = datos.label;
      const small = sec1.querySelector('form small');
      if (small) small.textContent = datos.small;
      sec1.querySelector('form button').textContent = datos.btn;

      const addrPs = sec1.querySelectorAll(':scope > address p');
      if (addrPs[0] && addrPs[0].firstChild) addrPs[0].firstChild.textContent = datos.telPrefix;
      if (addrPs[1] && addrPs[1].firstChild) addrPs[1].firstChild.textContent = datos.emailPrefix;
    }

    if (sec2) {
      sec2.querySelector('h2').textContent = datos.redesH2;
      sec2.querySelector(':scope > p').textContent = datos.redesP;
    }

    if (sec3) {
      sec3.querySelector('h2').textContent = datos.avalesH2;
      sec3.querySelector(':scope > p').textContent = datos.avalesP;
      const arts = sec3.querySelectorAll('article');
      if (arts[0]) {
        arts[0].querySelector(':scope > p').textContent = datos.aval1Cargo;
        arts[0].querySelector('blockquote p').textContent = datos.aval1Cita;
        const ps = arts[0].querySelectorAll('address p');
        if (ps[0]?.firstChild) ps[0].firstChild.textContent = datos.correoLabel;
        if (ps[1]?.firstChild) ps[1].firstChild.textContent = datos.perfilLabel;
      }
      if (arts[1]) {
        arts[1].querySelector(':scope > p').textContent = datos.aval2Cargo;
        arts[1].querySelector('blockquote p').textContent = datos.aval2Cita;
        const ps = arts[1].querySelectorAll('address p');
        if (ps[0]?.firstChild) ps[0].firstChild.textContent = datos.correoLabel;
        if (ps[1]?.firstChild) ps[1].firstChild.textContent = datos.perfilLabel;
      }
    }
  }

  if (paginaActual === 'ayuda.html') {
    const h1 = document.querySelector('main > h1');
    const h2 = document.querySelector('main > section > h2');
    const p = document.querySelector('main > section > p');
    const details = document.querySelectorAll('main > section > details');

    if (h1) h1.textContent = datos.h1;
    if (h2) h2.textContent = datos.h2;
    if (p) p.textContent = datos.p;
    details.forEach((det, i) => {
      if (datos.faqs[i]) {
        det.querySelector('summary').textContent = datos.faqs[i].q;
        det.querySelector('p').textContent = datos.faqs[i].a;
      }
    });
  }

  if (paginaActual === 'buscar.html') {
    const h1 = document.querySelector('main > h1');
    const sec1 = document.querySelector('main > section:nth-of-type(1)');
    const sec2 = document.querySelector('main > section:nth-of-type(2)');

    if (h1) h1.textContent = datos.h1;
    if (sec1) {
      sec1.querySelector('h2').textContent = datos.h2;
      sec1.querySelector(':scope > p').textContent = datos.p;
      const textoBuscar = sec1.querySelector('form span');
if    (textoBuscar) textoBuscar.textContent = datos.label;
      sec1.querySelector('input[type="search"]').setAttribute('placeholder', datos.placeholder);
      sec1.querySelector('button').textContent = datos.btn;
    }
    if (sec2) {
      sec2.querySelector('h2').textContent = datos.resH2;
      const pInit = sec2.querySelector(':scope > p');
      if (pInit && !sec2.querySelector('article')) pInit.textContent = datos.resInit;
    }
  }

  if (paginaActual === 'mapa-sitio.html') {
    const ui = TRADUCCIONES[idioma].ui;
    const h1 = document.querySelector('main > h1');
    const h2 = document.querySelector('main section h2');
    const p = document.querySelector('main section > p');
    const ulPrincipal = document.querySelector('main section > ul');

    if (h1) h1.textContent = datos.h1;
    if (h2) h2.textContent = datos.h2;
    if (p) p.textContent = datos.p;

    if (ulPrincipal) {
      ulPrincipal.innerHTML = `
        <li>
          <a href="index.html">${ui.inicio}</a>: ${datos.items[0]}
          <ul>
            <li><a href="sobre-mi.html">${ui.sobreMi}</a>: ${datos.items[1]}</li>
            <li><a href="proyectos.html">${ui.proyectos}</a>: ${datos.items[2]}</li>
            <li><a href="aficiones.html">${ui.aficiones}</a>: ${datos.items[3]}</li>
            <li><a href="contacto.html">${ui.contacto}</a>: ${datos.items[4]}</li>
            <li><a href="ayuda.html">${ui.ayuda}</a>: ${datos.items[5]}</li>
            <li><a href="buscar.html">${ui.buscar}</a>: ${datos.items[6]}</li>
            <li><a href="mapa-sitio.html" aria-current="page">${ui.mapaSitio}</a>: ${datos.items[7]}</li>
          </ul>
        </li>
      `;
    }
  }

  propagarIdiomaEnEnlaces(idioma);
}