/* eslint-disable */
// disables eslint warnings for this file which is just examples of function syntax
// suppresses warning that functions aren't being called
// https://stackoverflow.com/a/56719951

// a function written with the function declaration is hoisted, and therefore can be placed anywhere within the file
// functions created with
function add(x, y) {
    return x + y
}

// named "anonymous" function (arrow function, JS equivalent of lambda)
// a function written this way is not hoisted.
// generally these functions are created without a name as they're usually not reused
// make a recursive anonymous function?
let multiply  = (a, b) => {
    return a * b;
}

function subtract(x , y) {
    return x - y;
}

function divide(x, y) {
    return x / y
}

let sum = add(2, 3);

// returns true if number is even, false of odd
function isEven(number) {

    // if (number % 2 === 0) {
    //     return true;
    // }

    // ternary
    return number % 2 === 0 ? true : false;
}


function isValidEmail(emailAddress) {
    let atSymbol = emailAddress.indexOf("@");

    if (atSymbol > 0) {
        return true;
    }
    return false;
}
let email = "example@gmail.com"


// console.log(sum);
console.log(isEven(3));
console.log(isEven(4));

console.log("Valid: " + isValidEmail(email));
