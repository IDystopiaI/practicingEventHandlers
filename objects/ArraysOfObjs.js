const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 },
];

console.log(fruits[0].name);
console.log(fruits[0].color);
console.log(fruits[0].calories);

console.log(fruits[1].name);
console.log(fruits[1].color);
console.log(fruits[1].calories);

console.log(fruits[2].name);
console.log(fruits[2].color);
console.log(fruits[2].calories);

console.log(fruits[3].name);
console.log(fruits[3].color);
console.log(fruits[3].calories);

console.log(fruits[4].name);
console.log(fruits[4].color);
console.log(fruits[4].calories);

fruits.push({ name: "grape", color: "purple", calories: 30 });
// console.log(fruits[5].name);
// console.log(fruits[5].color);
// console.log(fruits[5].calories);
console.log(fruits);
fruits.pop();
console.log(fruits);

// // splice removes elements within a certain range and returns them in a new array
// let a = fruits.splice(1, 2);
// // + doesn't work for concatenating a string to an obj
// console.log("Spliced Array: ", a);
// console.log("Remaining elements in fruits: ", fruits);

console.log("For Each: ");
fruits.forEach((fruit) => {
  console.log(fruit.name);
});

// map()
const fruitNames = fruits.map((fruit) => {
  return fruit.name;
});

const fruitColors = fruits.map((fruit) => {
  return fruit.color;
});
const fruitCal = fruits.map((fruit) => {
  return fruit.calories;
});
console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCal);

// filter example - returns the fruit object if it's color property
//                  is === yellow
const filteredFruits = fruits.filter((fruit) => {
  return fruit.color === "yellow";
});
console.log(filteredFruits);

// making use of implicit return when calling .filter()
const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);
console.log(lowCalFruits);
console.log(highCalFruits);

// reduce - compare all fruit elements and return the
//          one with the highest calories
let maxCal = fruits.reduce((highest, fruit) =>
  fruit.calories > highest.calories ? fruit : highest
);
let minCal = fruits.reduce((lowest, fruit) =>
  fruit.calories < lowest.calories ? fruit : lowest
);

// give acc an initial value of 0, use this to sum the values in an obj
let totalCal = fruits.reduce((acc, next) => {
    return acc + next.calories
}, 0)

console.log(maxCal);
console.log(minCal);
console.log(totalCal);
