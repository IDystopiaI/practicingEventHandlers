/* eslint-disable */

// setTimeout(callback, delay);
// clearTimeout(timeoutId) = cancel a timeout before it triggers

// initialize empty timeoutId
let timeoutId;

function startTimer() {
    // give timeoutId a value
    timeoutId = setTimeout(() => {
        window.alert("Hello");
    }, 3000);
    console.log("Timer started");
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log("Timer cleared");
}
