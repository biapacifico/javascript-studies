function lembrarSoma (x){
    return function (y){
        return x+y;
    }
}
let soma = lembrarSoma (5);
console.log (soma (7));

function rec (n){
    if (n%2==0){
        console.log ("O número " + n + " é par");
    } else {
        //console.log (n);
        rec (n-1);
    }
}
rec (49);