let cachorro = {
    patas: 4,
    raça: "SRD",
    latido: function (){
        console.log ("au au");
    }
}

console.log (cachorro.raça);

let luna = Object.create (cachorro);
luna.raça = "Shih Tzu";
luna.latido ();
console.log (luna.raça);

let mel = Object.create (cachorro);
mel.raça = "Salsichinha";
console.log (mel.raça);