"use strict";
class Product {
    constructor(nome) {
        this.nome = nome;
    }
}
const livro = new Product("A Guerra Dos Tronos");
console.log(livro.nome);
