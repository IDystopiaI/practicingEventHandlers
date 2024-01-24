/* Closures
    Closures are functions defined within another function. The inner function has access to the variables and scope of the outer functions.
*/
/*
function outer() {
// message is "private". It is isolated to the context of this scope and can't be modified externally
    let message = "Hello";
    // inner has access to everything within the outer scope
    function inner() {
        console.log(message);
    }
    inner();
}

outer();
*/

// maintain state
function increment() {
    let count = 0;
    count++;
    console.log(`Count increased to ${count}`);
}

increment(); // 1
increment(); // 1
increment(); // 1


function createCounter() {
    // count scope moved outside of increment function
    let count = 0;
    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }
    // return an object of increment, which is a reference to the function increment
    // can also be written as
    // return {increment}
    // customProperty is an arbitrary name

    function getCount() {
        return count;
    }
    return {customProperty: increment, getCount}
}
const counter = createCounter();

counter.customProperty() // 1
counter.customProperty() // 2
counter.customProperty() // 3

console.log(counter.getCount()); // 3
