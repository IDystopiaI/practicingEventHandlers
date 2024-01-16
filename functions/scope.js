/* eslint-disable */
// Variable Scope = where a variable is recognized and accessible
//                  (local vs global)

// each variable name must be unique within its scope
// a variable name can be reused as long as it is created within a different scope

let x = 3;

function function1() {
  let x = 1;
  console.log(x);
}

function function2() {
  let x = 2;
  console.log(x);
}

function function3() {
  x = 7; // uses global x if called
  console.log(x);
}

function1(); // 1
function2(); // 2
console.log(x); // 3
