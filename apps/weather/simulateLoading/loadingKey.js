/* it seems require() part of Node, and not part of ES6 so it
  can't be used to load information and store it in a file handle
  */

// let fh = require ("../Assets/APIs/OpenWeather.json");
// console.log(fh);

// trying to make file handle
let fh;


// main function using .then()
/*
function main() {
  fetch("../Assets/APIs/OpenWeather.json")
    .then((response) => response.json())
    .then((values) => {
      // console.log(values.key);
      fh = values.key;
      console.log("Inner fh: " + fh);
    //   return fh;
    })
    .catch((error) => console.error(error));
}

*/

/* Async/Await */
async function main() {
  try {
    const fileData = await fetch("./apiKey.json");
    const jsonData = await fileData.json();

    const apiKey = jsonData.key;
    console.log(apiKey);

    fh = apiKey;
  } catch (error) {
    console.log(error);
  }
}

main();

// executes before promise is resolved
console.log("Outer Scope fh: " + fh);

// fh should be usable in an eventListener
setTimeout(() => {
  console.log("callback: " + fh);
}, 200);

const myH1 = document.getElementById("display");
// key is present when used as an eventListener
/* eslint-disable-next-line */
function printKey() {
  myH1.append(fh);
}
