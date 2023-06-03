const pessoa1 = new Object();
    pessoa1.nome = "Hyarlei";
    pessoa1.sobrenome = "Silva";
    pessoa1.idade = 19;
    pessoa1.falarNome = function(){
        return (`${this.nome} ${this.sobrenome} está te chamando!`);
    };
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());