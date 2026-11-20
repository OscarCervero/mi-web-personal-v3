document.addEventListener('DOMContentLoaded', () => {
  let paginaActual = window.location.pathname.split('/').pop();
  if (!paginaActual || paginaActual === '') {
    paginaActual = 'index.html';
  }

  function renderizarLayout() {
    const idioma = typeof obtenerIdiomaActual === 'function' ? obtenerIdiomaActual() : 'es';
    const ui = TRADUCCIONES[idioma].ui;

    const paginas = {
      'index.html': ui.inicio,
      'sobre-mi.html': ui.sobreMi,
      'proyectos.html': ui.proyectos,
      'aficiones.html': ui.aficiones,
      'contacto.html': ui.contacto,
      'ayuda.html': ui.ayuda,
      'buscar.html': ui.buscar,
      'mapa-sitio.html': ui.mapaSitio
    };

    // 1. Inyectar el Header
    const headerContainer = document.querySelector('header');
    if (headerContainer) {
      const hiddenLang = idioma === 'en' ? '<input type="hidden" name="lang" value="en">' : '';
      headerContainer.innerHTML = `
        <nav aria-label="${ui.navPrincipal}">
          <a href="index.html">Cervero</a>
          <ul>
            <li><a href="index.html">${ui.inicio}</a></li>
            <li><a href="sobre-mi.html">${ui.sobreMi}</a></li>
            <li><a href="proyectos.html">${ui.proyectos}</a></li>
            <li><a href="aficiones.html">${ui.aficiones}</a></li>
            <li><a href="contacto.html">${ui.contacto}</a></li>
          </ul>
          <search>
            <form action="buscar.html" method="get" aria-label="${ui.buscarLabel}">
              ${hiddenLang}
              <label>
                <span>${ui.buscarLabel}</span>
                <input type="search" name="q" placeholder="${ui.buscarPlaceholder}" required>
              </label>
              <button type="submit" aria-label="${ui.buscarBtn}">${ui.buscarBtn}</button>
            </form>
          </search>
          <label>
            <span>${ui.selectorIdioma}</span>
            <select aria-label="${ui.selectorIdioma}">
              <option value="es"${idioma === 'es' ? ' selected' : ''}>ES</option>
              <option value="en"${idioma === 'en' ? ' selected' : ''}>EN</option>
            </select>
          </label>
        </nav>
      `;

      const enlaces = headerContainer.querySelectorAll('ul a');
      enlaces.forEach(enlace => {
        if (enlace.getAttribute('href') === paginaActual) {
          enlace.setAttribute('aria-current', 'page');
        } else {
          enlace.removeAttribute('aria-current');
        }
      });

      const selector = headerContainer.querySelector('select');
      if (selector) {
        selector.addEventListener('change', (e) => {
          const nuevoIdioma = e.target.value;
          try { localStorage.setItem('idiomaSitio', nuevoIdioma); } catch (err) {}

          // Actualizar parámetro ?lang= en la URL actual sin recargar
          const params = new URLSearchParams(window.location.search);
          if (nuevoIdioma === 'en') {
            params.set('lang', 'en');
          } else {
            params.delete('lang');
          }
          const nuevaQuery = params.toString();
          const nuevaUrl = nuevaQuery ? `${window.location.pathname}?${nuevaQuery}` : window.location.pathname;
          window.history.replaceState(null, '', nuevaUrl);

          renderizarLayout();
          aplicarTraduccionesPagina(nuevoIdioma, paginaActual);
        });
      }
    }

    // 2. Inyectar Migas de pan en el <main> (si no estamos en index.html)
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      const migasPrevias = mainContainer.querySelector(':scope > nav');
      if (migasPrevias) migasPrevias.remove();

      if (paginaActual !== 'index.html') {
        const tituloActual = paginas[paginaActual] || document.title.split('|')[0].trim();
        const navMigas = document.createElement('nav');
        navMigas.setAttribute('aria-label', ui.navMigas);
        navMigas.innerHTML = `
          <ol>
            <li><a href="index.html">${ui.inicio}</a></li>
            <li><a href="${paginaActual}" aria-current="page">${tituloActual}</a></li>
          </ol>
        `;
        mainContainer.prepend(navMigas);
      }
    }

    // 3. Inyectar el Footer
    const footerContainer = document.querySelector('footer');
    if (footerContainer) {
      const esMapa = paginaActual === 'mapa-sitio.html' ? ' aria-current="page"' : '';
      const esAyuda = paginaActual === 'ayuda.html' ? ' aria-current="page"' : '';
      footerContainer.innerHTML = `
        <p>${ui.footer}</p>
        <nav aria-label="${ui.navSecundaria}">
          <ul>
            <li><a href="mapa-sitio.html"${esMapa}>${ui.mapaSitio}</a></li>
            <li><a href="ayuda.html"${esAyuda}>${ui.ayuda}</a></li>
            <li>
              <a href="https://es.linkedin.com/in/oscarcervero" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/cerveroo_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      `;
    }
  }

  renderizarLayout();
  aplicarTraduccionesPagina(obtenerIdiomaActual(), paginaActual);
});

(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "zglgb2vb91");