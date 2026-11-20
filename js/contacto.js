document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('main form');
  if (!form) return;

  const textarea = form.querySelector('textarea');
  const output = form.querySelector('output');

  if (textarea && output) {
    textarea.addEventListener('input', () => {
      const longitud = textarea.value.trim().length;
      if (longitud === 0) {
        output.textContent = '';
      } else if (longitud < 10) {
        output.textContent = `Faltan ${10 - longitud} caracteres para alcanzar el mínimo recomendado.`;
      } else {
        output.textContent = `Mensaje listo para enviar (${longitud} caracteres).`;
      }
    });

    form.addEventListener('submit', (e) => {
      const longitud = textarea.value.trim().length;
      if (longitud < 10) {
        e.preventDefault();
        output.textContent = 'Por favor, escribe un mensaje de al menos 10 caracteres antes de enviar.';
        textarea.focus();
        return;
      }
      output.textContent = 'Abriendo tu aplicación de correo para enviar el mensaje…';
    });
  }
});