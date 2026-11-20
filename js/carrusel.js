document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll("main > section");

  secciones.forEach((seccion) => {
    const botones = seccion.querySelectorAll("header nav button");
    if (botones.length < 2) return;

    const btnPrev = botones[0];
    const btnNext = botones[1];

    // Crear zona de retroalimentación accesible
    const estado = document.createElement("output");
    estado.setAttribute("role", "status");
    estado.setAttribute("aria-live", "polite");
    seccion.appendChild(estado);

    const actualizarEstado = () => {
      const primero = seccion.querySelector("article h3");
      if (primero) {
        estado.textContent = `Mostrando a partir de: ${primero.textContent}`;
      }
    };

    btnNext.addEventListener("click", (e) => {
      e.preventDefault();
      const articulos = seccion.querySelectorAll("article");
      if (articulos.length < 2) return;

      articulos[articulos.length - 1].after(articulos[0]);
      actualizarEstado();
    });

    btnPrev.addEventListener("click", (e) => {
      e.preventDefault();
      const articulos = seccion.querySelectorAll("article");
      if (articulos.length < 2) return;

      articulos[0].before(articulos[articulos.length - 1]);
      actualizarEstado();
    });
  });
});