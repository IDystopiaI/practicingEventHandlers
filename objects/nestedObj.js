/* Nested Objects
      Objects inside of other objects
      They you to represent more complex data structures
      Child objects are enclosed by a parent object

      Person{Address{}, ContactInfo{}}
      ShoppingCart{Keyboard{}, Mouse{} Monitor{}}
*/

const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {
    street: "124 Conch St.",
    city: "Bikini Bottom",
    country: "Int. Waters",
  },
};

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(...person.hobbies);
console.log(person.hobbies[1]);
console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

// for in loop iterates over all enumerable string properties of an object
for (const property in person.address) {
  console.log(person.address[property]);
}

console.log("\n*** Example 2 ***");

class Character {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    // Construct an Address object
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const Sandy = new Character(
  "Sandy Cheeks",
  35,
  "Tree Dome",
  "Bikini Bottom",
  "Texas"
);

const Sponge = new Character(
  "Spongebob",
  30,
  "124 Conch St.",
  "Bikini Bottom",
  "Int. Waters"
);

const Squid = new Character(
  "Squidward Tortellini",
  40,
  "126 Conch St.",
  "Bikini Bottom",
  "Int. Waters"
);

console.log("Character Object structure");
console.log(Sandy);
console.log(Sponge.address.city);
console.log(Squid.name);
console.log("Keys:");
console.log("<Character>: " + Object.keys(Sandy));
console.log("<Character>.<address>: "+ Object.keys(Sandy.address));
