// 1D arrays
let test = ["alpha", "beta", "gamma", "delta", "omega", "epsilon", "phi" ];
console.log("Original:", test);
let clone = test.slice();
console.log("Clone:", clone);

clone[1] = "electron";
console.log("Original:", test);
console.log("Clone:", clone);

// 2D Arrays
// Nested elements are mutated inside shallow copies
let twoD = [["electron", "proton"], ["upQuark", "downQuark"]]
let deepTwoD = structuredClone(twoD); // returns a deep copy
let cloneTwoD = twoD.slice();
console.log(twoD);
console.log(cloneTwoD);

console.log("**** Mutation Test ****");

cloneTwoD[1][0] = "Left Quark";
console.log(twoD);
console.log(cloneTwoD);
console.log(deepTwoD);



