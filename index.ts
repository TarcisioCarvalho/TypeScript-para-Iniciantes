
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

function notNull<T>(a:T){
    if(a !== null) return a;
    return null;
}

notNull("Teste")?.length;
notNull(33)?.toFixed();