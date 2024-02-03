/* Async/Await
    Async = Makes a function return a promise
    Await = makes an async function wait for a promise

    Allows you to write asynchronous code in a synchronous manner
    Async doesn't have resolve or reject parameters
    Everything after Await is placed in an event queue
*/

// return a Promise Object
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // set to false to cause reject
      const dogWalked = true;
      if (dogWalked) {
        resolve("You walk the dog");
      } else {
        reject("You didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("You clean the kitchen");
      } else {
        reject("You did not clean the kitchen");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashRemoved = true;
      if (trashRemoved) {
        resolve("You take out the trash");
      } else {
        reject("You did not take out the trash");
      }
    }, 500);
  });
}

// code contained within an async function
async function doChores() {
  // code promise may return reject
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("you finished all the chores");
  } catch (error) {
    console.error(error);
  }
}

doChores();
