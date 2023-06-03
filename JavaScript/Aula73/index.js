function criarPessoa(nome, sobrenome){
    const pessoa = Object.create(pessoaPrototype);
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;
    return pessoa;
}

const falar ={
    falar(){
        console.log(`${this.nome} está falando.`);
    },
};

const comer = {
    comer(){
        console.log(`${this.nome} está comendo.`);
    },
};

const beber = {
    beber(){
        console.log(`${this.nome} está falando.`);
    },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

const p1 = criarPessoa("Hyarlei", "Silva");
console.log(p1);
