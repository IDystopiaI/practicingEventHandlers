// Number Guessing Game
let minNum = 1;
let maxNum = 100;
let answer = randomRange(minNum, maxNum, true);
console.log(answer); // debug


let attempts = 0;
let guess;

// is game active
let running = true;

while (running) {

    // collect user input with window prompt, clean up any decimals.
    guess = Math.trunc(window.prompt(`Enter a number between ${minNum} and ${maxNum}`));
    // console.log(guess, typeof guess);
    // check user input
    if(isNaN(guess)) {
        window.alert("Please enter a valid number");
    } else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    } else {
        // user entered valid input
        attempts ++;
        if (guess < answer) {
            window.alert(`Too Low, Try Again!`)
        } else if (guess > answer) {
            window.alert(`Too High, Try Again!`)
        } else {
            window.alert(`Congratulations, You Guessed the Number: ${answer} Correctly in ${attempts} attempts`)
            // stop game
            running = false;
        }
    }


}
// **************** Functions ****************
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
    return  Math.floor(Math.random() * (max - min + excl) + min)
}
