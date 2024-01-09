const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

// update countLabel with respect to button clicked
// decrement
decreaseBtn.onclick = function() {
    count -=1;
    document.getElementById("countLabel").innerText = count;
}

// increment
increaseBtn.onclick = function() {
    count +=1;
    // document.getElementById("countLabel").innerText = count;
    // less verbose
    countLabel.innerText = count;
}

// reinitialize count to 0
resetBtn.onclick = function () {
    count = 0;
    countLabel.innerText = count;
}
