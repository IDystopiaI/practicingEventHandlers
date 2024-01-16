// Math is a built in object that provides a collection of properties and methods

const PI = Math.PI;

let v  = 90;
let w = 10;
let x = 3.21;
let y = 2;
let z;

// does not seem to follow round to even
// z = Math.round(x)
z = Math.floor(x); // round down
z = Math.ceil(x); // round up
z = Math.trunc(x); // removes the decimal
z = Math.pow(x,y); // x^y
z = Math.sqrt(x);
z = Math.log(w); // this is ln not log
z = Math.log10(w); // this is log base 10
z = Math.sin(v); // Radians
z = Math.asin(z); // inverse sin
z = Math.asin(Math.sin(PI/2));
z = Math.abs(-5) // abs
z = Math.sign(-5) // -5 -> -1 | 0 -> 0 | 5 -> 1 simple neg/0/pos function

let max = Math.max(v, w, x); // returns largest number
let min = Math.min(v, w, x); // returns largest number



console.log(z);
console.log(max);
console.log(min);

