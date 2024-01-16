// a cleaner iteration of guessing.js
// Do not use while loops unless using window.prompt()
// unable to pause a loop otherwise

let minNum = 1;
let maxNum = 1000;
// get random value
let hiddenNum = randomRange(minNum, maxNum, true);
// debug
console.log(hiddenNum);

// variables for interacting with the DOM
/* response, prompt, userGuess, mySubmit
 * response - for informing the user too high/low in relation to hiddenNum
 * prompt - informs the user of the min and max guess range
 * userGuess - textfield containing user's guess
 * mySubmit - submit button, onclick to trigger parsing userGuess
 */

let response = document.getElementById("response");
let promptUser = document.getElementById("prompt");
let userGuess;
let mySubmit = document.getElementById("mySubmit");

let highlight = document.getElementById("userGuess");
// only incrementing attempts on valid input
let attempts = 0;
// way to stop user from continuing to increase attempts after correct guess
let incrementor = 1;

/*
    Javascript is event driven!
    Do not use a while loop to wait on user input
    Just listen for the event (.onclick) to drive your events
    Otherwise, there's a good chance the program will keep looping
*/
// collect user response
promptUser.innerText = `Guess a number between ${minNum} and ${maxNum}`;
mySubmit.onclick = function () {
  userGuess = Math.trunc(document.getElementById("userGuess").value);
  // Do not forget to use the .value property
  console.log("User Guess: ", userGuess);
  // Filter Bad input
  if (isNaN(userGuess)) {
    response.innerText = `Invalid Input, Please enter a number`;
    promptUser.innerText = `Guess a number between ${minNum} and ${maxNum}`;
    // guess below or above bounds
    highlightTextfield(highlight);
  } else if (userGuess < minNum || userGuess > maxNum) {
    response.innerText = "You guessed a number outside of the defined range.";
    promptUser.innerText = `Guess a number between ${minNum} and ${maxNum}`;
    highlightTextfield(highlight);
  } else if (userGuess == minNum || userGuess == maxNum) {
    response.innerText = "You've already guessed that value";
    highlightTextfield(highlight);
  } else {
    // input has been filtered start testing
    if (userGuess > hiddenNum) {
      // update upper bound
      maxNum = userGuess;
      response.innerText = `Too High, Guess Again!`;
      promptUser.innerText = `Guess a number between ${minNum} and ${maxNum}`;
      attempts += incrementor;
      // user guesses low
      highlightTextfield(highlight);
    } else if (userGuess < hiddenNum) {
      attempts += incrementor;
      minNum = userGuess;
      response.innerText = "Too Low, Guess Again!";
      promptUser.innerText = `Guess a number between ${minNum} and ${maxNum}`;
      // user enters minNum/maxNum
      // user guesses correctly
      highlightTextfield(highlight);
    } else if (userGuess == hiddenNum) {
      attempts += incrementor;
      incrementor = 0;
      response.innerHTML = `Congratulations!!!`;
      promptUser.innerText = `You guessed the secret number ${hiddenNum} Correctly in: ${attempts} attempts!`;
    }
  }
};
// ********************* Functions *********************
// making use of Hoisting
// generates a random number between min and max, and optional inclusive arg
/**
 * [randomRange description]
 * @param {Number} min Lower bound for a randomly generated integer
 * @param {Number} max Upper bound for a randomly generated integer; exclusive by default
 * @param {Boolean} incl Optional Boolean flag making upper-bound inclusive
 */
function randomRange(min, max, incl = false) {
  let excl = 0;
  if (incl) {
    excl = 1;
  }
  return Math.floor(Math.random() * (max - min + excl) + min);
}

// highlights textfield
function highlightTextfield(target) {
  target.focus();
  target.select(); // can't method chain
}
