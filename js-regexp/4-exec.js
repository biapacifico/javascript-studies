//retorna a informação procurada

const number = /\d+/
console.log (number.exec ("Tem o número 22 aqui"))
console.log (number.exec ("Não tem número aqui"))

const letter = /a/
console.log (letter.exec ("luna gosta de tomar banho"))