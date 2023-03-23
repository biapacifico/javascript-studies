class contaBancaria {
    constructor (saldoCorrente, saldoPoupanca, jurosPoupanca){
        this.saldoCorrente = saldoCorrente,
        this.saldoPoupanca = saldoPoupanca,
        this.jurosPoupanca = jurosPoupanca
    }
    deposito (dinheiro){
        this.saldoCorrente = this.saldoCorrente + dinheiro
    }
    saque (dinheiro){
        this.saldoCorrente = this.saldoCorrente - dinheiro
    }
    tranferirDinheiro (dinheiro){
        this.saldoPoupanca = this.saldoPoupanca - dinheiro
        this.saldoCorrente = this.saldoCorrente + dinheiro
    }
    calcularJuros (){
        let juros = (this.saldoPoupanca*this.jurosPoupanca)/100
        this.saldoPoupanca = this.saldoPoupanca + juros
    }
}

class contaEspecial extends contaBancaria {
    constructor (saldoCorrente, saldoPoupanca, jurosPoupanca){
        super (saldoCorrente, saldoPoupanca, jurosPoupanca*2)
    }
}

let conta1 = new contaBancaria (1000, 5000, 2)
//console.log (conta1)
conta1.saque (200)
console.log (conta1.saldoCorrente)
conta1.deposito (600)
console.log (conta1.saldoCorrente)
conta1.tranferirDinheiro (300)
console.log (conta1.saldoCorrente)
console.log (conta1.saldoPoupanca)
conta1.calcularJuros ()
console.log (conta1.saldoPoupanca)
//console.log (conta1)

let conta2 = new contaEspecial (2000, 4000, 2)
//console.log (conta2)
conta2.saque (200)
console.log (conta2.saldoCorrente)
conta2.deposito (600)
console.log (conta2.saldoCorrente)
conta2.tranferirDinheiro (300)
console.log (conta2.saldoCorrente)
console.log (conta2.saldoPoupanca)
conta2.calcularJuros ()
console.log (conta2.saldoPoupanca)
//console.log (conta2)