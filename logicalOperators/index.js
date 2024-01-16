// logical operators = used to combine or manipulate boolean values (true or false)
//                     AND = && - both conditions must be true
//                     OR  = || - only requires one condition to be true
//                     NOT = !  - invert true/false

const temp = 20;

if (temp > 0 && temp <= 30) {
    console.log("The weather is good");
} else {
    console.log("The weather is bad");
}

const isSunny = true;

if (isSunny) {
    console.log("It's Sunny!");
} else {
    console.log("It's Cloudy.");
}
