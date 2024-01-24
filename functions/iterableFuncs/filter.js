// .filter() = creates a new array by filtering out elements

// just making a list of elements instead of manually typing one out every time
// let numbers = [];
// for (let i = 0; i < 10; ++i) {
    // numbers.push(i);
// }

// using Array.from({:}, (index, value) => value) instead of a for loop
let numbers = []
numbers = Array.from({length:10}, (_,v) => v);
console.log(numbers);

function isEven(element) {
    // return element if element mod2 === 0
    return element % 2 === 0;
}

let evenNums = numbers.filter(isEven);
console.log("Even Numbers:",evenNums);

// using an arrow function doing the same thing but for odd numbers, element is just arbitrary parameter name
// filter() element where=> element %2 does not!== 0;
console.log("Odd Numbers:", numbers.filter(element => element %2 !== 0));
console.log("Original Array:",numbers);

// more lambda practice
const ages =[16, 17, 18, 18, 19, 20, 60];
let adults = ages.filter(age => age >= 18);
console.log(adults);

function isChild(element) {
    return element < 18;
}

let children = ages.filter(isChild);
console.log(children);

const words = ["apple","orange","banana","kiwi","pomegranate", "coconut"];
// filter out words > 6
function getShortWords(element) {
    return element.length <= 6;
}
// get long words
function getLongWords(element) {
    return element.length > 6;
}

let shortWords = words.filter(getShortWords);
let longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);
