//de object
let luneta = {
    nome: "Luna",
    sobrenome: "Chewbaquinha",
    raça: "Shih Tzu",
    idade: 2,
}
const {nome: nameL, sobrenome: lastName, raça: breed, idade: age} = luneta;

console.log (nameL);
console.log (lastName);
console.log (breed);
console.log (age);

//de array
let albums = ["Taylor Swift", "Fearless", "Speak Now", "Red"];
let [ts1, ts2, ts3, ts4] = albums;

console.log (ts1);
console.log (ts2);
console.log (ts3);
console.log (ts4);