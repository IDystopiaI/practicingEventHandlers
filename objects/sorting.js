/* Sort()
        - Method used to sort elements of an array in place
        - Sorts elements as strings in lexicographic order
            - (alphabet + numbers + symbols)
*/

/*
let fruits = [1,10,2,9,'3',8, 6,4,5,0, "a", "A"];
console.log(fruits);

// without callback, only first character is compared
fruits.sort();
console.log(fruits);

// with this callback function, we can sort lowest to highest
fruits.sort((a,b) => a - b);
console.log(fruits);

*/
const people = [
  { name: "Spongebob", age: 30, gpa: 3.0 },
  { name: "Patrick", age: 35, gpa: 1.0 },
  { name: "Squidward", age: 51, gpa: 3.5 },
  { name: "Sandy", age: 25, gpa: 4.0 },
];

// sort is in-place, meaning you don't assign it to a new variable
// the original array is mutated
// highest to lowest
people.sort((a, b) => b.gpa - a.gpa);
console.log(people);
// lowest to highest
people.sort((a, b) => a.age - b.age);
console.log(people);

// does not work for strings
people.sort((a, b) => a.name - b.name);
console.log(people);

// to compare strings use the <string.a>.localeCompare(string.b) method
people.sort((a,b) => a.name.localeCompare(b.name));
console.log(people);
