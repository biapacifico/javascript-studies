let luneta = {
    "nome": "Luna",
    "sobrenome": "Chewbaquinha",
    "raça": "Shih Tzu",
    "idade": 2,
    "brinquedos": ["bolinha", "ossinho", "thales"]
}

let lunetaText = JSON.stringify (luneta);
console.log (lunetaText);

let lunetaJSON = JSON.parse (lunetaText);
console.log (lunetaJSON);

console.log (lunetaJSON.brinquedos[1]);