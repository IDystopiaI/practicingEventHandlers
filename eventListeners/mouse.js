/* event Listeners = listen for specific events to create interactive web pages
    events: click, mouseover, mouseout
    .addEventListener(event, callback)

*/
// create a reference
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

/*
// event is automatically provided to us by the browser
function changeColor(event) {
    // console.log(event);
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 🤕"
}

// Adding an event listener
myBox.addEventListener("click", changeColor);
*/

/*
// all in one anonymous function
myBox.addEventListener("click", function(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 🤕"
})
*/

/* event.target examples

// arrow function, if an arrow func has one parameter, it doesn't need parentheses
myBox.addEventListener("click", event => {

    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch ! 🤕";
    // console.log(event);
})

// enter bounds of an element
myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
    // for some reason, changing the text content here
    // prevents the bug mention earlier from occurring
    event.target.textContent = "Don't do it! 😰";
    // console.log(event);
})

// exit bounds of element
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😃";
})
*/

// use an anonymous func/arrow func as the callback to avoid eslint warning
// or eslint-disable-next-line, or a rule to ignore _prefixes for unused args
// Same as above, but using a button element instead of event.target
myButton.addEventListener("click", _event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch ! 🤕";
})

myButton.addEventListener("mouseover", () => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it! 😰";
})


myButton.addEventListener("mouseout", () => {
   myBox.style.backgroundColor = "lightGreen";
    myBox.target.textContent = "Click Me 😃";
})

