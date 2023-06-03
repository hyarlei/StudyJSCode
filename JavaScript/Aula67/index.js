class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

Produto.prototype.Desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100)); 
}

Produto.prototype.Aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100)); 
}

const p1 = new Produto("Camiseta", 50);
// p1.Aumento(100);
// p1.Desconto(10);
// console.log(p1);

const p2 = {
    nome: "Caneca",
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.Aumento(10);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});
p3.Aumento(10);
console.log(p3);