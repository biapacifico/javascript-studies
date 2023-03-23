class Dog {
    constructor (breed, color){
        this.breed = breed;
        this.color = color;
    }
    beat (){
        console.log ("au au");
    }
}
Dog.prototype.paws = 4;

let luna = new Dog ("Shih Tzu", "Brown");
console.log (luna);
console.log (luna.paws);
luna.beat ();