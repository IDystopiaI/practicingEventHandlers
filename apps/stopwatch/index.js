// using eslint-disable-next-line to remove warning
// when html does make user of function/var

// setting variables for targeting elements
const display = document.getElementById("display");

/* start stop and reset aren't used, onclick="" handles the button elements
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
*/

// holds the id of setInterval
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

/* eslint-disable-next-line */
function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

// eslint-disable-next-line
function pause() {
  clearInterval(timer);
  isRunning = false;
}

// eslint-disable-next-line
function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  // convert ms to human readable time
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  // strip out hours using %
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).toString().padStart(2, 0);
  minutes = String(minutes).toString().padStart(2, 0);
  seconds = String(seconds).toString().padStart(2, 0);
  milliseconds = String(milliseconds).toString().padStart(2, 0);

  // update hour, min, sec, ms
  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
