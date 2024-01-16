// = assignment operator
// == comparison operator (compares if values are equal and uses implicit type coercion)
// === strict equality operator (Compares if two values are equal and have the same datatype)
// !== strict inequality operator Are the values or datatypes different

console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(5 === parseInt("5")); // true due to explicit type conversion


// double bitwise NOT is weird, both truncates and converts a string to a number
// also can't be used to strictly match floats
console.log(5 === ~~"5.5"); // true

// Bitwise NOTing any number x yields -(x + 1). For example, ~-5 yields 4.
// type coercion takes place
// ~4294967295 (2^32 - 1) results in 0
console.log("Double Bitwise NOT: "+ ~~5.5);

console.log("Use Math.trunc() to truncate numbers to integers, '~4294967295' results in: " + ~4294967295);
/*
console.log(~~-5.6);
console.log(Math.floor(-5.6));
console.log(~~5.6);
*/
