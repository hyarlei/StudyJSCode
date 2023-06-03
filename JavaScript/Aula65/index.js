// Object.assign(des, any)
// Object.getOwnPropertyDescriptories(o, "prop")
// ... (spread)

// Já vimos

// Object.keys (retorna as chaves)
// Object.freeze (consgela o Objeto)
// Object.define Properties (define várias propiedades)
// Object.defineProperty (define uma propiedade)

const produto = { nome: "Produto", preco: 1.8 };
for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
}

// const Caneca = Object.assign({}, produto, {material: "Porcelana" });

// Caneca.nome = "Outro nome";
// Caneca.preco = 2.5;
// console.log(produto);
// console.log(Caneca);