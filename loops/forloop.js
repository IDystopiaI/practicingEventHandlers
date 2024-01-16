// for loop = repeat some code for a limited number of times
// assuming your stop condition was written correctly (i.e. decrementing i when the stop condition was i >=10)

/*
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
*/

for (let i = 10; i >= 0; i-=1) {
    // apparently js doesn't have a sleep function
    console.log(i);
}
console.log("Happy New Year!");

// continue stops a loop from executing code and and begins the next cycle
for (let i = 0; i <= 20; i+=1) {
    if (i % 2 == 1) {
        continue
    }
    console.log(i);
}

for (let i = 0; i <= 20; i++) {
    if (i > 10) {
        break;
    }
    console.log(i);
}

