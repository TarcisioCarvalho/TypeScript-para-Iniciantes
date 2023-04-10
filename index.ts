function typeGuard(value:unknown){
    if(typeof value === "string") return value.toLowerCase();
    if(typeof value === "number") return value.toFixed();
    if(value instanceof HTMLElement) return value.innerText;
}



console.log(typeGuard([1,2,3,4]))

/* async function  fecthProduto(){
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const json = await response.json();
    handleProduto(json);
}

interface Prduto{
    nome:string,
    preco:number
}
function handleProduto(data:Prduto){
    console.log(data);
    if("preco" in data){
        document.body.innerHTML+=`
    <p>Nome:${data.nome}</p>
    <p>Preço:${data.preco}</p>
    `;
    }
} */