/* eslint-disable no-unused-vars */

/* JSON = JavaScript Object Notation
    - data interchange format
    - used for exchanging data between a server and a web application
    - JSON files {key:value} or [val1, val2, val3]

    - JSON.stringify() = converts a JS object to a JSON string
    - JSON.parse() = converts a JSON string to a JavaScript object
*/

// wrap objects in backticks to make them strings for JSON.parse()
const names = `["Spongebob", "Patrick", "Sandy", "Squidward"]`;
const person = `{
    "name": "Spongebob",
    "age" : 30,
    "isEmployed" : true,
    "hobbies" : ["Jellyfishing", "Karate", "cooking"]
}`;
const people = `[{
    "name": "Spongebob",
    "age" : 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age" : 35,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age" : 40,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age" : 27,
    "isEmployed": false
}]`;
/*
console.log(names);
console.log(person);
console.log(people);
*/

/*
const jsonStringNames = JSON.stringify(names);
console.log(jsonStringNames);
const jsonStringPerson = JSON.stringify(person);
console.log(jsonStringPerson);
const jsonStringPeople = JSON.stringify(people);
console.log(jsonStringPeople);
*/

// Convert String representation of JSON into JSON
/*
const stringNamesToJson = JSON.parse(names);
console.log("Names:", stringNamesToJson);
const stringPersonToJson = JSON.parse(person);
console.log("Person:", stringPersonToJson);
const stringPeopleToJson = JSON.parse(people);
console.log("People:", stringPeopleToJson);
*/

// fetch a file/url, returns a promise
fetch("./names.json")
  .then((response) => response.json())
  .then((value) => console.log(value))
  .catch((error) => {
    console.error(error);
  });

fetch("./person.json")
  .then((response) => response.json())
  .then((value) => console.log(value))
  .catch((error) => {
    console.error(error);
  });

// there is an implicit try catch block
// try is done in the background, but you need to method
// chain a catch statement to handle errors which may occur

fetch("./people.json")
  .then((response) => response.json())
  .then((values) =>
    values.forEach((value) => {
      console.log(`Name: ${value.name}, Employed: ${value.isEmployed}`);
    })
  )
  .catch((error) => console.error(error));
// .catch was in incorrect scope
