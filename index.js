"use strict";
const button = document.querySelector("button");
function handleClick(event) {
    const elemento = event.currentTarget;
    if (elemento instanceof HTMLElement)
        console.log(elemento.innerHTML);
}
/* const handleClickArrow = () => {
    console.log(this)
}; */
button === null || button === void 0 ? void 0 : button.addEventListener("click", handleClick);
