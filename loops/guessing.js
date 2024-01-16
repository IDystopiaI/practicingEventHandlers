// create a number guessing game
// prompts do not seem to update reliably
// Initial min and max
let minNum = 1;
let maxNum = 1000;
// create the random number within a range
let hiddenNum = Math.floor(Math.random() * maxNum + minNum);
console.log(hiddenNum);
// collect userGuess from input field
let guess;
// prompt text
let promptUser = document.getElementById("prompt");
// result for informing user of their guess relative to hidden num
let response = document.getElementById("result");

// let mySubmit = document.getElementById("mySubmit");

console.log(hiddenNum);

// while (guess != hiddenNum) {
  // start while here
  // insert min and max into range prompt
  promptUser.innerText =`Guess a number between ${minNum} and ${maxNum}!`;

  // collect user input *.onclick is a property not a method/function do not add ()
  document.getElementById("mySubmit").onclick = function() {

    guess = document.getElementById("guess");
  }
  console.log(hiddenNum);


  // guess too high
  if (guess > hiddenNum) {
    maxNum = guess;
    response.innerText =`Too High, guess a number between ${minNum} and ${maxNum}`
    // window.prompt(`Too High, guess a number between ${minNum} and ${maxNum}`);
  } else if (guess <= hiddenNum) {
    minNum = guess;
    // window.prompt(`Too Low, guess a number between ${minNum} and ${maxNum}`);
  } else {
    // window.prompt(
      `Invalid input, enter a number between ${minNum} and ${maxNum}`;

    }
  
// end while
console.log(`You guessed the number: ${hiddenNum}!`);

