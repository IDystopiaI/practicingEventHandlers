// Random Password Generator
// a configurable password generator for create a password of n-length
// and for allowing certain character sets

/* other ways of reusing existing code
// somewhat janky, convert the existing alphabet string to all uppercase using String obj
// and calling .toUpperCase method on the lowerCaseChars string
// const upperCaseChars = String.prototype.toUpperCase.call(lowerCaseChars);
// const upperCaseChars = lowerCaseChars.toUpperCase();
*/

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  // working with strings of character sets is fine, not really any different from using an array
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  let allowedChars = ""; // concatenate allowed char-sets
  let password = "";

  allowedChars += includeLowercase ? lowerCaseChars : "";
  allowedChars += includeUppercase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  // at least one charset  needs to be concatenated and length must be > 0
  if (allowedChars === 0) {
    return "You must enable at least one char-set to continue";
  } else if (length <= 0) {
    return "Password length must be at least 1";
  } else {
    // get allowedChars.length -1 and generate a random number within this bounds
    // get char at n and concatenate that into password for length
    for (let i = 0; i < length; i++) {
      // index is a random number based using array.length as the upper bound (exclusive)
      let index = exclusiveRandom(allowedChars.length);
      password += allowedChars[index];
    }

    return password;
  }
}

// returns a number between 0 and upperBound exclusive
// used for generating a number for the purposes of indexing into an array
function exclusiveRandom(upperBound) {
  let upper = upperBound;

  let number = Math.trunc(Math.random() * upper);
  return number;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols = false;

// calling generatePassword 
const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password: ${password}`);
