/* destructuring = extracting values from arrays and objects
                   [] to destructure arrays, swap variables
                   {} to destructure objects
*/

// ---------- Example #1 ----------
// swap the value of two variables

let a = 1;
let b = 2;

[a, b,] = [b, a];
// A: 2, B: 1
console.log(`A: ${a}, B: ${b}`);

// ---------- Example #2 ----------
// swap 2 elements in an array
const colors = ["cyan", "magenta", "yellow", "black", "blue", "green", "red"];
[colors[1], colors[3]] = [colors[3], colors[1]];
// [ 'cyan', 'black', 'yellow', 'magenta' ]
console.log(colors);

// ---------- Example #3 ----------
// Assign array elements to variables
// reusing previous colors array
const [firstColor, secondColor, thirdColor] = colors;
// cyan black yellow
console.log(firstColor, secondColor, thirdColor);
// no issues in mismatch between num of variables and num of values
// surplus variables are given a value of undefined
// surplus values aren't assigned to a variable,

// ...Rest parameters example 3.1
const [col1, col2, col3, ...extraColors] = colors;
console.log(col1, col2, col3);
console.log(extraColors);

// ---------- Example #4 ----------
// Extract values from objects

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
};
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 40,
    // undefined is the same as not defined when destructuring
    //   job: undefined
};
const person3 = {
    firstName: "Squidward",
    lastName: "Tennisballs",
    age: 45,
    job: "Musician",
};

// the variables must be the same as the keys in person1
const { firstName,  age, lastName,job } = person1;
const { firstName: pFirst,  lastName: pLast, age: pAge = 3, job: pJob = "unemployed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// job2 undefined because it is not present in person2
// no issues with mismatch in number of arguments, other than the variable will be undefined without a default value assigned
console.log(pFirst);
console.log(pLast);
console.log(pAge);
console.log(pJob);
console.log(person2);

// ---------- Example #5 ----------
// Destructure in function parameters
function displayPerson({firstName, lastName, age, job="unemployed"}) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Profession ${job}`);
}

displayPerson(person1);
displayPerson(person2);
displayPerson(person3);
