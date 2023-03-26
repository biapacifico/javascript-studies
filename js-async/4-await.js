function somaComDelay (x, y){
    return new Promise (resolve => {
        setTimeout (function (){
            resolve (x+y)
        }, 4000)
    })
}

async function resSoma (x, y, z){
    let soma1 = somaComDelay (x, y)
    let soma2 = z

    return await soma1+soma2
}

resSoma (1, 2, 3).then (value => console.log (value))