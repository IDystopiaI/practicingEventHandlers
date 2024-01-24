// this = reference to own instance of object
//        the object depends on the immediate context
//        person.name = this.name

const person1 = {
    name: "SpongeBob",
    favFood: "hamburgers",
    // must be a function, arrow funcs not hoisted
    // this is a reference to self
    sayHello: function(){console.log(`Hello, I'm ${this.name}`);},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`);},
    // in a browser context, using an arrow function with the this. keyword will reference
    // the window property, not the object. This is due to arrow funcs not being hoisted
    testing: () => console.log(this),
}

const person2 = {
    name: "Patrick",
    favFood: "Pizza",

    // is able to reference person1.name as this is not a private property
    sayHello: function(){console.log(`Hello, I'm ${person1.name}`);},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`);},
}

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();


person2.testing()
// console.log(this);
