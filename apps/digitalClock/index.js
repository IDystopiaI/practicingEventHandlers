// digital clock program

function updateClock() {

    const now = new Date();
    // convert to string so that we can pad to two digits
    // 12h format
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM": "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);

    // change clock text to be a template string
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`
    // target #clock so that we can update that DOM obj
    document.getElementById("clock").textContent = timeString;
}

// get clock to update every second
/* called with an arrow func
setInterval(() => {
    updateClock();
}, 1000);
*/

// called as a callback func
setInterval(updateClock, 1000);
