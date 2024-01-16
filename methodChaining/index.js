/**
 * Prompt the user for their username
 * format it correctly for them
 *  - removing whitespace
 *  - Fix Capitalization
 *  - display the final output
 */

// without method chaining
// prompt user
let username = window.prompt("Enter your username: ");  //'   bobbyTables   '
// let username = '    bobbyTables   '
// trim whitespace
username = username.trim()

// get first letter and capitalize it
let letter = username[0].toUpperCase();
console.log(letter);
username = username.toLowerCase();

// remove first char and keep the rest
// could have been combined in concatenation step
username = username.slice(1);

// splice string with concatenation (join does not work on immutable objects)
username = letter + username
console.log(username);

// with method chaining

let neighbor = window.prompt("Enter your neighbor's name: ")
// let neighbor = '    patrickStar    ';
neighbor = (neighbor.trim().charAt(0).toUpperCase() + neighbor.trim().slice(1).toLowerCase());
console.log(neighbor);
