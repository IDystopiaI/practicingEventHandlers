// Dice Roller

function rollDice() {
  // constants
  // const is a bit of a misnomer?; the variable cannot be reassigned, it doesn't
  // mean that the value contained within the object assigned to a variable is static
  // This is why we can have a const of a non-static value/arrays and modify their contents
  const numOfDice = document.getElementById("quantity").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let roll = 0; roll < numOfDice; roll += 1) {
    const value = Math.trunc(Math.random() * 6) + 1;

    // push value into array of values
    values.push(value);
    // string representation of an html element
    // substituting the roll value to select the specific dice element
    // to be rendered
    images.push(`<img src="../Assets/Dice_Images/dice${value}.png" alt="Dice ${value}">`)
  }

  diceResult.textContent =`dice: ${values.join(", ")}`
  // access the inner HTML to modify the DOM structure
  diceImages.innerHTML = images.join('');

}
