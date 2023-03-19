function positiveNum (x){
    return Math.abs (x);
}
console.log (positiveNum (-8));
console.log (positiveNum (-27));

function textoTam (str){
    if (str.length>10){
        console.log ("Texto muito longo");
    } else {
        console.log ("Texto dentro do limite");
    }
}
console.log (textoTam ("Gosto de programar"));
console.log (textoTam ("Luna"));