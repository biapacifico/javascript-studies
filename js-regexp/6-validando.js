const validarDominio = /[?www.]\w+(.com.br)|.com/
console.log (validarDominio.test ("www.google.com"))
console.log (validarDominio.test ("www.google.com.br"))
console.log (validarDominio.test ("www.google"))
console.log (validarDominio.test ("google.com"))

const validarEmail = /\w+@\w+\.\w+/
console.log (validarEmail.test ("bi.marcal22@gmail.com"))
console.log (validarEmail.test ("bi.marcal22@gmail"))
console.log (validarEmail.test ("bi.marcal22@gmail.com.br"))

const validarDatas = /[0-31]{2}[/][0-12]{2}[/][0-9]{4}/
console.log (validarDatas.test ("22/01/2003"))
console.log (validarDatas.test ("5/12/2003"))
console.log (validarDatas.test ("22/12/03"))