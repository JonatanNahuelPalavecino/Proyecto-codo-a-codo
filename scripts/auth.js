// const navBar = document.querySelector(".encabezado-nav")
// navBar.innerHTML += `
//     <div class="encabezado-authBox">
//         <a class="encabezado-auth" href="../pages/signin.html">SIGN IN</a>
//         <a class="encabezado-auth" href="../pages/signup.html.html">SIGN UP</a>
//     </div>
// `

// Función para iniciar sesión
// const signin = async () => {
//     // Obtener los valores de usuario y contraseña del formulario
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // Datos a enviar al servidor
//     const data = {
//         username,
//         password
//     };

//     try {
//         // Realizar la solicitud POST al endpoint de login del servidor
//         const response = await fetch("http://localhost:3001/auth/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         });

//         // Manejar errores si la respuesta no es satisfactoria
//         if (!response.ok) {
//             throw new Error(`Error HTTP! Estado: ${response.status}`);
//         }

//         // Extraer los datos de respuesta en formato JSON
//         const responseData = await response.json();

//         // Si la respuesta es satisfactoria, mostrar mensaje de inicio de sesión exitoso
//         if (response.ok) {
//             alert("Inicio de sesión exitoso");
//             // Redirigir a la página 'misturnos.html' después del inicio de sesión
//             window.location.href = "../pages/misturnos.html"; 
//         } else {
//             // Mostrar mensaje de error si la respuesta no es satisfactoria
//             alert(`Error: ${responseData.message}`);
//         }
//     } catch (error) {
//         // Manejar errores de conexión o del servidor
//         console.error("Error al iniciar sesión:", error);
//         alert("Error al iniciar sesión. Por favor, inténtelo de nuevo más tarde");
//     }
// };

// // Esperar a que se cargue el contenido del DOM antes de asignar eventos
// document.addEventListener("DOMContentLoaded", function() {
//     // Obtener el formulario de inicio de sesión por su ID
//     const loginForm = document.getElementById("loginForm");
//     if (loginForm) {
//         loginForm.addEventListener("submit", function(event) {
//             event.preventDefault();
//             signin(); // Llama a la función de inicio de sesión
//         });
//     } else {
//         console.error("Elemento 'loginForm' no encontrado en el DOM");
//     }
// });

// // Función para registrar un nuevo usuario
// const signup = async () => {
//     // Obtener los valores de nombre, usuario y contraseña del formulario
//     const name = document.getElementById("name").value;
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // Datos a enviar al servidor para el registro
//     const data = {
//         nombre: name,
//         usuario: username,
//         contrasena: password
//     };

//     try {
//         // Realizar la solicitud POST al endpoint de registro del servidor
//         const response = await fetch("http://localhost:3001/auth/signup", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         });

//         // Manejar errores si la respuesta NO es ok
//         if (!response.ok) {
//             throw new Error(`Error HTTP! Estado: ${response.status}`);
//         }

//         // Extraer los datos de respuesta en formato JSON
//         const responseData = await response.json();

//         // Si la respuesta es satisfactoria, mostrar mensaje de registro exitoso
//         if (response.ok) {
//             alert("Registro exitoso");
//             // Redirigir a la página 'misturnos.html' después del registro
//             window.location.href = "../pages/misturnos.html";  
//         } else {
//             // Mostrar mensaje de error si la respuesta no es ok
//             alert(`Error: ${responseData.message}`);
//         }
//     } catch (error) {
//         // Manejar errores de conexión o del servidor
//         console.error("Error al registrar:", error);
//         alert("Error al registrar. Por favor, inténtelo de nuevo más tarde");
//     }
// };




// const signin = async () => {
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     const data = {
//         usuario: username,
//         password
//     };

//     try {
//         const response = await fetch("http://localhost:3001/auth/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         });

//         if (!response.ok) {
//             throw new Error(`Error HTTP! Estado: ${response.status}`);
//         }

//         const responseData = await response.json();

//         if (response.ok) {
//             alert("Inicio de sesión exitoso");
//             window.location.href = "../pages/misturnos.html"; 
//         } else {
//             alert(`Error: ${responseData.mensaje}`);
//         }
//     } catch (error) {
//         console.error("Error al iniciar sesión:", error);
//         alert("Error al iniciar sesión. Por favor, inténtelo de nuevo más tarde");
//     }
// };

// const signup = async () => {
//     const name = document.getElementById("name").value;
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     const data = {
//         nombre: name,
//         usuario: username,
//         contrasena: password
//     };

//     try {
//         const response = await fetch("http://localhost:3001/auth/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         });

//         if (!response.ok) {
//             throw new Error(`Error HTTP! Estado: ${response.status}`);
//         }

//         const responseData = await response.json();

//         if (response.ok) {
//             alert("Registro exitoso");
//             window.location.href = "../pages/misturnos.html"; 
//         } else {
//             alert(`Error: ${responseData.mensaje}`);
//         }
//     } catch (error) {
//         console.error("Error al registrar:", error);
//         alert("Error al registrar. Por favor, inténtelo de nuevo más tarde");
//     }
// };

// document.addEventListener("DOMContentLoaded", function() {
//     const loginForm = document.getElementById("loginForm");
//     if (loginForm) {
//         loginForm.addEventListener("submit", function(event) {
//             event.preventDefault();
//             signin();
//         });
//     } else {
//         console.error("Elemento 'loginForm' no encontrado en el DOM");
//     }

//     const registerForm = document.getElementById("registerForm");
//     if (registerForm) {
//         registerForm.addEventListener("submit", function(event) {
//             event.preventDefault();
//             signup();
//         });
//     } else {
//         console.error("Elemento 'registerForm' no encontrado en el DOM");
//     }
// });



//-------------------------------------------

// Función para el inicio de sesión
// const signin = async () => {
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     const data = {
//         usuario: username,
//         password
//     };

//     try {
//         const response = await fetch("http://localhost:3001/auth/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         });

//         if (!response.ok) {
//             throw new Error(`Error HTTP! Estado: ${response.status}`);
//         }

//         const responseData = await response.json();

//         if (responseData.exito) { // Suponiendo que el backend devuelve una propiedad "exito" en caso de éxito
//             alert("Inicio de sesión exitoso");
//             window.location.href = "../pages/misturnos.html"; 
//         } else {
//             alert(`Error: ${responseData.mensaje}`);
//         }
//     } catch (error) {
//         console.error("Error al iniciar sesión:", error);
//         alert("Error al iniciar sesión. Por favor, inténtelo de nuevo más tarde");
//     }
// };

// // Función para el registro
// const signup = async () => {
//     const name = document.getElementById("name").value;
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     const data = {
//         nombre: name,
//         usuario: username,
//         contrasena: password
//     };

//     try {
//         const response = await fetch("http://localhost:3001/auth/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         });

//         if (!response.ok) {
//             throw new Error(`Error HTTP! Estado: ${response.status}`);
//         }

//         const responseData = await response.json();

//         if (responseData.exito) { // Suponiendo que el backend devuelve una propiedad "exito" en caso de éxito
//             alert("Registro exitoso");
//             window.location.href = "../pages/misturnos.html"; 
//         } else {
//             alert(`Error: ${responseData.mensaje}`);
//         }
//     } catch (error) {
//         console.error("Error al registrar:", error);
//         alert("Error al registrar. Por favor, inténtelo de nuevo más tarde");
//     }
// };

// // Agregar eventos a los formularios al cargar el DOM
// document.addEventListener("DOMContentLoaded", function() {
//     // Manejar el formulario de inicio de sesión
//     const loginForm = document.getElementById("loginForm");
//     if (loginForm) {
//         loginForm.addEventListener("submit", function(event) {
//             event.preventDefault();
//             signin();
//         });
//     } else {
//         console.error("Elemento 'loginForm' no encontrado en el DOM");
//     }

//     // Manejar el formulario de registro
//     const registerForm = document.getElementById("registerForm");
//     if (registerForm) {
//         registerForm.addEventListener("submit", function(event) {
//             event.preventDefault();
//             signup();
//         });
//     } else {
//         console.error("Elemento 'registerForm' no encontrado en el DOM");
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const username = loginForm.username.value;
            const password = loginForm.password.value;

            const data = {
                username,
                password
            };

            try {
                const response = await fetch("http://localhost:3001/auth/login", { 
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

                alert("Login exitoso");
                window.location.href = "../pages/misturnos.html"; 
                
            } catch (error) {
                console.error("Error al iniciar sesión:", error);
                alert("Error al iniciar sesión. Por favor, inténtelo de nuevo más tarde");
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");

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
                const response = await fetch("http://localhost:3001/auth/register", { 
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

                alert("Registro exitoso");
                window.location.href = "../pages/misturnos.html";  
                
            } catch (error) {
                console.error("Error al registrar:", error);
                alert("Error al registrar. Por favor, inténtelo de nuevo más tarde");
            }
        });
    }
});
