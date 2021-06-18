/* Sticky header */
let cabecera = document.getElementById("header");
let logo = document.getElementById("logo").firstElementChild;
let separacion = cabecera.offsetHeight;
let hamburguesa = document.getElementById("userpic");
let menuMovil = document.getElementById("hamburger-menu");
let observer = new IntersectionObserver(callback, { threshold: 1 });

function callback(entries, observer) {
  if (entries[0].intersectionRatio < 1) {
    cabecera.classList.add("sticky");
    logo.setAttribute("src", "./images/logos/logo_white_large.png");
    menuMovil.style.top = separacion + "px";
  }
}

observer.observe(cabecera);

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    cabecera.classList.remove("sticky");
    logo.setAttribute("src", "images/logos/logo.svg");
    menuMovil.style.top = "0px";
  }
});

/*Cabecera Móvil*/

hamburguesa.addEventListener("click", () => {
  menuMovil.classList.toggle("mostrar");
});
