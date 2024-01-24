/* Super is a keyword used in classes to call to
   call the constructor or access the properties
   and methods of a parent (superclass)
   this = this object
   super = the parent
*/

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // method to be extended
  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed}km/h.`);
  }
}

class Rabbit extends Animal {
  // must call super(); within derived class' constructor
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`This ${this.name} can run`);
    // extending the parent method .move()
    // super indicates this is a method from the parent class
    super.move(this.runSpeed);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age); // calls the parent's (Animal's) constructor
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeed)
  }
}
class Hawk extends Animal {
  constructor(name, age, flightSpeed) {
    super(name, age);
    this.flightSpeed = flightSpeed;
  }

  fly() {
    console.log(`This ${this.name} can fly`);
    super.move(this.flightSpeed)
  }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 5, 40);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flightSpeed);
hawk.fly();

rabbit.run();
