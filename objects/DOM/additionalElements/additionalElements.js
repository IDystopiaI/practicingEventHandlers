// Part 2 of inserting Additional Elements
// working with <li>

// step 1: create an element
const newListItem = document.createElement("li");

// step 2: Add attributes/properties
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// step3: append element to DOM
// element needs to be inserted into the list not appended to the DOM
// document.body.appendChild(newListItem);

// inserting element to correct location
// Target the ordered list and append the newListItem there
// document.getElementById("fruits").append(newListItem)
// document.getElementById("fruits").prepend(newListItem)

// insert between elements: (parent.insertBefore(new, existing))
/*
const fruits = document.getElementById("fruits");
const orange = document.getElementById("orange");
fruits.insertBefore(newListItem, orange);
*/

// inserting without IDs to target
// calling query selector all, get all the elements within fruit and
// return all of the list items within it as a NodeList
// selecting a Node out of range will place the element at the bottom of the list
const existingListItem = document.querySelectorAll("#fruits li")
document.getElementById("fruits").insertBefore(newListItem, existingListItem[6]);

// remove without an ID, we already have a reference to this item
document.getElementById("fruits").removeChild(newListItem);
