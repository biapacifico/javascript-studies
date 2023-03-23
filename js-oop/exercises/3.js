class Endereco {
    constructor (rua, bairro, cidade, estado){
        this.rua = rua,
        this.bairro = bairro,
        this.cidade = cidade,
        this.estado = estado
    }
    set novaRua (novaRua){
        this.rua = novaRua
    }
    set novoBairro (novoBairro){
        this.bairro = novoBairro
    }
    set novaCidade (novaCidade){
        this.cidade = novaCidade
    }
    set novoEstado (novoEstado){
        this.estado = novoEstado
    }
}

let primeiraCasa = new Endereco ("Talk Tonight", "Wonderwall", "Acquiesce", "Reino Unido")
//console.log (primeiraCasa)
primeiraCasa.novaRua = "Supersonic"
primeiraCasa.novoBairro = "Definetly Maybe"
primeiraCasa.novaCidade = "Oasis"
primeiraCasa.novoEstado = "Londres"
console.log (primeiraCasa)

let segundaCasa = new Endereco ()
segundaCasa.novaRua = "Some Might Say"
segundaCasa.novoBairro = "Sunday Morning Call"
segundaCasa.novaCidade = "Live Forever"
segundaCasa.novoEstado = "Roll with it"
console.log (segundaCasa)