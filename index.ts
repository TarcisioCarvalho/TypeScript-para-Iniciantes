
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}

fetchCursos();

interface Curso{
    nome:string;
    horas:number;
    tags:string[];
}

function isCurso(value:unknown): value is Curso {
    if(value &&
        typeof value === "object" &&
         "nome" in value &&
         "horas" in value &&
         "tags" in value
    ) {
        return true
    }
    return false;
}

function handleCursos(data:unknown){
    if(isCurso(data))
    {
        if(typeof data.nome === "string" &&
           typeof data.horas === "number" &&
           data.tags instanceof Array
        )
        {
            console.log(`Cursos `);
        }
    }
}


/* function Arredondar(value:string):string;
function Arredondar(value:number):number;
function Arredondar(value : number | string){
    if(typeof(value) === "number") return Math.ceil(value);
    return String(Math.ceil(Number(value)));
}
console.log(Arredondar("4.6")); */



/* const btnMobile = document.querySelector("#btn-mobile");

if(btnMobile instanceof HTMLButtonElement){
    btnMobile.addEventListener("click",handleClick)
}

function handleClick(event:Event){

       if(event.currentTarget instanceof EventTarget){

        const button = event.currentTarget;
        const nav = document.querySelector("#nav");

        if(nav instanceof HTMLElement) {

            const active = nav.classList.toggle("active");
            if(button instanceof HTMLButtonElement){
                if(active) {
                    button.setAttribute('aria-expanded', 'true');
                    button.setAttribute('aria-label', 'Fechar Menu');
                    return;
                }
                button.setAttribute('aria-expanded', 'false');
                button.setAttribute('aria-label', 'Abrir Menu');
            }
           
        };
    }

       
    
} */









// const links = document.querySelectorAll(".link");

// links.forEach(link => {
//     if (link instanceof HTMLElement)  ativarElemento(link);
// })


// function ativarElemento(link:HTMLElement){
//     link.style.cssText =
//     'color: blue;' +
//     'background-color: yellow;' +
//     'border: 1px solid magenta';
// }








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
