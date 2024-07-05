// document.addEventListener("DOMContentLoaded", async () => {
//     const turnosContainer = document.getElementById("turnos-container");

//     try {
//         const response = await fetch("http://localhost:3000/api/turnos", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         if (!response.ok) {
//             throw new Error(`Error: ${response.statusText}`);
//         }

//         const turnos = await response.json();

//         turnos.forEach(turno => {
//             const turnoDiv = document.createElement("div");
//             turnoDiv.classList.add("turno");

//             turnoDiv.innerHTML = `
//                 <div>${turno.nombre}</div>
//                 <div>${turno.apellido}</div>
//                 <div>${turno.telefono}</div>
//                 <div>${turno.direccion}</div>
//                 <div>${turno.detalles}</div>
//                 <button class="modificar-btn" data-id="${turno.id}">MODIFICAR</button>
//                 <button class="eliminar-btn" data-id="${turno.id}">ELIMINAR</button>
//             `;

//             turnosContainer.appendChild(turnoDiv);
//         });

        
//         document.querySelectorAll(".modificar-btn").forEach(button => {
//             button.addEventListener("click", (e) => {
//                 const turnoId = e.target.getAttribute("data-id");
               
//                 console.log(`Modificar turno con ID: ${turnoId}`);
//             });
//         });

//         document.querySelectorAll(".eliminar-btn").forEach(button => {
//             button.addEventListener("click", async (e) => {
//                 const turnoId = e.target.getAttribute("data-id");

//                 try {
//                     const response = await fetch(`http://localhost:3000/api/turnos/${turnoId}`, {
//                         method: "DELETE",
//                         headers: {
//                             "Content-Type": "application/json"
//                         }
//                     });

//                     if (!response.ok) {
//                         throw new Error(`Error: ${response.statusText}`);
//                     }

                    
//                     e.target.parentElement.remove();
//                     alert("Turno eliminado con éxito");
//                 } catch (error) {
//                     console.error("Error al eliminar el turno:", error);
//                     alert("Error al eliminar el turno. Por favor, inténtelo de nuevo más tarde.");
//                 }
//             });
//         });
//     } catch (error) {
//         console.error("Error al obtener los turnos:", error);
//         alert("Error al obtener los turnos. Por favor, inténtelo de nuevo más tarde.");
//     }
// });
