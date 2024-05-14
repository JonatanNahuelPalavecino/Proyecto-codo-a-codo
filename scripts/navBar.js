let lastScrollTop = 0;
let isOpen = false;
const encabezado = document.getElementById("encabezado")
const burger = document.querySelector(".hamburger")
const aside = document.querySelector(".aside")

burger.addEventListener("click", () => {
    const svg = burger.children[0]
    const path = svg.children[0]
    isOpen = !isOpen
    aside.classList.toggle("show")
    svg.classList.toggle("show")
    path.classList.toggle("show")
})

const handleScroll = () => {

    if (isOpen) {
        return;
    }

    const scrollTop = window.scrollY;
    const scrollDirection = scrollTop > lastScrollTop && scrollTop > 500 ? 'down' : 'up';
    
    if (scrollDirection === 'down') {
        encabezado.classList.add("hidde");
    } else {
        encabezado.classList.remove("hidde");
    }

    lastScrollTop = scrollTop;
}

window.addEventListener("scroll", handleScroll)
