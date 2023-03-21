let luneta = {
    nome: "Luna",
    sobrenome: "Chewbaquinha",
    raça: "Shih Tzu",
    idade: 2,
    nomeCompleto: function (){
        console.log (luneta.nome + " " + luneta.sobrenome);
    }
}
console.log (luneta.nome);
console.log (luneta.sobrenome);
console.log (luneta.raça);
console.log (luneta.idade);
luneta.nomeCompleto ();

luneta.brinquedoFavorito = "bolinha"; //adicionando
console.log (luneta.brinquedoFavorito);

let carro = {
    portas: 2,
    portaMalas: "200L",
    motor: "2.0"
}
console.log (carro);

let adicionais = {
    tetoSolar: true,
    arCondicionado: true
}
Object.assign (carro, adicionais); //junta os objetos
console.log (carro);

console.log (Object.keys (luneta)); //montra as chaves do objeto