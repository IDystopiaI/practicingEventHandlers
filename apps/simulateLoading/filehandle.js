// File Handle
let fh;

/* Async/Await */
async function main() {
  try {
    const fileData = await fetch("./apiKey.json");
    const jsonData = await fileData.json();

    const apiKey = jsonData.key;

    fh = apiKey;
    console.log("Inner Scope: " + fh);
  } catch (error) {
    console.error(error);
  }
}

main();

// executes before promise is resolved -> undefined
console.log("Outer Scope fh: " + fh);

// might be usable in a callback function in a different scope,
// still depends on file loading before fh is needed
setTimeout(() => {
  if (fh) {
    console.log("callback: " + fh);
  } else {
    console.error("File loading Timed out");
  }
}, 2000);


const myH1 = document.getElementById("display");
// key can be present for use in an eventListener
// something automated may trigger the event before key is loaded
/* eslint-disable-next-line */
function printKey() {
  if (fh) {
    myH1.textContent = `Key: ${fh}`;
  } else {
    myH1.textContent = `There was an issue fetching API key`;
  }
}
