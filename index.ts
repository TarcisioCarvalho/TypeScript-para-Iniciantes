const button = document.querySelector("button");

function handleClick(event:MouseEvent){
    const elemento = event.currentTarget;
    if(elemento instanceof HTMLElement) console.log(elemento.innerHTML);
}

/* const handleClickArrow = () => {
    console.log(this)
}; */

button?.addEventListener("click",handleClick);