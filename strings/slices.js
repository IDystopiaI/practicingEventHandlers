// pt.2 of strings
// string slicing = creating a substring from a portion of another sting
//                  string.slice (start, end)

const fullName = "SpongeBob SquarePants";

// slice is exclusive and 0-indexed
let firstName = fullName.slice(0, 9);
console.log(firstName);

// an omitted end parameter tells js to go to the end of the string
let lastName = fullName.slice(10);
console.log(lastName);

// can be used to index into a string but not slice
// can not use negative indexes
console.log(lastName[7]);

let firstChar = fullName.slice(0, 1);
// negative indexing can't be used to reverse slice, .slice(-2, -5) will not work
let negativeSection = fullName.slice(-5, -2);
let lastChar = fullName.slice(-1);

console.log(firstChar);
console.log(negativeSection);
console.log(lastChar);

// combine string slicing with indexof("") to make this more robust
console.log(`Hello ${fullName}`);
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(`Your first name is ${firstName}, and your last name is ${lastName}`);


let eatArray;
// tuple assignment is weird in js
firstName, lastName, eatArray = fullName.split(" ");
console.log(firstName); // SpongeBob
console.log(lastName);  // SquarePants
console.log(eatArray); // [ 'SpongeBob', 'SquarePants' ]
console.log("***********");
console.log(`Your first name is ${firstName}, and your last name is ${lastName}`);

firstName, lastName = fullName.split(" ");
console.log(firstName); // SpongeBob
console.log(lastName); // [ 'SpongeBob', 'SquarePants' ]
console.log("***********");
console.log(`Your first name is ${firstName}, and your last name is ${lastName}`);

[firstName, lastName] = fullName.split(" ");
console.log(firstName); // SpongeBob
console.log(lastName); // SquarePants
console.log("***********");
console.log(`Your first name is ${firstName}, and your last name is ${lastName}`);

// email
let email = "BobbyTables@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log("Username: ",username);
console.log("Host:",extension);
