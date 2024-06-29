const section = document.querySelector("#solicitar-turno")

const turnera = `
    <em class="turno-title">Solicita tu turno</em>
    <p class="turno-subtitle">
        Elegi el tipo de servicio, fecha y horario para que un tecnico se
        acerque a tu domicilio.
    </p>

    <form id="turno" class="turno-form">
        <fieldset class="turno-formBox">
            <p class="turno-formTitle">Ingresa tus datos personales</p>

            <div class="turno-box">
                <label class="turno-label" for="name-turno">Nombre</label>
                <input
                class="turno-input"
                type="text"
                name="nombre"
                id="name-turno"
                placeholder="Nombre"
                />
            </div>

            <div class="turno-box">
                <label class="turno-label" for="surname-turno">Apellido</label>
                <input
                class="turno-input"
                type="text"
                name="apellido"
                id="surname-turno"
                placeholder="Apellido"
                />
            </div>

            <div class="turno-box">
                <label class="turno-label" for="phone-turno">telefono</label>
                <input
                class="turno-input"
                type="tel"
                name="telefono"
                id="phone-turno"
                placeholder="Teléfono"
                />
            </div>

            <div class="turno-box">
                <label class="turno-label" for="address-turno"
                >Dirección del domicilio</label
                >
                <input
                class="turno-input"
                type="text"
                name="direccion"
                id="address-turno"
                placeholder="Dirección"
                />
            </div>
        </fieldset>

        <fieldset class="turno-formBox">
            <p class="turno-formTitle">Ingresa el turno elegido</p>

            <div class="turno-box">
                <label class="turno-label" for="service-turno"
                >¿Que servicio necesitas?</label
                >
                <select class="turno-select" name="service" id="service-turno">
                <option value="">Seleccione un tipo de servicio</option>
                <option value="Instalacion profesional">
                    Instalación Profesional
                </option>
                <option value="Mantenimiento preventivo">
                    Mantenimiento Preventivo
                </option>
                <option value="Reparacion rapida">Reparación rápida</option>
                <option value="Asesoramiento profesional">
                    Asesoramiento Profesional
                </option>
                </select>
            </div>

            <div class="turno-box">
                <label class="turno-label" for="date-turno">Dia del turno</label>
                <input
                class="turno-input"
                type="date"
                name="fecha"
                id="date-turno"
                />
            </div>

            <div class="turno-box">
                <label class="turno-label" for="hour-turno">Horario</label>
                <select class="turno-select" name="hour" id="hour-turno">
                <option value="">Seleccione un rango horario</option>
                <option value="de 9 a 13hs">de 9 a 13hs</option>
                <option value="de 14 a 18hs">de 14 a 18hs</option>
                </select>
            </div>

        </fieldset>

        <button class="turno-btn" type="submit">Solicitar turno</button>
      </form>
      
      <svg
        class="turno-wave"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs"
        width="1440"
        height="100"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
      >
        <g mask='url("#SvgjsMask1135")' fill="none">
          <rect
            width="1440"
            height="100"
            x="0"
            y="0"
            fill="rgba(78, 176, 228, 1)"
          ></rect>
          <path
            d="M 0,21 C 48,36 144,96.2 240,96 C 336,95.8 384,21.4 480,20 C 576,18.6 624,89.6 720,89 C 816,88.4 864,17.6 960,17 C 1056,16.4 1104,83.4 1200,86 C 1296,88.6 1392,41.2 1440,30L1440 100L0 100z"
            fill="rgba(237, 247, 252, 1)"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1135">
            <rect width="1440" height="100" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>
`

if (user.inicioSesion) {
    section.innerHTML = turnera
} else {
    section.innerHTML = `
        <em class="turno-title">Solicita tu turno</em>
        <p class="turno-subtitle">
            Por favor inicia sesion para poder pedir tu turno.
        </p>
        <a class="turno-btn" href="../pages/signin.html">Inicia Sesion</a>
    `
}

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