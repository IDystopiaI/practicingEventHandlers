/* NodeList = Static collection of HTMl elements by (id, class, element)
    Can be created with querySelectorAll()
    Similar to an array, but no (map, filter, reduce)
    NodeList will not update to automatically reflect changes
    They do contain a forEach method
    static - If you were to remove an element from the DOM,
    You would have to remove the element from the NodeList as well
*/

// create a NodeList using querySelectorAll()
// . = class, # = id, tags seem to work too
let buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);

/* .forEach
// Add HTML/CSS Properties by using forEach on a NodeList
buttons.forEach((button) => {
    button.style.backgroundColor = "green";
    button.textContent += "😁";
})
*/

/* Click Event Listener
    .target makes it so that only the clicked element changes
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.target.style.backgroundColor = "tomato";
        })
    })
*/

/* mouseover and mouseout
buttons.forEach(button => {
    button.addEventListener("mouseover", _event => {
        button.style.backgroundColor = "blue";
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout", _event => {
        button.style.backgroundColor = "hsl(205, 100%, 60%)";
    })
})
*/

/* Add an element
*/
// Step 1, create the element
const newButton = document.createElement("button");
// Step 2, set content/properties
newButton.textContent = "Button 5";

// classList works with the existing list of classes
// className clears existing classes and starts fresh
newButton.classList = "myButtons";

// Step 3, add element to the DOM
// access the parent
document.body.appendChild(newButton);

// is static collection, only shows 4 buttons
console.log(buttons);

// call document.querySelectorAll again to update the NodeList
buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

/* remove an element from the dom
*/
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        // console.log(buttons);
    })
})
