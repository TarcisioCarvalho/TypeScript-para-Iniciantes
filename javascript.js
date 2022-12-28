const input = document.querySelector("input");
input.addEventListener("keyup",TotalMudou);
const value = localStorage.getItem("Total");
input.value = value;
calculaGanho(value)


function calculaGanho(value){
    const p = document.querySelector("[data-resultado]");
    p.innerText = `O Valor Total: ${value + 100 - value*0.2}`; 
}

function TotalMudou(){
    const value = Number(input.value);
    localStorage.setItem("Total",value);
   calculaGanho(value);
}
