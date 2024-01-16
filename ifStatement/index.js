const userAge = document.getElementById("userAge");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");


mySubmit.onclick = function (){
    let age = userAge.value;

    if (age >= 100) {
        console.log("You are too old to drive.");
        resultElement.textContent = `You are too old to drive.`
    } else if (age == 0) {
        resultElement.textContent = `You were just born.`;
    } else if (age >= 16) {
        resultElement.textContent = "You are old enough to drive.";
    } else if (age < 0) {
        resultElement.textContent = "Your age can't be less than 0.";
    }
    else {
        resultElement.textContent = "You must be at least 16 to drive.";
    }

}
