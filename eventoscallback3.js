"use strict";
const button = document.querySelector("#btn-mobile");
function handleClick(event) {
    const menu = document.querySelector("#nav");
    if (menu instanceof HTMLElement) {
        const active = menu.classList.toggle("active");
        const button = event.currentTarget;
        if (button instanceof HTMLButtonElement) {
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Fechar Menu");
            if (active) {
                button.setAttribute("aria-expanded", "false");
                button.setAttribute("aria-label", "Abrir Menu");
            }
        }
    }
}
if (button instanceof HTMLButtonElement) {
    button.addEventListener("click", handleClick);
}
/* const button = document.querySelector("button");

function handleClick(event:MouseEvent){
    const elemento = event.currentTarget;
    if(elemento instanceof HTMLElement) console.log(elemento.innerHTML);
} */
/* const handleClickArrow = () => {
    console.log(this)
}; */
//button?.addEventListener("click",handleClick);
