// shuffle the elements of an array
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// not recommended way
// has uniformity issues, and is slower the longer the list is
/* use Fisher-Yates algorithm instead
cards.sort(() => Math.random() - 0.5);
console.log(cards);
*/

function shuffle(array) {
  // -1 due to 0-index ; i > 0; decrement
  for (let i = array.length - 1; i > 0; i--) {
    // get a random number between the current index and 0
    const random = Math.floor(Math.random() * (i + 1));
    // use destructuring to swap elements within the array
    [array[i], array[random]] = [array[random], array[i]];
    // show all iteration of this list as everything becomes shuffled
    // console.log(array);
  }
}

shuffle(cards);
// console.log(cards);
