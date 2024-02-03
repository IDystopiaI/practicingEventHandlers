/* Key Events
    Event listeners for the keydown and keyup events
    document.addEventListener(event, callback)
*/

/* examples printing to console
// keydown
document.addEventListener("keydown", (event) =>{
    // console.log(event);
    //console.log(`Key: ${event.key}, Code: ${event.code}, Shift${event.shiftKey}`);
    // console.log(event.code);

    console.log(`Key down = ${event.key}`);
})

// keyup
document.addEventListener("keyup", (event) => {
    console.log(`Key up = ${event.key}`);
})
*/

// a reference to id="myBox"
const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

/* apply style while key is down and revert style on keyup

document.addEventListener("keydown", (_event) => {
  myBox.textContent = "😲";
  myBox.style.backgroundColor = "tomato";
});

// revert style/content changes
window.addEventListener("keyup", (_event) => {
    myBox.textContent = "😀";
    myBox.style.backgroundColor = "lightblue";
});
*/

// part 2, move the element based on user input
document.addEventListener("keydown", (event) => {
    // debug, print .key property to console: ArrowUp etc.
    // console.log(event.key);

    // only do something if the event starts with the string Arrow
    if (event.key.startsWith("Arrow")) {
        // stop arrow keys from panning when there's a scroll bar
        event.preventDefault()

        // using a switch to examine the event
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
            default:
                break;
        }
        // debug
        // console.log(`X: ${x}, Y: ${y}`);
        // don't add semicolon to string literals
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})

// more event listeners for keydown keyup
document.addEventListener("keydown", (_event)=>{
    myBox.textContent = "😲";
    myBox.style.backgroundColor = "tomato";
})

document.addEventListener("keyup", (_event) => {
    myBox.textContent = "😀";
    myBox.style.backgroundColor = "lightblue";
})
