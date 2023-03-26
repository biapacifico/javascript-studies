const pattern = /luna/
console.log (pattern.test ("A luna é marrom"))
console.log (/luna/.test ("A luna é marrom"))

const letter = /b/
console.log (letter.test ("banana"))
console.log (/b/.test ("banana"))

const numbers = /[0-9]/
console.log (numbers.test ("Tem o número 8?"))
console.log (numbers.test ("Tem o número 78451236?"))

const dRegexp = /\d/ //testa se tem algum número
console.log (dRegexp.test ("abc"))
console.log (dRegexp.test ("   "))
console.log (dRegexp.test ("abc123"))
console.log (dRegexp.test ("123456"))

const wRegexp = /\w/ //somente caracter
console.log (wRegexp.test ("abc"))
console.log (wRegexp.test ("   "))
console.log (wRegexp.test ("abc123"))
console.log (wRegexp.test ("123456"))