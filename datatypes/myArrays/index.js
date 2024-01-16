// Arrays = in javascript are a variable like structure that can hold more than one value.
//          unlike arrays from statically typed languages, the data types do not need to match
//          and are dynamically sized
//          arrays are retain insertion order and individual elements can be accessed with []
//          To slice an array use the Array..prototype.slice() function, JS doesn't support [] slicing

let fruits = ["apple", "orange", "banana"];

fruits[0] = "pizza";

console.log(fruits[0]); // pizza
console.log(fruits[1]); // orange
console.log(fruits[2]); // banana
// console.log(fruits[3]); // undefined
console.log(fruits.slice(1)); // ['orange', 'banana']

// add an element to the end of an array
fruits.push("coconut");
console.log(fruits[3]); // coconut
console.log(fruits);
console.log("Removed from array: " + fruits.pop());
console.log(fruits);

console.log(".unshift adds an element to the beginning of the array");
fruits.unshift("mango")
console.log(fruits);
console.log(".shift() removes an element from the beginning of the array");
console.log("Removed from start of array: " + fruits.shift());
console.log(fruits);

// .length is an array property returning the total number of elements in the array
let numOfFruits = fruits.length;
console.log(numOfFruits);

// indexOf() returns the index of the specified element within the array
// if there are no matches, it returns a -1
let index = fruits.indexOf("orange");
console.log(fruits[index] + " is at index " + index);

// arrays can be looped through with for loops
// if the loop ends in 'undefined' check to see if you used <= instead instead of <
for (let fruit = 0; fruit < fruits.length; fruit+=1) {
    console.log(fruits[fruit]);
}

// reverse the array
console.log("\nReversing an array");
// fruits.length -1 to prevent initial index out of bounds
// decrement i until index 0 is reached
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}

// mutates array order
// fruits.sort();

// use .toSorted if you would like to preserve the original array order
// This method creates a new array while the previous alters in place
console.log(".toSorted(): " + fruits.toSorted());

// enhanced for loop, keywords somewhat similar to list comprehension syntax
console.log("\nEnhanced for loop: ");
for (let fruit of fruits) {
    console.log(fruit);
}


console.log(fruits);
// reverse mutates, calling slice before creates a shallow copy of the original array
// they share references, so changes shared between instances
console.log(fruits.slice().reverse());
console.log(fruits);

// in most cases, if you don't want a mutated list, it's probably best to create a slice of the original then call a method on top of the new array
