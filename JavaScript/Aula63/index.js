// function Produto(nome, preco, estoque){
//     this.nome = nome;
//     this.preco = preco;
//     this.estoque = estoque;
// }

class Produto {
    constructor(nome, marca, preco, estoque) {
        this.nome = nome;
        this.marca = marca;
        this.preco = preco;
        this.estoque = estoque;

        Object.defineProperty(this, {
            estoque: {
                enumerable: true,
                value: estoque,
                writable: true,
                configurable: true // Configurável
            },

            nome: {
                enumerable: true,
                value: nome,
                writable: true,
                configurable: true // Configurável
            },

            marca: {
                enumerable: true,
                value: marca,
                writable: true,
                configurable: true // Configurável
            },

            preco: {
                enumerable: true,
                value: preco,
                writable: true,
                configurable: true // Configurável
            },
        });
    }
}

const p1 = new Produto("Camiseta", "Thor", 99, 3);
console.log("Nome do produto: " + p1.nome, "\nMarca: " + p1.marca, "\nPreço do produto: " + p1.preco + ",00 R$", "\nQuantidade em estoque: " + p1.estoque);