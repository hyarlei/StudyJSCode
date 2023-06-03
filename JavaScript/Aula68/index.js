class Produto {
    constructor(nome, marca, preco, estoque) {
        this.nome = nome;
        this.marca = marca;
        this.preco = preco;
        this._estoque = estoque;
    }

    set estoque(valor) {
        if (typeof valor !== 'number') {
            throw new TypeError("O estoque deve ser um número");
        }
        this._estoque = valor;
    }

    get estoque() {
        return this._estoque;
    }

    aumento(quantia) {
        this.preco += quantia;
    }

    desconto(quantia) {
        this.preco -= quantia;
    }
}

class Camiseta extends Produto {
    constructor(nome, marca, preco, estoque, cor) {
        super(nome, marca, preco, estoque);
        this.cor = cor;
    }

    aumento(percentual) {
        this.preco = this.preco + (this.preco * (percentual / 100));
    }
}

class Caneca extends Produto {
    constructor(nome, marca, preco, estoque, material) {
        super(nome, marca, preco, estoque);
        this.material = material;
    }

    aumento(percentual) {
        this.preco = this.preco + (this.preco * (percentual / 100));
    }
}

const produto = new Produto("Wey Protein", "Growth", 99.00, 33);

const camiseta = new Camiseta("Regata", "Growth", 13.50, 40, "Preta");
const caneca = new Caneca("Caneca", "Growth", 15.00, 100, "Porcelana");

console.log(produto);
console.log(camiseta);
// console.log(caneca.estoque);
console.log(caneca);
