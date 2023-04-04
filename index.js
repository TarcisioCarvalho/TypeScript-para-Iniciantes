"use strict";
/* function retorno<T>(a:T):T{
    if( typeof a === "string") return a;

    return a;
}

console.log(retorno("A Game")); */
var _a;
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
console.log($("video"));
console.log((_a = $("audio")) === null || _a === void 0 ? void 0 : _a.volume);
console.log($("img"));
console.log($("button"));
console.log($("form"));
console.log($("div"));
console.log($("input"));
