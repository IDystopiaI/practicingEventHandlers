/* eslint-disable */
// Temperature Conversion Program

const textBox = document.getElementById("textBox"); // user input
const toFahrenheit = document.getElementById("toFahrenheit"); // radio button
const toCelsius = document.getElementById("toCelsius"); // radio button
const result = document.getElementById("result"); // final result

let temp;

function convert() {
    // use the .checked property to see if the radio button is checked
    if(toFahrenheit.checked) {
        // set temp = the value property of #textBox
        // typecast user input into a number
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;

        result.textContent = `${temp.toFixed(1)}`
    } else if (toCelsius.checked) {
        temp = textBox.value
        temp = (temp - 32) * 5 / 9;

        result.textContent = `${temp.toFixed(1)}℃`
    } else {
        result.textContent = "Please select a unit"
    }
}
