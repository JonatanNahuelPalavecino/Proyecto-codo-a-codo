const turno = document.querySelector("#turno")
const nombreInput = document.querySelector("#name-turno")
const apellidoInput = document.querySelector("#surname-turno")
const telefonoInput = document.querySelector("#phone-turno")
const direccionInput = document.querySelector("#address-turno")
const servicioInput = document.querySelector("#service-turno")
const fechaInput = document.querySelector("#date-turno")
const horaInput = document.querySelector("#hour-turno")

const notificar = (mensaje, notificacion) => {
    Toastify({
        text: mensaje,
        duration: 3000,
        close: true,
        style : {
            background: notificacion == "error" ? "#ff0000" : "#008000",
            borderRadius: "25px",
            fontFamily: "Roboto, sans-serif"
        }
    }).showToast();
}

const crearTurno = (t) => {

    fetch("http://localhost:3000/create-turno", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(t)
    })
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        notificar("Tu turno a sido solicitado de forma exitosa!", "success")
    })
    .catch(err => console.log(err))

}

turno.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let validacion = false

    if (nombreInput.value.trim().length < 3) {
        notificar("El nombre debe tener al menos 3 letras", "error")
        return
    }

    if (apellidoInput.value.trim().length < 3) {
        notificar("El apellido debe tener al menos 3 letras", "error")
        return
    }

    if (telefonoInput.value.trim().length < 7) {
        notificar("El numero debe tener al menos 8 digitos", "error")
        return
    }

    if (direccionInput.value.trim().length < 5) {
        notificar("La direccion debe tener al menos 5 digitos", "error")
        return
    }

    if (servicioInput.value === "") {
        notificar("Debe seleccionar un tipo de servicio", "error")
        return
    }

    if (fechaInput.value < 10) {
        notificar("Debe seleccionar una fecha valida", "error")
        return
    }

    if (horaInput.value === "") {
        notificar("Debe seleccionar un rango de horario para su turno", "error")
        return
    }

    validacion = true

    if (validacion) {
        let turno = {
            nombre: nombreInput.value.trim(),
            apellido: apellidoInput.value.trim(),
            telefono: telefonoInput.value.trim(),
            direccion: direccionInput.value.trim(),
            service: servicioInput.value,
            fecha: fechaInput.value,
            hour: horaInput.value
        }

        fetch("http://localhost:3000/chequear-turno", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'access-control-allow-origin': "http://localhost:3000/chequear-turno",
            },
            body: JSON.stringify(turno)
        })
        .then(res => res.json())
        .then( (data) => {
            
            if (data.exists === true) {
                return notificar("El turno ya esta tomado, elige otro dia u horario", "error")
            } else {
                console.log("Va a entrar a crearTurno");
                crearTurno(turno)
            }
        })
        .catch(err => console.log(err))
    }

})