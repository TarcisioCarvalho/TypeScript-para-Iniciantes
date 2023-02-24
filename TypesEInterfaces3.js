"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/notebook.json");
        const data = yield response.json();
        showProduct(data);
    });
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
        <h2>Nome: ${data.nome}</h2>
        <p>Preço: ${data.preco}</p>
        <p>Descrição: ${data.descricao}</p>
        <p>Garantia: ${data.garantia} Anos</p>
        <p>Seguro Acidente:  ${data.seguroAcidentes ? "Sim" : "Não"}</p>
        <p>Empresa Fabricante Nome:${data.empresaFabricante.nome}</p>
        <p>Empresa Fabricante Fundação:${data.empresaFabricante.fundacao}</p>
        <p>Empresa Fabricante País:${data.empresaFabricante.pais}</p>
        <p>Empresa Fabricante Nome:${data.empresaFabricante.nome}</p>
        <p>Empresa Fabricante Fundação:${data.empresaFabricante.fundacao}</p>
        <p>Empresa Fabricante País:${data.empresaFabricante.pais}</p>
    </div>
    `;
}
