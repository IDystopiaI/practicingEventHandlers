let userName = "     Sponge Bob    ";

// strings are immutable

// removing white space
userName = userName.trim()
// .charAt does not support negative indexing
console.log("Character at index 1: " + userName.charAt(1));
console.log("Last character is: " +  userName.slice(-1));
console.log("First occurrence of the letter 'o' is at index: " + userName.indexOf("o"));
console.log("Last occurrence of the letter 'o' is at index: " + userName.indexOf("o"));
console.log("Username length is: " + userName.length + " characters long");
// returns a new string, not a mutation of base string
// there's also regular toUpperCase() as well which doesn't take user's local into consideration
console.log(userName.toLocaleUpperCase());
console.log(userName);
// does not delimitate -> SpongeBobSpongeBobSpongeBob
console.log(userName.repeat(3));
console.log(userName.startsWith(" ")); // boolean

// boolean
if (userName.includes(" ")) {
    console.log("Your username can't include an ' '");
}

let phoneNumber = "123-456-7890";
// strip out specific character
console.log(phoneNumber.split("-").join("")); // split on char then join with ""
console.log(phoneNumber.replace("-", "")); // first instance
console.log(phoneNumber.replaceAll("-", "")); // replaces all occurrences

// ensures string is at least n-long with whitespace added to the beginning
// optional character to be used for padding
console.log(phoneNumber.padStart(15, "*"));
console.log(phoneNumber.padEnd(20, 5));
