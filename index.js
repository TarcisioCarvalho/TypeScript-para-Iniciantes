"use strict";
/* function retorno<T>(a:T):T{
    if( typeof a === "string") return a;

    return a;
}

console.log(retorno("A Game")); */
function Calcula(forma) {
    console.log(forma.perimetro(4));
}
Calcula({
    lado: 10,
    perimetro(lado) {
        return lado * 4;
    },
});
function $(seletor) {
    return document.querySelector(seletor);
}
console.log($("a"));
