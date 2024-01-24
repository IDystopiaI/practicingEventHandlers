// function expression = a way to define functions as values or variables, does not support hoisting
// function declaration = defining a reusable block of code to perform a specific task, supports hoisting
// Function expressions are also used for Callbacks in asynchronous operations, Higher-order functions, closures, and event listeners.

let hello = function() {
    console.log("hello");
}

// still requires () to be invoked
hello();

// as a callback, hello does not need () to be invoked
// setTimeout(hello, 3000);

// setTimeout(() => {
//     console.log("hello");
// }, 3000);

// when using functions this way, we are not adding the the existing name spaces
// the downside is that this "square" function is not reusable, it's anonymous (lambda)
const numbers = [1,2,3,4,5,6,7,8];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
})
console.log(squares);

// sometimes it's easier to write the function as a declaration first
// then turn it into an expression afterwards
/*
function cube(element) {
    return Math.pow(element, 3);
}
*/

// expressions are essentially just stripping out the function name
// and passing this anonymous function as a callback
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
})
console.log(cubes);

const evenNums = numbers.filter(function (element) {
    return element %2 === 0;
})

// arrow function
const oddNums = numbers.filter((element) => element %2 !== 0);
console.log("Evens: ",evenNums);
console.log("Odds: ",oddNums);

const total = numbers.reduce(function(accumulator, next) {
    return accumulator + next})
console.log(total);
