// .map() = accepts a callback and applies that function to each element of an array, then returns a new array

let numbers = [1,2,3,4,5];

function square(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3);
}

// it is possible for the callback function to mutate the original array
// This function modifies the elements of the original array before .map creates the new array

// function double(element, index, array) {
//     return array[index] = element * 2;
// }


// let numDouble = numbers.map(double);
// console.log(numDouble); // [ 2, 4, 6, 8, 10 ]
// console.log(numbers); // [ 2, 4, 6, 8, 10 ]

// ******** example 1 ********
// original array is unmodified
numbers.map(square);
console.log(numbers);

let numbersSqrd = numbers.map(square);
console.log(numbersSqrd);

let numbersCubed = numbers.map(cube);
console.log(numbersCubed);

console.log(`Numbers  Original: ${numbers}`);

// ******** example 2 ********
let students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

function upperCase(element) {
    return element.toUpperCase();
}

function lowerCase(element) {
    return element.toLowerCase();
}


let studentsUpper = students.map(upperCase);
console.log(studentsUpper);

let studentsLower = students.map(lowerCase);
console.log(studentsLower);

console.log(`Students  Original: ${students}`);


// ******** example 3 ********
// different regions have different date formats
// we are going to change the date format using the map method
let dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

function formatDates(elements) {
    // take apart date components and store them in an array
    let parts = elements.split("-"); // [['2024', '1', '10'], ['2025','2','20'],...]
    // template literal to format the string, no elements are overwritten
    return `${parts[1]}/${parts[2]}/${parts[0]}` // yyyy-mm-dd -> mm/dd/yyyy

    // shuffling elements to get the same result, probably not the best method
    // modifying arrays can be slow and risks overwriting data
    /*
    parts[parts.length-1] = parts.shift();
    return parts.join("/")
    */
}

let date = dates.map(formatDates);
console.log(date);
