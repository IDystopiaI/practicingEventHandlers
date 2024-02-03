/* Dom = Document Object Model
    Object{} that represents the page you see in the web browser
    and provides you with an API to interact with it.
    Web browser constructs the DOM when it loads an HTML document,
    and structures all the elements in a tree-like representation.
    JavaScript can access the DOM to dynamically change the
    content, structure, and style of a webpage
*/

// can vary based on launch method
// console.log(document);

document.title = "My Website";
console.dir(document);

// document.body.style.backgroundColor = "hsl(0 0% 20%)";

let username = "Bobby Tables";
// username = "";

const welcomeMsg = document.getElementById("welcome-msg")

// mixing in ternary to check for empty string
welcomeMsg.textContent += username === "" ? ` Guest`: ` ${username}`;
