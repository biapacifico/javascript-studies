class contaBanco {
    constructor (saldo){
        this.saldo = saldo
    }
    saque (valor){
        this.saldo = this.saldo - valor
    }
    deposito (valor){
        this.saldo = this.saldo + valor
    }
}

let banco = new contaBanco (10000)

banco.saque (100)
console.log (banco.saldo)

banco.deposito (500)
console.log (banco.saldo)