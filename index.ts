async function  fecthProduto(){
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
}