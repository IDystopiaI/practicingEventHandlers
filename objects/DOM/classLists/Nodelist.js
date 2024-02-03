const buttons = document.querySelectorAll(".myButtons");

// check that the button elements are selected
// console.log(buttons);

buttons.forEach(button => {
    button.classList.add("enabled");
})

// add a class on mouseover
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.add("hover");
    })
})

// remove a class
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.remove("hover");
    })
})

// replace a class
buttons.forEach(button => {
    button.addEventListener("click", event => {
        // if classList is already disabled
        if (event.target.classList.contains("disabled")) {
            event.target.textContent += "🤬";
        }
        else {
            event.target.classList.replace("enabled", "disabled");
        }
    })
})
