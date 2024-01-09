// accepting user input

// easy way is through a window prompt
// professional way is through HTML textbox (forms)

// method 1, alert prompt
/*
// brings up an alert with a textfield
let username = window.prompt("What's your username?");
console.log(username);
*/

// collecting from an input field
let username;

// Says Hello "username" after the user clicks the submit button
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    // print to console
    // console.log(username)
    // replace text content
    document.getElementById("myH1").textContent = `Hello ${username}`
}

