// Math.Random generates a number between 0 and 1
// let randomNum = Math.random();


/* Random number in a range and dice example
// gives a number between 0 and 6 exclusive
// add 1 to make it between 1 and 6 inclusive
let dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);

// a random number between a certain range
const min = 50;
const max = 100;
// remove the + 1 to make this exclusive
let range = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(range);

*/

// Random Number Generator in a webpage
/* refactor

document.getElementById("myButton").onclick = function() {
    // use Math.ceil to make inclusive
    let diceRoll = Math.ceil(Math.random() * 6);
    document.getElementById("myLabel").innerText = diceRoll;
}
*/

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

// dice range
const MIN = 1;
const MAX = 6;
let randomNum1
let randomNum2
let randomNum3

// random * range(add + 1 to make inclusive) + offset

myButton.onclick = function () {
    randomNum1 = Math.floor(Math.random() * (MAX - MIN)) + MIN;
    randomNum2 = Math.floor(Math.random() * (MAX - MIN)) + MIN;
    randomNum3 = Math.floor(Math.random() * (MAX - MIN)) + MIN;
    label1.innerText = randomNum1;
    label2.innerText = randomNum2;
    label3.innerText = randomNum3;
}

