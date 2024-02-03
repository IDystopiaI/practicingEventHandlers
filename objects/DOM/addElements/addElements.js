/* Adding elements to the DOM
    Step 1: Create the element

    Step 2: Add Attributes/Properties

    Step 3: Append the element to the DOM

    Remove the HTML element
*/

// Step 1:
const newH1 = document.createElement("h1");

// Step 2: add Attribute/Properties
newH1.textContent = "hello";
newH1.textContent += " world";
// adding a property
newH1.id = "myH1";
// CSS
newH1.style.color = "red";
newH1.style.textAlign = "center";
newH1.style.marginTop = "0";

// step 3: Append Element to DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// insert between two elements
// first create a reference to one of the HTML element
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2)
// const temp = document.createElement("p");
// temp.textContent = "test"
// newH1.append(temp);

// inserting an element when you do not have an ID to work with:
// select anything with a class of box, creates a NodeList
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);

// Remove an HTML element
// element is somewhere in the body
// document.body.removeChild(newH1);

// element is within box1
document.getElementById("box1").removeChild(newH1);
