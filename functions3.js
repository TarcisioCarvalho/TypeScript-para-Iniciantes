"use strict";
function Arredonda(value) {
    switch (typeof value) {
        case "number":
            console.log(typeof value);
            return Math.ceil(value);
        case "string":
            console.log(typeof value);
            return Math.ceil(Number(value)).toString();
        default:
            break;
    }
}
console.log(Arredonda(3.6));
console.log(Arredonda("3.4"));
/* function retorno<T>(a:T):T{
    if( typeof a === "string") return a;

    return a;
}

console.log(retorno("A Game")); */
/* const numeros = [0,1,2,3,4,5,6,7,8,9];
const frutas = ["banana","Maçã","Goiaba","Pera","Uva","Abacaxi","Mamão"];

function firstFive<T>(lista:T[]){
    return lista.slice(0,5);
}

console.log(firstFive(frutas)); */
// function notNull<T>(a:T){
//     if(a !== null) return a;
//     return null;
// }
// notNull("Teste")?.length;
// notNull(33)?.toFixed();
/* interface Forma{
    lado:number;
    perimetro(lado:number) : number
}


function Calcula(forma:Forma){
    console.log(forma.perimetro(4))
}

Calcula({
    lado:10,
    perimetro(lado) {
        return lado*4
    },
});

function $(seletor:'a'):HTMLAnchorElement | null
function $(seletor:"video"):HTMLVideoElement | null
function $(seletor:"audio"): HTMLAudioElement | null
function $(seletor:"img"): HTMLImageElement | null
function $(seletor:"button"): HTMLButtonElement | null
function $(seletor:"form"): HTMLFormElement | null
function $(seletor:"div"):HTMLDivElement | null
function $(seletor:"input"):HTMLInputElement | null
function $(seletor:string):Element | null{
    return document.querySelector(seletor);
}

console.log($("a"));
console.log($("video"));
console.log($("audio")?.volume);
console.log($("img"));
console.log($("button"));
console.log($("form"));
console.log($("div"));
console.log($("input")); */ 
