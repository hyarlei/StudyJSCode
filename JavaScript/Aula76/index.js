class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + " Já ligado!");
            return;
        }
    this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + " já desligado!");
            return;
        }
        this.ligado = false; 
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone("Xiaomi", "Azul", "Redmi note 11");
console.log(s1);