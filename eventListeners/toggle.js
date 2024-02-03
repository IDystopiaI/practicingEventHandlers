// create references
const myButton = document.getElementById("myButton");
const fractal = document.getElementById("fractal");

// tie events to myButton
myButton.addEventListener("click", (_event) => {
    console.log(fractal.style);
    // use an if statement to toggle states
    // use style.visibility for toggle states, not .display
    if (fractal.style.visibility === "hidden") {
        // unhide image with display: block
        fractal.style.visibility = "visible";
        myButton.textContent = "Hide";
    } else {
        fractal.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
})
