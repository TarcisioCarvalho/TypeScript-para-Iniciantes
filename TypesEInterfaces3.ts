
interface Empresa{
    nome:string;
    fundacao:number;
    pais:string;
}
interface Produto{
    nome:string;
    preco:number;
    descricao:string;
    garantia:string;
    seguroAcidentes:boolean;
    empresaFabricante:Empresa;
    empresaMontadora:Empresa;
}



async function fetchProduct(){
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    showProduct(data);
}

fetchProduct();

function showProduct(data:Produto){
    
    document.body.innerHTML = `
    <div>
        <h2>Nome: ${data.nome}</h2>
        <p>Preço: ${data.preco}</p>
        <p>Descrição: ${data.descricao}</p>
        <p>Garantia: ${data.garantia} Anos</p>
        <p>Seguro Acidente:  ${data.seguroAcidentes?"Sim":"Não"}</p>
        <p>Empresa Fabricante Nome:${data.empresaFabricante.nome}</p>
        <p>Empresa Fabricante Fundação:${data.empresaFabricante.fundacao}</p>
        <p>Empresa Fabricante País:${data.empresaFabricante.pais}</p>
        <p>Empresa Fabricante Nome:${data.empresaFabricante.nome}</p>
        <p>Empresa Fabricante Fundação:${data.empresaFabricante.fundacao}</p>
        <p>Empresa Fabricante País:${data.empresaFabricante.pais}</p>
    </div>
    `
}