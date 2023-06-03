//Construir um Banco onde possa receber via conta (corrente) e (poupança).
//Parâmetros - Ver (saldo), (depositar), (sacar), (valor) a ser efetuado saque e depósito.
//Parâmetros - Número da conta, nome do dono, tipo de conta...
class ContaBanco {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }   

    sacar(valor){
        if(valor > this.saldo){
            console.log(`Saldo insulficiente: ${this.saldo}`);
            return;
        }
        this.saldo -= valor;
        this.verSaldo();
    }

    depositar(valor){
        this.saldo += valor;
        this.verSaldo();
    }

    verSaldo(){
        console.log(
            `Agência/Conta: ${this.agencia}/${this.conta} | ` +
            `Saldo: R$${this.saldo}`
            //`Saldo: R$${this.saldo.toFixed(2)}`
        );
    }
}


class ContaCorrente extends ContaBanco{//Tem um certo limeite que o cliente deve efetuar!
    constructor(agencia, conta, saldo, limite){
        super(agencia, conta, saldo);
        this.limite = limite;
    }

    sacar(valor) {
        if (valor > (this.saldo + this.limite)) {
          console.log(`Saldo insuficiente: ${this.saldo}`);
          return;
        }
    
        this.saldo -= valor;
        this.verSaldo();
      }
}


class ContaPoupanca extends ContaBanco{
    constructor(agencia, conta, saldo){
        super(agencia, conta, saldo);
    }

}

const CC = new ContaCorrente(11, 22, 0, 100);
CC.verSaldo();
CC.depositar(10);
CC.sacar(110);
CC.sacar(1);

const CP = new ContaPoupanca(12, 33, 0);
CP.depositar(10);
CP.sacar(10);
CP.sacar(1);


