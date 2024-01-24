// forEach() = iterates over each element of an iterable and applies a callback function to it
//             returns undefined
/*
let myArray = [1, 2, 3, 4];

// written like this, the original array is left alone
myArray.forEach((myArray, index) => (myArray[index] *=2));
console.log(myArray);

// this will mutate the original array
myArray.forEach((element, index) => (myArray[index] = element * 2));
console.log(myArray);
*/

// array.forEach(callback)
// forEach provides these -> element, index, array

let numbers = [1, 2, 3, 4, 5];

function display(element, index, array) {
  console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
}
/*  forEach provides the element, index and array to the callback function
    the callback function's implementation determines which arguments gets used

    Element: 1, Index: 0, Array: 1,2,3,4,5
    Element: 2, Index: 1, Array: 1,2,3,4,5
    Element: 3, Index: 2, Array: 1,2,3,4,5
    Element: 4, Index: 3, Array: 1,2,3,4,5
    Element: 5, Index: 4, Array: 1,2,3,4,5
*/
// passing an un-invoked function as the callback function
numbers.forEach(display);

// double the elements within an array
// these three args are passed into the double function
// javascript functions can take any number of arguments, which is why there was no issue for
function double(element, index, array) {
  array[index] = element * 2;
}
function triple(element, index, array) {
  array[index] = element * 3;
}

function square(element, index, array) {
  array[index] = Math.pow(element, 2);
}

function cube(element, index, array) {
  array[index] = element ** 3;
}

numbers.forEach(double);
console.log(numbers);

numbers.forEach(triple);
console.log(numbers);

numbers.forEach(square);
console.log(numbers);

numbers.forEach(cube);
console.log(numbers);

let fruits = ["apple", "orange", "banana", "coconut"];

function fruitstand(element) {
  console.log(element);
}

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}

function titleCase(element, index, array) {
  array[index] =
    element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

fruits.forEach(lowerCase);
fruits.forEach(fruitstand);
fruits.forEach(upperCase);
fruits.forEach(fruitstand);
fruits.forEach(titleCase);
fruits.forEach(fruitstand);
