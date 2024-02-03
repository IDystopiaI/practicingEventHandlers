/*
    Synchronous = executes line by line consecutively in a sequential manner.

    Asynchronous = allows multiple operations to be performed
    concurrently without waiting. Does not block the execution
    flow and allows the program to continue. (I/O operations,
    network requests, fetching data). Handled with Callbacks,
    Promises, Async/Await.
*/

// uses a callback to handle asynchronous code
function func1(callback) {
  setTimeout(() => {
    console.log("Task 1");
    // don't forget () to invoke the callback
    callback()
  }, 3000);
}

function func2() {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}

func1(func2);
