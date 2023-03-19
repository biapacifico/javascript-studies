for (let i=0; i<=20; i++){
    console.log ("O valor de i é: " + i);
}

let nome = "Luna"
for (let j=0; j<10; j++){
    console.log (j);
    if (j==3){
        nome = "Luneta";
    }
    if (j==5 && nome=="Luneta"){
        console.log ("O nome é Luneta");
        break;
    }
}

for (let k=0; k<=10; k++){
    if (k%2==0){
        //console.log ("Caiu no continue");
        continue;
    } 
    console.log (k);
}