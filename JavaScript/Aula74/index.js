const pessoas = [
    {id: 3, nome: "Hyarlei" },
    {id: 2, nome: "Duda" },
    {id: 1, nome: "Eduarda"},
];

// const novasPessoas = {};
// for(const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {... pessoa});
}

for (const pessoas of novasPessoas.values()){
    console.log(pessoas);
}