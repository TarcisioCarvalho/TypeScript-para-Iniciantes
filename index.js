"use strict";
const links = document.querySelectorAll(".link");
links.forEach(link => {
    if (link instanceof HTMLElement)
        ativarElemento(link);
});
function ativarElemento(link) {
    link.style.cssText =
        'color: blue;' +
            'background-color: yellow;' +
            'border: 1px solid magenta';
}
// const link = document.getElementById("origamid");
// if(link instanceof HTMLAnchorElement) link.href = link.href.replace("http","https");
// interface API{
//   nome : string,
//   horas: number,
//   aulas: number,
//   gratuito: boolean,
//   tags: string[],
//   idAulas: number[],
//   nivel: "iniciante" | "avancado"
// }
// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json');
//   const data = await response.json();
//   mostrarCursos(data);
// }
// fetchCursos();
// function mostrarCursos(cursos:API[]) {
// cursos.forEach(c => {
//   let color;
//   if(c.nivel === "avancado") color = "red";
//   if(c.nivel === "iniciante") color = "blue";
//   document.body.innerHTML +=`
//   <div>
//     <h1 style = "color:${color}">${c.nome}</h1>
//     <p>Tipo: ${c.gratuito?"Gratuito":"Pago"}<p>
//     <p>Total de Aulas ${c.aulas}</p>
//     <p>Total de Horas ${c.horas}</p>
//     <p>Tags: ${c.tags.join(", ")}</p>
//     <p>Aulas: ${c.idAulas.join("| ")}</p>
//   </div>
//   `
// })
// }
// async function fetchProduct():Promise<void> {
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     const data = await response.json();
//     showProduct(data);
//   }
//   fetchProduct();
//   function showProduct(data:{
//     nome:string
//   }) {
//     document.body.innerHTML = `
//       <div>
//         <h2>${data.nome}</h2>
//       </div>
//     `;
//   }
// preencherDados({});
// function preencherDados(dados:{}){
//     document.body.innerHTML = `
//     <h1>Teste</h1>
// `
// }
// console.log("Aki"+  toNumber(1));
// const input = document.querySelector("input");
// if(input) input.addEventListener("keyup",TotalMudou);
// const value = localStorage.getItem("Total");
// if(input && value) input.value = value;
// calculaGanho(Number(value))
// function calculaGanho(value:number){
//      const p = document.querySelector("p");
//     if (p) p.innerText = `O Valor Total: ${value + 100 - value*0.2}`; 
// }
// function TotalMudou(){
//     if(input){
//         const value = Number(input.value);
//         localStorage.setItem("Total",String(value));
//         calculaGanho(value);
//     }
// }
// function toNumber(value:number|string):number{
//     if(typeof value === "number")  return value;
//     if(typeof value === "string") return Number(value);
//     throw "A função deve receber um número ou uma string";
// }
