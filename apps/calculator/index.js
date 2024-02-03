const display = document.getElementById("display");

// negative expression [^...], check if characters are outside of this set
// do not execute if invalid char detected
// eslint-disable-next-line
const re = new RegExp("[^0-9-+*/.]");

// if previous symbol was "[./*-+]", replace with new input
// eslint-disable-next-line
const nonDigit = new RegExp("[-./*+]$");

display.value = 0;

// eslint-disable-next-line
function appendToDisplay(input) {
  // overwrite duplicate symbol
  if (
    display.value.charAt(display.value.length - 1).match(nonDigit) &&
    input.match(nonDigit)
  ) {
    // console.log("match Detected");
    display.value = display.value.slice(0, display.value.length - 1) + input;
  } // replace leading zero

  else if (input > 0 && display.value === "0") {
    display.value = input;
  } else {

    display.value += input;
  }

  console.log(display.value);
}

// eslint-disable-next-line
function calculate() {
  // try to prevent bad user input
  if (display.value.match(re)) {
    throw Error(`InvalidInput: ${display.value}`);
  }

  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// eslint-disable-next-line
function clearDisplay() {
  display.value = "0";
}

/*
    * There are a couple of issues that could be fixed, a little too much
      to fix when this was only meant to be a very basic calculator

      - currently it's possible to have multiple 0s instead of being
        limited to 1 '0' before a decimal.
      - a regex with lookback could resolve this
      - a decimal following an operation could insert a 0 instead of swapping signs -> 5 + (0.) instead of 5.
      - 0 after an operation is not swapped 5 + 0123 instead of 5 + 123
      - n/0 = infinity
      - number of characters displayed limitations

    - Floating points are left as is, could apply toFixed(n) to prevent
    trailing float representation, adds "sig figs" when there shouldn't be
    combination of *10^n Math.trunc() / 10^n could work
*/
