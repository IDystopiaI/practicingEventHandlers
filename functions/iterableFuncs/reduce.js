// .reduce = reduce the elements of an array to a single value

let prices = [5, 30, 10, 25, 15, 20];

// continues to add elements of an array exhaustively to create a running total
let total = prices.reduce(sum);

// accumulator, next_element
function sum(previous, next) {
    return previous + next;
}

console.log(total);

const grades = [75, 50, 90, 80, 65, 95];
// values are only assigned once the reduce function is finished
const maxGrade = grades.reduce(greatest);
const minGrade = grades.reduce(minimum);

// don't forget the return keyword in the callback func
function greatest(max, comparison) {
    return max >= comparison ? max : comparison;
}
function minimum(min, comparison) {
    return min <= comparison ? min : comparison;
    // return Math.min(min, comparison);
}

console.log(maxGrade);
console.log(minGrade);
