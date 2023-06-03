class Lutador {
    constructor(nome, nacionalidade, idade, altura, peso, vitorias, derrotas, empates) {
      this.nome = nome;
      this.nacionalidade = nacionalidade;
      this.idade = idade;
      this.altura = altura;
      this.peso = peso;
      this.vitorias = vitorias;
      this.derrotas = derrotas;
      this.empates = empates;
    }
  
    apresentar() {
      console.log(`Lutador ${this.nome}, vem de ${this.nacionalidade}. Tem ${this.idade} anos, ${this.altura}m de altura e pesa ${this.peso} kg. Com ${this.vitorias} vitórias, ${this.derrotas} derrotas e ${this.empates} empates.`);
    }
  
    status() {
      console.log(`${this.nome} é um peso ${this.peso} kg`);
    }
  }
  
  class Luta {
    marcarLuta(lutador1, lutador2) {
      if (lutador1.categoria === lutador2.categoria) {
        this.aprovada = true;
        this.lutador1 = lutador1;
        this.lutador2 = lutador2;
      } else {
        this.aprovada = false;
        console.log("A luta não pode acontecer.");
      }
    }
  
    lutar() {
      if (this.aprovada) {
        console.log(`${this.lutador1.nome} X ${this.lutador2.nome}`);
        this.lutador1.apresentar();
        this.lutador2.apresentar();
        console.log("E que Comece a LUTA. E temos um vencedor!");
        const vencedor = Math.round(Math.random()) === 0 ? this.lutador1 : this.lutador2;
        console.log(`O vencedor da luta é: ${vencedor.nome}`);
        vencedor.vitorias++;
        const perdedor = vencedor === this.lutador1 ? this.lutador2 : this.lutador1;
        perdedor.derrotas++;
      }
    }
  }
  
  const lutadores = [];
    lutadores[0] = new Lutador("Jon Jones", "EUA", 31, 1.93, 113, 26, 1, 0);
    lutadores[1] = new Lutador("Anderson Silva", "Brasil", 29, 1.88, 84, 34, 11, 0);
    lutadores[2] = new Lutador("Georges St. Pierre", "Canadá", 35, 1.78, 84, 26, 2, 0);
    lutadores[3] = new Lutador("Fedor Emelianenko", "Ucrânia", 28, 1.83, 106, 39, 6, 0);
    lutadores[4] = new Lutador("Demetrious Johnson", "EUA", 37, 1.60, 57, 30, 4, 1);
    lutadores[5] = new Lutador("José Aldo", "Brasil", 30, 1.70, 66, 29, 7, 0);
  
    const UFC01 = new Luta();
    UFC01.marcarLuta(lutadores[3], lutadores[5]);
    UFC01.lutar();