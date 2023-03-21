let nome = "     Taylor   ";
let nomeCorrigido = nome.trim (); //retira o que não é string
console.log (nome);
console.log (nomeCorrigido);

let sku = "56";
let skuCorrigido = sku.padStart (6, "0"); //padroniza
console.log (skuCorrigido);

let frase = "Estudo Engenharia de Computação";
let fraseArr = frase.split (" "); //retorna um array
console.log (fraseArr);
novaFrase = fraseArr.join ("<->"); //faz o contrário do split 
console.log (novaFrase);

let word = "Luna ";
console.log (word.repeat (10));