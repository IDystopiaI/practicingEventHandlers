/* see mathUtil.js
A Module is an external file that contains reusable code that can be imported into other Javascript files. Write reusable code for many different apps. Can contain variables, classes, functions... and more. Introduced as part of ECMAScript 2015.
*/

// destructuring, name the "keys" you would like to export
// from mathUtil.js. Specify the path to the module

/*
couldn't get ___ = require("") to work for node.js
   so the following code is an import for an EM6 module
   being run in the browser
*/
import {PI, getCircumference, getArea, getSphereVolume} from './mathUtil.js';

// const PI
console.log(PI);

const area = getArea(10);
const circumference = getCircumference(10);
const sphereVolume = getSphereVolume(10);


//circle
console.log(`The circumference of your circle is ${circumference.toFixed(2)}cm`);
console.log(`The area of your circle is ${area.toFixed(2)}cm^2`);
// sphere
console.log(`The volume of your sphere is ${sphereVolume.toFixed(2)}cm^3`);
