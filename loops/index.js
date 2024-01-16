/*
let username = "";

let attempts = 0;

// cancel does not result in breaking out of loop, doesn't always increment loop with null
while (username === "" || username === null) {
    username = window.prompt("Enter your name");
    attempts+=1;
}

console.log(`Hello ${username}`);

// while loop halts while waiting for user input
console.log(`You made a username in ${attempts} attempts`);
*/

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if (username === "myUsername" && password ==="password123") {
        loggedIn = true;
        console.log("You are logged in");
    } else {
        console.log("Invalid credentials! Please try again");
    }
}

