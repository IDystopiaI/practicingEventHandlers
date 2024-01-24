// inheritance = allows a new class to inherit properties and methods from an existing class
//               (parent -> child) this helps with code reusability

// parent
class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

// child class
class Rabbit extends Animal {
  name = "rabbit";

  run(){
    console.log(`The ${this.name} is running.`);
}
}

class Fish extends Animal {
    name = "fish";

    swim() {
      console.log(`The ${this.name} is swimming.`);

    }
}

class Hawk extends Animal {
    name = "hawk";

    fly() {
        console.log(`The ${this.name} is flying.`);
    }
}

// instances of child classes
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();


rabbit.eat();
rabbit.alive = false;
console.log(rabbit.alive);
rabbit.sleep();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();

console.log(fish.alive);
fish.eat();
fish.sleep();

rabbit.run();
fish.swim();
hawk.fly();
