async function somar (x, y){
    return x+y
}

console.log (somar (5, 6)) //promise

somar (5, 6).then (value => console.log (value))