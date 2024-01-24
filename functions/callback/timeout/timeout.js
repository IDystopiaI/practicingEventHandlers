/* setTimeout()
    a function in Javascript that allows you to schedule the execution of
    a function after an amount of time(ms). Times are approximate
    (varies based on the workload of the Javascript runtime env.)

    as a reminder, this is how a callback function works:
    function hello (callback) {
        console.log("Hello!");
        // the function controls when to invoke the 'callback' parameter
        callback();
}

    * setTimeout(callback, delay);
    * clearTimeout(timeoutId) = can cancel a timeout before it triggers. takes a timeoutId as a parameter
*/

/*
function sayHello() {
    window.alert("Hello");
}

setTimeout(() => {
    sayHello()
}, 3000);

// if the func is passed as a parameter, don't include the ()
setTimeout(sayHello, 3000);
*/

// anonymous functions can be an argument for setTimeout too
// creating timeoutId for clearTimeout() func
const timeoutId = setTimeout(() => {
    window.alert("Hello")
}, 3000);
// stops setTimeout() from running
clearTimeout(timeoutId);
