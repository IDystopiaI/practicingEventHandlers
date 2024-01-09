// constants = a variable that cant be changed*
// objects can still be mutated

// typically only capitalize primitives
const PI = 3.14159;
let radius = 0;
let circumference;

// throws an error, trying to assign a value to a constant
// pi = 6.28318;

// alert prompt
// radius = Number(window.prompt("Enter the radius of your circle"));
document.getElementById("mySubmit").onclick = function() {
    // do not forget .value
    radius = Number(document.getElementById("myRadius").value);

    // debug
    // console.log(radius, typeof radius);

    circumference = 2 * PI * Number(radius);
    document.getElementById("myH3").textContent = `Your Circumference is ${circumference}cm`;

    // console.log(circumference);

}
