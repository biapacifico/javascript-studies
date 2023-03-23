class Carro {
    constructor (marca, cor, gasolina, consumo){
        this.marca = marca,
        this.cor = cor,
        this.gasolina = gasolina,
        this.consumo = consumo
    }
    dirigir (km){
        let qntConsumida = (km/this.consumo)
        this.gasolina = this.gasolina - qntConsumida
    }
    abastecer (litros){
        this.gasolina = this.gasolina + litros
    }
}

let carro1 = new Carro ("Gol", "Prata", 100, 14)
//console.log (carro1)
carro1.dirigir (100)
console.log (carro1.gasolina)
carro1.abastecer (2)
console.log (carro1.gasolina)