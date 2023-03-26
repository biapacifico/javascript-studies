const notAb = /[^ab]/ //negação
console.log (notAb.test ("a"))
console.log (notAb.test ("ab"))
console.log (notAb.test ("cde"))

const notAz = /[^a-z]/
console.log (notAz.test ("cnbvcvhvfh"))
console.log (notAz.test ("az4"))

const numbers = /\d+/ //pelo menos um número
console.log (numbers.test ("12345"))
console.log (numbers.test ("2"))
console.log (numbers.test (" "))

const question = /lun?a/ //dígito anteorior opcional
console.log (question.test ("luna"))
console.log (question.test ("lua"))

const question2 = /\d+\w?/
console.log (question2.test ("123"))
console.log (question2.test ("123b"))
console.log (question2.test ("123 "))

const cep = /\d{5}-\d{3}/ //limita o num de caracter
console.log (cep.test ("12345-123"))
console.log (cep.test ("2345-13"))
console.log (cep.test ("abc"))

const telefone = /\(\d{2}\)\d{4,5}-\d{4}/
console.log (telefone.test ("(31)4444-4444"))
console.log (telefone.test ("(31)55555-4444"))