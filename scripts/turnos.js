const id = user ? user.userId : false
const containerTurnos = document.querySelector("#turnos-container-unique")

const turno = `
    <div class="turno-unique">
        <div>Carlos</div>
        <div>García</div>
        <div>1551234567</div>
        <div>Avenida Cabildo 3000</div>
        <div>de 9 a 13hs</div>
        <div>Instalación Profesional</div>
    </div>
    <div class="botones-unique">
        <button class="modificar-btn-unique">MODIFICAR</button>
        <button class="eliminar-btn-unique">ELIMINAR</button>
    </div>
`

if (id) {
    fetch("http://localhost:3000/ver-turnos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'access-control-allow-origin': "http://localhost:3000/ver-turnos",
        },
        body: JSON.stringify({id})
    })
    .then(res => res.json())
    .then((data) => {
        console.log(data.turnos);
        if (data.turnos && data.turnos.length > 0) {
            for (const turno of data.turnos) {
                containerTurnos.innerHTML += `
                    <div class="turno-unique">
                        <div>${turno.nombre}</div>
                        <div>${turno.apellido}</div>
                        <div>${turno.telefono}</div>
                        <div>${turno.direccion}</div>
                        <div>${turno.fecha}</div>
                        <div>${turno.rango_horario}</div>
                        <div>${turno.tipo_de_servicio}</div>
                    </div>
                    <div class="botones-unique">
                        <button class="modificar-btn-unique">MODIFICAR</button>
                        <button class="eliminar-btn-unique">ELIMINAR</button>
                    </div>
                `
            }
        } else {
            containerTurnos.innerHTML = `
                <div style="text-align: center;">aun no has solicitado un turno</div>
            `
        }
    })
    .catch(err => console.log(err))
}