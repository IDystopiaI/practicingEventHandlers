/* Dom Navigation = the process of navigating through the structure of an
                    HTML document using JavaScript

    * properties *
    .firstElementChild
    .lastElementChild
    .nextElementSibling
    .previousElementSibling
    .parentElement
    .children
*/

// --------------- .firstElementChild ---------------
// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// console.log(firstChild);
// firstChild.style.backgroundColor = "orange";

// using a NodeList with querySelectorAll and selecting first child
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// });

// --------------- .lastElementChild ---------------
// const lastChildElement = document.getElementById("desserts");
// const lastChild = lastChildElement.lastElementChild;
// console.log(lastChild);

// lastChild.style.backgroundColor = "orange";

// select all ul elements and return a NodeLIst
const ulElement = document.querySelectorAll("ul");
// styling last child from a Node List
ulElement.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor ="orange";
})


// --------------- .nextElementSibling ---------------
const listItem = document.getElementById("fruits");
const nextSibling = listItem.nextElementSibling;
nextSibling.style.backgroundColor ="cyan";

// --------------- .previousElementSibling ---------------
const prevItem = document.getElementById("vegetables");
const prevSibling = prevItem.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

// --------------- .parentElement ---------------
const childElement = document.getElementById("ice_cream");
const parentElement = childElement.parentElement;
parentElement.style.border = "5px solid black";

// --------------- .children ---------------
const parent = document.getElementById("desserts");
const children = parent.children;
// console.log(children);
// children is an HTML Collection, not a NodeList
// requires casting as an array to use certain methods
Array.from(children).forEach(child =>{
    child.style.backgroundColor = "lime";
})
children[1].style.border = "2px dashed red";
