/*  element selectors = Methods used to target and manipulate HTML elements
                        They allow you to select one or multiple HTML elements
                        from the DOM (Document Object Model)

    1. document.getElementById()        // ELEMENT OR NULL
    2. document.getElementsClassName()  // HTML COLLECTION
    3. document.getElementsByTagName()  // HTML COLLECTION
    4. document.querySelector()         // FIRST ELEMENT OR NULL
    5. document.querySelectorAll()      // NODELIST

*/

// create a reference
const myHeading = document.getElementById("my-heading");

// uses camelCase when accessed through JS, spine-case in HTML/CSS
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");

// access and modify an HTML collection
// fruits[0].style.backgroundColor = "yellow";
// fruits[1].style.backgroundColor = "orange";
// fruits[2].style.backgroundColor = "red";

for (let fruit of fruits) {
  // console.log(fruit.textContent);
  fruit.style.backgroundColor = "yellow";
}

// typecast an HTML collection as an Array to gain access to .forEach()
Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "orange";
});

// console.log(fruits);

// getElementsByTagName
const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

const liElements = document.getElementsByTagName("li");

// for (const h4Element of h4Elements) {
//     h4Element.style.backgroundColor = "yellow";
// }

// for (const liElement of liElements) {
//     liElement.style.background = "lightgreen";
// }

// forEach
Array.from(h4Elements).forEach(
  (h4Element) => (h4Element.style.backgroundColor = "blue")
);

Array.from(liElements).forEach(
  (liElement) => (liElement.style.backgroundColor = "lightBlue")
);

// use a . to access class, selects the first occurrence
const element = document.querySelector("ul");
element.style.backgroundColor ="yellow";
console.log(element);

// query selector all returns a NodeList (static)
const foods = document.querySelectorAll("li");
console.log(foods);

// foods[1].style.backgroundColor = "cyan";
foods.forEach(food =>
    food.style.backgroundColor ="lime");
