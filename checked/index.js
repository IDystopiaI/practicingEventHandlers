const myCheckbox = document.getElementById("myCheckbox");

const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

// react to submit click event
mySubmit.onclick = function () {
    // inspecting checked property of the checkbox
    if (myCheckbox.checked) {
        // change text content of subResult
        subResult.textContent = "Thank you for subscribing to Cat Facts!"
    } else {
        subResult.textContent = "You are not subscribed to Cat Facts"
    }

    // Radio Buttons still use the checked property
    if (visaBtn.checked) {
        paymentResult.textContent = "You are paying with Visa.";
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = "You are paying with Master Card";
    } else if (payPalBtn.checked) {
        paymentResult.textContent = "You are paying with PayPal";
    } else {
        paymentResult.textContent = "You forgot to enter a payment method.";
    }
}
