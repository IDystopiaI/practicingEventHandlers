/* eslint-disable*/
// callbacks = a function that is passed as an argument to other functions
// see https://dev.to/bbarbour/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd for an article on how
// javascript is asynchronous

function hello (callback) {
        console.log("Hello!");
        // callback is an arbitrary name, still somewhat asynchronous
        // when used with the setTimeout function
        callback();
}

function goodbye() {
    console.log("Goodbye!");
}

function leave() {
    console.log("Leave!");
}

// if hello takes a while to execute, nothing stops the browser
// from executing goodbye first then completing the execution of hello
// hello is called first but goodbye is able to complete execution before hello
hello(leave);
