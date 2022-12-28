const input = document.querySelector("input");

if(input) input.addEventListener("keyup",TotalMudou);

const value = localStorage.getItem("Total");

if(input && value) input.value = value;

calculaGanho(Number(value))


function calculaGanho(value:number){

     const p = document.querySelector("p");

    if (p) p.innerText = `O Valor Total: ${value + 100 - value*0.2}`; 
}

function TotalMudou(){
    if(input){
        const value = Number(input.value);
        localStorage.setItem("Total",String(value));
        calculaGanho(value);
    }
    
}
