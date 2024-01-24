// arrow functions are a way to write short anonymous functions
// very common when a callback function is required

// Function expressions are also used for Callbacks in asynchronous operations, Higher-order functions, closures, and event listeners.

// Syntax: (parameters) => some code

/* declaration
function hello() {
    console.log("Hello");
}
*/
/* function expression
 let sayHi = function(){
     console.log("Hello");
    }
*/

// arrow function
let goodbye = () => console.log("Goodbye");
goodbye();

// with some parameters
let firstName = "Spongebob";
let ableToDrive = false;
// can have a more complex function body if you wrap it within curly braces like so
let greeting = (name, license) => {
  console.log(`Hello ${name}`);
  console.log(`You can ${license}drive`);
};
// calling the arrow function

let licenseStatus;
if (ableToDrive == false) {
  licenseStatus = "not ";
} else {
  licenseStatus = "";
}

greeting(firstName, licenseStatus);

// setTimeout(() => {
//    console.log("Hello");
//}, 3000);

// map
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((base) => Math.pow(base, 2));
const cubes = numbers.map((base) => Math.pow(base, 3));

// filter
const evenNums = numbers.filter((element) => element %2 === 0);
const oddNums = numbers.filter((element) => element %2 !== 0);

// reduce
const sum = numbers.reduce((accumulator, next) => accumulator + next);

console.log("Squares:",squares);
console.log("Cubes:",cubes);
console.log("Evens:",evenNums);
console.log("Odds:",oddNums);
console.log("Sum:",sum);
