/* Promise
    An object that manages asynchronous operations.
    Wrap a Promise Object around {asynchronous code}
    "I promise to return a value"
    PENDING -> RESOLVED or REJECTED
    new Promise ((resolve, reject) => {asynchronous code})

    DO THESE CHORES IN ORDER

    1. walk the dog
    2. clean the kitchen
    3. take out the trash
*/

// return a Promise Object
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
      const kitchenCleaned = false;
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


// method chain instead
// resolve message stored passed to .then()
// resolve message stored passed to .then()
walkDog()
.then((value) => {
    console.log(value);
    return cleanKitchen();
})
.then((value) => {
    console.log(value);
    return takeOutTrash();
})
.then((value) => {
    console.log(value);
    console.log("Tasks complete");
})
// add a catch to the end of the chain
.catch((error) => console.error(error));

// no longer need to use callback hell
// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => {
//       console.log("You finished all the chores");
//     });
//   });
// });

// somewhat similar to rust's option/try catch block
