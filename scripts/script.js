// const contacto_form = document.querySelector(".contacto-formulario-form");
// const form_nombre = document.querySelector("#nombre");
// const form_telefono = document.querySelector("#telefono");

// contacto_form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   form_nombre.value = form_nombre.value.trim();

//   const valida_telefono = Number(form_telefono.value.trim());

//   if (isNaN(valida_telefono)) {
//     alert("Asegurate de ingresar sólo números en tu teléfono");
//   }
// });

const btnSubmit = document.querySelector(".contacto-formulario-boton")

btnSubmit.addEventListener("click", (e) => {

    e.preventDefault()

    let nombre = document.querySelector("#nombre-contacto")
    let telefono = document.querySelector("#telefono-contacto")
    let email = document.querySelector("#email-contacto")
    let mensaje = document.querySelector("#mensaje-contacto")
    let wpp = document.querySelector("#whatsapp-contacto")
    let mail = document.querySelector("#mail-contacto")

    if (!wpp.checked && !mail.checked) {
      return notificar("Debes seleccionar una opcion de contacto", "error")
    }

    const mensajeAEnviar = {
      nombre: nombre.value,
      telefono: telefono.value,
      email: email.value,
      mensaje: mensaje.value,
      opcion_de_contacto: wpp.checked ? wpp.value : mail.value
    }

    fetch("http://localhost:3000/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'access-control-allow-origin': "http://localhost:3000/contacto",
      },
      body: JSON.stringify(mensajeAEnviar)
    })
    .then((respuesta) => respuesta.json())
    .then((data) => {

      if (data.estado === "Success") {
        nombre.value = ""
        telefono.value = ""
        email.value = ""
        mensaje.value = ""
        wpp.checked = false
        mail.checked = false
        return notificar("Su consulta fue enviada. En breve nos comunicaremos con usted", "success")
      }

      notificar("Tuvimos un problema para registrar su consulta. intentelo de nuevo mas tarde", "error")

    })
    .catch(error => console.log("Hubo un problema con la conexion al server: ", error))

})
