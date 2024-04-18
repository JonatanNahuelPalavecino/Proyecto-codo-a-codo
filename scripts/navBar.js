let lastScrollTop = 0;
const encabezado = document.getElementById("encabezado")

// const handleScroll = () => {

//     const scrollTop = window.scrollY

//     if (scrollTop > 500) {
//         console.log("Es mayor a 500");
//     }
// }

const handleScroll = () => {

    // if (isOpen) {
    //     return;
    // }

    const scrollTop = window.scrollY;
    const scrollDirection = scrollTop > lastScrollTop && scrollTop > 500 ? 'down' : 'up';
    
    if (scrollDirection === 'down') {
        encabezado.classList.remove("show");
        encabezado.classList.add("hidde");
    } else {
        encabezado.classList.add("show");
        encabezado.classList.remove("hidde");
    }

    lastScrollTop = scrollTop;
}

window.addEventListener("scroll", handleScroll)