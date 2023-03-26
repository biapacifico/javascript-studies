const ano = /\d\d\d\d/
console.log (ano.test ("22"))
console.log (ano.test ("abc"))
console.log (ano.test ("abc22"))
console.log (ano.test ("2023"))

const dia = /\d\d/
console.log (dia.test ("22") && "22".length==2)
console.log (dia.test ("abc"))
console.log (dia.test ("abc2"))
console.log (dia.test ("2023") && "2023".length==2)

const palavraMinimoTresLetras = /\w\w\w/
console.log (palavraMinimoTresLetras.test ("abc"))
console.log (palavraMinimoTresLetras.test ("abc2"))
console.log (palavraMinimoTresLetras.test ("abcdef"))
console.log (palavraMinimoTresLetras.test ("ab"))