// object = A collection of related properties and/or methods
// Can represent real world objects (people, products, places)
// object structure = {key: value,
//                     function}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    // adding a method
    sayHello: function() {
        console.log("Hi! I am SpongeBob!");
    },
    eat: function(){console.log("I am eating a Krabby Patty")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => {console.log("Hey, I'm Patrick...")},
    eat: () => {console.log("I am eating some Ice Cream!")},

}

console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);

// add a property to an object
person1.animal = "Sponge";
console.log(person1.animal);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

// calling method
person1.sayHello();
person2.sayHello();

