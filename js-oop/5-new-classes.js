function Dog (breed, color, paws){
    this.breed = breed;
    this.color = color;
    this.paws = paws;
}

Dog.prototype.beat = function() {
    console.log ("au au");
}

let luna = new Dog ("Shih Tzu", "Brown", 4);
console.log (luna);
luna.beat();