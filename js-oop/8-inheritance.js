class Mamifero {
    constructor (patas){
        this.patas = patas
    }
}

class Cachorro extends Mamifero {
    constructor (patas, cor){
        super (patas, patas)
        this.cor = cor
    }
}

let poodle = new Cachorro (4, "Branco")
console.log (poodle.patas)

console.log (new Cachorro instanceof Mamifero) //para ver se Cachorro é uma herança de Mamifero