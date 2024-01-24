/* eslint-disable */
function inclusiveRandom(lowerBound, upperBound) {
  let lower = lowerBound;
  let upper = upperBound;

  let number = Math.trunc(Math.random() * (upper - lower + 1) + lower);
  return number;
}

// returns a number between 0 and upperBound for selecting a random element from an iterable
// arrayRandom(10) -> 0 - 9
function arrayRandom(upperBound) {
  let upper = upperBound;

  let number = Math.trunc(Math.random() * (upper));
  return number;
}

for (let index = 0; index < 50; index++) {
  let number = arrayRandom(10);
  console.log(number);
}
