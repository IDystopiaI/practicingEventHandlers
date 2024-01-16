// like an else if statement
// does not short circuit in javascript (), use break
// see notes.txt for more info on fall through

let day = 1;
let _notADay = "Pizza";

// Parentheses are optional within cases
switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  /** if case 6 has code and is intended to fall through, place a comment above
    * case 7: with the text falls through
  */
  case 6:
  case 7:
    console.log("It's the Weekend");
    break;

  // Default can eat errors, throwing an exception might be more useful
  default:
    console.log(`${day} is not a week day`);
    break;
}

let testScore = -10;
let letterGrade;

// console.log(testScore < 50 || testScore >= 0);

// switch (desired value)
//    case (test expression):

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C+"
    break;
  case testScore >= 60:
    letterGrade = "C"
    break;
  case testScore >= 50:
    letterGrade = "D";
    break;
  case (testScore < 50 && testScore >= 0) :
    letterGrade = "F";
    break;
  default:
    // nothing stops the program from printing the invalid input if default does not throw an exception
    // instead of allowing the program to continue running
    console.log("Invalid input");

    // throw new Error('Expected value between 0 and 100, received: ' + testScore)
   break;
}

// "You got an undefined" printing due to program continuing to run instead of throwing an error
// example of a bad default case
console.log(`You got an ${letterGrade}`);
