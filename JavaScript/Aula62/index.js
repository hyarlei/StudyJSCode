//Factory function / constructor function / Classes

// function criaPessoa(nome, sobrenome, idade){
//     return{
//         nome, 
//         sobrenome, 
//         idade,
//         nomeCompleto(){
//             return `Nome: ${this.nome} ${this.sobrenome} \nIdade: ${this.idade}`
//         }
//     };
// }

// const p1 = criaPessoa("Hyarlei", "Silva", "18");
// console.log(p1.nomeCompleto());

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa("Hyarlei", "Silva", "18");
const p2 = new Pessoa("Fulana", "doCeu", "19");

console.log(p1);
console.log(p2);

