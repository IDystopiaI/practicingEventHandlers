// Ternary Operator
// - An alterative way to writing if statements
// - uses condition ? code if true : code if false; structure
// - can be chained like an else if statement

/* basic ternary example
let age = 21;
// condition ? true : else;
let message = age >= 18? "You're an adult" : "You're a minor";

console.log(message);
*/

// practice
let time = 16;
let greeting = time < 12 ? "Good norning" : "Good afternoon";
console.log(greeting);

let isStudent = true;
let enrollmentStatus = isStudent ? "You are enrolled" : "You are not enrolled";
console.log(enrollmentStatus);

// if customer spends above a certain amount, give discount
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
// expressions can be written inside a template literal, not restricted to basic substitution
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);
