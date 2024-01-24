// callbacks

// a sum function that calls another function after it is done executing
function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}


sum(displayDOM, 10, 20);

function displayDOM(result) {
    document.getElementById("myH1").textContent = result;
}

/*
function display(value) {
    console.log(value);
}
*/
