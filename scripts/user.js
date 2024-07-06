
// PRUEBA!!!!



// document.addEventListener("DOMContentLoaded", () => {
//     const registerForm = document.getElementById("registerForm");
//     const loginForm = document.getElementById("loginForm");
  
//     if (registerForm) {
//       registerForm.addEventListener("submit", async (e) => {
//         e.preventDefault();
//         const formData = new FormData(registerForm);
//         const data = {
//           nombre: formData.get("nombre"),
//           usuario: formData.get("usuario"),
//           contrasena: formData.get("contrasena")
//         };
  
//         try {
//           const response = await fetch("http://localhost:3000/api/user", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//           });
  
//           if (response.ok) {
//             alert("Registro exitoso");
//             window.location.href = "signin.html"; 
            
//           } else {
//             const errorData = await response.json();
//             alert(`Error: ${errorData.message}`);
//           }
//         } catch (error) {
//           console.error("Error al registrar el usuario:", error);
//         }
//       });
//     }
  
//     if (loginForm) {
//       loginForm.addEventListener("submit", async (e) => {
//         e.preventDefault();
//         const formData = new FormData(loginForm);
//         const data = {
//           username: formData.get("username"),
//           password: formData.get("password")
//         };
  
//         try {
//           const response = await fetch("http://localhost:3000/api/user/login", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//           });
  
//           if (response.ok) {
//             const responseData = await response.json();
//             alert("Login exitoso");
//             window.location.href = "../pages/misturnos.html"; 
//           } else {
//             const errorData = await response.json();
//             alert(`Error: ${errorData.message}`);
//           }
//         } catch (error) {
//           console.error("Error al iniciar sesión:", error);
//         }
//       });
//     }
//   });
  