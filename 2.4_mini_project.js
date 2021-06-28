var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    ;
    Dog.prototype.sayHello = function () {
        return "Dog says hello!";
    };
    return Dog;
}());
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    ;
    Fish.prototype.dive = function (howDeep) {
        return "Diving " + howDeep + " feet!";
    };
    return Fish;
}());
function talkToPet(pet) {
    if (pet instanceof Dog) {
        return pet.sayHello();
    }
    else if (pet instanceof Fish) {
        return "Fish cannot talk, sorry.";
    }
    else {
        return "Unknown pet type!";
    }
}
var dog = new Dog("Bill");
var fish = new Fish("Hamm");
var guy = { name: "Guy" };
console.log(talkToPet(dog));
console.log(talkToPet(fish));
//console.log(talkToPet(guy));
