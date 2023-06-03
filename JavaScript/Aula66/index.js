class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        // this.nomeCompleto = () => "ORIGINAL: "+ this.nome + " " + this.sobrenome;
    }
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + " " + this.sobrenome;
};

const pessoa1 = new Pessoa("Hyarlei", "O.");// <- Pessoa= Função construtora
const pessoa2 = new Pessoa("Duda", "A.");
const data = new Date(); // <-- Date = Função contrutora 

console.dir(pessoa1);
console.dir(pessoa2);