function imprimirNoConsole (){
    console.log ("Hello");
}
imprimirNoConsole ();

function imprimirUmNum (n){
    console.log ("O número é: " + n);
}
imprimirUmNum (13);

const numAleatorio = function (){
    console.log (Math.random ());
}
numAleatorio ();

function multiplicarNum (x, y, z){
    return x*y*z;
}
console.log (multiplicarNum (11, 12, 4));

function podeDirigir (idade, cnh){
    if (idade>=18 && cnh==true){
        console.log ("Pode dirigir");
    } else {
        console.log ("Não pode dirigir");
    }
}
console.log (podeDirigir (18, true));
console.log (podeDirigir (20, false));
console.log (podeDirigir (25, true));
console.log (podeDirigir (16, false));

function soma (a, b){
    if (a===undefined || b===undefined){
        console.log ("É necessário inserir dois números")
    } else {
        return a+b;
    }
}
console.log (soma (3));
console.log (soma (4, 502));

function potencia (base, exp=2){
    return Math.pow (base, exp);
} //se não enviar um parâmetro irá usar o pré definido
console.log (potencia (2));
console.log (potencia (2, 3));