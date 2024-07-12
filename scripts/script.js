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

    fetch("http://grupo-uno.alwaysdata.net/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'access-control-allow-origin': "http://grupo-uno.alwaysdata.net/contacto",
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
