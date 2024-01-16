// The spread operator = ... allows an iterable such as an array
//                       or string to be expanded into separate elements
//                       (unpacks the elements)

/*
let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
console.log(maximum); // 5
*/

// useful for "Mutating" a string
let username = "Bobby Tables";
let letters = [...username];
console.log(letters);

letters = letters.join("-");
console.log("Name:", username + "\nMutated:", letters);

// Shallow Copy
// - returning a shallow copy with the spread operator
// - a shallow copy means that it's a different data structure, but contains identical values
// - a shallow copy is will not pass changes to the original

let fruits = ["apple", "orange", "banana"]; // original
let vegetables = ["lettuce", "carrot", "radish"];
let newFruits = [...fruits];  // shallow copy of elements
let foods = [...fruits, ...vegetables, "eggs", "milk"];

newFruits[0] ="coconut";
console.log(fruits);
console.log(newFruits);
console.log(foods);
