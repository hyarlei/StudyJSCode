function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, rejecte) => {
        if(typeof msg !== "string") rejecte(new Error("ERROR"));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi("Conexão com o BD", rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi("Buscando dados da base", rand(1, 3));
})

.then(resposta => {
    console.log(resposta);
    return esperaAi(22222, rand (1, 3));
})
.then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log("Exibe dados na tela");
})
.catch(e =>{
    console.log("ERROR: ", e);
});

console.log("exige antes de qualquer promisse.");