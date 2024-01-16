// Rest parameters = (...rest) allow a function to work with a variable number of arguments by
//                   bundling them into an array (parameter prefixed by three dots) analogous to pythons packing operator

//                 spread = expands an array into separate elements
//                 rest = bundles separate elements into an array

// take any number of arguments and package them into an array
// return array
function getFood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }

  return result;
}

function getAverage(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result/numbers.length
}

const total = sum(1, 2, 3);

console.log(`Total: $${total}`);

const avg = getAverage(100, 75, 85, 90, 50);
console.log(`Average: ${avg}`);


// string concatenation with ...rest operator
function combineStrings(...strings) {
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName);
