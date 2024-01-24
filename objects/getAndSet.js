// getter = special method that makes a property readable
// setter = special method that makes a property writable

// validate and modify a value when reading/writing a property

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // setter
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be a positive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be a positive number");
    }
  }

  // getters; make sure to return the _private property
  get width() {
    return `${this._width.toFixed(1)}cm`;
  }

  get height() {
    return `${this._height.toFixed(1)}cm`;
  }

  // rectangle doesn't actually have an area property
  get area() {
    return `${(this._width * this._height).toFixed(1)}cm2`;
  }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
console.log(rectangle);

// Getters and Setters Example 2
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  // setter
  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      // don't accidentally assign this.lastName = this.newLastName
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (newAge >= 0 && typeof newAge === "number") {
      this._age = newAge;
    } else {
      console.error("Age must be a positive integer");
    }
  }

  // getters
  get firstName(){
    return this._firstName;
  }

  get lastName(){
    return this._lastName;
  }

  get age(){
    return this._age;
  }

  get fullName(){
    return this._firstName + " " + this._lastName
  }
}

const person = new Person("Spongebob", "Squarepants", 26);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

console.log(person);
console.log(person.fullName);
