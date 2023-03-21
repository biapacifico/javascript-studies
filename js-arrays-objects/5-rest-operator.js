let num = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;

function printNumbers (...args){
    for (let i=0; i<args.length; i++){
        console.log (args[i]);
    }
}

printNumbers (num, num2, num3);
console.log ("\n");
printNumbers (num3, num4);