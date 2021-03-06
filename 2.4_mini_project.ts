class Dog {
    constructor(readonly name: string) { };

    sayHello(): string {
        return "Dog says hello!";
    }
}

class Fish {
    constructor(readonly name: string) { };

    dive(howDeep: number): string {
        return `Diving ${howDeep} feet!`
    }
}

 type Pet = Dog | Fish;

 function talkToPet(pet: Pet): string | undefined {
     if (pet instanceof Dog) {
         return pet.sayHello();
     } else if (pet instanceof Fish)
     {
        return "Fish cannot talk, sorry.";
     } else {
         return "Unknown pet type!";
     }
 }

const dog = new Dog("Bill");
const fish = new Fish("Hamm");
const guy = {name: "Guy"};

console.log(talkToPet(dog));
console.log(talkToPet(fish));
//console.log(talkToPet(guy));