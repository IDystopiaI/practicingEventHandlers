/* constructor = special method for defining the
                 properties and methods of an object
*/

// Typically, constructors begin with capital letters to differentiate them
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    // class method
    this.drive = function() {
        console.log(`The ${this.make + " " + this.model} is currently driving`);
    }
}

// construct Car objects, use new to create an instance of a class
let car1 = new Car("Ford", "Mustang", 2024, "red");
let car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
let car3 = new Car("Dodge", "Charger", 2026, "silver");


// dict representation
// console.log(car1);
console.log("Car1: ");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log("\nCar2:");
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log("\nCar3:");
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive();
