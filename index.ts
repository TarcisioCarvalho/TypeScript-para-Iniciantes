class Product{
    
    nome:string;
    constructor(nome:string){
        this.nome = nome;
    }
    
}

const livro = new Product("A Guerra Dos Tronos");

console.log(livro.nome);