let marca = "adidas";
console.log (marca.toUpperCase());

let marca2 = "ADIDAS";
console.log (marca2.toLowerCase());

let foods = ["Pão", "Banana", "Pastel", "Pizza"];
console.log (foods.toString());
console.log (foods.join(" & "));

let comidaRemovida = foods.pop(); //retira o último elemento
console.log (comidaRemovida);
foods.push ("Carne"); //adiciona no final do array
console.log (foods);

let primeiraComidaRemovida = foods.shift (); //retira o primeiro elemento
console.log (primeiraComidaRemovida);
foods.unshift ("Ovo"); //adiciona no início do array
console.log (foods);

let nums = [5, 4, 3, 2, 2, 3, 4, 5];
console.log (nums.indexOf(4)); //mostra a posição da primeira ocorrência
console.log (nums.lastIndexOf(4)); //mostra a posição da última ocorrência

console.log (nums.slice (4, 6));

let names = ["Bianca", "Luna", "Taylor", "Luneta"];
names.forEach (name => {
    console.log ("O nome é " + name);
});

console.log (names.includes ("Luna")); //verifica se existe o elemento no array
console.log (names.includes ("Ed"));

console.log (names.reverse ()); //inverte o array