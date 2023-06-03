class Lutador {
    constructor(no, na, id, al, pe, ca, vi, de, em) {
        this.Nome = no;
        this.nacionalidade = na;
        this.idade = id;
        this.altura = al;
        this.peso = pe;
        this.categoria = ca;
        this.vitorias = vi;
        this.derrotas = de;
        this.empates = em;
    }

    apresentar() {
        console.log(`Nome: ${this.Nome}`);
        console.log(`Nacionalidade: ${this.nacionalidade}`);
        console.log(`Idade: ${this.idade} anos`);
        console.log(`Altura: ${this.altura} m de altura.`);
        console.log(`Pesa: ${this.peso} kgs.`);
        console.log(`Ganhou: ${this.vitorias}`);
        console.log(`Perdeu: ${this.derrotas}`);
        console.log(`Empatou: ${this.empates}`);
        // console.log(`Sua categoria é... - ${this.setcategoria()}`);
    }

    status() {
        // TODO
    }

    ganharLuta() {
        this.vitorias += 1;
    }

    perderLuta() {
        this.derrotas += 1;
    }

    empatarLuta() {
        this.empates += 1;
    }

    get peso() {
        return this._peso;
    }

    set peso(pe) {
        this._peso = pe;
        this.setcategoria();
    }

    setcategoria() {
        if (this.peso < 52.2) {
            console.log("Peso: Invalido");
            // this.categoria = "invalido";
        } else if (this.peso <= 70.3) {
            console.log("Peso: Leve");
            // this.categoria = "leve";
        } else if (this.peso >= 83.9) {
            console.log("Peso: Médio");
            // this.categoria = "medio";
        } else if (this.peso <= 120.2) {
            console.log("Peso: Pesado");
            // this.categoria = "pesado";
        } else {
            console.log("Peso: Invalido");
            // this.categoria = "invalido";
        }
    }

    setVitorias(vi) {
        this.vitorias = vi;
    }

    setDerrotas(de) {
        this.derrotas = de;
    }

    setEmpates(em) {
        this.empates = em;
    }
}

//"preth boy", "brasil", 25, 1.65, 72, 2, 1, 0 
const lutador1 = new Lutador("preth boy", "Brasil", 25, 1.65, 72, 2, 1, 0, 0);
lutador1.apresentar();
// lutador1.setcategoria();
