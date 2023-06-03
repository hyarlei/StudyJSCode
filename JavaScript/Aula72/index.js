class ContaBanco {
  //atributos
  constructor(numConta, tipo, dono, saldo, status) {
    this.numConta = numConta;
    this.tipo = tipo;
    this.dono = dono;
    this.saldo = saldo;
    this.status = status;
  }

  // getters
  getNumConta() {
    return this.numConta;
  }

  getTipo() {
    return this.tipo;
  }

  getDono() {
    return this.dono;
  }

  getSaldo() {
    return this.saldo;
  }

  getStatus() {
    return this.status;
  }

  // setters
  setNumConta(numConta) {
    this.numConta = numConta;
  }

  setTipo(tipo) {
    this.tipo = tipo;
  }

  setDono(dono) {
    this.dono = dono;
  }

  setSaldo(saldo) {
    this.saldo = saldo;
  }

  setStatus(status) {
    this.status = status;
  }

  //metodos personalizados
  abrirConta(t) {
    this.tipo = t;
    this.status = true;
    if (t === "CC") {
      this.saldo = 50;
    } else if (t === "CP") {
      this.saldo = 150;
    }
    console.log(`CONTA ABERTA COM SUCESSO POR - ${this.dono}`);
  }

  fecharConta() {
    if (this.saldo > 0) {
      console.log("CONTA NAO PODE SER FECHADA. POIS CONTEM SALDO.");
    } else if (this.saldo < 0) {
      console.log("CONTA NAO PODE SER FECHADA. POIS, POSSUI DEBITO.");
    } else {
      this.status = false;
      console.log(`CONTA FECHADA COM SUCESSO POR - ${this.dono}`);
    }
  }

  depositar(v) {
    if (this.status) {
      this.saldo = this.saldo + v;
      console.log(`DEPOSITO REALIZADO COM SUCESSO NA CONTA DE - ${this.dono}`);
    } else {
      console.log("IMPOSSIVEL REALIZAR DEPOSITO EM UMA CONTA FECHADA.");
    }
  }

  sacar(v) {
    if (this.status) {
      if (this.saldo >= v) {
        this.saldo = this.saldo - v;
        console.log(`SAQUE REALIZADO NA CONTA DE - ${this.dono}`);
      } else {
        console.log("SALDO INSULFICIENTE PARA SAQUE.");
      }
    } else {
      console.log("IMPOSSIVEL SACAR EM UMA CONTA FECHADA.");
    }
  }

  pagarMensal() {
    let v = 0;
    if (this.tipo === "CC") {
      v = 12;
    } else if (this.tipo === "CP") {
      v = 20;
    }
    if (this.status) {
      this.saldo = this.saldo - v;
      console.log(`MENSALIDADE PAGA COM SUCESSO POR - ${this.dono}`);
    } else {
      console.log("IMPOSSIVEL PAGAR EM UMA CONTA FECHADA.");
    }
  }

  estadoAtual() {
    console.log("---------------------------------");
    console.log(`Conta: ${this.numConta}`);
    console.log(" Tipo: " + this.getTipo());
    console.log(" Dono: " + this.getDono());
    console.log(" Saldo: " + this.getSaldo());
    console.log(" Status: " + this.getStatus());
    console.log(" ---------------------------------");
  }

}

const P1 = new ContaBanco(1111, "CC", "JUBILEU", "1.000.000.000", true);
console.log("----------EXTRATO BANCARIO---------");
// P1.abrirConta("CC");
// P1.setDono("JUBILEU");
P1.estadoAtual();

const P2 = new ContaBanco(2222, "CP", "Hyarlei", "10.000.000.000", true);
P2.estadoAtual();
