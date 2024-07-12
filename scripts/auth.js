const navBar = document.querySelector(".encabezado-nav")
let user = JSON.parse(localStorage.getItem("user"))

const verifyToken =  (user) => {

    if (!user) {
        return
    }
    
     fetch("http://grupo-uno.alwaysdata.net/auth/protected", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.token}`
        }
    })
    .then((res => res.json()))
    .then((data) => {
        if (data.estado === "success" && data.auth === true) {
            navBar.innerHTML += `
                <div class="encabezado-authBox">
                    <span class="encabezado-text">Bienvenido ${user.userName} |</span>
                    <a class="encabezado-auth" href="./pages/misturnos.html">Mis turnos</a>
                    <button id="signout" class="encabezado-signOut" >Sign out</button>
                </div>
            `
            const btnSignOut = document.querySelector("#signout")
            btnSignOut && btnSignOut.addEventListener("click", signOut)
        } else {
            notificar(data.mensaje, data.estado)
            localStorage.clear()
            navBar.innerHTML += `
                <div class="encabezado-authBox">
                    <a class="encabezado-auth" href="./pages/signin.html">Sign in</a>
                    <a class="encabezado-auth" href="./pages/signup.html">Sign up</a>
                </div>
            `
        }
    })
    .catch(err => console.log(err))
}

const signOut = () => {
    localStorage.clear()
    window.location.href = "../index.html"
}

if (user) {
    verifyToken(user)
} else {
    navBar.innerHTML += `
        <div class="encabezado-authBox">
            <a class="encabezado-auth" href="./pages/signin.html">Sign in</a>
            <a class="encabezado-auth" href="./pages/signup.html">Sign up</a>
        </div>
    `
}

const nombre = document.querySelector("#nombre") || null
const email = document.querySelector("#email")
const pass = document.querySelector("#pass")
const btnSignIn = document.querySelector(".signin-btn")
const btnSignUp = document.querySelector(".signup-btn")

btnSignUp && btnSignUp.addEventListener("click", (e) => {
    e.preventDefault()

    usuario = {
        nombre: nombre.value,
        email: email.value,
        password: pass.value
    }

    fetch("http://grupo-uno.alwaysdata.net/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'access-control-allow-origin': "http://grupo-uno.alwaysdata.net/auth/register",
        },
        body: JSON.stringify(usuario)
    })
    .then(res => res.json())
    .then((data) => {
        if (data.estado === "success" && data.auth === true) {

            localStorage.setItem("user", JSON.stringify(data))
            notificar(data.mensaje, "success")
            setTimeout(() => {window.location.href = "../index.html"}, 2000)
            
            

        } else {
            notificar(data.mensaje, "error")
        }
    })
    .catch(err => console.log(err))
})

btnSignIn && btnSignIn.addEventListener("click", (e) => {
    e.preventDefault()

    usuario = {
        email: email.value,
        password: pass.value
    }

    fetch("http://grupo-uno.alwaysdata.net/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'access-control-allow-origin': "http://grupo-uno.alwaysdata.net/auth/login",
        },
        body: JSON.stringify(usuario)
    })
    .then(res => res.json())
    .then((data) => {
        if (data.estado === "success" && data.auth === true) {
            localStorage.setItem("user", JSON.stringify(data))
            notificar(data.mensaje, "success")
            setTimeout(() => {window.location.href = "../index.html"}, 2000)
        } else {
            notificar(data.mensaje, "error")
        }
    })
    .catch(err => console.log(err))


})
