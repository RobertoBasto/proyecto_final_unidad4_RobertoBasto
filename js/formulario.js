document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contenedorformulario");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const botonEnviar = form.querySelector("button[type='submit']");

    // Campos a validar
    const campos = [
      {
        input: form.nombre,
        mensaje: "Tienes que escribir tu NOMBRE"
      },
      {
        input: form.email,
        mensaje: "Tienes que escribir tu CORREO ELECTRONICO correctamente"
      },
      {
        input: form.telefono,
        mensaje: "Tienes que escribir tu TELEFONO"
      },
      {
        input: form.mensaje,
        mensaje: "Tienes que escribir tu MENSAJE"
      }
    ];

    // Validar campos vacíos
    for (let campo of campos) {

      if (campo.input.value.trim() === "") {

        alert(campo.mensaje);

        campo.input.focus();

        // Activar nuevamente el botón
        if (botonEnviar) {
          botonEnviar.disabled = false;
          botonEnviar.innerText = "SEND MESSAGE";
        }

        return;
      }
    }
    //validar nombre
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;;

    if (!nombreRegex.test(form.nombre.value.trim())) {

      alert("Ingresa solo letras en tu nombre");

      form.email.focus();

      return;
    }

    // Validar correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.value.trim())) {

      alert("Ingresa un correo válido");

      form.email.focus();

      return;
    }

    //Validar número
  const telefonoRegex = /^[0-9]+$/;

    if (!telefonoRegex.test(form.telefono.value.trim())) {

  alert("El teléfono solo debe contener números");

  form.telefono.focus();

  return;
}

    alert("Formulario enviado correctamente");


  });

});
