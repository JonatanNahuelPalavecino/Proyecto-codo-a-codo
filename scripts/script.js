document.addEventListener("DOMContentLoaded", () => {
    const btnSubmit = document.querySelector(".contacto-formulario-boton");

    if (btnSubmit) {
        btnSubmit.addEventListener("click", async (e) => {
            e.preventDefault();

            const nombre = document.querySelector("#nombre-contacto").value;
            const telefono = document.querySelector("#telefono-contacto").value;
            const email = document.querySelector("#email-contacto").value;
            const mensaje = document.querySelector("#mensaje-contacto").value;
            const wpp = document.querySelector("#whatsapp-contacto").checked;
            const mail = document.querySelector("#mail-contacto").checked;

            if (!wpp && !mail) {
                return notificar("Debes seleccionar una opción de contacto", "error");
            }

            const mensajeAEnviar = {
                nombre,
                telefono,
                email,
                mensaje,
                opcion_de_contacto: wpp ? "whatsapp" : "mail"
            };

            try {
                const response = await fetch("http://localhost:3000/contacto", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(mensajeAEnviar)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (data.estado === "Success") {
                    document.querySelector("#nombre-contacto").value = "";
                    document.querySelector("#telefono-contacto").value = "";
                    document.querySelector("#email-contacto").value = "";
                    document.querySelector("#mensaje-contacto").value = "";
                    document.querySelector("#whatsapp-contacto").checked = false;
                    document.querySelector("#mail-contacto").checked = false;
                    return notificar("Su consulta fue enviada. En breve nos comunicaremos con usted", "success");
                } else {
                    throw new Error("Hubo un problema para registrar su consulta.");
                }
            } catch (error) {
                console.error("Hubo un problema con la conexión al servidor:", error);
                notificar("Hubo un problema con la conexión al servidor. Inténtelo de nuevo más tarde", "error");
            }
        });
    }


    
    /*PARA LOGIN Y REGISTRO */

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");


    // aca veo para el formulario de login 
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();


                // valores
            const username = loginForm.username.value;
            const password = loginForm.password.value;

            // que envia al servidor
            const data = {
                username,
                password
            };

            try {
                const response = await fetch("http://localhost:3000/api/user/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                // mirar si es correcta la respuesta

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();

                if (response.ok) {
                    alert("Login exitoso");
                    window.location.href = "../pages/misturnos.html"; 
                } else {
                    alert(`Error: ${responseData.message}`);
                }
            } catch (error) {
                console.error("Error al iniciar sesión:", error);
                alert("Error al iniciar sesión. Por favor, inténtelo de nuevo más tarde");
            }
        });
    }

        // ahora formulario de registro
    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const name = registerForm.name.value;
            const username = registerForm.username.value;
            const password = registerForm.password.value;

            const data = {
                nombre: name,
                usuario: username,
                contrasena: password
            };

            try {
                const response = await fetch("http://localhost:3000/api/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();

                if (response.ok) {
                    alert("Registro exitoso");
                    window.location.href = "../pages/misturnos.html";  
                } else {
                    alert(`Error: ${responseData.message}`);
                }
            } catch (error) {
                console.error("Error al registrar:", error);
                alert("Error al registrar. Por favor, inténtelo de nuevo más tarde");
            }
        });
    }
});
