document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const mensajeExito = document.getElementById("mensajeExito");

  // Expresiones regulares
  const regexNombre = /^[a-zA-ZÀ-ÿ\s]{3,}$/; // mínimo 3 letras
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  function validarCampo(campo, regex, errorId, mensaje) {
    const valor = campo.value.trim();
    if (!regex.test(valor)) {
      document.getElementById(errorId).innerText = mensaje;
      return false;
    }
    document.getElementById(errorId).innerText = "";
    return true;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valido = true;

    // Nombre
    if (!validarCampo(document.getElementById("name"), regexNombre, "errorNombre", "Mínimo 3 letras.")) valido = false;

    // Correo
    if (!validarCampo(document.getElementById("email"), regexCorreo, "errorCorreo", "Correo inválido.")) valido = false;

    // Asunto (mínimo 3 caracteres)
    const subject = document.getElementById("subject");
    if (subject.value.trim().length < 3) {
      document.getElementById("errorAsunto").innerText = "El asunto es demasiado corto.";
      valido = false;
    } else {
      document.getElementById("errorAsunto").innerText = "";
    }

    // Mensaje (mínimo 10 caracteres)
    const message = document.getElementById("message");
    if (message.value.trim().length < 10) {
      document.getElementById("errorMensaje").innerText = "El mensaje debe tener al menos 10 caracteres.";
      valido = false;
    } else {
      document.getElementById("errorMensaje").innerText = "";
    }

    // Si todo es válido
    if (valido) {
      mensajeExito.innerText = "¡Mensaje enviado correctamente 🎉!";
      mensajeExito.style.color = "green";
      form.reset();
    } else {
      mensajeExito.innerText = "";
    }
  });
});
