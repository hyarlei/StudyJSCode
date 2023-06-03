// defineProperty -> Getter e setters
// Getters - Obter valor
// Setters - configurar o valor

class Produto {
    constructor(nome, marca, preco, estoque) {
        this.nome = nome;
        this.marca = marca;
        this.preco = preco;

        let estoquePrivado = estoque;

        Object.defineProperty(this, "estoque", {
            enumerable: true, //Mostrar a chave
            // value: estoque, 
            // writable: true,
            configurable: true, // Configurável

            get: function () {
                return estoque;
            },

            set: function (valor) {
                if(typeof valor !== "number"){
                    throw new TypeError("Mensagem");
                }

                estoquePrivado = valor;
            }
        });
    }
}

// const p1 = new Produto("Camiseta", "Thor", 99, 3);
// console.log("Nome do produto: " + p1.nome, "\nMarca: " + p1.marca, "\nPreço do produto: " + p1.preco + ",00 R$", "\nQuantidade em estoque: " + p1.estoque);
// console.log(p1.estoque);

function criaProduto(){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace("coisa.", ""); //Apagar
            nome = valor;
        }
    };
}

const p2 = criaProduto("Camiseta");
p2.nome = "Qualquer coisa.";
console.log(p2.nome);