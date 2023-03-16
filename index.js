"use strict";
/* function retorno<T>(a:T):T{
    if( typeof a === "string") return a;

    return a;
}

console.log(retorno("A Game")); */
var _a, _b;
/* const numeros = [0,1,2,3,4,5,6,7,8,9];
const frutas = ["banana","Maçã","Goiaba","Pera","Uva","Abacaxi","Mamão"];

function firstFive<T>(lista:T[]){
    return lista.slice(0,5);
}

console.log(firstFive(frutas)); */
function notNull(a) {
    if (a !== null)
        return a;
    return null;
}
(_a = notNull("Teste")) === null || _a === void 0 ? void 0 : _a.length;
(_b = notNull(33)) === null || _b === void 0 ? void 0 : _b.toFixed();
