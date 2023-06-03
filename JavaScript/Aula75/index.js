// const _velocidade = Symbol('velocidade');
// class Moto{
//     constructor(nome){
//         this.nome = nome;
//         this._velocidade = 0;
//     }

//     set velocidade(valor){
//         console.log("SETTER");
//         if(typeof valor !== "number") return;
//         if(valor >= 400 || valor <= 0) return;
//         this[_velocidade] = valor;
//     }

//     get velocidade(){
//         console.log("GETTER");
//         return this[_velocidade];
//     }

//     acelerar(){
//         if(this._velocidade >= 400) return;
//         this._velocidade++;
//     }

//     freiar(){
//         if(this._velocidade <= 0) return;
//             this._velocidade--;
//     }
// }

// const moto = new Moto("Kawasaki");
// moto.velocidade = 55;
// console.log(moto.velocidade);

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + " " + this.sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(" ");
        this.nome = valor.shift();
        this.sobrenome = valor.join(" ");
    }
}

const p1 = new Pessoa("Hyarlei", "Silva");
p1.nomeCompleto = "Hyarlei Silva Freitas";
console.log(p1.nome);
console.log(p1.sobrenome);