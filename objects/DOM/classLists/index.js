/* classLists
    Element property in Javascript used to interact with an element's
    list of CSS classes. They allow you to make reusable classes for many
    elements across your webpage.

    Methods:
    ad(), remove(), toggle(), replace(), contains()
*/

const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

/* Explicitly setting and removing a class

// add a class an element using the .add() method
myButton.classList.add("enabled");

// remove a class
myButton.classList.remove("enabled");
*/

/* dynamically adding a class while hovering
// mouseover => add
myButton.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
})
// mouseout => remove
myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
})
*/

/* toggle
    can also be used to "latch" if one event listener is removed

    myButton.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
    // mouseout => remove
    myButton.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })

*/

/* replace (oldClass, newClass)
myButton.classList.add("enabled");

myButton.addEventListener("click", event => {

    event.target.classList.replace("enabled", "disabled");
    console.log(event.target.classList);
})
*/

/* contains()

*/
myButton.classList.add("enabled");

myButton.addEventListener("click", event => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent +="💢";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
})


// reusable classes
myH1.classList.add("enabled");

myH1.addEventListener("click", event => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent +="💢";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
})
