// If statements if a condition is true do something, if not do something else

let time = 14;

if (time <= 11) {
  console.log("Good Morning");
} else if (time <= 14) {
  console.log("Good Afternoon");
} else {
  console.log("Good night");
}

// ternary same as above but a bit of a mess when there are a lot of conditions

let greeting =
  time <= 11 ? "Good Morning"
  : time <= 14 ? "Good Afternoon"
  : "Good Night";

console.log(greeting);

// ternary as a function
function hello(time_of_day) {
  return time_of_day <= 11
    ? "Good Morning"
    : time_of_day <= 14
    ? "Good Afternoon"
    : "Good Night";
}
console.log(hello(time));

let isStudent = false;

if (isStudent) {
  console.log("You are a student");
} else {
  console.log("You are not a student");
}

let age = 25;
let hasLicense = false;

if (age >= 16) {
  console.log("You are old enough to drive");
  if (hasLicense) {
    console.log("You already have a license");
  } else {
    console.log("You do not have your license yet");
  }
} else if (age < 0) {
  console.log("Your age can not be below 0");
} else {
  console.log("You must be 16+ to have a license");
}

// == equals "3" == 3
// === strictly equal
// != not equal
// < > <= >=


