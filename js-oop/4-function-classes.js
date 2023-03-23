function createDog (breed, color, paws){
    let dog = Object.create ({});
    dog.breed = breed;
    dog.color = color;
    dog.paws = paws;
    dog.beat = function (){
        console.log ("au au");
    }
    return dog;
}

let luna = createDog ("Shih Tzu", "Brown", 4);
console.log (luna);
luna.beat ();

let mel = createDog ("Salsichinha", "White", 4);
console.log (mel);