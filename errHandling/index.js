/*
    Error = an object that is created to represent a problem that occurs.
    Occur often with user input or establishing a connection
*/

/*
    Some errors include:
    network errors
    promise rejection
    security errors

    These errors can be handled with:
    try { } = encloses the code that my cause an error
    catch { } = Catch and handle any thrown errors from try { }
    finally { } = (optional) Always executes, typically used for cleanup

    */

// console.lag("Hello"); // TypeError ...lag is not a function
// console.log(x) // ReferenceError x is not defined

// comment me
let x = "Hello";

try {
  console.log(x);
  //    network errors
  //    promise rejection
  //    security errors
} catch (error) {
  console.error(error);
} finally {
  // close files
  // close connections
  // release resources
  console.log("This always executes");
}

console.log("You have reached the end!");

// handle bad user input
try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    // dangerous
    const divisor = Number(window.prompt("Enter a divisor: "));

    if (divisor == 0) {
        throw new Error("You can't divide by zero!");
    }
    if (isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number")
    }
    if (!dividend) {
        throw new Error("No dividend entered.");
    }
    if (!divisor) {
        throw new Error("No Divisor entered.");
    }


    const result = dividend / divisor;
    console.log(result);

} catch (error) {
    console.log(error);
}

console.log("This is the end of the program!");
