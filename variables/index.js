/* #region sample code
// declaration
let x;

// assignment
x = 3;

// Can also be done in one step
let y = 3;

let age = 25;
let price = "10.99";
let gpa = "2.1";

console.log(age + " " + price);
console.log(price, age);
// template literals
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is ${gpa}`);

// print without trailing newline, only usable for command line, not browser console
// process.stdout.write("hello, ");
// process.stdout.write("world");

console.log(typeof age);
console.log(typeof price);

let firstName ="Bobby";
let favoriteFood = "sushi";
let email="example123@gmail.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);

// booleans

console.log(`-- Booleans  --`);
let online = true;
// type coercion, automatic/implicit type casting
// bool -> string
console.log(`Server up: ${online}`);
*/

// Variables + the DOM
let fullName = "Bobby Tables";
let age ="25";
let isStudent = false;

document.getElementById("p1").textContent = `Hello ${fullName}.`;
document.getElementById("p2").textContent = `You are ${age}.`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
