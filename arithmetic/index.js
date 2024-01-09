// arithmetic operators = operands (values, variables, etc.)
//  - operators ( + - * / ) these are built into javascript
// does not support using parentheses juxtaposition for math
// 3(2 + 4) is not valid, 3 * (2 + 4) is valid

/* pre-increment vs post-increment
// increment, can be ++i or i++ in javascript.
// alternatively i += n for stepping
// assignments happen first before math in an example like const y = x++;
let x = 3;
const y = x++;
// x is assigned to y before increment y, -> = 3
console.log(`x:${x}, y:${y}`);

let a = 3;
const b = ++a;
// a is incremented before being assigned to b, b -> 4
console.log(`a:${a}, b:${b}`);
*/

let students = 30;
// increment and decrement can be pre/post-affixed
// these are augment-assignment operators
students++; // increment
students--; // decrement

students += 1; // addition
students -= 1; // subtraction
students *= 2; // multiplication
students /= 2; // division
students ** 2; // exponent

// writing an equation instead of augment
let remainingStudents = students % 11; // modulus

// to access other math functions, you need to call the static methods
// from Math
// students = Math.floor(students / 2);

console.log(students);

/* structured clone extra
// Create an object with a value and a circular reference to itself.
const original = { name: "MDN" };
original.itself = original;

// Clone it
const clone = structuredClone(original);

console.assert(clone !== original); // the objects are not the same (not same identity)
console.assert(clone.name === "MDN"); // they do have the same values
console.assert(clone.itself === clone); // and the circular reference is preserved

// objects are not immutable
const obj_a = { name: "bob", age: 15 };
//obj_b is a reference to a, changes will mutate obj_a
// const obj_b = obj_a;

// use structuredClone to clone an object
const obj_b = structuredClone(obj_a);
obj_b.name = "ted";
console.log(obj_a.name);
console.log(obj_b.name);
*/

let result = 1 + 2 * (3 + 16);
console.log(result);

// floating point error
let float = 0.1 + 0.2;
console.log(float);

